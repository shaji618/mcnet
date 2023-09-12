import Button from '@mui/material/Button';
import {
  appPrimaryColor,
  appSecondaryColor,
  appTertiaryColor
} from '../util/constants';
import { SxProps } from '@mui/material/styles';

// TODO: use https://www.npmjs.com/package/@paypal/react-paypal-js ?
const DonateButton = (props: { sx?: SxProps }) => {
  return (
    <Button
      variant='outlined'
      size='medium'
      sx={{
        color: '#fff',
        outlineColor: '#fff',
        borderColor: '#fff',
        '&:hover': {
          backgroundColor: appSecondaryColor,
          color: appPrimaryColor,
          borderColor: appTertiaryColor
        },
        ...props.sx
      }}
    >
      DONATE
    </Button>
  );
};

export default DonateButton;
