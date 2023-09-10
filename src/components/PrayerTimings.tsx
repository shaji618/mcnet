import { useEffect, useState } from 'react';
import { appPrimaryColor, appSecondaryColor } from '../util/constants';
import { ReactComponent as Spinner } from '../assets/svg-icons/spinner.svg';
import moment from 'moment';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import SvgIcon from '@mui/material/SvgIcon';
import Link from '@mui/material/Link';

const requestUrl =
  'http://islamicfinder.us/index.php/api/prayer_times?country=US&zipcode=37604';

const PrayerTimings = () => {
  const [prayerData, setPrayerData] = useState({
    results: { Fajr: '', Duha: '', Dhuhr: '', Asr: '', Maghrib: '', Isha: '' }
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPrayerDataWithFetch();
  }, []);

  const getPrayerDataWithFetch = async () => {
    const controller = new AbortController();
    // TODO: create a GH issue to make this work
    // @ts-ignore
    const timeoutId = setTimeout(() => controller.abort(), 5000);
    try {
      const response = await fetch(requestUrl, { signal: controller.signal });

      const jsonData = await response.json();
      setPrayerData(jsonData);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const getCurrentDate = () => {
    const todaysDate = new Date();
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };

    return {
      formatted: todaysDate.toLocaleDateString(
        'en-US',
        // @ts-ignore
        options
      ),
      month: todaysDate.getMonth(),
      year: todaysDate.getFullYear()
    };
  };

  const prayerRows = [
    { name: 'Fajr', timing: prayerData.results.Fajr.replace(/%/g, '') },
    { name: 'Sunrise', timing: prayerData.results.Duha.replace(/%/g, '') },
    { name: 'Dhuhr', timing: prayerData.results.Dhuhr.replace(/%/g, '') },
    { name: 'Asr', timing: prayerData.results.Asr.replace(/%/g, '') },
    { name: 'Maghrib', timing: prayerData.results.Maghrib.replace(/%/g, '') },
    { name: 'Isha', timing: prayerData.results.Isha.replace(/%/g, '') }
  ];

  const compareFormattedTimes = (inputTime: string) => {
    const date = new Date();

    const currentFormattedTime = date.toTimeString().split(' ')[0];

    const formattedInputTime = moment(inputTime, 'h:mm a').format('HH:mm:ss');

    return currentFormattedTime > formattedInputTime;
  };

  return (
    <Box width='100%'>
      <Typography textAlign='center' mb={1}>
        Prayer timings for {getCurrentDate().formatted}
      </Typography>
      <TableContainer
        sx={{
          borderRadius: '1em',
          boxShadow: `0 0 1em ${appPrimaryColor}`
        }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: appPrimaryColor }}>
              <TableCell sx={{ color: '#fff' }}>Salat</TableCell>
              <TableCell sx={{ color: '#fff' }}>Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {prayerRows.map((row) => {
              return (
                <TableRow
                  sx={{
                    '&:nth-of-type(even)': {
                      backgroundColor: appSecondaryColor
                    }
                  }}
                >
                  <TableCell
                    sx={{
                      fontWeight: compareFormattedTimes(row.timing) ? 300 : 700
                    }}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: compareFormattedTimes(row.timing) ? 300 : 700
                    }}
                  >
                    {loading ? <SvgIcon component={Spinner} /> : row.timing}
                  </TableCell>
                </TableRow>
              );
            })}
            <TableRow>
              <TableCell colSpan={2}>
                <Typography my={-1}>
                  * Get a copy of monthly prayer timings{' '}
                  <Link
                    href={`https://www.islamicfinder.org/prayer-times/printmonthlyprayer/?timeInterval=month&month=${
                      getCurrentDate().month
                    }&year=${getCurrentDate().year}&calendarType=Gregorian`}
                    rel='noreferrer'
                    target='_blank'
                  >
                    here
                  </Link>
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PrayerTimings;
