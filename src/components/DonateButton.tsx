import Button from '@mui/material/Button';
import {
  appPrimaryColor,
  appSecondaryColor,
  appTertiaryColor
} from '../util/constants';

// TODO: use https://www.npmjs.com/package/@paypal/react-paypal-js ?
const DonateButton = () => {
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
        }
      }}
    >
      DONATE
    </Button>
  );
};

export default DonateButton;
