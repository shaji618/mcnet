import { Box, Chip, Divider, Typography } from '@mui/material';
import {
  appPrimaryColor,
  appSecondaryColor,
  appTertiaryColor
} from '../util/constants';

const SubAlertBar = () => {
  return (
    <Box sx={{ my: 1, display: { xs: 'none', sm: 'none', md: 'block' } }}>
      <Typography
        color={appPrimaryColor}
        fontFamily='Noto Sans Arabic, sans-serif'
        fontSize='30px'
        fontWeight='900'
        textAlign='center'
      >
        بسم الله الرحمن الرحيم
      </Typography>
      <Divider
        sx={{
          '&::before, &::after': {
            borderColor: appTertiaryColor
          },
          my: 2
        }}
      >
        <Chip
          label='In the name of Allah, the Most Beneficent, the Most Merciful'
          sx={{ backgroundColor: appSecondaryColor }}
        />
      </Divider>
    </Box>
  );
};

export default SubAlertBar;
