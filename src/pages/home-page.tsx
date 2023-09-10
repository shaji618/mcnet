import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import WelcomeMessage from '../components/WelcomeMessage';
import Page from '../layout/Page';
import PrayerTimings from '../components/PrayerTimings';
import { appTertiaryColor } from '../util/constants';
import AnnouncementsOverview from '../components/AnnouncementsOverview';
import Image from 'mui-image';
import filteredMasjid from '../assets/mosque-photos/filteredMasjid.jpg';
import HomePageFlipCards from '../components/HomePageFlipCards';
import Link from '@mui/material/Link';

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
                src={filteredMasjid}
                style={{
                  borderRadius: '1em'
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box mb={4}>
        <Typography
          my={2}
          textAlign='center'
          variant='h3'
          sx={{
            textDecoration: `underline ${appTertiaryColor} 1px`,
            textUnderlineOffset: '15px'
          }}
        >
          WHO WE ARE
        </Typography>
        <HomePageFlipCards />
        <Link
          href='https://en.wikipedia.org/wiki/Five_Pillars_of_Islam'
          rel='noreferrer'
          target='_blank'
        >
          <Typography fontSize={12} my={4} textAlign='center'>
            To find out more about the pillars of Islam, click here.
          </Typography>
        </Link>
      </Box>
    </Page>
  );
};
