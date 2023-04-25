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
import { Button, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";



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

  const deleteDrone = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5001/api/drones/${id}`,
        { withCredentials: true }
      );
      console.log("Drone deleted successfully:", response.data);
      setDocs(docs.filter((doc) => doc.drone_id !== id));
    } catch (error) {
      console.error("Error deleting drone:", error);
    }
  };

  const editDrone = async (id, updatedDroneData) => {
    try {
      const response = await axios.put(
        `EDIT_DRONE_API_URL/${id}`,
        updatedDroneData,
        { withCredentials: true }
      );
      console.log("Drone updated successfully:", response.data);
      const updatedDocs = docs.map((doc) =>
        doc.drone_id === id ? { ...doc, ...updatedDroneData } : doc
      );
      setDocs(updatedDocs);
    } catch (error) {
      console.error("Error updating drone:", error);
    }
  };

  
  const handleEdit = (row) => {
    console.log("Edit clicked for drone_id:", row.drone_id);
    navigate('/dashboard/editDrone', { state: { drone_info: row } });
  };
  
  
  const handleDelete = async (id) => {
    console.log("Delete clicked for drone_id:", id);
    await deleteDrone(id);
  };
  
  
  
  useEffect(() => {
    async function fetchData() {
      const data = await sendRequest();
      const formattedData = data.map((item) => {
        const { _id, __v, ...rest } = item;
        return {
          ...rest
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
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <Box>
          <IconButton
            color="primary"
            onClick={() => handleEdit(params.row)}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            color="secondary"
            onClick={() => handleDelete(params.row.drone_id)}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      ),
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
