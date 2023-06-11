import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, Select, MenuItem, FormHelperText, Typography } from "@mui/material";
import axios from 'axios';
import { Box } from "@mui/material";
import { Formik } from "formik";
import Header from "../../components/Header";
import { useNavigate } from 'react-router-dom';
import TenantIdSingleton from '../../components/TenantId';
import Map1 from '../ggleMapRender/Map1';
import * as yup from "yup";

function TrackDrone() {
  const navigate = useNavigate();
  const [location, setLocation] = useState({ lat: null, lng: null });
  const userdetails = JSON.parse(window.sessionStorage.getItem("userdetails"));
  const TenantId = userdetails.email;
  const [droneOptions, setDroneOptions] = useState([]);

  const [inputData, setInputData] = useState({
    TenantId: TenantId,
    Name: "",
    Address: "",
    Lat: 0,
    Long: 0
  });

  const [path, setPath] = useState([]);

  const coordinatesList = [
    { lat: 37.335186283684756, lng: -121.88306546281389 },
    { lat: 37.335186283684756, lng: -121.88306546281389 },
    { lat: 37.334723723571706, lng: -121.8822169303894 },
    { lat: 37.33555811460919, lng: -121.88103675842285 },
    { lat: 37.33640955712274, lng: -121.88223838806152 },
    // Add more coordinates as needed
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      const { lat, lng } = coordinatesList[index];
      setInputData(prev => ({
        ...prev,
        Lat: lat,
        Long: lng
      }));
      setLocation({ lat, lng });
      setPath(prevPath => [...prevPath, { lat, lng }]);
      index = (index + 1) % coordinatesList.length;
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleChange = (e) => {
    setInputData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    fetchDroneOptions().then((options) => setDroneOptions(options));
  }, []);

  const fetchDroneOptions = async () => {
    try {
      const response = await axios.get("http://localhost:5001/api/droneOptions", {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching mission options:", error);
      return [];
    }
  };

  const sendRequest = async () => {
    await axios.post('http://localhost:5001/api/addMap', {
      TenantId: inputData.TenantId,
      Name: inputData.Name,
      Address: inputData.Address,
      Lat: location.lat,
      Long: location.lng
    })
      .then((res) => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputData);
    sendRequest().then(() => alert("Added map successfully!!"));
    console.log(inputData.TenantId);
    //.then(() => navigate("/dashboard"));
  };

    
    return (
        <Box m="20px">
            <Header title="Track Drone" />
                <Formik 
                onSubmit={handleSubmit}
                initialValues={initialValues}
                >
                {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <FormControl
                            fullWidth
                            variant="filled"
                            error={!!touched.DroneId && !!errors.DroneId}
                            sx={{ gridColumn: "span 4" }}
                        >
                            <InputLabel htmlFor="DroneId">Drone ID</InputLabel>
                            <Select
                            label="Drone ID"
                            value={values.DroneId}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            inputProps={{
                                name: "DroneId",
                                id: "DroneId",
                            }}
                            >
                            {droneOptions.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))}
                            </Select>
                            <FormHelperText>
                            {touched.DroneId && errors.DroneId}
                            </FormHelperText>
                        </FormControl>
                        <Map1 location={location} setLocation={setLocation} path={path} />
                    </form>
                    )}
                </Formik>
        </Box>
    )
};
const checkoutSchema = yup.object().shape({
    DroneId: yup.string().required("required"),
  });
  const initialValues = {
    DroneId: "",
  };

export default TrackDrone;