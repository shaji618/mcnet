import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { PATHS } from '../../util/constants';
import { ReactElement } from 'react';

const MatrimonialContent = (): ReactElement => {
  return (
    <>
      <Typography>
        Congratulations on your upcoming wedding! Your decision to marry is a
        spiritual covenant that is rooted in a commitment for one another. A
        wedding is always a joyous event, and as such we are much honored that
        you've chosen us to share the occasion!
      </Typography>
      <Typography>
        If you would like to be married at MCNET or request an MCNET Imam to
        officiate your wedding ceremony, please{' '}
        <Link to={PATHS.CONTACT_US_PAGE}>contact MCNET</Link> at (423)975-6681.
      </Typography>
    </>
  );
};

export default MatrimonialContent;
