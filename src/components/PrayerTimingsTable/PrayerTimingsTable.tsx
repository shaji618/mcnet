import { useState, useEffect } from 'react';
import { ReactComponent as Spinner } from '../../assets/spinner.svg';
import './PrayerTimingsTable.css';

const requestUrl =
  'http://islamicfinder.us/index.php/api/prayer_times?country=US&zipcode=37604';

function PrayerTimingsTable() {
  const [prayerData, setPrayerData] = useState({
    results: { Fajr: '', Dhuhr: '', Asr: '', Maghrib: '', Isha: '' }
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPrayerDataWithFetch();
  }, []);

  const getPrayerDataWithFetch = async () => {
    const controller = new AbortController();
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

  const getCurrentDateFormatted = () => {
    const todaysDate = new Date();
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };

    return todaysDate.toLocaleDateString(
      'en-US',
      // @ts-ignore
      options
    );
  };

  return (
    <div className='prayer-timings-container'>
      <div className='prayer-timings-header'>
        Prayer timings for {getCurrentDateFormatted()}
      </div>
      {loading ? (
        <div style={{ height: '250px', width: '250px', margin: '0 auto' }}>
          <Spinner />
        </div>
      ) : (
        <table className='prayer-timings-table'>
          <thead>
            <tr style={{ textAlign: 'left' }}>
              <th>Salat</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Fajr</td>
              <td>{prayerData.results.Fajr.replace(/%/g, '')}</td>
            </tr>
            <tr>
              <td>Sunrise</td>
              <td>{prayerData.results.Fajr.replace(/%/g, '')}</td>
            </tr>
            <tr>
              <td>Dhuhr</td>
              <td>{prayerData.results.Dhuhr.replace(/%/g, '')}</td>
            </tr>
            <tr>
              <td>Asr</td>
              <td>{prayerData.results.Asr.replace(/%/g, '')}</td>
            </tr>
            <tr>
              <td>Maghrib</td>
              <td>{prayerData.results.Maghrib.replace(/%/g, '')}</td>
            </tr>
            <tr>
              <td>Isha</td>
              <td>{prayerData.results.Isha.replace(/\%/g, '')}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default PrayerTimingsTable;
