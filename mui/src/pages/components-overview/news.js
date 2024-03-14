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
                            Climate Change News
                        </Typography>
                        <Typography >
                            <br/>A collection of recent US climate change news from a variety of sources
                        </Typography>
                        <Typography  sx={{ color: 'secondary.main' }}>
                            <br/><br/>New York Times
                        </Typography>
                        <Typography variant="h4">
                            A New Surge in Power Use Is Threatening U.S. Climate Goals
                        </Typography>
                        <Typography>
                        The demand for electricity in the United States, which had remained relatively stagnant for two decades, has unexpectedly surged in recent times. This surge is attributed to several factors, including the rapid expansion of data centers, a resurgence in manufacturing due to new federal laws, and the increasing adoption of electric vehicles. As a result, electric utilities are now facing the challenge of meeting this heightened demand, which could potentially strain the nation's power grids.
                        </Typography>
                        <a href="https://www.nytimes.com/interactive/2024/03/13/climate/electric-power-climate-change.html">https://www.nytimes.com/interactive/2024/03/13/climate/electric-power-climate-change.html</a>
                        <Typography  sx={{ color: 'secondary.main' }}>
                            <br/><br/>The Guardian
                        </Typography>
                        <Typography variant="h4">
                            Effects of geoengineering must be urgently investigated, experts say
                        </Typography>
                        <Typography>
                        Richard Spinrad, the head of NOAA, stresses the urgent need for scientists to study the potential impacts of climate geoengineering, suggesting that certain techniques might become necessary to address global warming and ocean acidification. NOAA is particularly focused on researching marine carbon dioxide removal and collaborating with UK scientists on the potential consequences of disrupting the Gulf Stream ocean currents. Spinrad defends NOAA's funding, stating that robust climate science is essential for protecting US citizens' security, regardless of political divisions, given the increasing frequency of wildfires and extreme weather events.
                        </Typography>
                        <a href="https://www.theguardian.com/environment/2024/mar/14/geoengineering-must-be-urgently-investigated-experts-say">https://www.theguardian.com/environment/2024/mar/14/geoengineering-must-be-urgently-investigated-experts-say</a>
                        <Typography  sx={{ color: 'secondary.main' }}>
                            <br/><br/>CBS News
                        </Typography>
                        <Typography variant="h4">
                        Nearly half of U.S. homes face severe threat from climate change, study finds
                        </Typography>
                        <Typography>
                        Almost 50% of U.S. homes are threatened by extreme weather conditions due to climate change, according to Realtor.com. This poses risks such as flooding, wildfires, and high winds, impacting home prices and insurance costs. The total value of residential properties at risk is estimated at around $22 trillion. Climate risks affect not only coastal areas but also inland states, with millions of homes facing higher insurance premiums. Efforts to address climate change's impact on housing require sustained observations and strong climate science.
                        </Typography>
                        <a href="https://www.cbsnews.com/news/climate-change-home-prices-housing-realtor-com/">https://www.cbsnews.com/news/climate-change-home-prices-housing-realtor-com/</a>
                        
                    </Box>
                </MainCard>
            </Grid>
        </Grid>
    );
}

export default RunnerForm;
