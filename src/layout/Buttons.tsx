import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { SxProps } from '@mui/material/styles';

export const HomeButton = (props: { sx?: SxProps }) => {
  return (
    <Link to='/'>
      <Button sx={{ ...props.sx }} variant='outlined'>
        GO HOME
      </Button>
    </Link>
  );
};

export const BackButton = (props: { sx?: SxProps }) => {
  const navigate = useNavigate();

  return (
    <>
      <Button
        onClick={() => navigate(-1)}
        sx={{ ...props.sx }}
        variant='outlined'
      >
        GO BACK
      </Button>
    </>
  );
};
