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
                            Todd Gloria
                        </Typography>
                        <p>
                            <br />Todd Gloria, a Democratic mayoral candidate, is dedicated to improving infrastructure, enhancing mobility, and advancing climate action initiatives. With a commitment to achieving net-zero greenhouse gas emissions by 2035, Gloria has spearheaded initiatives such as launching organic waste recycling services, transitioning city facilities to 100% renewable electricity, and divesting from fossil fuel companies. He emphasizes the crucial role of governmental action in tackling climate change at all levels and aims to lead San Diego towards a sustainable and resilient future.
                        </p>
                        <a href="https://toddgloria.com/">Campaign website: https://toddgloria.com</a>
                        <Typography variant="h3">
                            <br />Climate Change
                        </Typography>
                        <Typography>
                            <br />Mayor Todd Gloria has taken decisive action on climate change by signing an updated Climate Action Plan for San Diego, setting a goal of achieving net-zero greenhouse gas emissions by 2035. This plan received unanimous approval from the City Council, highlighting the urgency and importance of addressing climate change at the local level. Mayor Gloria emphasized the need for immediate action, citing the visible impacts of climate change such as wildfires, heat waves, and floods. He stressed the significance of governmental intervention in combatting climate change and outlined the benefits of the Climate Action Plan, including cleaner air and water, infrastructure improvements, and increased access to green space.
                            <br/><br/>
                            The updated Climate Action Plan proposes various strategies to reduce greenhouse gas emissions, including phasing out fossil fuel use in buildings, transitioning to 100% renewable electricity, and promoting alternative modes of transportation such as walking, biking, and transit. Furthermore, the plan prioritizes equity by including the voices and concerns of communities disproportionately affected by climate change. City Council President Sean Elo-Rivera highlighted the importance of addressing climate inequity and ensuring that all San Diegans have access to a clean and healthy environment.
                            <br/><br/>
                            To achieve the ambitious goals outlined in the Climate Action Plan, the city will implement specific projects, programs, and policies across various departments. Councilman Joe LaCava praised Mayor Gloria's leadership in pivoting the city towards climate action and emphasized the importance of documenting a comprehensive implementation plan. The update also includes additional initiatives such as waste reduction, wetland restoration, and tree planting, demonstrating San Diego's commitment to building a sustainable future for all residents.
                            <br/>
                            <br/>
                            <a href="https://www.kpbs.org/news/local/2022/08/10/mayor-todd-gloria-signs-ambitious-climate-action-plan-update#"> Source (KPBS)</a>
                            <br/>
                            ...
                            more info about todd continued...
                        </Typography>
                    </Box>
                </MainCard>
            </Grid>
        </Grid>
    );
}

export default RunnerForm;
