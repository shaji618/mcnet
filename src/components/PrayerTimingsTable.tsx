import { FC, useEffect, useState } from 'react';
import moment from 'moment';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { SxProps } from '@mui/material/styles';
import SvgIcon from '@mui/material/SvgIcon';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

import { ReactComponent as Spinner } from '@assets/svg-icons/spinner.svg';
import { APP_PRIMARY_COLOR, APP_SECONDARY_COLOR } from '@util/constants';

interface ApiResponseTimings {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Sunset: string;
  Maghrib: string;
  Isha: string;
  Imsak: string;
  Midnight: string;
  Firstthird: string;
  Lastthird: string;
}

const todaysDate = new Date();

const requestUrl = `https://api.aladhan.com/v1/timingsByCity/${moment(
  todaysDate
).format('DD-MM-YYYY')}?city=Johnson%20City&state=TN&country=US`;

const PrayerTimingsTable: FC<{
  boxSx?: SxProps;
  hideMonthlyLink?: boolean;
}> = ({ boxSx, hideMonthlyLink }) => {
  const [prayerData, setPrayerData] = useState<ApiResponseTimings>();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPrayerDataWithFetch();
  }, []);

  const getPrayerDataWithFetch = async (): Promise<void> => {
    const controller = new AbortController();

    // const timeoutId = setTimeout(() => controller.abort(), 5000);
    try {
      const response = await fetch(requestUrl, { signal: controller.signal });
      const jsonData = await response.json();
      setPrayerData(jsonData.data.timings);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const rows = [
    { name: 'Fajr', time: prayerData?.Fajr },
    { name: 'Sunrise', time: prayerData?.Sunrise },
    { name: 'Dhuhr', time: prayerData?.Dhuhr },
    { name: 'Asr', time: prayerData?.Asr },
    { name: 'Sunset', time: prayerData?.Sunset },
    { name: 'Maghrib', time: prayerData?.Maghrib },
    { name: 'Isha', time: prayerData?.Isha }
  ];

  const getBoldedRow = (): { name: string; time: string | undefined } => {
    const matchingRows = rows.filter((row) => {
      return moment(todaysDate, 'HH:mm').isBefore(moment(row.time, 'HH:mm'));
    });
    return matchingRows[0];
  };

  return (
    <Box sx={{ ...boxSx }} width='auto'>
      <Typography textAlign='center' mb={1}>
        Prayer timings for {moment(todaysDate).format('dddd, MMMM Do YYYY')}
      </Typography>
      <TableContainer
        sx={{
          borderRadius: '1em',
          boxShadow: `0 0 1em ${APP_PRIMARY_COLOR}`
        }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: APP_PRIMARY_COLOR }}>
              <TableCell align='center' sx={{ color: '#fff' }}>
                Salat
              </TableCell>
              <TableCell align='center' sx={{ color: '#fff' }}>
                Time
              </TableCell>
              <TableCell align='center' sx={{ color: '#fff' }}>
                Iqama
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow
                  key={Math.random()}
                  sx={{
                    '&:nth-of-type(even)': {
                      backgroundColor: APP_SECONDARY_COLOR
                    }
                  }}
                >
                  <TableCell
                    align='center'
                    sx={{
                      fontWeight: row === getBoldedRow() ? 700 : 300
                    }}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell
                    align='center'
                    sx={{
                      fontWeight: row === getBoldedRow() ? 700 : 300
                    }}
                  >
                    {loading ? (
                      <SvgIcon component={Spinner} />
                    ) : (
                      moment(row.time, 'HH:mm').format('h:mm a')
                    )}
                  </TableCell>
                  <TableCell
                    align='center'
                    sx={{
                      fontWeight: row === getBoldedRow() ? 700 : 300
                    }}
                  >
                    {loading ? (
                      <SvgIcon component={Spinner} />
                    ) : row.name === 'Sunrise' ||
                      row.name === 'Sunset' ? null : (
                      moment(row.time, 'HH:mm')
                        .add(15, 'minutes')
                        .format('h:mm a')
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
            {!hideMonthlyLink && (
              <TableRow>
                <TableCell colSpan={3} sx={{ bgcolor: '#ededed' }}>
                  <Typography my={-1}>
                    * Get a copy of monthly prayer timings{' '}
                    <Link
                      color={APP_SECONDARY_COLOR}
                      href={`https://www.islamicfinder.org/prayer-times/printmonthlyprayer/?timeInterval=month&month=${moment(
                        todaysDate
                      ).get('month')}&year=${moment(todaysDate).get(
                        'year'
                      )}&calendarType=Gregorian`}
                      rel='noreferrer'
                      sx={{ textDecoration: 'inherit' }}
                      target='_blank'
                    >
                      here
                    </Link>
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PrayerTimingsTable;
