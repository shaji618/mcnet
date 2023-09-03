import sundaySchoolImg from'../assets/sundaySchool.jpg';

export const SundaySchool = () => {
  return (
    <div>
      <body>
        <div id="SundaySchoolSummary">
          <h1 id="SundaySchoolHeader">Sunday School</h1>
          <img 
          id="SundaySchoolImage" 
          src={sundaySchoolImg} 
          height={350}
          width={700}
          />
          <p>Let's learn Arabic, Islamic studies, and Quran at Sunday School</p>
        </div>
        <div id="TeacherInfoSection">
          <h2 id="TeacherInfoHeader">Teacher Information</h2>
          <img id="TeacherImage" src="teacherimage.jpg"/>
          <p id="TeacherBio">Ms. Valerie Frizzle is a phenomenal teacher that has been working within the program for 20 years</p>
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
        <div id="CostSection">
          <h2 id="CostHeader">Dues/Cost</h2>
          <p>Tuition for the program is: $100 </p>
        </div>
        <div id="TimingsSection">
          <h2 id="TimingsHeader">Timings</h2>
          <p>Classes are held on Sundays from 11:30-12</p>
        </div>
    </body>
  </div>
  );
};
