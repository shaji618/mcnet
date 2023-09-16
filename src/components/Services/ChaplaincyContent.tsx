import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { PATHS } from '../../util/constants';
import { ReactElement } from 'react';

const ChaplaincyContent = (): ReactElement => {
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
