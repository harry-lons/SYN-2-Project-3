// material-ui
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import {
  Box,
  ButtonBase,
  Grid,
  Stack,
  Typography
} from '@mui/material';

// project import
import MainCard from 'components/MainCard';

import { activeItem } from 'store/reducers/menu';


function RunnerForm() {

  /*const scanDataChanged = () => {
    // If scan data is updated, then enable the submit button
    // and remove any notifications that were displayed about previous
    // operations
    setSubmitDisabled(false);
    setAlertIsOpen(false);
    setSuccessMessageIsOpen(false);
  };*/

  const { defaultId } = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  return (

    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      <Grid item xs={12} sm={6} md={4} lg={12}>
        <MainCard>
          <Box sx={{
            p: 2,
            mt: 1,
            mb: 1,
            minWidth: 300,
          }}>
            <Typography variant="h1" component="h2">
              Genevieve Jones-Wright
            </Typography>
            <Typography>
              <br/>Geneviéve LaChelle Jones-Wright is an American attorney and activist who served as a San Diego County public defender from 2006 to 2019. A member of the Democratic Party, she was an unsuccessful candidate for San Diego County District Attorney in 2018 and Mayor of San Diego in 2024. She gained notoriety for being falsely handcuffed and held at gunpoint by a San Diego police officer in 2016. 
            </Typography>
            <Typography>
              <br/>Jones-Wright is a native of San Diego, California. Jones-Wright earned a bachelor's degree from the University of San Francisco and a J.D. from Howard University School of Law. She also graduated from the California Western School of Law. Jones-Wright has been affiliated with the Earl B. Gilliam Bar Association, David's Harp Foundation, and Secure Justice.
            </Typography>
            <Typography variant="h3">
              <br />Climate Change
            </Typography>
            <Typography>
              <br/>
            </Typography>
          </Box>
        </MainCard>
      </Grid>
    </Grid>
  );
}

export default RunnerForm;
