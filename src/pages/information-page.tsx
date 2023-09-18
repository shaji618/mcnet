import { ReactElement } from 'react';
import Button from '@mui/material/Button';
import { HashLink } from 'react-router-hash-link';

import AnnouncementsArchiveTable from '@components/AnnouncementsArchiveTable';
import EventsCalendar from '@components/EventsCalendar';
import PressReleasesArchiveTable from '@components/PressReleasesArchiveTable';
import Page from '@layout/Page';
import { ANNOUNCEMENT_TYPES, APP_PRIMARY_COLOR, PATHS } from '@util/constants';

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
