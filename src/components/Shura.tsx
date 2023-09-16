import Grid from '@mui/material/Grid';
import sMalikHeadshot from '../assets/headshots/sMalikHeadshot.jpg';
import aWarsyHeadshot from '../assets/headshots/aWarsyHeadshot.png';
import HeadshotCard from '../layout/HeadshotCard';
import { ReactElement } from 'react';

const Shura = (): ReactElement => {
  return (
    <>
      <Grid justifyContent='center' container mt={2} spacing={2}>
        <HeadshotCard
          email='smalik@mcnethostname.org'
          img={sMalikHeadshot}
          name='Dr. Shahram Malik'
          title='President'
        />
        <HeadshotCard
          email='adwarsy@mcnethostname.org'
          img={aWarsyHeadshot}
          name='Dr. Adil Warsy'
          title='Vice President'
        />
        <HeadshotCard
          email='ssiddiqui@mcnethostname.org'
          name='Sajida Siddiqui'
          title='General Secretary'
        />
        <HeadshotCard
          email='meldeeb@mcnethostname.org'
          name='Maha Eldeeb'
          title='Treasury'
        />
        <HeadshotCard
          email='syavas@mcnethostname.org'
          name='Sinan Yavas'
          title='Member'
        />
        <HeadshotCard
          email='apopoola@mcnethostname.org'
          name='Abdullah Popoola'
          title='Book Keeper'
        />
      </Grid>
    </>
  );
};

export default Shura;
