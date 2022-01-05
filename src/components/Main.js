import React, { useState, useEffect, createContext } from "react";
import Grid from "./Grid";
import "antd/dist/antd.css";
import Service from "../middleWare/Service";
export const APIContext = createContext();
const Main = () => {
  const [features, setFeatures] = useState([]);
  //   const [active, setActive] = useState([25.0450096, 121.5803059]);
  //   auto location can write this
  const [active, setActive] = useState([23.02305, 120.25075]);
  const state = { active, features };
  const dispatch = { setActive };
  useEffect(async () => {
    const response = await Service.get(
      "/kiang/pharmacies/master/json/points.json"
    );
    setFeatures(() => response.data.features);
  }, []);
  return (
    <>
      <APIContext.Provider value={{ state, dispatch }}>
        <Grid />
      </APIContext.Provider>
    </>
  );
};
export default Main;
