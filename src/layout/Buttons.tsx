import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { SxProps } from '@mui/material/styles';
import { ReactElement } from 'react';

export const HomeButton = (props: { sx?: SxProps }): ReactElement => {
  return (
    <Link to='/'>
      <Button sx={{ ...props.sx }} variant='outlined'>
        GO HOME
      </Button>
    </Link>
  );
};

export const BackButton = (props: { sx?: SxProps }): ReactElement => {
  const navigate = useNavigate();

  return (
    <>
      <Button
        onClick={(): void => navigate(-1)}
        sx={{ ...props.sx }}
        variant='outlined'
      >
        GO BACK
      </Button>
    </>
  );
};
