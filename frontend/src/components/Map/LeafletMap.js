import React, { useEffect, useRef, useState } from "react";
import { Map, Marker, Popup, TileLayer, ZoomControl, Circle } from "react-leaflet";
import NearMeIcon from "@material-ui/icons/NearMe";
import { Link, useHistory } from "react-router-dom";
import Control from "react-leaflet-control";
import MarkerClusterGroup from "react-leaflet-markercluster";
import AddCommentIcon from "@material-ui/icons/AddComment";
import { GeoSearchControl } from "leaflet-geosearch";
import { EsriProvider } from "leaflet-geosearch";
import { useDispatch, useSelector } from "react-redux";
import { communityIcon, historicalIcon, personalIcon, defaultPointerIcon  } from "./MapIcons";
import L from "leaflet";

const LeafletMap = (
  {
    maplink,
    pins,
    mapReference,
    // setMapReference,
    user,
    isAuthenticated,
    centerMarker,
    // 
    onDropPin, 
    onSearchLocation,
    //clear search location
    onClearSearchLocation,
    onClearDroppedMarker, 
    droppedMarker,  
    isFiltering,

  },
) => {
  const history = useHistory();
  const provider = new EsriProvider(); // new OpenStreetMapProvider();
  // can change provider to preference
  const [userLocation, setUserLocation] = useState(null);
  const guest = useSelector((state) => state.auth.guest_user);
  const pin = useSelector((state) => state.pins.pin);

  // Drop Pin Mode while click top left button
  const [isDropPinMode, setIsDropPinMode] = useState(false);
  const [tempMarker, setTempMarker] = useState(null);
  const [hasActiveDroppedMarker, setHasActiveDroppedMarker] = useState(false); 
  const [contextMenu, setContextMenu] = useState({ show: false, x: 0, y: 0, latlng: null });
  const [isSearchMode, setIsSearchMode] = useState(false); 
  const [searchCenter, setSearchCenter] = useState(null);
  const [hasInitializedLocation, setHasInitializedLocation] = useState(false);


  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (response) => {
          if (mapReference.current) {
            mapReference.current.leafletElement.setView([
              response.coords.latitude,
              response.coords.longitude,
            ], 15);
          }
        },
        (error) => {
          console.log(error);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        },
      );
    }
  }
  const searchControl = new GeoSearchControl({
    provider: provider,
    autocomplete: true,
    style: "bar",
    animateZoom: true,
    retainZoomLevel: true,
    searchLabel: "Search by location",
    showMarker: false,
    showPopup: false,
    autoClose: true,
    keepResult: true,
  });

  useEffect(() => {
    if (history.location.pathname === "/"&& !hasInitializedLocation) {
      getLocation();
      setHasInitializedLocation(true); 
    }
    if (!mapReference.current) {
      const { current = {} } = mapReference;
      const { leafletElement: map } = current;
      map.addControl(searchControl);
      map.on("geosearch/showlocation", addressSearch);
    }
    if (
      pin.id && mapReference.current &&
      (history.action === "POP" || history.location.state?.editStory)
    ) {
      mapReference.current.leafletElement.setView([
        Number(pin.latitude),
        Number(pin.longitude),
      ], mapReference.current.leafletElement.getZoom());
    }
    
    // Drop Pin Mode
    if (mapReference.current) {
      const map = mapReference.current.leafletElement;
      
      map.on('click', handleMapClick);

      // Right click to drop pin
      map.on('contextmenu', handleMapRightClick);
      
      // Change cursor style
    if (isDropPinMode || isSearchMode) {  //  isSearchMode
      map.getContainer().style.cursor = 'crosshair';
    } 
    else {
      map.getContainer().style.cursor = '';
    }
    
    return () => {
      map.off('click', handleMapClick);
      map.off('contextmenu', handleMapRightClick);
    };
  }
  }, [pin, isDropPinMode, isSearchMode, hasInitializedLocation]); 


  // Handle ESC
  useEffect(() => {
  const handleEscape = (e) => {
    if (e.key === 'Escape') {
      setContextMenu({ show: false, x: 0, y: 0, latlng: null });
      setIsSearchMode(false);
    
      if (isDropPinMode) {
        setIsDropPinMode(false);
        if (tempMarker) {
          tempMarker.remove();
          setTempMarker(null);
        }
      }
    }
  };
  
  document.addEventListener('keydown', handleEscape);
  
  return () => {
    document.removeEventListener('keydown', handleEscape);
  };
  }, [isDropPinMode, tempMarker]); 

  const updatePin = (marker) => {
    history.push(`${maplink}/${marker.id}`, { storySidebarOpen: true });
  };

  useEffect(() => {
  if (droppedMarker === null) {
    setHasActiveDroppedMarker(false);
  }
  }, [droppedMarker]);

  useEffect(() => {
  const handleClickOutside = (e) => {
    if (contextMenu.show) {
      // 检查点击是否在菜单外部
      const menuElement = document.querySelector('[data-context-menu="true"]');
      if (menuElement && !menuElement.contains(e.target)) {
        setContextMenu({ show: false, x: 0, y: 0, latlng: null });
      }
    }
  };

  if (contextMenu.show) {
    document.addEventListener('click', handleClickOutside);
  }

  return () => {
    document.removeEventListener('click', handleClickOutside);
  };
}, [contextMenu.show]);

  // Add marker to map at click location;
  // JSON info needs to be parsed
  // Maybe create a dialogue for there user
  // where the can choose what goes into the final
  // address
  //
  // response.displayname: "Los Angeles Memorial Coliseum, 3911, South Figueroa Street, Los Angeles, Los Angeles County, California, 90037, United States
  // response.address :
  // {
  //  "leisure": "Los Angeles Memorial Coliseum",
  //  "house_number": "3911",
  //  "road": "South Figueroa Street",
  //  "city": "Los Angeles",
  //  "county": "Los Angeles County",
  //  "state": "California",
  //  "ISO3166-2-lvl4": "US-CA",
  //  "postcode": "90037",
  //  "country": "United States",
  //  "country_code": "us"
  //}
  // users can choose each one of these fields from the response to have in the final address
  // function addMarker(e) {
  //   console.log(e.latlng);
  //   var url =
  //     `https://nominatim.openstreetmap.org/reverse?format=json&lat=${e.latlng.lat}&lon=${e.latlng.lng}`;
  //   var result = fetch(url)
  //     .then((response) => {
  //       if (!response.ok) {
  //         let err = new Error("HTTP status code: " + response.status);
  //         err.response = response;
  //         err.status = response.status;
  //         throw err;
  //       }
  //       return response.json();
  //     })
  //     .then((responseJson) => {
  //       console.log("Reverse Geocode Result", responseJson);
  //       var newMarker = new L.marker(e.latlng).addTo(
  //         mapRef.current.leafletElement,
  //       );
  //     })
  //     .catch((error) => console.log("Reverse Geocode", error));
  // }

  
  const addressSearch = (e) => {
    const longitude = e.location.x;
    const latitude = e.location.y;
    centerMarker({
      id: "",
      latitude: latitude,
      longitude: longitude,
      zoom: mapReference.current.leafletElement.getZoom(),
    });
  };

  const handleMapClick = (e) => {
  // Close context menu if open
  if (contextMenu.show) {
    setContextMenu({ show: false, x: 0, y: 0, latlng: null });
    return;
  }
  
  // Handle search mode click
  if (isSearchMode) {
    handleSearchModeClick(e);
    return;
  }
  
  // Handle drop pin mode
  if (!isDropPinMode || !mapReference.current) return;
  
  const { lat, lng } = e.latlng;
  
  if (tempMarker) {
    tempMarker.remove();
  }
  
  const marker = L.marker([lat, lng], {
    icon: personalIcon 
  });
  
  marker.addTo(mapReference.current.leafletElement);
  marker.bindPopup('Getting address...').openPopup();
  
  setTempMarker(marker);
  
  fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`)
    .then(res => res.json())
    .then(data => {
      // show the address
      const address = data.display_name || `${lat.toFixed(6)}, ${lng.toFixed(6)}`;
      marker.setPopupContent(address);
      
      if (onDropPin) {
        onDropPin({
          latitude: lat,
          longitude: lng,
          address: data.display_name || `${lat.toFixed(6)}, ${lng.toFixed(6)}`,
          locality: data.address?.city || data.address?.town || data.address?.village || '',
          region: data.address?.state || '',
          country: data.address?.country || '',
          postCode: data.address?.postcode || '',
          marker: marker 
        });
      }
      
      setIsDropPinMode(false);
      setHasActiveDroppedMarker(true);
      
    })
    .catch(error => {
      console.error('Geocoding error:', error);
      marker.setPopupContent('I can not get address');
      
      if (onDropPin) {
        onDropPin({
          latitude: lat,
          longitude: lng,
          address: `${lat.toFixed(6)}, ${lng.toFixed(6)}`,
        });
      }
      
      setIsDropPinMode(false);
      
    });
};


  
  {/* 
  // Handle right click for droping pins directly
  const handleMapRightClick = (e) => {
    e.originalEvent.preventDefault(); // prevent the default right click menu
    
    // Drop pin mode
    const { lat, lng } = e.latlng;
    
    // Remove previous temp marker
    if (tempMarker) {
      tempMarker.remove();
    }
    
    // Create temporary marker
    const marker = L.marker([lat, lng], {
      icon: L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      })
    });
    
    marker.addTo(mapReference.current.leafletElement);
    marker.bindPopup('Getting address...').openPopup();
    
    setTempMarker(marker);
    
    // Reverse geocode
    fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`)
      .then(res => res.json())
      .then(data => {
        marker.setPopupContent('Opening...');
        
        if (onDropPin) {
          onDropPin({
            latitude: lat,
            longitude: lng,
            address: data.display_name || `${lat.toFixed(6)}, ${lng.toFixed(6)}`,
            locality: data.address?.city || data.address?.town || data.address?.village || '',
            region: data.address?.state || '',
            country: data.address?.country || '',
            postCode: data.address?.postcode || '',
          });
        }
        
        setTimeout(() => {
          marker.remove();
          setTempMarker(null);
        }, 2000)
      })
      .catch(error => {
        console.error('Geocoding error:', error);
        marker.setPopupContent('I Could not get address');
        
        if (onDropPin) {
          onDropPin({
            latitude: lat,
            longitude: lng,
            address: `${lat.toFixed(6)}, ${lng.toFixed(6)}`,
          });
        }
        
        setTimeout(() => {
          marker.remove();
          setTempMarker(null);
        }, 2000);
      });
  };
  */}

  // Right click menu
  const handleMapRightClick = (e) => {
    e.originalEvent.preventDefault(); // Prevent default right click menu
    
    // Show Right click menu
    setContextMenu({
      show: true,
      x: e.originalEvent.clientX,
      y: e.originalEvent.clientY,
      latlng: e.latlng,
    });
  };

  // Option 1: Search Stories with crosshair lock
  const handleSearchWithCrosshair = () => {
    // Close menu
    setContextMenu({ show: false, x: 0, y: 0, latlng: null });
    
    // Enter search mode
    setIsSearchMode(true);
  };

  // Option 2: Drop pin and add story
  const handleDropPinFromMenu = () => {
    // Close menu
    setContextMenu({ show: false, x: 0, y: 0, latlng: null });
    setIsDropPinMode(true);
  };

  // Handle search mode click - lock location and search
  const handleSearchModeClick = (e) => {
    if (!isSearchMode) return;
    
    const { lat, lng } = e.latlng;

    setSearchCenter({ lat, lng }); 
    
    // Add blue search marker
    const searchMarker = L.marker([lat, lng], {
      icon: L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [38, 62],
        iconAnchor: [19, 62],
        popupAnchor: [1, -52],
        shadowSize: [62, 62]
      })
    }).addTo(mapReference.current.leafletElement);
    
    searchMarker.bindPopup('Searching stories in this area...').openPopup();
    
    setTempMarker(searchMarker);
    
    // Get city name
    fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`)
      .then(res => res.json())
      .then(data => {
        const city = data.address?.city || data.address?.town || data.address?.village || 'this area';
        searchMarker.setPopupContent(`🔍 Showing stories in ${city}`);
        
        // Center map
        //mapReference.current.leafletElement.setView([lat, lng], 13);
        
        // TODO: Filter pins by location (this area)
        // You can pass this info to parent component to filter
        if (onSearchLocation) {
            onSearchLocation({
            latitude: lat,
            longitude: lng,
            city: city,
            region: data.address?.state || '',
          });
        }
        
        // Remove marker after delay
        setTimeout(() => {
          searchMarker.remove();
          setTempMarker(null);
        }, 3000);
      })
      .catch(error => {
        console.error('Geocoding error:', error);
        searchMarker.setPopupContent('Showing stories near here');
        
        if (onSearchLocation) {
        onSearchLocation({
          latitude: lat,
          longitude: lng,
          city: '',
          region: '',
        });
      }

        setTimeout(() => {
          searchMarker.remove();
          setTempMarker(null);
        }, 3000);
      });
    
    // Exit search mode
    setIsSearchMode(false);
  };
  

  return (
    <div
      style={{
        postition: "absolute",
        height: "100%",
        width: "100%",
      }}
    >
      <Map
        className="map-container"
        center={userLocation === null ? [34.123, -118.234] : userLocation}
        zoom={mapReference.current ? mapReference.current.leafletElement.getZoom() : 12}
        maxZoom={18} //shows map
        minZoom={3}
        // preferCanvas={true}
        worldCopyJump={true}
        id="map"
        zoomControl={false}
        ref={mapReference}
        // onContextMenu={addMarker}
      >
        <ZoomControl position="bottomleft" />
        {(isAuthenticated && user.is_anonymous_active) || guest
          ? (
            <TileLayer
              attribution="Map tiles by &copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors &copy; <a href='https://carto.com/attributions'>CARTO</a>"
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />
          )
          : (
            <TileLayer
              attribution="Map tiles by &copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors &copy; <a href='https://carto.com/attributions'>CARTO</a>"
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />
          )}

        {/*<Control position={"topleft"} style={{ left: "0px" }}>
          <button
            className={"btn btn-primary add-story-button"}
          // onClick={() => {
          //   props.setAddAddress(true);
          //
          //   if (mapInstance) {
          //     let center = mapInstance.leafletElement.getCenter();
          //     props.setaddPinValues({
          //       ...props.addPinValues,
          //       latitude: center.lat,
          //       longitude: center.lng,
          //     });
          //   }
          //   props.toggle();
          // }}
          >
            <AddCommentIcon></AddCommentIcon>
          </button>
        </Control>*/}

        <Control position={"topleft"} style={{ left: "0px" }}>
          <button
            className={"btn btn-primary add-story-button"}
            style={{
              backgroundColor: isDropPinMode ? '#e63f52' : '#6557E1',
              transition: 'all 0.3s ease',
              transform: isDropPinMode ? 'scale(1.3)' : 'scale(1)',
              boxShadow: isDropPinMode ? '0 4px 20px rgba(230, 63, 82, 0.5)' : 'none',
  
            }}
            onClick={() => {
              setIsDropPinMode(!isDropPinMode);
              // Clean up temp marker when canceling
              if (isDropPinMode && tempMarker) {
                tempMarker.remove();
                setTempMarker(null);
              }
            }}
            title={isDropPinMode ? "Click map to drop pin (or click here to cancel)" : "Add story - Drop a pin"}
          >
            <AddCommentIcon></AddCommentIcon>
          </button>
        </Control>

        <Control position={"bottomleft"}>
          <div>
            <button
              onClick={() => getLocation()}
              className="btn btn-secondary near-me-button"
            >
              <NearMeIcon />
            </button>
          </div>
        </Control>
        
        {isFiltering && (
          <Control position={"topright"}>
            <button
              onClick={() => {
                setSearchCenter(null);
                if (onClearSearchLocation) {
                  onClearSearchLocation();
                }
              }}
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                cursor: 'pointer',
                fontSize: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s',
                boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(230, 63, 82, 0.8)';
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
                e.target.style.transform = 'scale(1)';
              }}
              title="Clear location filter"
            >
              ✕
            </button>
          </Control>
        )}

        {(isDropPinMode || hasActiveDroppedMarker) && (
          <Control position={"topright"}>
            <button
              onClick={() => {
                setIsDropPinMode(false);
                setHasActiveDroppedMarker(false); 
                if (tempMarker) {
                  tempMarker.remove();
                  setTempMarker(null);
                }
                if (onClearSearchLocation) {  
                  onClearDroppedMarker();
                }
              }}
              style={{
                backgroundColor: 'rgba(230, 63, 82, 0.8)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                cursor: 'pointer',
                fontSize: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s',
                boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(230, 63, 82, 1)';
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'rgba(230, 63, 82, 0.8)';
                e.target.style.transform = 'scale(1)';
              }}
              title="Cancel drop pin (ESC)"
            >
              ✕
            </button>
          </Control>
        )}



        <MarkerClusterGroup
          key={`pins-${pins.length}`}
          spiderfyOnMaxZoom={true}
          maxClusterRadius={20}
        >
          {pins.map((marker, index) => {
            let post = [marker.latitude, marker.longitude];
            let categoryIcon = "";
            if (marker.category === 1) {
              categoryIcon = personalIcon;
            } else if (marker.category === 2) {
              categoryIcon = communityIcon;
            } else {
              categoryIcon = historicalIcon;
            }

            return (
              <Marker
                key={index}
                position={post}
                icon={categoryIcon}
                data={marker}
                onClick={() => {
                  updatePin(marker);
                }}
                onMouseOver={(e) => {
                  e.target.openPopup();
                }}
                onMouseOut={(e) => {
                  e.target.closePopup();
                }}
              >
                <Popup>
                  <strong>{marker.title}</strong>
                </Popup>
              </Marker>
            );
          })}
        </MarkerClusterGroup>

        {/* Searching circle in 10 miles */}
        {searchCenter && isFiltering && (
          <Circle
            center={[searchCenter.lat, searchCenter.lng]}
            radius={16000}  // 16km = 16000 meters
            pathOptions={{
              color: '#00ce7d',
              fillColor: '#00ce7d',
              fillOpacity: 0.2,
              weight: 2,
              dashArray: '5, 5'
            }}
          />
        )}


        </Map>

        {/* Custom Context Menu */}
        {contextMenu.show && (
          <div
            data-context-menu="true" 
            style={{
              position: 'fixed',
              left: `${contextMenu.x}px`,
              top: `${contextMenu.y}px`,
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              zIndex: 10000,
              overflow: 'hidden',
              minWidth: '220px',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              onClick={handleSearchWithCrosshair}
              style={{
                padding: '14px 20px',
                cursor: 'pointer',
                borderBottom: '1px solid #eee',
                fontFamily: 'Eina, Arial',
                fontSize: '14px',
                transition: 'background-color 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#f0f7ff'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
            >
              <div>
                <div style={{ fontWeight: '500' }}>Search stories here</div>
                <div style={{ fontSize: '12px', color: '#666', marginTop: '2px' }}>
                  Click to lock location
                </div>
              </div>
            </div>
            <div
              onClick={handleDropPinFromMenu}
              style={{
                padding: '14px 20px',
                cursor: 'pointer',
                fontFamily: 'Eina, Arial',
                fontSize: '14px',
                transition: 'background-color 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#fff5f0'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
            >
              <div>
                <div style={{ fontWeight: '500' }}>Drop pin & add story</div>
                <div style={{ fontSize: '12px', color: '#666', marginTop: '2px' }}>
                  Create new story here
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Clear search button
        {onClearSearchLocation && (  
        <div style={{
          position: 'absolute',
          top: '80px',
          left: '20px',
          zIndex: 1000,
        }}>
          <button
            onClick={() => {
              if (onClearSearchLocation) {
                onClearSearchLocation();
              }
            }}
            style={{
              backgroundColor: '#e63f52',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              padding: '12px 20px',
              cursor: 'pointer',
              fontFamily: 'Eina, Arial',
              fontSize: '14px',
              fontWeight: '600',
              boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = '0 4px 15px rgba(230, 63, 82, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
            }}
          >
            <span style={{ fontSize: '18px' }}>✕</span>
            <span>Clear Location Filter</span>
          </button>
        </div>
        )}
        */}

     




    </div>
  );
};

export default LeafletMap;
