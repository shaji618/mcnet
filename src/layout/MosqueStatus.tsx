import { FC, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { ReactComponent as PayPalLogo } from '@assets/svg-icons/paypal-logo-svgrepo-com.svg';
import PrayerTimingsTable from '@components/PrayerTimingsTable';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import { currencyFormatter } from '@util/helpers';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { ReactComponent as PayPalQR } from '@assets/svg-icons/example-paypal-qr.svg';
import { ReactComponent as WiFiQR } from '@assets/svg-icons/example-wifi-qr.svg';
import { APP_TERTIARY_COLOR } from '@util/constants';
import BodySubHeader from '@layout/BodySubheader';
import Box from '@mui/material/Box';

const MosqueStatus: FC = () => {
  const fundsRaised = 1800;
  const fundsRequired = 6000;

  useEffect(() => {
    const refreshPage = (): void => {
      window.location.reload();
    };
    const refreshInterval = setInterval(refreshPage, 3600000);
    return () => clearInterval(refreshInterval);
  }, []);

  const getBarColor = (): 'red' | 'yellow' | 'green' => {
    const ratio = fundsRaised / fundsRequired;
    if (ratio <= 1 / 3) {
      return 'red';
    } else if (ratio >= 1 / 2 && ratio > 1 / 3) {
      return 'yellow';
    } else {
      return 'green';
    }
  };

  return (
    <Box ml={2} mr={2}>
      <Grid container justifyContent='center' maxHeight='100vh' spacing={2}>
        <Grid item md={6}>
          <PrayerTimingsTable boxSx={{ width: '100%' }} hideMonthlyLink />
        </Grid>
        <Grid item md={6}>
          <BodySubHeader variant='h5'>ANNOUNCEMENTS</BodySubHeader>
        </Grid>
        <Divider
          sx={{ color: APP_TERTIARY_COLOR, my: 4, width: '80vw' }}
          variant='middle'
        />
        <Grid item md={12} textAlign='center'>
          <Typography>
            NOVEMBER FUNDING GOAL:{' '}
            <Box color={getBarColor()} display='inline'>
              {currencyFormatter.format(fundsRaised)}
            </Box>{' '}
            OF{' '}
            <Box color='green' display='inline'>
              {currencyFormatter.format(fundsRequired)}
            </Box>
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
              <LinearProgress
                color='success'
                sx={{
                  height: 10
                }}
                value={(fundsRaised / fundsRequired) * 100}
                variant='determinate'
              />
            </Box>
            <Box sx={{ minWidth: 35 }}>
              <Typography>{`${((fundsRaised / fundsRequired) * 100).toFixed(
                2
              )}%`}</Typography>
            </Box>
          </Box>
        </Grid>
        <Divider
          sx={{ color: APP_TERTIARY_COLOR, my: 4, width: '80vw' }}
          variant='middle'
        />
        <Grid item md={4}>
          <Stack>
            <Stack direction='row'>
              <FacebookIcon
                fontSize='large'
                sx={{ color: '#4267B2', mx: 1, mt: 0.5 }}
              />
              <Typography>
                MCNET - Muslim Community of Northeast Tennessee
              </Typography>
            </Stack>
            <Stack direction='row'>
              <TwitterIcon fontSize='large' sx={{ color: '#1DA1F2', mx: 1 }} />
              <Typography mt={0.5}>@mymcnet</Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item md={4}>
          <Stack alignItems='center' direction='row' spacing={1}>
            <SvgIcon
              component={PayPalQR}
              sx={{ fontSize: 80 }}
              viewBox='0 0 1022 1022'
              width={80}
            />
            <Stack>
              <Typography>Please donate generously</Typography>
              <Stack direction='row'>
                <SvgIcon
                  component={PayPalLogo}
                  viewBox='-11.153 -123.214 326.05 326.05'
                />
                <Typography>mcnet37604@outlook.com</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
        <Grid item md={4}>
          <Stack alignItems='center' direction='row' spacing={1}>
            <SvgIcon
              component={WiFiQR}
              sx={{ fontSize: 80 }}
              viewBox='0 0 888 888'
              width={80}
            />
            <Stack>
              <Typography>SSID: MCNET-5G</Typography>
              <Typography>Password: Mcnet37604</Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MosqueStatus;
