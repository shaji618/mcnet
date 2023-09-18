import { ReactElement } from 'react';
import Button from '@mui/material/Button';
import { SxProps } from '@mui/material/styles';

import {
  APP_PRIMARY_COLOR,
  APP_SECONDARY_COLOR,
  APP_TERTIARY_COLOR
} from '@util/constants';

// TODO: use https://www.npmjs.com/package/@paypal/react-paypal-js ?
const DonateButton = (props: { sx?: SxProps }): ReactElement => {
  return (
    <Button
      variant='outlined'
      size='medium'
      sx={{
        color: '#fff',
        outlineColor: '#fff',
        borderColor: '#fff',
        '&:hover': {
          backgroundColor: APP_SECONDARY_COLOR,
          color: APP_PRIMARY_COLOR,
          borderColor: APP_TERTIARY_COLOR
        },
        ...props.sx
      }}
    >
      DONATE
    </Button>
  );
};

export default DonateButton;
