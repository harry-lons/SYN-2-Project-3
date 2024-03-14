import { useState } from 'react';

// material-ui
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Grid,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemSecondaryAction,
  ListItemText,
  MenuItem,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import Divider from '@mui/material/Divider';

// project import
import OrdersTable from './OrdersTable';
import IncomeAreaChart from './IncomeAreaChart';
import MonthlyBarChart from './MonthlyBarChart';
import ReportAreaChart from './ReportAreaChart';
import SalesColumnChart from './SalesColumnChart';
import MainCard from 'components/MainCard';
import YtdCard from 'components/cards/statistics/YtdCard';

// assets
import { GiftOutlined, MessageOutlined, SettingOutlined } from '@ant-design/icons';
import avatar1 from 'assets/images/users/avatar-1.png';
import avatar2 from 'assets/images/users/avatar-2.png';
import avatar3 from 'assets/images/users/avatar-3.png';
import avatar4 from 'assets/images/users/avatar-4.png';

// avatar style
const avatarSX = {
  width: 36,
  height: 36,
  fontSize: '1rem'
};

// action style
const actionSX = {
  mt: 0.75,
  ml: 1,
  top: 'auto',
  right: 'auto',
  alignSelf: 'flex-start',
  transform: 'none'
};

// sales report status
const status = [
  {
    value: 'today',
    label: 'Today'
  },
  {
    value: 'month',
    label: 'This Month'
  },
  {
    value: 'year',
    label: 'This Year'
  }
];


// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
  const [value, setValue] = useState('today');
  const [slot, setSlot] = useState('week');

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      <Grid item xs={12} sm={6} md={4} lg={12}>
        <MainCard>
          <Box textAlign="center">
          <Typography variant="h2" sx={{ color:'info.main', pt:4, pr:2 }}>
            Overview
          </Typography>
          </Box>
          <Divider sx={{color:'secondary.dark', pt:4}}/>
          <Typography variant="h3" sx={{ color:'secondary.600', pl:6 }}>
            <br/>Purpose
          </Typography>
          <Typography >
            <br/>
          Our driving question is: Could voters utilize a forum designed to educate themselves on politicians’ environmental stances and beliefs? Because our topic for project two was centered around policy and politics, we were inspired to create a platform that would reflect some of the conceptual issues surrounding official elections and campaigns. By creating an accessible website that outlines politicians’ environmental stances and goals in their coming elections in a time where misinformation surrounding political candidates is at an all-time high. The page would consist of several subsections, including their thoughts behind various issues related to the environment, such as public transportation, green infrastructure, renewable energy initiatives, carbon tax and Green New Deal policy support, etc. 
          </Typography>
          <Divider sx={{color:'secondary.dark', pt:4}}/>
          <Typography variant="h3" sx={{ color:'secondary.600', pl:6 }}>
            <br/>The Project
          </Typography>
          <Typography >
            <br/>
            Our idea for this project proposal is that we would like to develop and make a website to consolidate the stances of different political figures on aspects of climate change and the environment. Oftentimes, it is initially very intimidating to get involved with political matters and politicians because of the wide array of information available from the internet and social media. By creating a website that collects different climate change stances into one place, we would lower the barrier of entry to many potential voters who would like to become educated and have their voices heard within elections. We would mostly focus on politicians within the U.S, as most of our target audience would be individuals who are eligible to vote in U.S. elections. Going into more specifics, we would actually like to focus on politicians local to San Diego. This is so San Diego voters are more encouraged to be knowledgeable about their local elections in comparison to the rather intimidating and wide scale national elections. A budget for this project isn't necessary as we will be creating the website and doing the research on our own simply by using our skills and time. Our audience should be anyone in the voting age range, 18 years and older, with the ability to vote in local and national elections. 
          </Typography>
          <Divider sx={{color:'secondary.dark', pt:4}}/>
          <Typography variant="h3" sx={{ color:'secondary.600', pl:6 }}>
            <br/>Timeline/Budget
          </Typography>
          <Typography >
            <br/>
            This project will require research into different politicians and their views on the climate crisis. To obtain all of the candidates specific views, we might have to reach out to candidate teams directly or visit their personal political websites. Politicians' social media is also a very accessible platform for us to research their different campaigns and viewpoints that relate to climate change. This can be done by the group. In addition to research, the website must be created. Find a way to advertise the website. Advertisements can be done online. Both web-hosting and advertisement would have upfront costs as part of the budget which we can look into.
          </Typography>
          <Divider sx={{color:'secondary.dark', pt:4}}/>
          <Typography variant="h3" sx={{ color:'secondary.600', pl:6 }}>
            <br/>Social Justice
          </Typography>
          <Typography >
            <br/>
            This project would be anti-racist because we can use this platform to support voter education in areas which are historically disenfranchised or politically uneducated, helping push towards positive climate policy and better living conditions for residents. These are often low-income communities and communities of color. Since the internet is now largely accessible across the United States, a website is a great way to reach people without needing a large budget. We could also make sure to include a diverse variety of candidates for each race, creating a better opportunity for outsiders for positions, not just the traditional political class. Additionally, having pages available in multiple languages makes the website more accessible for non-english speakers (See San Diego Mayoral race for spanish example). 
          </Typography>
        </MainCard>
      </Grid>

      <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

    </Grid>
  );
};

export default DashboardDefault;
