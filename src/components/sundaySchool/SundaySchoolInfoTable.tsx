import './SundaySchool.css';

const SundaySchoolInfoTable = () => {
  return (
    <div className='sunday-school-info-container'>
        <table className='sunday-school-table'>
          <tbody>
            <tr>
              <td>Dues</td>
              <td>$100 each semester</td>
            </tr>
            <tr>
              <td>Instructor</td>
              <td>Ms. Valerie Frizzle 11am, Mr. Rogers 12pm </td>
            </tr>
            <tr>
              <td>Class times</td>
              <td>Every Sunday from 11am-12pm, and another class 12pm-1pm </td>
            </tr>
            <tr>
              <td>Charter Rules</td>
              <td><ul>Always respect your teacher and classmates</ul>
              <ul>Try your best</ul></td>
            </tr>
          </tbody>
        </table>
    </div>
  );
};

export default SundaySchoolInfoTable;
