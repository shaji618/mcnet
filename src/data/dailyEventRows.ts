import { DailyEventsTableProps } from '@components/EventsCalendar';
import { getCurrentDate } from '@util/helpers';

export const dailyEventRows: DailyEventsTableProps[] = [
  {
    eventDate: getCurrentDate().todaysDate,
    eventTitle: 'Carnival 🎡🎪🎠',
    eventTime: '04:00 pm to 11:00 pm'
  }
];
