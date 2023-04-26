import React, {useState,useEffect} from "react";
import {Box} from "@mui/material";
import Header from "../../components/Header";
import DeleteAllMaps from "../deleteAllMaps";
import DeleteFarmMap from "../deleteMapByName";

function GetAllMaps() {

    const [maps, setMaps] = useState([{}]);


    useEffect(() => {
        fetch('http://localhost:5001/api/getAllMaps')
        .then(res => res.json())
        .then(data => {setMaps(data)});
    }, []);

    
    const displayMaps = maps.map((info) => {
        return (
            <tr>
                <td>{info.Name}</td>
                <td>{info.MapImage}</td>
            </tr>
        )
    })


    return(
        <Box m="20px">
            <Header title="Farm Maps" />
                <table className="display-maps" border="1" cellpadding="3" cellspacing="2">
                    <thead>
                        <tr>
                            <th>Map Name</th>
                            <th>Map Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayMaps}
                    </tbody>
                </table>
                <br />
                <br />
                <h1>Manage Maps:</h1>
                <br />
                <DeleteAllMaps />
                <br />
                <DeleteFarmMap />
        </Box>
    )

}

export default GetAllMaps;