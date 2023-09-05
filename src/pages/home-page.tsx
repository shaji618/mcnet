import { Grid, Typography } from '@mui/material';
import WelcomeMessage from '../components/WelcomeMessage';
import Page from '../layout/Page';
import PrayerTimings from '../components/PrayerTimings';
import { appTertiaryColor } from '../util/constants';
import AnnouncementsOverview from '../components/AnnouncementsOverview';
import Image from 'mui-image';

export const Home = () => {
  return (
    <Page>
      <WelcomeMessage />
      <Typography
        my={7}
        textAlign='center'
        variant='h3'
        sx={{
          textDecoration: `underline ${appTertiaryColor} 1px`,
          textUnderlineOffset: '15px'
        }}
      >
        INFORMATION
      </Typography>
      <Grid container spacing={3} direction='row' alignItems='stretch'>
        <Grid item md={6}>
          <AnnouncementsOverview />
        </Grid>
        <Grid item md={6}>
          <Grid container spacing={3}>
            <Grid item md={12} sx={{ margin: '0 auto' }}>
              <PrayerTimings />
            </Grid>
            <Grid
              item
              md={12}
              sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}
            >
              <Image
                src='src/assets/filteredMasjid.jpg'
                style={{
                  borderRadius: '1em'
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Page>
  );
};
