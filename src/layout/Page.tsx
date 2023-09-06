import { FC, PropsWithChildren, ReactNode } from 'react';
import { Box } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { appPrimaryColor, appSecondaryColor } from '../util/constants';

type Props = {
  children?: ReactNode;
};

const pageTheme = createTheme({
  typography: {
    fontWeightRegular: 100,
    allVariants: {
      color: appPrimaryColor
    }
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: appPrimaryColor
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
          color: appSecondaryColor
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: appSecondaryColor,
          textDecoration: 'inherit',
          '&:hover': {
            color: 'white',
            textShadow: `-0.25px -0.25px 0 #224a23, 0.25px -0.25px 0 ${appPrimaryColor}, -0.25px 0.25px 0 ${appPrimaryColor}, 0.25px 0.25px 0 ${appPrimaryColor}`
          }
        }
      }
    }
  }
});

const Page: FC<PropsWithChildren> = (props: Props) => {
  return (
    <ThemeProvider theme={pageTheme}>
      <Box mb={3} mx={3}>{props.children}</Box>
    </ThemeProvider>
  );
};
export default Page;
