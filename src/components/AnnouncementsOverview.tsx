import { ReactComponent as Megaphone } from '../assets/svg-icons/loudspeaker.svg';
import { ReactComponent as Microphone } from '../assets/svg-icons/microphone.svg';
import { ReactComponent as CalendarIcon } from '../assets/svg-icons/calendar.svg';
import { ReactElement, ReactNode, useState } from 'react';
import {
  ANNOUNCEMENT_TYPES,
  APP_TERTIARY_COLOR,
  PATHS
} from '../util/constants';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { HashLink } from 'react-router-hash-link';
import { DailyEventsTable } from './EventsCalendar';
import { dailyEventRows } from '../data/dailyEventRows';

export type Announcements =
  (typeof ANNOUNCEMENT_TYPES)[keyof typeof ANNOUNCEMENT_TYPES];

const HeaderIcon = (props: {
  active?: boolean;
  icon: ReactNode;
  headerText: string;
}): ReactElement => {
  const { active, icon, headerText } = props;
  return (
    <Grid item md={4}>
      <Box>
        <Avatar
          className={active ? 'active' : ''}
          sx={{
            border: '1px solid #000',
            height: '9em',
            marginBottom: '1em',
            padding: '0 1em  0 1em',
            width: '9em',
            '&:hover': {
              backgroundColor: APP_TERTIARY_COLOR,
              cursor: 'pointer'
            },
            '&.active': {
              backgroundColor: APP_TERTIARY_COLOR
            }
          }}
          variant='rounded'
        >
          <Stack direction='column'>
            {icon}
            <Typography textAlign='center'>
              {headerText.toUpperCase()}
            </Typography>
          </Stack>
        </Avatar>
      </Box>
    </Grid>
  );
};

const AnnouncementsOverview = (): ReactElement => {
  const [announcementState, setAnnouncementState] = useState<Announcements>(
    ANNOUNCEMENT_TYPES.ANNOUNCEMENTS
  );

  return (
    <Box width='100%' height='750px'>
      <Typography mb={1} textAlign='center'>
        Communications
      </Typography>
      <Grid container justifyContent='center'>
        <Box
          mr={1}
          onClick={(): void =>
            setAnnouncementState(ANNOUNCEMENT_TYPES.ANNOUNCEMENTS)
          }
        >
          <HeaderIcon
            active={announcementState === ANNOUNCEMENT_TYPES.ANNOUNCEMENTS}
            icon={
              <Megaphone
                style={{ height: '5em', width: '5em', margin: '0 auto' }}
              />
            }
            headerText='ANNOUNCEMENTS'
          />
        </Box>
        <Box
          mr={1}
          onClick={(): void =>
            setAnnouncementState(ANNOUNCEMENT_TYPES.PRESS_RELEASES)
          }
        >
          <HeaderIcon
            active={announcementState === ANNOUNCEMENT_TYPES.PRESS_RELEASES}
            icon={
              <Microphone
                style={{ height: '5em', width: '5em', margin: '0 auto' }}
              />
            }
            headerText='PRESS RELEASES'
          />
        </Box>
        <Box onClick={(): void => setAnnouncementState('events')}>
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
          {announcementState === ANNOUNCEMENT_TYPES.ANNOUNCEMENTS && (
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
              <Typography color='gray' mb={2}>
                Posted on April 20, 2023 by MCNET
              </Typography>
              <HashLink
                smooth
                to={`${PATHS.INFORMATION_PAGE}#${ANNOUNCEMENT_TYPES.ANNOUNCEMENTS}`}
              >
                To see previous announcements, click here.
              </HashLink>
            </>
          )}
          {announcementState === ANNOUNCEMENT_TYPES.PRESS_RELEASES && (
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
              <Typography color='gray' mb={2}>
                Posted on April 2, 2018 by MCNET
              </Typography>
              <HashLink
                smooth
                to={`${PATHS.INFORMATION_PAGE}#${ANNOUNCEMENT_TYPES.PRESS_RELEASES}`}
              >
                To see previous press releases, click here.
              </HashLink>
            </>
          )}
          {announcementState === 'events' && (
            <>
              <DailyEventsTable rows={dailyEventRows} />
              <HashLink
                smooth
                to={`${PATHS.INFORMATION_PAGE}#${ANNOUNCEMENT_TYPES.EVENTS}`}
              >
                To see a full calendar of events, click here.
              </HashLink>
            </>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default AnnouncementsOverview;
