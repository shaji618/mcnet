import Typography from '@mui/material/Typography';
import { appTertiaryColor } from '../util/constants';
import HeadshotCard from '../layout/HeadshotCard';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

const SundaySchoolPrincipal = () => {
  return (
    <Stack>
      <Typography
        sx={{
          mb: 2,
          textDecoration: `underline ${appTertiaryColor} 1px`,
          textUnderlineOffset: '0.3em'
        }}
        variant='h5'
      >
        MEET THE PRINCIPAL
      </Typography>
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
