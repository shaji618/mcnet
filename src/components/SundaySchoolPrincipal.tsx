import { ReactElement } from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import BodySubHeader from '@layout/BodySubheader';
import HeadshotCard from '@layout/HeadshotCard';


const SundaySchoolPrincipal = (): ReactElement => {
  return (
    <Stack>
      <BodySubHeader>MEET THE PRINCIPAL</BodySubHeader>
      <Grid container alignItems='center'>
        <Grid item md={6}>
          <HeadshotCard
            dimensions={{ height: 'auto', width: 275 }}
            email={'ezamani@mcnethostname.org'}
            name='Edra Zamani'
            title={'Principal'}
          />
        </Grid>
        <Grid item md={6}>
          <Typography>
            The Sunday school principal is Edra Zamani. She has been a pillar of
            the community in Johnson City for over 20 years and has served as
            the Sunday school's principal for the last eight years. During the
            week, she works as a doctor at Princeton-Plainsboro Teaching
            Hospital.
          </Typography>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default SundaySchoolPrincipal;
