import { ReactElement, useEffect, useState } from 'react';
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
import { getCurrentDate } from '@util/helpers';

const requestUrl =
  'https://islamicfinder.us/index.php/api/prayer_times?country=US&zipcode=37604';

let numBolded = 0

const PrayerTimingsTable = (props: {
  boxSx?: SxProps;
  hideMonthlyLink?: boolean;
}): ReactElement => {
  const [prayerData, setPrayerData] = useState({
    results: { Fajr: '', Duha: '', Dhuhr: '', Asr: '', Maghrib: '', Isha: '' }
  });

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
      setPrayerData(jsonData);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const prayerRows = [
    { name: 'Fajr', timing: prayerData.results.Fajr.replace(/%/g, '') },
    { name: 'Sunrise', timing: prayerData.results.Duha.replace(/%/g, '') },
    { name: 'Dhuhr', timing: prayerData.results.Dhuhr.replace(/%/g, '') },
    { name: 'Asr', timing: prayerData.results.Asr.replace(/%/g, '') },
    { name: 'Maghrib', timing: prayerData.results.Maghrib.replace(/%/g, '') },
    { name: 'Isha', timing: prayerData.results.Isha.replace(/%/g, '') }
  ];

  const compareFormattedTimes = (inputTime: string): boolean => {
    const date = getCurrentDate();

    const currentFormattedTime = date.todaysDate.toTimeString().split(' ')[0];

    const formattedInputTime = moment(inputTime, 'h:mm a').format('HH:mm:ss');

    if (currentFormattedTime < formattedInputTime) {
      numBolded++
    }

    return currentFormattedTime < formattedInputTime;
  };

  return (
    <Box sx={{ ...props.boxSx }} width='100%'>
      <Typography textAlign='center' mb={1}>
        Prayer timings for {getCurrentDate().formatted}
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
              <TableCell sx={{ color: '#fff' }}>Salat</TableCell>
              <TableCell sx={{ color: '#fff' }}>Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {prayerRows.map((row) => {
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
                    sx={{
                      fontWeight: (compareFormattedTimes(row.timing) && 0<numBolded && numBolded<3) ? 700 : 300
                    }}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: (compareFormattedTimes(row.timing) && 0<numBolded && numBolded<3) ? 700 : 300
                    }}
                  >
                    {loading ? <SvgIcon component={Spinner} /> : row.timing}
                  </TableCell>
                </TableRow>
              );
            })}
            {!props.hideMonthlyLink && (
              <TableRow>
                <TableCell colSpan={2}>
                  <Typography my={-1}>
                    * Get a copy of monthly prayer timings{' '}
                    <Link
                      color={APP_SECONDARY_COLOR}
                      href={`https://www.islamicfinder.org/prayer-times/printmonthlyprayer/?timeInterval=month&month=${
                        getCurrentDate().month
                      }&year=${getCurrentDate().year}&calendarType=Gregorian`}
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
