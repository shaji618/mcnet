import { FC } from 'react';
import Button from '@mui/material/Button';
import { SxProps } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';

export const HomeButton: FC<{ sx?: SxProps }> = ({ sx }) => {
  return (
    <Link to='/'>
      <Button sx={{ ...sx }} variant='outlined'>
        GO HOME
      </Button>
    </Link>
  );
};

export const BackButton: FC<{ sx?: SxProps }> = ({ sx }) => {
  const navigate = useNavigate();

  return (
    <>
      <Button
        onClick={(): void => navigate(-1)}
        sx={{ ...sx }}
        variant='outlined'
      >
        GO BACK
      </Button>
    </>
  );
};
