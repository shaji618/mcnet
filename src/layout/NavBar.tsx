import { FC, useState, MouseEvent } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SvgIcon from '@mui/material/SvgIcon';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink, useLocation } from 'react-router-dom';

import { ReactComponent as Logo } from '@assets/svg-icons/logo.svg';
import DonateButton from '@components/DonateButton';
import SubAlertBar from '@layout/SubNavBar';
import {
  APP_PRIMARY_COLOR,
  APP_SECONDARY_COLOR,
  BLANK_PAGE_PATHS
} from '@util/constants';

type StyledMenuItemProps = {
  isMobile?: boolean;
  onClick: () => void;
  pageTitle: string;
};

const pages: string[] = [
  'Information',
  'About Us',
  'Services',
  'Programs',
  'Sunday School',
  'Jummah Prayers',
  'Upcoming Projects',
  'Contact Us'
];

const StyledMenuItem: FC<StyledMenuItemProps> = ({
  isMobile,
  onClick,
  pageTitle
}) => {
  return (
    <NavLink to={`/${pageTitle.toLowerCase().replace(/\s/g, '-')}`}>
      {isMobile ? (
        <MenuItem key={pageTitle} onClick={onClick}>
          <Typography
            color={APP_PRIMARY_COLOR}
            textAlign='center'
            sx={{
              '&:hover': {
                color: APP_SECONDARY_COLOR
              }
            }}
          >
            {pageTitle}
          </Typography>
        </MenuItem>
      ) : (
        <Button
          key={pageTitle}
          onClick={onClick}
          sx={{
            my: 2,
            color: 'white',
            display: 'block',
            '&:hover': {
              color: APP_SECONDARY_COLOR
            }
          }}
        >
          {pageTitle}
        </Button>
      )}
    </NavLink>
  );
};

const NavBar: FC = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const urlPath = useLocation();

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>): void => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (): void => {
    setAnchorElNav(null);
  };

  return BLANK_PAGE_PATHS.includes(urlPath.pathname) ? null : (
    <>
      <AppBar position='sticky' sx={{ backgroundColor: APP_PRIMARY_COLOR }}>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <SvgIcon
              component={Logo}
              sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
              viewBox='0 0 347.299 347.299'
            />
            <Typography
              variant='h6'
              noWrap
              component='a'
              href='/'
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none'
              }}
            >
              MCNET
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size='large'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
                color='inherit'
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left'
                }}
                open={!!anchorElNav}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' }
                }}
              >
                {pages.map((page) => (
                  <StyledMenuItem
                    isMobile
                    key={Math.random()}
                    pageTitle={page}
                    onClick={handleCloseNavMenu}
                  />
                ))}
              </Menu>
            </Box>
            <SvgIcon
              component={Logo}
              height='40px'
              sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
              viewBox='0 0 347.299 347.299'
              width='40px'
            />
            <Typography
              variant='h5'
              noWrap
              component='a'
              href='/'
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none'
              }}
            >
              MCNET
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <StyledMenuItem
                  key={Math.random()}
                  pageTitle={page}
                  onClick={handleCloseNavMenu}
                />
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <DonateButton />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <SubAlertBar />
    </>
  );
};
export default NavBar;
