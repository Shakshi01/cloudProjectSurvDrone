import React, { useState, useEffect } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
// can use API Here instead of Mockdata
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const ViewDrone = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const [docs, setDocs] = useState([]);

  const sendRequest = async () => {
    const res = await axios.get(
      "http://localhost:5001/api/viewdrone",
      { withCredentials: true }
    );
    console.log('Data received from backend:', res.data);
    return res.data;
  };
  
  useEffect(() => {
    async function fetchData() {
      const data = await sendRequest();
      const formattedData = data.map((item) => {
        const { _id, __v, ...rest } = item;
        return {
          ...rest,
          name: new Date(item.name).toLocaleString(),
          manufacturer: new Date(item.manufacturer).toLocaleString(),
        };
      });
      setDocs(formattedData);
      console.log('Formatted data:', formattedData);
    }
    fetchData();
  }, []);
  
  
  

  const columns = [
    { field: "drone_id", headerName: "DroneId" },
    {
      field: "name",
      headerName: "Drone Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "manufacturer",
      headerName: "Manufacturer",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "model_number",
      headerName: "Model_number",
      flex: 1,
    },
    {
      field: "price",
      headerName: "Price",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="View Drone" />
      {docs.length > 0 ?
        <Box
          m="40px 0 0 0"
          height="75vh"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[700],
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
          }}
        >
          <DataGrid checkboxSelection rows={docs} columns={columns} getRowId={(row) => row.drone_id} />
        </Box>
        :
        <Typography>Loading...</Typography>
      }
    </Box>
  );
};

export default ViewDrone;
