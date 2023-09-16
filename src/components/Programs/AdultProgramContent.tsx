import Typography from '@mui/material/Typography';
import BodySubHeader from '../../layout/BodySubheader';
import { ReactElement } from 'react';

const AdultProgramContent = (): ReactElement => {
  return (
    <>
      <BodySubHeader>MUSLIM EDUCATION AND SUPPORT GROUP CLASS</BodySubHeader>
      <Typography>
        The Muslim Education and Support Group meets every Sunday evening from
        6:30 - 8:00pm and is focused on educating members of our community on
        the foundations of Islam, specifically targeting topics most relevant to
        convert Muslims. This class is open to both men and women and features a
        Q&A session at the end of each class.
      </Typography>
    </>
  );
};

export default AdultProgramContent;
