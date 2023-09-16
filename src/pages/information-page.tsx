import AnnouncementsArchiveTable from '../components/AnnouncementsArchiveTable';
import PressReleasesArchiveTable from '../components/PressReleasesArchiveTable';
import Page from '../layout/Page';
import { HashLink } from 'react-router-hash-link';
import {
  ANNOUNCEMENT_TYPES,
  APP_PRIMARY_COLOR,
  PATHS
} from '../util/constants';
import { ReactElement } from 'react';
import EventsCalendar from '../components/EventsCalendar';
import Button from '@mui/material/Button';

export const Information = (): ReactElement => {
  return (
    <Page
      headerBody={
        <>
          <Button sx={{ mr: 2 }} variant='outlined'>
            <HashLink
              smooth
              style={{ color: APP_PRIMARY_COLOR }}
              to={`${PATHS.INFORMATION_PAGE}#${ANNOUNCEMENT_TYPES.ANNOUNCEMENTS}`}
            >
              Click here to jump to see announcements
            </HashLink>
          </Button>
          <Button variant='outlined'>
            <HashLink
              smooth
              style={{ color: APP_PRIMARY_COLOR }}
              to={`${PATHS.INFORMATION_PAGE}#${ANNOUNCEMENT_TYPES.PRESS_RELEASES}`}
            >
              Click here to jump to see press releases
            </HashLink>
          </Button>
        </>
      }
      headerText='INFORMATION'
    >
      <EventsCalendar />
      <AnnouncementsArchiveTable boxSx={{ mb: 2 }} />
      <PressReleasesArchiveTable />
    </Page>
  );
};

export default Information;
