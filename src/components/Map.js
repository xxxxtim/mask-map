import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster';
import React, { useContext } from 'react';
import { APIContext } from './Main'
const Map = () => {
    const { features } = useContext(APIContext)
    console.log(typeof features)
    // const Markers = features.map((item) => {
    //     return (
    //         <Marker position={item.geometry.coordinates}>
    //             <Popup>
    //                 A pretty CSS3 popup. <br /> Easily customizable.
    //             </Popup>
    //         </Marker>
    //     )
    // });
    var Markers;
    if (typeof features !== 'undefined') {
        Markers = features.map((item) => {
            return (
                <Marker position={item.geometry.coordinates}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
                </Marker>
            )
        });
    }



    return (
        <MapContainer style={{ width: '100%', height: '100vh' }} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MarkerClusterGroup>
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
                </Marker>
                <Marker position={[51.505, -0.06]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
                </Marker>
                {/* {Markers} */}
            </MarkerClusterGroup>
        </MapContainer>)
}
export default Map