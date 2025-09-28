import React, { useEffect, useRef, useState } from "react";
import { Map, Marker, Popup, TileLayer, ZoomControl } from "react-leaflet";
import NearMeIcon from "@material-ui/icons/NearMe";
import { Link, useHistory } from "react-router-dom";
import Control from "react-leaflet-control";
import MarkerClusterGroup from "react-leaflet-markercluster";
import AddCommentIcon from "@material-ui/icons/AddComment";
import { GeoSearchControl } from "leaflet-geosearch";
import { EsriProvider } from "leaflet-geosearch";
import { useDispatch, useSelector } from "react-redux";
import { communityIcon, historicalIcon, personalIcon } from "./MapIcons";
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
  },
) => {
  const history = useHistory();
  const provider = new EsriProvider(); // new OpenStreetMapProvider();
  // can change provider to preference
  const [userLocation, setUserLocation] = useState(null);
  const guest = useSelector((state) => state.auth.guest_user);
  const pin = useSelector((state) => state.pins.pin);

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
    if (history.location.pathname === "/") {
      getLocation();
    }
    if (!mapReference.current) {
      const { current = {} } = mapReference;
      const { leafletElement: map } = current;
      map.addControl(searchControl);
      map.on("geosearch/showlocation", addressSearch);
      // For use with the addMarker function
      // map.on("click", addMarker);
      // setMapReference(map);
    }
    // a connvoluted way to center the map on a pin
    // to make sure the pin and map are loaded check pin.id and mapRef.current
    // then if history action is a POP (inital page load) OR
    // was the editStory state sent in the request
    if (
      pin.id && mapReference.current &&
      (history.action === "POP" || history.location.state?.editStory)
    ) {
      mapReference.current.leafletElement.setView([
        Number(pin.latitude),
        Number(pin.longitude),
      ], mapReference.current.leafletElement.getZoom());
    }
  }, [pin]);

  const updatePin = (marker) => {
    history.push(`${maplink}/${marker.id}`, { storySidebarOpen: true });
  };

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
        <Control position={"topleft"} style={{ left: "0px" }}>
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

        <MarkerClusterGroup
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
      </Map>
    </div>
  );
};

export default LeafletMap;
