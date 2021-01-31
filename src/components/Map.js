import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster';
import React, { useContext, memo } from 'react';
import { APIContext } from './Main'
import MaskTable from './MaskTable'


function LocationMarker(props) {

    const map = useMapEvents({
        click() {
            map.flyTo(props.locate, map.getZoom())
        },

    })
    return (<></>)
}
// map component
const Map = () => {
    const { state } = useContext(APIContext)
    console.log(state)

    return (
        <MapContainer style={{ width: '100%', height: '100vh' }} center={[25.0450096, 121.5803059]} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MarkerClusterGroup showCoverageOnHover={false}>
                {state.features.map((item, index) => {
                    console.log(index)
                    return (
                        <Marker key={index} position={[item.geometry.coordinates[1], item.geometry.coordinates[0]]}>
                            <Popup>
                                <MaskTable shopData={item.properties} />
                            </Popup>
                        </Marker>
                    )
                })}
                <LocationMarker locate={state.active} />
            </MarkerClusterGroup>
        </MapContainer>)
}
const MemoMap = memo(Map)
export default MemoMap