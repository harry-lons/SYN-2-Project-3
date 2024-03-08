// material-ui
import * as React from 'react';
import dayjs from 'dayjs';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import MainCard from 'components/MainCard';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function ExampleForm() {
  // Controls for Form Submit
  const { register, handleSubmit } = useForm();
  // Control whether Alert box is displayed or not
  const [isAlertOpen, setAlertIsOpen] = useState(false);
  // Is the submit button disabled or not
  const [isSubmitDisabled, setSubmitDisabled] = useState(true);
  // Store Value of Date Selection
  const [selectedDate, setDate] = useState(new Date());
  // Control whether Success box is displayed or not
  const [isSuccessMessageOpen, setSuccessMessageIsOpen] = useState(false);

  const handleFormSubmit = (formData: any) => {
    console.log('form data is ', formData);
    console.log('Date selection is ', selectedDate);

    // Assemble payload from form contents
    let data = {};
    data.scan_date_time = selectedDate;
    data.ids = formData.myTextField.split('\n');

    console.log('Payload is ', data);

    fetch('http://127.0.0.1:5000/api/v1/scans/', {
      method: 'POST',
      body: JSON.stringify(data),
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

  const scanDataChanged = () => {
    // If scan data is updated, then enable the submit button
    // and remove any notifications that were displayed about previous
    // operations
    setSubmitDisabled(false);
    setAlertIsOpen(false);
    setSuccessMessageIsOpen(false);
  };

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
        <Typography>Enter details of the most recent scan</Typography>
      </Box>
      <Box sx={{
        p: 1
      }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker label="Date of Run" defaultValue={dayjs()} onChange={(newValue) => setDate(newValue)}/>
        </LocalizationProvider>
      </Box>
        <Box sx={{
          p: 1
        }}>
          <TextField
            label="Scan Data"
            variant="outlined"
            multiline
            rows="10"
            style={{width: 400}}
            {...register('myTextField', {
              onChange: (e) => {
                scanDataChanged(e);
              }
            })}
          />
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

export default ExampleForm;
