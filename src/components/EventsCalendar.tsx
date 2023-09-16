import { ReactElement, useState } from 'react';
import Calendar from 'react-calendar';
import '../style-sheets/react-calendar.css';
import BodySubHeader from '../layout/BodySubheader';
import { ANNOUNCEMENT_TYPES } from '../util/constants';
import Grid from '@mui/material/Grid';
import moment from 'moment';
import { getCurrentDate } from '../util/helpers';
import Typography from '@mui/material/Typography';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import '../style-sheets/SuperResponsiveTableStyle.css';
import Chip from '@mui/material/Chip';
import { dailyEventRows } from '../data/dailyEventRows';

type CalendarDateValuePiece = Date | null;

type CalendarDateValue =
  | CalendarDateValuePiece
  | [CalendarDateValuePiece, CalendarDateValuePiece];

export type DailyEventsTableProps = {
  eventDate: string;
  eventTime: string;
  eventTitle: string;
};

const Row = (props: DailyEventsTableProps): ReactElement => {
  const { eventDate, eventTime, eventTitle } = props;
  return (
    <Tr>
      <Td>
        <Typography>{eventTitle}</Typography>
      </Td>
      <Td>
        <Chip
          label={eventDate}
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
          label={eventTime}
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
          label='Mosque campus'
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
  );
};

export const DailyEventsTable = (props: {
  rows: DailyEventsTableProps[];
}): ReactElement => {
  return (
    <>
      <Table>
        <Thead>
          <Tr>
            <Th>Event</Th>
            <Th>Date</Th>
            <Th>Time</Th>
            <Th>Location</Th>
          </Tr>
        </Thead>
        <Tbody>
          {props.rows.map((row) => {
            return (
              <Row
                eventDate={row.eventDate}
                eventTime={row.eventTime}
                eventTitle={row.eventTitle}
              />
            );
          })}
        </Tbody>
      </Table>
    </>
  );
};

const EventsCalendar = (): ReactElement => {
  const todaysDate = getCurrentDate().todaysDate;
  const [calendarDate, setCalendarDate] =
    useState<CalendarDateValue>(todaysDate);

  /* eslint-disable @typescript-eslint/no-unused-vars */
  // @ts-ignore
  const hack = moment(calendarDate as Date).isSame(
    moment(todaysDate.setHours(0, 0, 0, 0))
  );
  /* eslint-disable @typescript-eslint/no-unused-vars */

  return (
    <>
      <BodySubHeader>MCNET EVENTS</BodySubHeader>
      <Grid
        container
        id={ANNOUNCEMENT_TYPES.EVENTS}
        justifyContent='center'
        mb={2}
        md={12}
        spacing={2}
      >
        <Grid item md={4} xs={12}>
          <Calendar onChange={setCalendarDate} value={calendarDate} />
        </Grid>
        <Grid item md={8} xs={12}>
          {moment(calendarDate as Date).isSame(
            moment(todaysDate.setHours(0, 0, 0, 0))
          ) && <DailyEventsTable rows={dailyEventRows} />}
        </Grid>
      </Grid>
    </>
  );
};

export default EventsCalendar;