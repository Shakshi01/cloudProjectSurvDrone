import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateSchedule = () => {
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
    sendRequest(values).then(()=>navigate("/viewSchedular"));
  };

  const sendRequest=async(values)=>{
      const res=await axios.post('http://localhost:5001/api/addschedule',{
        schedule_id:values.ScheduledId,
        start_time:values.StartTime,
        end_time:values.EndTime,
        mission_id:values.MissionId,
        location:values.Location,
      },{withCredentials: true}).catch(err=>console.log(err))
      const data=await res.data;
      return data;
  }

  return (
    <Box m="20px">
      <Header title="Add New Schedule" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
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
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Schedule ID"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.ScheduledId}
                name="ScheduledId"
                error={!!touched.ScheduledId && !!errors.ScheduledId}
                helperText={touched.ScheduledId && errors.ScheduledId}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Start Time"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.StartTime}
                name="StartTime"
                error={!!touched.StartTime && !!errors.StartTime}
                helperText={touched.StartTime && errors.StartTime}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="End Time"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.EndTime}
                name="EndTime"
                error={!!touched.EndTime && !!errors.EndTime}
                helperText={touched.EndTime && errors.EndTime}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Mission ID"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.MissionId}
                name="MissionId"
                error={!!touched.MissionId && !!errors.MissionId}
                helperText={touched.MissionId && errors.MissionId}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Location"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Location}
                name="Location"
                error={!!touched.Location && !!errors.Location}
                helperText={touched.Location && errors.Location}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Add New Schedule
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const checkoutSchema = yup.object().shape({
  ScheduledId: yup.string().required("required"),
  StartTime: yup.string().required("required"),
  EndTime: yup.string().required("required"),
  MissionId: yup.string().required("required"),
  Location: yup.string().required("required"),
});
const initialValues = {
  ScheduledId: "",
  StartTime: "",
  EndTime: "",
  MissionId: "",
  Location: "",
};

export default CreateSchedule;
