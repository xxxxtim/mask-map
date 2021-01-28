import React, { useState, useEffect, createContext } from 'react';
import Map from './Map'
import axios from 'axios';
export const APIContext = createContext();
const Main = () => {
    const [data, setData] = useState([]);
    useEffect(async () => {
        const response = await axios.get('https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json')
        setData(response.data)
        console.log(response.data)
    }, [])
    return (
        <>
            <APIContext.Provider value={data}>
                <Map />
            </APIContext.Provider>
        </>
    )
}
export default Main;