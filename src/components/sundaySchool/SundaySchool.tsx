import SundaySchoolInfoTable from './SundaySchoolInfoTable';
import './SundaySchool.css';

const SundaySchoolInfo = () => {
  return (
    <div className='sunday-school-info-container'>
      <div className='header'>MCNET Sunday School Program</div>
      <div className='welcome-message-content'>
        <div className='welcome-message-text'>
        Let's learn Arabic, Islamic studies, and Quran at Sunday School
          (MCNET).
          <br />
          <br />
          MCNET is a religious nonprofit organization which primarily provides
          religious and community services for Muslims in Tri-Cities region.
          Our Sunday School program is one such program we provide.
        </div>
        <div className='sunday-school-info-table'>
          <SundaySchoolInfoTable />
        </div>
      </div>
    </div>
  );
};

export default SundaySchoolInfo;
