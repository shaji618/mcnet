import {
  Avatar,
  Box,
  Grid,
  List,
  ListItem,
  Stack,
  Typography
} from '@mui/material';
import { ReactComponent as Megaphone } from '../assets/loudspeaker.svg';
import { ReactComponent as Microphone } from '../assets/microphone.svg';
import { ReactComponent as CalendarIcon } from '../assets/calendar.svg';
import { ReactNode, useState } from 'react';
import { appTertiaryColor } from '../util/constants';
import Calendar from 'react-calendar';
import './styles/react-calendar.css';

const HeaderIcon = (props: {
  active?: boolean;
  icon: ReactNode;
  headerText: string;
}) => {
  return (
    <Grid item md={4}>
      <Box>
        <Avatar
          className={props.active ? 'active' : ''}
          sx={{
            border: '1px solid #000',
            height: '9em',
            marginBottom: '1em',
            padding: '0 1em  0 1em',
            width: '9em',
            '&:hover': {
              backgroundColor: appTertiaryColor,
              cursor: 'pointer'
            },
            '&.active': {
              backgroundColor: appTertiaryColor
            }
          }}
          variant='rounded'
        >
          <Stack direction='column'>
            {props.icon}
            <Typography textAlign='center'>
              {props.headerText.toUpperCase()}
            </Typography>
          </Stack>
        </Avatar>
      </Box>
    </Grid>
  );
};

const AnnouncementsOverview = () => {
  const [announcementState, setAnnouncementState] = useState<
    'announcements' | 'pressReleases' | 'events'
  >('announcements');
  return (
    <Box width='100%' height='750px'>
      <Typography mb={1} textAlign='center'>
        Communications
      </Typography>
      <Grid container>
        <Box mr={1} onClick={() => setAnnouncementState('announcements')}>
          <HeaderIcon
            active={announcementState === 'announcements'}
            icon={
              <Megaphone
                style={{ height: '5em', width: '5em', margin: '0 auto' }}
              />
            }
            headerText='ANNOUNCEMENTS'
          />
        </Box>
        <Box mr={1} onClick={() => setAnnouncementState('pressReleases')}>
          <HeaderIcon
            active={announcementState === 'pressReleases'}
            icon={
              <Microphone
                style={{ height: '5em', width: '5em', margin: '0 auto' }}
              />
            }
            headerText='PRESS RELEASES'
          />
        </Box>
        <Box onClick={() => setAnnouncementState('events')}>
          <HeaderIcon
            active={announcementState === 'events'}
            icon={
              <CalendarIcon
                style={{ height: '5em', width: '5em', margin: '0 auto' }}
              />
            }
            headerText='EVENTS'
          />
        </Box>
        <Grid item md={12}>
          {announcementState === 'announcements' && (
            <>
              <Typography variant='h5'>Eid 2023</Typography>
              <Typography>EID MUBARAK to all of you!</Typography>
              <Typography>
                AlhamduliLlaah! The new moon of Shawwaal has been sighted at
                several places in North America. Insha'Allaah EID-UL-FITR will
                be on Friday, April 21, 2023.
              </Typography>
              <Typography>
                Please read the following important announcements regarding Eid:
              </Typography>
              <List sx={{ ml: 2 }}>
                <ListItem>
                  <Typography>
                    Eid Salat will be at 8:30 AM on Friday, April 21, 2023. Eid
                    Salat will be outside the Masjid in the Soccer field. Please
                    bring "Prayer Rug" with you and dress comfortably while
                    keeping in mind tomorrow's weather.
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography>
                    Please bring two breakfast dishes to share for "Potluck
                    Breakfast" after Eid Salat.
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography>
                    We will also distribute Ice-Creams to the kids after Eid.
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography>
                    Insha'Allaah, the "Eid Potluck Dinner" will be on Sunday,
                    April 23, 2023 at Carver Park, 322 W. Watauga Avenue,
                    Johnson City, TN from 4:00 pm to 8:00 pm. Dinner will be at
                    6:00pm. Please bring two dishes to share. We will have
                    several activities for the children which will include
                    inflatables, Balloons and Amusement Show. We will also have
                    a booth for family and portrait photos
                  </Typography>
                </ListItem>
              </List>
              <Typography>BarakAllaaho Feekom</Typography>
              <Typography color='gray'>
                Posted on April 20, 2023 by MCNET
              </Typography>
            </>
          )}
          {announcementState === 'pressReleases' && (
            <>
              <Typography variant='h5'>Islam Forbids Extremism</Typography>
              <Typography>
                Anyone who is familiar with Islamic teachings knows very well
                that Islam forbids the killing of innocents.
              </Typography>
              <Typography>Allah says:</Typography>
              <Typography>
                Whosoever kills an innocent human being, it shall be as if he
                has killed all mankind, and whosoever saves the life of one, it
                shall be as if he had saved the life of all mankind.
              </Typography>
              <Typography>-- Qur'an 5:32</Typography>
              <Typography color='gray'>
                Posted on April 2, 2018 by MCNET
              </Typography>
            </>
          )}
          {announcementState === 'events' && <Calendar />}
        </Grid>
      </Grid>
    </Box>
  );
};

export default AnnouncementsOverview;
