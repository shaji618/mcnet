import { PropsWithChildren, ReactElement } from 'react';
import Typography from '@mui/material/Typography';

import { APP_TERTIARY_COLOR } from '@util/constants';

const BodySubHeader = (
  props: PropsWithChildren<{
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  }>
): ReactElement => {
  return (
    <Typography
      component='div'
      mb={2}
      sx={{
        textAlign: 'center',
        textDecoration: `underline ${APP_TERTIARY_COLOR} 1px`,
        textUnderlineOffset: '0.3em'
      }}
      variant={props.variant || 'h4'}
    >
      {props.children}
    </Typography>
  );
};

export default BodySubHeader;
