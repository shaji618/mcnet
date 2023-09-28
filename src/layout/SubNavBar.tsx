import { FC } from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import {
  APP_PRIMARY_COLOR,
  APP_SECONDARY_COLOR,
  APP_TERTIARY_COLOR
} from '@util/constants';

const SubAlertBar: FC = () => {
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
