// material-ui
import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import MainCard from 'components/MainCard';
import { Typography, Grid } from '@mui/material';

// Imports for Table
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

function RunnersTable() {

  const [tableData, setTableData] = useState([]);
  let navigate = useNavigate();

  const loadData = () => {
    fetch('http://127.0.0.1:5000/api/v1/athletes/')
      .then((response) => response.json())
      .then((data) => {
        console.log('Rest API returned ' + JSON.stringify(data));
        setTableData(data);
      })
      .catch((err) => {
        console.log('REST API ERROR : ' + err.message);
      });
  };

  // Perform Initial Load of Data
  useEffect(loadData, [])

  const columns = [
    {
      field: 'name',
      headerName: 'Date',
      width: 100
    },
    {
      field: 'firstName',
      headerName: 'Activity Name',
      width: 150
    },
    {
      field: "sport_type",
      headerName: 'Sport',
      width: 150
    },
    {
      field: 'Activities',
      headerName: 'Distance (mi)',
      width: 150
    },
    {
      field: 'teacher',
      headerName: 'Avg Pace (min/mi)',
      width: 150
    },
    {
      field: 'time',
      headerName: 'Time',
      width: 100
    },
    {
      field: 'link',
      headerName: 'Link',
      width: 300
    }
  ];

  return (
    <Grid container rowSpacing={2} columnSpacing={0}>
      <Grid item>
      <Typography variant="h3">Recent Activities</Typography>
      </Grid>
      <Grid item xs={12}>
      <MainCard>
        <Box>
          <DataGrid columns={columns} rows={tableData}></DataGrid>
        </Box>
      </MainCard>
      </Grid>
    </Grid>
    
  );
}

export default RunnersTable;