import { FC, ReactElement, ReactNode } from 'react';
import Typography from '@mui/material/Typography';

import { APP_TERTIARY_COLOR } from '@util/constants';

const BodySubHeader: FC<{
  children?: ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}> = ({ children, variant }): ReactElement => {
  return (
    <Typography
      component='div'
      mb={2}
      sx={{
        textAlign: 'center',
        textDecoration: `underline ${APP_TERTIARY_COLOR} 1px`,
        textUnderlineOffset: '0.3em'
      }}
      variant={variant || 'h4'}
    >
      {children}
    </Typography>
  );
};

export default BodySubHeader;
