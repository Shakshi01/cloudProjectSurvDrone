import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import {Box} from "@mui/material";
import {Formik} from "formik";
import Header from "../../components/Header";
import { useNavigate } from 'react-router-dom';

function AddMapForm() {

    const navigate = useNavigate();

    const [inputData, setInputData] = useState({
        Name:"",
        MapImage: ""
    });


    const handleChange = (e) => {
        setInputData((prev) => ({
            ...prev,
            [e.target.name]:e.target.value,
        }))
    }


    const sendRequest = async() => {
        await axios.post('http://localhost:5001/api/addMap', {
            Name: inputData.Name,
            MapImage: inputData.MapImage
        })
        .then((res) => {console.log(res);})
        .catch(err => console.log(err));
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputData);
        sendRequest().then(() => alert("Added map succesfully!!"))
        .then(() => navigate("/dashboard"));
    };

    
    return (
        <Box m="20px">
            <Header title="Add new Farm Map" />
                <Formik onSubmit={handleSubmit}>
                    <form onSubmit={handleSubmit}>
                        <label for="Name">Map Name:</label><br />
                        <input type="text" id="Name" name="Name" value={inputData.Name} onChange={handleChange} /><br />
                        <br />
                        <label for="MapImage">Map Image URL:</label><br />
                        <input type="text" id="MapImage" name="MapImage" value={inputData.MapImage} onChange={handleChange} /><br />
                        <br />
                        <input type="submit" value="Add New Map" />
                    </form>
                </Formik>
        </Box>
    )
}

export default AddMapForm;