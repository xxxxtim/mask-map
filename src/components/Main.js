import React, { useState, useEffect, createContext } from 'react';
import Map from './Map'
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap'
import Grid from './Grid'
import "antd/dist/antd.css"
export const APIContext = createContext();
const Main = () => {
    const [features, setFeatures] = useState([]);
    const [active, setActive] = useState([25.0450096, 121.5803059]);
    // state :管理狀態
    const state = { active, features }
    // dispatch :管理方法
    const dispatch = { setActive }
    useEffect(async () => {
        const response = await axios.get('https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json')
        // cafe
        // const response = await axios.get('https://cors-anywhere.herokuapp.com/https://cafenomad.tw/api/v1.2/cafes')

        setFeatures(() => response.data.features)
        console.log(response.data)
    }, [])
    return (
        <>
            {/* <APIContext.Provider value={{ features }}> */}
            <APIContext.Provider value={{ state, dispatch }}>
                <Grid />
            </APIContext.Provider>
        </>
    )
}
export default Main;