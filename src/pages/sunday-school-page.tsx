import SundaySchoolPrincipal from '../components/SundaySchoolPrincipal';
import SundaySchoolTeachersTable from '../components/SundaySchoolTeachersTable';
import Page from '../layout/Page';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { appTertiaryColor } from '../util/constants';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import Chip from '@mui/material/Chip';

export const SundaySchool = () => {
  return (
    <Page
      headerBody={
        <>
          <Typography mb={2}>
            The Islamic school of Northeast Tennessee (ISNET) started back in
            1994 at ETSU campus. Currently, it runs in the Masjid on Sundays
            between 11:30 AM to 3 PM. The teachers are volunteers from within
            the Muslim community. It offers classes for Arabic language, Islamic
            studies and Quran translation. The school follows the Johnson city
            school calendar. The fall semester runs from August to December, and
            the Spring semester runs from January to May. Semester fee is $ 75
            per child and $ 75 for registration for new students and book money.
            Students are registered from age 5 and above. The school provides
            the books and the lunch. Over the course of time, it has grown from
            only a few students to more than 80 students currently. Presently we
            have students attending from as far as 75 miles away, from Abingdon,
            Norton, and Bristol, VA.
          </Typography>
          <Typography
            sx={{
              textDecoration: `underline ${appTertiaryColor} 1px`,
              textUnderlineOffset: '0.3em'
            }}
            variant='h5'
          >
            SCHEDULE
          </Typography>
          <Table sx={{ mb: 2 }}>
            <TableHead>
              <TableRow>
                <TableCell>Batch</TableCell>
                <TableCell>Duration of Class</TableCell>
                <TableCell>Class Details</TableCell>
                <TableCell>Class Time</TableCell>
                <TableCell>Days of Week</TableCell>
              </TableRow>
            </TableHead>
            <TableRow>
              <TableCell>KE-B001</TableCell>
              <TableCell>
                <Chip
                  label='1st April 2018 to 31st July 2018'
                  variant='outlined'
                />
              </TableCell>
              <TableCell>
                Classes for Arabic language, Islamic studies and Quran
                translation for kids
              </TableCell>
              <TableCell>
                <Chip label='11:30 AM To 03:00 PM' variant='outlined' />
              </TableCell>
              <TableCell>
                <Chip label='Sunday' variant='outlined' />
              </TableCell>
            </TableRow>
          </Table>
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
                Islamic Studies :{' '}
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
                Islamic Studies :{' '}
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
