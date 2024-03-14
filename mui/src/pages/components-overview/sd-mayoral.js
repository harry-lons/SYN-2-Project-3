// material-ui
import { useState } from 'react';

// material-ui
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Grid,
  Stack,
  TextField,
  Typography
} from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import YtdCard from 'components/cards/statistics/YtdCard';


function RunnerForm() {

  /*const scanDataChanged = () => {
    // If scan data is updated, then enable the submit button
    // and remove any notifications that were displayed about previous
    // operations
    setSubmitDisabled(false);
    setAlertIsOpen(false);
    setSuccessMessageIsOpen(false);
  };*/

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      <Grid item xs={12} sm={6} md={4} lg={12}>
      <MainCard>
          <Box sx={{
            p: 2,
            mt: 1,
            mb: 1,
            minWidth: 300,
          }}>
          <Typography variant="h1" component="h2">
            San Diego Mayoral Race
          </Typography>
          <Typography>
            <br/>San Diego (/ˌsæn diˈeɪɡoʊ/ SAN dee-AY-goh, Spanish: [san ˈdjeɣo]) is a city on the Pacific Ocean coast in Southern California located immediately adjacent to the Mexico–United States border. With a population of over 1.3 million residents, the city is the eighth-most populous in the United States and the second-most populous in the state of California after Los Angeles. The city is the seat of San Diego County, which has a population of nearly 3.3 million people as of 2021. San Diego is known for its mild year-round Mediterranean climate, extensive beaches and parks, its long association with the United States Navy, and its recent emergence as a healthcare and biotechnology development center.
          </Typography>
          <Typography>
            <br/>The mayoral primary occurred on March 5, 2024. The general election will occur on November 5, 2024. General election candidates will be added here following the primary.
          </Typography>
          <Typography>
            <br/>Listed below are profiles on each of the candidates. Click on a card to learn more about them.
          </Typography>
          </Box>
          
    </MainCard>
      </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <MainCard>
          <Stack spacing={1}>
          <Typography variant="h6" sx={{ color: 'primary.main' }}>
            Incumbent
          </Typography>
            <Typography variant={'h4'}>
              Todd Gloria
            </Typography>
            <Box
              component="img"
              src="https://upload.wikimedia.org/wikipedia/commons/5/54/Cabrillo_Bridge_Reenactment_150509-M-PG109-006_%28cropped%29.jpg"
              sx={{borderRadius: 2,}}
            />
            </Stack>
          </MainCard>
        </Grid>
        
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <MainCard>
          <Stack spacing={0.5}>
          <Typography variant="h6" sx={{ color: 'warning.main' }}>
           Challenger
          </Typography>
            <Typography variant={'h4'}>
            Jane Glasson
            </Typography>
            </Stack>
          </MainCard>
        </Grid>
        
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <MainCard>
          <Stack spacing={0.5}>
          <Typography variant="h6" sx={{ color: 'warning.main' }}>
            Challenger
          </Typography>
            <Typography variant={'h4'}>
            Genevieve Jones-Wright 
            </Typography>
            </Stack>
          </MainCard>
        </Grid>
        
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <MainCard>
          <Stack spacing={0.5}>
          <Typography variant="h6" sx={{ color: 'warning.main' }}>
            Challenger
          </Typography>
            <Typography variant={'h4'}>
              Dan Smeichowski
            </Typography>
            </Stack>
          </MainCard>
        </Grid>
        </Grid>
  );
}

export default RunnerForm;
