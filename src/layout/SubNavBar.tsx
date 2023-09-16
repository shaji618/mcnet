import Box from '@mui/material/Box';
import {
  APP_PRIMARY_COLOR,
  APP_SECONDARY_COLOR,
  APP_TERTIARY_COLOR
} from '../util/constants';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import { ReactElement } from 'react';

const SubAlertBar = (): ReactElement => {
  return (
    <Box sx={{ my: 1, display: { xs: 'none', sm: 'none', md: 'block' } }}>
      <Typography
        color={APP_PRIMARY_COLOR}
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
            borderColor: APP_TERTIARY_COLOR
          },
          my: 2
        }}
      >
        <Chip
          label='In the name of Allah, the Most Beneficent, the Most Merciful'
          sx={{ backgroundColor: APP_SECONDARY_COLOR }}
        />
      </Divider>
    </Box>
  );
};

export default SubAlertBar;
