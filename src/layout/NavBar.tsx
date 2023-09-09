import { useState, MouseEvent } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { appPrimaryColor, appSecondaryColor } from '../util/constants';
import { ReactComponent as Logo } from '../../public/logo.svg';
import { NavLink } from 'react-router-dom';
import SvgIcon from '@mui/material/SvgIcon';
import DonateButton from '../components/DonateButton';
import SubAlertBar from './SubNavBar';

const pages = [
  'About',
  'Services',
  'Programs',
  'Sunday School',
  'Jummah Prayers',
  'Upcoming Projects',
  'Archive',
  'Contact'
];

const StyledMenuItem = (props: {
  isMobile?: boolean;
  onClick: () => void;
  pageTitle: string;
}) => {
  const { isMobile, onClick, pageTitle } = props;
  return (
    <NavLink to={`/${pageTitle.toLowerCase().replace(/\s/g, '-')}`}>
      {isMobile ? (
        <MenuItem key={pageTitle} onClick={onClick}>
          <Typography
            color={appPrimaryColor}
            textAlign='center'
            sx={{
              '&:hover': {
                color: appSecondaryColor
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
              color: appSecondaryColor
            }
          }}
        >
          {pageTitle}
        </Button>
      )}
    </NavLink>
  );
};

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar position='sticky' sx={{ backgroundColor: appPrimaryColor }}>
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
                <StyledMenuItem pageTitle={page} onClick={handleCloseNavMenu} />
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
