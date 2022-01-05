import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  useMap,
} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import React, { useContext, memo, useEffect, useState } from "react";
import { APIContext } from "./Main";
import MaskTable from "./MaskTable";
import btsDatas from "../assets/btsConnection.json";

//  test for import
import L from "leaflet";
import icon from "./Constants";

function LocationMarker(props) {
  const map = useMapEvents({
    click() {
      map.flyTo(props.locate, map.getZoom());
    },
  });
  return <></>;
}

function AutoLocationMarker() {
  const [position, setPosition] = useState(null);
  const [bbox, setBbox] = useState([]);

  const map = useMap();

  useEffect(() => {
    map.locate().on("locationfound", function (e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
      const radius = e.accuracy;
      const circle = L.circle(e.latlng, radius);
      circle.addTo(map);
      setBbox(e.bounds.toBBoxString().split(","));
    });
  }, [map]);

  return position === null ? null : (
    <Marker position={position} icon={icon}></Marker>
  );
}

const Map = () => {
  const { state } = useContext(APIContext);

  return (
    <MapContainer
      style={{ width: "100%", height: "100vh" }}
      center={[23.02305, 120.25075]}
      zoom={18}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup showCoverageOnHover={false}>
        {btsDatas.map((item, index) => {
          return (
            <Marker key={index} position={[item.latitude, item.longtitude]}>
              <Popup>
                {/* <MaskTable shopData={item.properties} /> */}
                <MaskTable
                  btsNum={item.stationNumber}
                  cellId={item.cellId}
                  address={item.address}
                  connection={item.connection}
                />
              </Popup>
            </Marker>
          );
        })}
        <LocationMarker locate={state.active} />
      </MarkerClusterGroup>
      <AutoLocationMarker />
    </MapContainer>
  );
};
const MemoMap = memo(Map);
export default MemoMap;
