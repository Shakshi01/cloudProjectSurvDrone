import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import {Box} from "@mui/material";
import {Formik} from "formik";
import Header from "../../components/Header";
import { useNavigate } from 'react-router-dom';
import TenantIdSingleton from '../../components/TenantId';

function AddMapForm() {

    const navigate = useNavigate();

    const [inputData, setInputData] = useState({
        TenantId: TenantIdSingleton.id,
        Name:"",
        Address: "",
        Lat: "",
        Long: ""
    });


    const handleChange = (e) => {
        setInputData((prev) => ({
            ...prev,
            [e.target.name]:e.target.value,
        }))
    }


    const sendRequest = async() => {
        await axios.post('http://localhost:5001/api/addMap', {
            TenantId: inputData.TenantId,
            Name: inputData.Name,
            Address: inputData.Address,
            Lat: inputData.Lat,
            Long: inputData.Long
        })
        .then((res) => {console.log(res);})
        .catch(err => console.log(err));
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputData);
        sendRequest().then(() => alert("Added map succesfully!!"))
        console.log(inputData.TenantId);
        //.then(() => navigate("/dashboard"));
    };

    
    return (
        <Box m="20px">
            <Header title="Add new Farm Map" />
                <Formik onSubmit={handleSubmit}>
                    <form onSubmit={handleSubmit}>
                        <label for="Name">Map Name:</label>
                        <input type="text" id="Name" name="Name" value={inputData.Name} onChange={handleChange} /><br />
                        <br />
                        <label for="Address">Map Address:</label>
                        <input type="text" id="Address" name="Address" value={inputData.Address} onChange={handleChange} /><br />
                        <br />
                        <p><b>PLease specify map location coordinates:</b></p>
                        <label for="Lat">Latitude</label>
                        <input type="text" id="Lat" name="Lat" value={inputData.Lat} onChange={handleChange} />
                        <br />
                        <label for="Long">Longitude</label>
                        <input type="text" id="Long" name="Long" value={inputData.Long} onChange={handleChange} />
                        <br />
                        <input type="submit" value="Add New Map" />
                    </form>
                </Formik>
        </Box>
    )
}

export default AddMapForm;