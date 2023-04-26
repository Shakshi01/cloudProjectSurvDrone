import React, {useState, useEffect} from "react";
import axios from "axios";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import Header from "../../components/Header";
import { useNavigate } from 'react-router-dom';

function CreateMission() {

    const navigate = useNavigate();
    
    const [inputData, setInputData] = useState({
        MissionType: "",
        Location:"",
        FlightPlanCooridnates:"",
        FlightHeight: "",
        Alerts:""
        
    });


    const [maps, setMaps] = useState([{}]);


    const handleChange=(e)=>{
        setInputData((prev)=>({
            ...prev,
            [e.target.name]:e.target.value,
        }))
    }


    useEffect(() => {
        fetch("http://localhost:5001/api/getAllMaps")
        .then(res => res.json())
        .then(data => {setMaps(data)});
    }, []);


    const sendRequest = async() => {
        await axios.post('http://localhost:5001/api/createMissionPlan',{
            MissionType:inputData.MissionType,
            Location:inputData.Location,
            FlightPlanCooridnates: inputData.FlightPlanCooridnates,
            FlightHeight: inputData.FlightHeight,
            alerts: inputData.Alerts
        })
        .then((res) => {
            console.log(res);
        })
        .catch(err=>console.log(err));
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputData);
        sendRequest().then(()=>alert("Added mission plan to db!"))
        .then(() => navigate("/dashboard"));
    }


    return (
        <Box m="20px">
            <Header title="Create New Mission Plan" />
                <Formik
                    onSubmit={handleSubmit}
                >
                    <form onSubmit={handleSubmit}>
                        <label>Select mission service:</label>
                        <select name='MissionType' value={inputData.MissionType} onChange={handleChange}>
                            <option disabled={true} value="">Choose Mission</option>
                            <option value={"Spraying"}>Spraying</option>
                            <option value={"Soil Sampling"}>Soil Sampling</option>
                            <option value={"Crop Health Scout"}>Crop Health Scout</option>
                            <option value={"Trench Patrol"}>Trench Patrol</option>
                            <option value={"Infrastructure Scout"}>Infrastructure Scout</option>
                        </select>
                        <br />
                        <br />
                        <label>Select service location:</label>
                        <select name='Location' value={inputData.Location} onChange={handleChange}>
                            <option disabled={true} value="">Choose Location</option>
                            {maps.map((maps) => {
                                return (<option key={maps.id} value={maps.id}>{maps.Name}</option>)
                            })}
                        </select>
                        <br />
                        <br />
                        <label>Specify mission flight height:</label>
                        <input type="text" name="FlightHeight" value={inputData.FlightHeight} onChange={handleChange} />
                        <br />
                        <button type="submit">Create Mission Plan</button>
                    </form>
                </Formik>
        </Box>
    )
}

export default CreateMission;