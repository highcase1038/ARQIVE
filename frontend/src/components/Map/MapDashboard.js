import React, { Fragment, Suspense, useEffect, useState, useRef, useMemo } from "react";

import {
  deletePins,
  getMaxPinDate,
  getMinPinDate,
  getPin,
  getPins,
} from "../../actions/pins";
import { searchUsers } from "../../actions/users";
import { useDispatch, useSelector } from "react-redux";
import useRemovalConfirm from "../profile/CustomHooks/useRemovalConfirm";
import {
  Route,
  Switch,
  useHistory,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import ConfirmationModal from "../profile/ConfirmationModal";

import LeafletMap from "./LeafletMap";
import StorySidebar from "../layout/StorySidebar";

const SearchSidebar = React.lazy(() => import("../layout/SearchSidebar"));
export default function MapDashboard() {
  const pins = useSelector((state) => state.pins.pins);
  const dispatch = useDispatch();
  const [isSearch, setIsSearch] = useState(false);

  const mapReference = useRef(null);

  useEffect(() => {
    dispatch(getMaxPinDate());
    dispatch(getMinPinDate());
    dispatch(searchUsers(""));
    dispatch(getPins());
  }, []);

  const centerMarker = (marker) => {
    const lat = Number(marker.latitude); 
    const lng = Number(marker.longitude);
    if (mapReference.current && !(isNaN(lat) || isNaN(lng))) {
      mapReference.current.leafletElement.flyTo(
        [lat, lng],
        mapReference.current.leafletElement.getZoom(),
      );
    }
  };

  // Method to handle drop pin
  const handleDropPin = (locationData) => {
    setDroppedLocation(locationData);
    setDroppedMarker(locationData.marker);
    setShouldOpenAddStory(true);
  };

  // Clear Marker
  const clearDroppedMarker = () => {
    if (droppedMarker) {
      droppedMarker.remove();
      setDroppedMarker(null);
    }
    setDroppedLocation(null);
    setShouldOpenAddStory(false);
    
  };


  // Search current location
  const handleSearchLocation = (locationData) => {
  setSearchLocation(locationData);
  setIsSearch(true);  //search stories tab
  };

  // clear searching location
  const handleClearSearchLocation = () => {
    setSearchLocation(null);
    setIsSearch(false);
  };

  const onDelProfile = () => {
    dispatch(deletePins(removalFav));
    setPinDeleted(true);
    dispatch(getMinPinDate());
    dispatch(getMaxPinDate());
  };
  const {
    // uses modal from profile page
    removalModalState,
    removalToggle,
    onDeleteHome,
    removalFav,
    loginToggle,
    setloginregisterModalState,
    loginregisterModalState,
  } = useRemovalConfirm(onDelProfile);

  const auth = useSelector((state) => state.auth);
  const { isAuthenticated, user } = auth;

  const [addAddress, setAddAddress] = useState(false);

  // Drop Pin Status
  const [droppedLocation, setDroppedLocation] = useState(null);
  const [shouldOpenAddStory, setShouldOpenAddStory] = useState(false);

  //Marker
  const [droppedMarker, setDroppedMarker] = useState(null);


  // Search status
  const [searchLocation, setSearchLocation] = useState(null);

  // Calcutate math
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // earth radium in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  const filteredMapPins = useMemo(() => {
  console.log('🔍 Filtering pins:', {
    totalPins: pins.length,
    searchLocation: searchLocation,
    isFiltering: searchLocation !== null
  });
  
  if (!searchLocation) {
    console.log('✅ No filter, returning all pins:', pins.length);
    return pins;
  }

  const { latitude, longitude } = searchLocation;
  
  const result = pins.filter(pin => {
    if (latitude && longitude && pin.latitude && pin.longitude) {
      const distance = calculateDistance(
        latitude, longitude,
        Number(pin.latitude), Number(pin.longitude)
      );
      return distance < 16;  
    }
    return false;
  });
  
  console.log('✅ Filtered result:', result.length, 'pins');
  return result;
}, [pins, searchLocation]);

  const isFiltering = searchLocation !== null;
  


  //  This should be folded into the getPins API call( );
  //  Every time a story is added django should check and see if the pin's
  //  start or end date exceeds the current and updated if necessary this reduces the
  //  ammount of API calls we need to make
  const minPinDate = useSelector((state) => state.pins.pinMinDate);
  const maxPinDate = useSelector((state) => state.pins.pinMaxDate);

  const [pinDeleted, setPinDeleted] = useState(false);

  return (
    <Fragment>
      <Switch>
        <Route path="/">
          <div id={"map-dashboard"}>
            <div id={"sidebar-style"}>
              <Suspense fallback={<div>Loading...</div>}>
                <SearchSidebar
                  maplink={"/story"}
                  setAddAddress={setAddAddress}
                  addAddress={addAddress}
                  loginToggle={loginToggle}
                  sidebarOpen={true}
                  maxPinDate={maxPinDate}
                  minPinDate={minPinDate}
                  setloginregisterModalState={setloginregisterModalState}
                  centerMarker={centerMarker}
                  isSearch={isSearch}
                  setIsSearch={setIsSearch}
                  // Handle drop pin
                  droppedLocation={droppedLocation}  
                  shouldOpenAddStory={shouldOpenAddStory}  
                  setShouldOpenAddStory={setShouldOpenAddStory}  
                  searchLocation={searchLocation}  
                  setSearchLocation={setSearchLocation}  
                  droppedMarker={droppedMarker}  
                  clearDroppedMarker={clearDroppedMarker}  

                />
              </Suspense>
              <Switch>
                <Route path="/story">
                  <StoryDisplayExp
                    maplink={"/story"}
                    loginToggle={loginToggle}
                    isAuthenticated={isAuthenticated}
                    user={user}
                    centerMarker={centerMarker}
                    removalToggle={removalToggle}
                  />
                </Route>
              </Switch>
            </div>

            <LeafletMap
              maplink={"/story"}
              pins={filteredMapPins}
              mapReference={mapReference}
              // setMapReference={setMapReference}
              user={user}
              isAuthenticated={isAuthenticated}
              centerMarker={centerMarker}
              onDropPin={handleDropPin}

              onSearchLocation={handleSearchLocation}

              onClearSearchLocation={handleClearSearchLocation} 
              onClearDroppedMarker={clearDroppedMarker}
              droppedMarker={droppedMarker} 
              isFiltering={isFiltering}  
            />
          </div>
        </Route>
      </Switch>

      <ConfirmationModal
        modalState={removalModalState}
        toggle={removalToggle}
        onSubmit={onDeleteHome}
        title="Are you sure you want to delete this story?"
        buttonTitle={"Yes, delete this story"}
      />
      <ConfirmationModal
        modalState={loginregisterModalState}
        toggle={loginToggle}
        login={true}
        title="login or register"
      />
    </Fragment>
  );
}

function StoryDisplayExp(props) {
  let match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}/:id`}>
        <IndividualStoryExp {...props} />
      </Route>
      <Route path={match.path}>
        <StorySidebar {...props} />
      </Route>
    </Switch>
  );
}

function IndividualStoryExp(props) {
  let { id } = useParams();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { isAuthenticated, user } = auth;
  const userid = isAuthenticated ? user.id : false;
  useEffect(() => {
    dispatch(getPin(id, userid));
  }, [id]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <StorySidebar
        {...props}
      />
    </Suspense>
  );
}
