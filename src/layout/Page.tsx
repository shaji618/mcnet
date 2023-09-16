import { FC, ReactNode } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, SxProps, ThemeProvider } from '@mui/material/styles';
import {
  APP_PRIMARY_COLOR,
  APP_SECONDARY_COLOR,
  APP_TERTIARY_COLOR
} from '../util/constants';
import BodySubHeader from './BodySubheader';

type Props = {
  children?: ReactNode;
  childrenBoxSx?: SxProps;
  headerBody?: string | ReactNode;
  headerText?: string;
};

const pageTheme = createTheme({
  typography: {
    fontWeightRegular: 100,
    allVariants: {
      color: APP_PRIMARY_COLOR
    }
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: APP_PRIMARY_COLOR
        }
      }
    },
    MuiList: {
      styleOverrides: {
        root: {
          listStyleType: 'disc',
          pl: 2
        }
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          display: 'list-item',
          color: APP_SECONDARY_COLOR
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: APP_SECONDARY_COLOR,
          textDecoration: 'inherit',
          '&:hover': {
            color: 'white',
            textShadow: `-0.25px -0.25px 0 #224a23, 0.25px -0.25px 0 ${APP_PRIMARY_COLOR}, -0.25px 0.25px 0 ${APP_PRIMARY_COLOR}, 0.25px 0.25px 0 ${APP_PRIMARY_COLOR}`
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: APP_PRIMARY_COLOR,
          outlineColor: APP_PRIMARY_COLOR,
          borderColor: APP_PRIMARY_COLOR,
          '&:hover': {
            backgroundColor: APP_SECONDARY_COLOR,
            color: APP_PRIMARY_COLOR,
            borderColor: APP_TERTIARY_COLOR
          }
        }
      }
    }
  }
});

const Page: FC<Props> = (props: Props) => {
  const { children, childrenBoxSx, headerBody, headerText } = props;
  return (
    <ThemeProvider theme={pageTheme}>
      <BodySubHeader variant='h3'>{headerText?.toUpperCase()}</BodySubHeader>
      <Typography component='div' mb={3} mt={3} textAlign='center'>
        {headerBody}
      </Typography>
      <Box mb={3} mx={3} sx={{ ...childrenBoxSx }}>
        {children}
      </Box>
    </ThemeProvider>
  );
};
export default Page;
