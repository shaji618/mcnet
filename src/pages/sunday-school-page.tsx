import SundaySchoolPrincipal from '../components/SundaySchoolPrincipal';
import SundaySchoolTeachersTable from '../components/SundaySchoolTeachersTable';
import Page from '../layout/Page';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { appTertiaryColor } from '../util/constants';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export const SundaySchool = () => {
  return (
    <Page
      headerBody={
        <>
          <Typography>
            MCNET's Sunday school is a volunteer-run program designed to teach
            young Muslims about their religion.
          </Typography>
          <Typography fontSize={22} fontWeight={500}>
            A LINK TO THE SCHOOL CHARTER CAN BE FOUND{' '}
            <Link href='' rel='noreferrer' target='_blank'>
              HERE
            </Link>
            .
          </Typography>
        </>
      }
      headerText='SUNDAY SCHOOL'
    >
      <Grid container justifyContent='center' spacing={2}>
        <Grid item md={6}>
          <SundaySchoolPrincipal />
        </Grid>
        <Grid item md={6}>
          <SundaySchoolTeachersTable />
        </Grid>
        <Grid item md={6}>
          <Typography
            mb={1}
            sx={{
              textDecoration: `underline ${appTertiaryColor} 1px`,
              textUnderlineOffset: '0.3em'
            }}
            variant='h5'
          >
            HELPFUL LINKS FOR PARENTS
          </Typography>
          <List>
            <ListItem>
              <Typography>
                Qur'an:{' '}
                <Link
                  href='https://google.com'
                  rel='noreferrer'
                  target='_blank'
                >
                  Google
                </Link>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                Arabic:{' '}
                <Link
                  href='https://google.com'
                  rel='noreferrer'
                  target='_blank'
                >
                  Google
                </Link>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                <Box display='inline' fontStyle='italic'>
                  Fiqh
                </Box>
                :{' '}
                <Link
                  href='https://google.com'
                  rel='noreferrer'
                  target='_blank'
                >
                  Google
                </Link>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                <Box display='inline' fontStyle='italic'>
                  Seerah
                </Box>
                :{' '}
                <Link
                  href='https://google.com'
                  rel='noreferrer'
                  target='_blank'
                >
                  Google
                </Link>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                <Box display='inline' fontStyle='italic'>
                  Hadith
                </Box>
                :{' '}
                <Link
                  href='https://google.com'
                  rel='noreferrer'
                  target='_blank'
                >
                  Google
                </Link>
              </Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={6}>
          <Typography
            mb={1}
            sx={{
              textDecoration: `underline ${appTertiaryColor} 1px`,
              textUnderlineOffset: '0.3em'
            }}
            variant='h5'
          >
            TEACHING MATERIALS
          </Typography>
          <List>
            <ListItem>
              <Typography>
                Qur'an:{' '}
                <Link
                  href='https://google.com'
                  rel='noreferrer'
                  target='_blank'
                >
                  Google
                </Link>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                Arabic:{' '}
                <Link
                  href='https://google.com'
                  rel='noreferrer'
                  target='_blank'
                >
                  Google
                </Link>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                <Box display='inline' fontStyle='italic'>
                  Fiqh
                </Box>
                :{' '}
                <Link
                  href='https://google.com'
                  rel='noreferrer'
                  target='_blank'
                >
                  Google
                </Link>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                <Box display='inline' fontStyle='italic'>
                  Seerah
                </Box>
                :{' '}
                <Link
                  href='https://google.com'
                  rel='noreferrer'
                  target='_blank'
                >
                  Google
                </Link>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                <Box display='inline' fontStyle='italic'>
                  Hadith
                </Box>
                :{' '}
                <Link
                  href='https://google.com'
                  rel='noreferrer'
                  target='_blank'
                >
                  Google
                </Link>
              </Typography>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Page>
  );
};
