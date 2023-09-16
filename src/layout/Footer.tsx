import Box from '@mui/material/Box';
import {
  APP_PRIMARY_COLOR,
  APP_SECONDARY_COLOR,
  APP_TERTIARY_COLOR
} from '../util/constants';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Link from '@mui/material/Link';
import { ReactElement } from 'react';

const footerTheme = createTheme({
  typography: {
    fontSize: 12,
    fontWeightRegular: 'light',
    allVariants: {
      color: '#fff'
    }
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: APP_SECONDARY_COLOR,
          textDecoration: 'inherit',
          '&:hover': {
            color: APP_TERTIARY_COLOR
          }
        }
      }
    }
  }
});

const Footer = (): ReactElement => {
  return (
    <ThemeProvider theme={footerTheme}>
      <Box
        bgcolor={APP_PRIMARY_COLOR}
        minHeight={'70px'}
        mt={2}
        overflow='auto'
      >
        <Box my={2} textAlign='center'>
          <Typography>
            MCNET is a not-for-profit organization recognized as{' '}
            <Link
              href='https://www.irs.gov/charities-non-profits/charitable-organizations/exemption-requirements-501c3-organizations'
              rel='noreferrer'
              target='_blank'
            >
              501(c)(3) tax-exempt
            </Link>{' '}
            under the IRS
          </Typography>
          <Typography>© 1991 - 2023 MCNET</Typography>
          <Typography>All Rights Reserved</Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Footer;
