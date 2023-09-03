import Friz from '../assets/placeholder/Mrs_Frizzle.webp';
import Rogers from '../assets/placeholder/mr_rogers.jpg'
import SundaySchoolInfo from '../components/sundaySchool/SundaySchool';
import sundaySchoolImg from '../assets/sundaySchool.jpg'

export const SundaySchool = () => {
  return (
    <div>
      <body>
      <img 
      id="SundaySchoolImage" 
      src={sundaySchoolImg} 
      height={350}
      width={700}
      />
      <SundaySchoolInfo/>
        <div id="TeacherInfoSection">
          <h2 id="TeacherInfoHeader">Teacher Information</h2>
          <h3>Ms Frizzle</h3>
          <img id="TeacherImage" src={Friz}/>
          <p id="TeacherBio">Ms. Valerie Frizzle is a phenomenal teacher that has been working within the program for 20 years</p>
          <h3>Mr Rogers</h3>
          <img id="TeacherImage" src={Rogers}/>
          <p id="TeacherBio">Mr. Rogers has been teaching with MCNET for 5 years</p>
        </div>
        <div id="CharterRulesSection">
          <h2 id="CharterRulesHeader">Charter Rules</h2>
          <p>
            The rules of Sunday School are:
            <ul>
              <li>Respect your teacher</li>
              <li>Some other charter rules</li>
            </ul>
          </p>
        </div>
    </body>
  </div>
  );
};
