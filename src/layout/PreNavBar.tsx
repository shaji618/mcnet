import { MouseEvent, ReactElement, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import { APP_PRIMARY_COLOR, BLANK_PAGE_PATHS } from '../util/constants';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from '@mui/material/Link';
import { useLocation } from 'react-router-dom';

function ResponsiveAppBar(): ReactElement | null {
  const urlPath = useLocation();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>): void => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (): void => {
    setAnchorElUser(null);
  };

  return BLANK_PAGE_PATHS.includes(urlPath.pathname) ? null : (
    <AppBar
      position='static'
      sx={{ backgroundColor: 'transparent', color: APP_PRIMARY_COLOR }}
    >
      <Container maxWidth='xl'>
        <Toolbar disableGutters variant='dense'>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <MenuItem
              color={APP_PRIMARY_COLOR}
              href='https://www.google.com/maps/place/Islamic+Center+of+Johnson+City/@36.2855078,-82.4076369,17z/data=!4m15!1m8!3m7!1s0x885a635ecc697bbb:0x583dc06d8c043738!2s3010+Antioch+Rd,+Johnson+City,+TN+37604!3b1!8m2!3d36.2855035!4d-82.405062!16s%2Fg%2F11hz60tsmq!3m5!1s0x885a63592cd88895:0xc08a52a825181ae4!8m2!3d36.2854108!4d-82.4051509!16s%2Fg%2F11b6v3k_ds?entry=ttu'
              rel='noreferrer'
              target='_blank'
            >
              <LocationOnOutlinedIcon sx={{ mr: 3 }} />
            </MenuItem>
            <MenuItem color={APP_PRIMARY_COLOR} href='tel:4239756681'>
              <PhoneOutlinedIcon />
            </MenuItem>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Box display='inline-flex' mr={2}>
              <LocationOnOutlinedIcon sx={{ mr: 1 }} />
              <Typography>3010 Antioch Rd, Johnson City ,TN 37604</Typography>
            </Box>
            <Box display='inline-flex'>
              <PhoneOutlinedIcon sx={{ mr: 1 }} />
              <Typography>423.975.6681</Typography>
            </Box>
          </Box>

          <Box sx={{ flexGrow: 0, mt: 0.75 }}>
            <Link
              href='https://www.facebook.com/groups/1719215861643598/'
              rel='noreferrer'
              target='_blank'
            >
              <FacebookIcon fontSize='large' sx={{ color: '#4267B2', mx: 1 }} />
            </Link>
            <Link
              href='https://twitter.com/mymcnet'
              rel='noreferrer'
              target='_blank'
            >
              <TwitterIcon fontSize='large' sx={{ color: '#1DA1F2' }} />
            </Link>
          </Box>

          <Box sx={{ flexGrow: 0, ml: 1 }}>
            <Tooltip title='Open settings'>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <AccountCircleOutlinedIcon fontSize='large' />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign='center'>Log in</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
