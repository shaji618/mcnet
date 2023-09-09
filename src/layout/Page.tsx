import { FC, ReactNode } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import {
  appPrimaryColor,
  appSecondaryColor,
  appTertiaryColor
} from '../util/constants';
import ConstructionIcon from '@mui/icons-material/Construction';

type Props = {
  children?: ReactNode;
  headerBody?: string | ReactNode;
  headerText?: string;
  isUnderConstruction?: boolean;
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
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: appPrimaryColor,
          outlineColor: appPrimaryColor,
          borderColor: appPrimaryColor,
          '&:hover': {
            backgroundColor: appSecondaryColor,
            color: appPrimaryColor,
            borderColor: appTertiaryColor
          }
        }
      }
    }
  }
});

const Page: FC<Props> = (props: Props) => {
  return (
    <ThemeProvider theme={pageTheme}>
      <Typography
        sx={{
          textAlign: 'center',
          textDecoration: `underline ${appTertiaryColor} 1px`,
          textUnderlineOffset: '0.3em'
        }}
        variant='h3'
      >
        {props.isUnderConstruction
          ? 'UNDER CONSTRUCTION'
          : props.headerText?.toUpperCase()}
      </Typography>
      <Typography component='div' mb={3} mt={3} textAlign='center'>
        {props.isUnderConstruction
          ? 'This page is under construction.'
          : props.headerBody}
      </Typography>
      <Box mb={3} mx={3}>
        {props.isUnderConstruction && (
          <Box textAlign='center'>
            <ConstructionIcon
              sx={{
                color: appPrimaryColor,
                height: '50%',
                width: '50%'
              }}
            />
          </Box>
        )}
        {props.children}
      </Box>
    </ThemeProvider>
  );
};
export default Page;