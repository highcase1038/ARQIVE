import L from "leaflet";
import community from "../images/community.png"; // Tell Webpack this JS file uses this image
import historical from "../images/historical.png";
import personal from "../images/personal.png";
import default_marker from "../images/default.png";

export const defaultPointerIcon = new L.Icon({
  iconUrl: default_marker,
  iconRetinaUrl: default_marker,
  iconAnchor: [28, 61],
  popupAnchor: [10, -44],
  iconSize: [45, 45],
  shadowSize: [68, 95],
  shadowAnchor: [20, 92],
});

export const communityIcon = new L.Icon({
  iconUrl: community,
  iconRetinaUrl: community,
  iconAnchor: [28, 61],
  popupAnchor: [10, -44],
  iconSize: [45, 45],
  shadowSize: [68, 95],
  shadowAnchor: [20, 92],
});

export const historicalIcon = new L.Icon({
  iconUrl: historical,
  iconRetinaUrl: historical,
  iconAnchor: [28, 61],
  popupAnchor: [10, -44],
  iconSize: [45, 45],
  shadowSize: [68, 95],
  shadowAnchor: [20, 92],
});

export const personalIcon = new L.Icon({
  iconUrl: personal,
  iconRetinaUrl: personal,
  iconAnchor: [28, 61],
  popupAnchor: [10, -44],
  iconSize: [45, 45],
  shadowSize: [68, 95],
  shadowAnchor: [20, 92],
});

