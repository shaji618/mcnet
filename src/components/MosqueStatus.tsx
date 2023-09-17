import Grid from '@mui/material/Grid';
import { ReactElement } from 'react';
import PrayerTimingsTable from './PrayerTimingsTable';
import { ReactComponent as PayPalQR } from '../assets/svg-icons/example-paypal-qr.svg';
import { ReactComponent as WiFiQR } from '../assets/svg-icons/example-wifi-qr.svg';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const MosqueStatus = (): ReactElement => {
  const dollarsRaised = 5803.1;
  const dollarsNeeded = 6500;
  const dollarRatio =
    dollarsRaised / dollarsNeeded > 1 ? 1 : dollarsRaised / dollarsNeeded;

  const getDonationProgressColor = (ratio: number): string => {
    if (ratio < 0.5) {
      return 'red';
    } else if (ratio > 0.5 && ratio < 1) {
      return 'yellow';
    } else {
      return 'green';
    }
  };

  return (
    <>
      <Grid container justifyContent='center' spacing={2}>
        <Grid item md={6} textAlign='center'>
          <Box ml={16} mt={6}>
            <CircularProgress
              color='success'
              size={200}
              value={dollarRatio * 100}
              variant='determinate'
            />
            <Typography
              color={getDonationProgressColor(dollarRatio)}
              sx={{
                textShadow:
                  '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
              }}
              variant='h3'
            >
              We are {(dollarRatio * 100).toFixed(2)}% of the way towards our
              fundraising goal!
            </Typography>
          </Box>
        </Grid>
        <Grid item textAlign='center' md={6} mt={6}>
          <PayPalQR style={{ maxHeight: '45vh' }} />
        </Grid>
        <Grid item md={6}>
          <PrayerTimingsTable boxSx={{ ml: 6 }} hideMonthlyLink />
        </Grid>
        <Grid item md={6}>
          <WiFiQR style={{ maxHeight: '45vh', marginLeft: -80 }} />
        </Grid>
      </Grid>
    </>
  );
};

export default MosqueStatus;
