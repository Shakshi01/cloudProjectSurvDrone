import React, {useState,useEffect} from "react";
import {Box} from "@mui/material";
import Header from "../../components/Header";
import DeleteAllMaps from "../deleteAllMaps";
import DeleteFarmMap from "../deleteMapByName";
import TenantIdSingleton from "../../components/TenantId";
import axios from "axios";


function GetAllMaps() {

    const [maps, setMaps] = useState([{}]);

    useEffect(() => {
        const fetch = async() => {
            const getMaps = await axios.get(`http://localhost:5001/api/getAllMaps/${TenantIdSingleton.id}`);
            setMaps(getMaps);
        };
        fetch()
    }, []);

    console.log(maps);

}

export default GetAllMaps;