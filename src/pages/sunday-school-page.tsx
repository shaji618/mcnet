import SundaySchoolPrincipal from '../components/SundaySchoolPrincipal';
import SundaySchoolTeachersTable from '../components/SundaySchoolTeachersTable';
import Page from '../layout/Page';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import '../style-sheets/SuperResponsiveTableStyle.css';
import Chip from '@mui/material/Chip';
import BodySubHeader from '../layout/BodySubheader';
import { ReactElement } from 'react';
import DailyClassSchedule from '../components/DailyClassSchedule';

export const SundaySchool = (): ReactElement => {
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
          <Typography fontSize={22} fontWeight={500}>
            A LINK TO THE SCHOOL CHARTER CAN BE FOUND{' '}
            <Link href='' rel='noreferrer' target='_blank'>
              HERE
            </Link>
            .
          </Typography>
          <BodySubHeader variant='h5'>TIMELINE</BodySubHeader>
          <Table>
            <Thead>
              <Tr>
                <Th>Batch</Th>
                <Th>Duration of Class</Th>
                <Th>Class Details</Th>
                <Th>Class Time</Th>
                <Th>Days of Week</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>KE-B001</Td>
                <Td>
                  <Chip
                    label='1st April 2018 to 31st July 2018'
                    sx={{
                      height: 'auto',
                      textAlign: 'center',
                      '& .MuiChip-label': {
                        display: 'block',
                        whiteSpace: 'normal'
                      }
                    }}
                    variant='outlined'
                  />
                </Td>
                <Td>
                  Classes for Arabic language, Islamic studies and Quran
                  translation for kids
                </Td>
                <Td>
                  <Chip
                    label='11:30 AM To 03:00 PM'
                    sx={{
                      height: 'auto',
                      textAlign: 'center',
                      '& .MuiChip-label': {
                        display: 'block',
                        whiteSpace: 'normal'
                      }
                    }}
                    variant='outlined'
                  />
                </Td>
                <Td>
                  <Chip
                    label='Sunday'
                    sx={{
                      height: 'auto',
                      textAlign: 'center',
                      '& .MuiChip-label': {
                        display: 'block',
                        whiteSpace: 'normal'
                      }
                    }}
                    variant='outlined'
                  />
                </Td>
              </Tr>
            </Tbody>
          </Table>
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
        <Grid item md={12}>
          <DailyClassSchedule />
        </Grid>
        <Grid item md={6}>
          <BodySubHeader variant='h5'>HELPFUL LINKS FOR PARENTS</BodySubHeader>
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
          <BodySubHeader variant='h5'>TEACHING MATERIALS</BodySubHeader>
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
