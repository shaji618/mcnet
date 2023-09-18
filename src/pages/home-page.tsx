import { ReactElement } from 'react';
import Image from 'mui-image';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import filteredMasjid from '@assets/mosque-photos/filteredMasjid.jpg';
import AnnouncementsOverview from '@components/AnnouncementsOverview';
import HomePageFlipCards from '@components/HomePageFlipCards';
import PrayerTimingsTable from '@components/PrayerTimingsTable';
import WelcomeMessage from '@components/WelcomeMessage';
import BodySubHeader from '@layout/BodySubheader';
import Page from '@layout/Page';

export const Home = (): ReactElement => {
  return (
    <Page>
      <WelcomeMessage />
      <BodySubHeader variant='h3'>INFORMATION</BodySubHeader>
      <Grid container spacing={3} direction='row' alignItems='stretch'>
        <Grid item md={6}>
          <AnnouncementsOverview />
        </Grid>
        <Grid item md={6}>
          <Grid container spacing={3}>
            <Grid item md={12} sx={{ margin: '0 auto' }}>
              <PrayerTimingsTable />
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
      <Box my={4}>
        <BodySubHeader variant='h3'>WHO WE ARE</BodySubHeader>
        <HomePageFlipCards />
        <Typography fontSize={12} my={3} textAlign='center'>
          <Link
            href='https://en.wikipedia.org/wiki/Five_Pillars_of_Islam'
            rel='noreferrer'
            target='_blank'
          >
            To find out more about the pillars of Islam, click here.
          </Link>
        </Typography>
      </Box>
    </Page>
  );
};
