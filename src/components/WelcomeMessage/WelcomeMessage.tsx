import './WelcomeMessage.css';
import PrayerTimingsTable from '../PrayerTimingsTable/PrayerTimingsTable';

const WelcomeMessage = () => {
  return (
    <div className='welcome-message-container'>
      <div className='header'>WELCOME TO MCNET</div>
      <div className='welcome-message-content'>
        <div className='welcome-message-text'>
          Welcome to the home page of Muslim Community of Northeast Tennessee
          (MCNET).
          <br />
          <br />
          MCNET is a religious nonprofit organization which primarily provides
          religious and community services for Muslims in Tri-Cities region.
          MCNET engages in dialogues with our brothers and sisters of other
          faiths in order to learn from each other and improve understanding.
          MCNET also participates in community activities to serve our community
          at large.
          <br />
          <br />
          Our mosque exists and strives to bring the community together. It
          serves as a learning center for people of all faiths to foster a
          better understanding of Islam. Our doors are always open for all to
          visit and get to know their Muslim neighbors.
          <br />
          <br />
          The mosque hosts communal prayers for the five daily prayers and the{' '}
          <a href=''>Friday sermons</a>. In addition community services such as
          matrimonial and funeral services are provided to local Muslims.
        </div>
        <div className='prayer-timings'>
          <PrayerTimingsTable />
        </div>
      </div>
    </div>
  );
};

export default WelcomeMessage;
