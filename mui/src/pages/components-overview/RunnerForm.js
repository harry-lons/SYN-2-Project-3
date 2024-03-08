// material-ui
import * as React from 'react';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import MainCard from 'components/MainCard';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';

function RunnerForm() {
  // Controls for Form Submit
  const { register, handleSubmit } = useForm();
  // Control whether Alert box is displayed or not
  const [isAlertOpen, setAlertIsOpen] = useState(false);
  // Is the submit button disabled or not
  const [isSubmitDisabled, setSubmitDisabled] = useState(false);
  // Control whether Success box is displayed or not
  const [isSuccessMessageOpen, setSuccessMessageIsOpen] = useState(false);

  let grade = 1;
  let teacher = "Bell";
  let navigate = useNavigate();

  const handleFormSubmit = (formData) => {
    console.log('form data is ', formData);

    // Assemble payload from form contents
    let payload = {};
    payload.first_name = formData.first_name;
    payload.second_name = formData.second_name;
    payload.grade = formData.grade;
    payload.teacher = formData.teacher

    console.log('Payload is ', payload);

    fetch('http://127.0.0.1:5000/api/v1/runners/', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-type': 'application/json',
        accept: 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Rest API returned ' + JSON.stringify(data));
        setAlertIsOpen(false);
        setSuccessMessageIsOpen(true);
        setSubmitDisabled(true);

        navigate('/runners')
      })
      .catch((err) => {
        console.log('REST API ERROR : ' + err.message);
        setAlertIsOpen(true);
        setSubmitDisabled(true);
      });
  };

  const closeAlert = () => {
    // If user closes an error message
    setAlertIsOpen(false);
  };

  const closeSuccess = () => {
    // If user closes an error message
    setSuccessMessageIsOpen(false);
  };

  /*const scanDataChanged = () => {
    // If scan data is updated, then enable the submit button
    // and remove any notifications that were displayed about previous
    // operations
    setSubmitDisabled(false);
    setAlertIsOpen(false);
    setSuccessMessageIsOpen(false);
  };*/

  return (
    <MainCard>
      {isAlertOpen && (
        <Alert severity="error" onClose={() => closeAlert()}>
          This is an error alert — check it out!
        </Alert>
      )}
      {isSuccessMessageOpen && (
        <Alert severity="success" onClose={() => closeSuccess()}>
          Data successfully uploaded
        </Alert>
      )}
      <Box component="form" onSubmit={handleSubmit(handleFormSubmit)}>
      <Box sx={{
        p: 2,
        mt: 1,
        mb: 1,
        minWidth: 300,
      }}>
        <Typography>Enter details of runner</Typography>
      </Box>
      <Box sx={{
        p: 1
      }}>
      </Box>
      <Box sx={{
          p: 1
      }}>
          <TextField
            label="First Name"
            variant="outlined"
            style={{width: 400}}
            {...register('first_name')}
          />
      </Box>
      <Box sx={{
          p: 1
      }}>
          <TextField
            label="Second Name"
            variant="outlined"
            style={{width: 400}}
            {...register('second_name')}
          />
      </Box>
      <Box sx={{ 
        p: 1
      }}>
        <InputLabel id="grade-select-label">Grade</InputLabel>
          <Select
            labelId="grade-select-label"
            id="grade-select"
            value={grade}
            label="Grade"
            {...register('grade')}
          >
            <MenuItem value={1}>One</MenuItem>
            <MenuItem value={2}>Two</MenuItem>
            <MenuItem value={3}>Three</MenuItem>
            <MenuItem value={4}>Four</MenuItem>
            <MenuItem value={5}>Five</MenuItem>
          </Select>
      </Box>
      <Box sx={{ 
        p: 1
      }}>
        <InputLabel id="teacher-select-label">Teacher</InputLabel>
          <Select
            labelId="teacher-select-label"
            id="teacher-select"
            value={teacher}
            label="Teacher"
            {...register('teacher')}
          >
            <MenuItem value={'Kelley'}>Kelley</MenuItem>
            <MenuItem value={'Di_Maria'}>Di Maria</MenuItem>
            <MenuItem value={'Nitsiotis'}>Nitsiotis</MenuItem>
            <MenuItem value={'Bell'}>Bell</MenuItem>
            <MenuItem value={'Hammerschmitt'}>Hammerschmitt</MenuItem>
          </Select>
      </Box>
      <Box sx={{
          p: 1
      }}>
        <Button type="submit" variant="contained" size="small" disabled={isSubmitDisabled}>
          Submit
        </Button>
      </Box>
    </Box>
    </MainCard>
  );
}

export default RunnerForm;
