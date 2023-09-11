import Typography from '@mui/material/Typography';
import JummahPrayerTable from '../components/JummahPrayerTable';
import Page from '../layout/Page';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

export const JummahPrayers = () => {
  return (
    <Page
      headerText='JUMMAH PRAYERS'
      headerBody={
        <Typography>
          Friday (in Arabic,{' '}
          <Box display='inline' fontStyle='italic'>
            Jummah
          </Box>{' '}
          ) is considered to be the holiest day of the week in Islam. Muslims{' '}
          are required to gather for a{' '}
          <Link
            href='https://en.wikipedia.org/wiki/Friday_prayer'
            rel='noreferrer'
            target='_blank'
          >
            special prayer
          </Link>{' '}
          every Friday afternoon. See below for more information about{' '}
          <Box display='inline' fontStyle='italic'>
            Jummah
          </Box>{' '}
          prayers at MCNET.
        </Typography>
      }
    >
      <JummahPrayerTable />
    </Page>
  );
};
