import { FC } from 'react';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

import { PATHS } from '@util/constants';

const ChaplaincyContent: FC = () => {
  return (
    <Typography>
      If you need assistance with your spiritual needs, please contact the local
      hospital chaplain and ask for a Muslim chaplain. If they do not have a
      Muslim chaplain, then{' '}
      <Link to={PATHS.CONTACT_US_PAGE}>contact MCNET</Link> for assistance.
    </Typography>
  );
};

export default ChaplaincyContent;
