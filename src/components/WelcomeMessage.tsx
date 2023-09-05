import { Box, Grid, Typography } from '@mui/material';
import Image from 'mui-image';
import { Link } from 'react-router-dom';
import { appSecondaryColor } from '../util/constants';
import croppedRainbowMasjid from '../assets/croppedRainbowMasjid.png';

// TODO: fix the mobile layout here
const WelcomeText = () => {
  return (
    <>
      <Typography sx={{ mb: 2, mt: 1 }}>
        MCNET is a religious nonprofit organization which primarily provides
        religious and community services for Muslims in the Tri-Cities,
        Tennessee region. MCNET engages in dialogues with our brothers and
        sisters of other faiths in order to learn from each other and improve
        understanding. MCNET also participates in community activities to serve
        our community at large.
      </Typography>
      <Typography sx={{ mb: 2 }}>
        Our mosque exists and strives to bring the community together. It serves
        as a learning center for people of all faiths to foster a better
        understanding of Islam. Our doors are always open for all to visit and
        get to know their Muslim neighbors.
      </Typography>
      <Typography>
        The mosque hosts communal prayers for the five daily prayers and the{' '}
        <Link
          style={{ color: appSecondaryColor, textDecoration: 'inherit' }}
          to='/jummah-prayers'
        >
          Friday sermons
        </Link>
        . In addition community services such as matrimonial and funeral
        services are provided to local Muslims.
      </Typography>
    </>
  );
};

const WelcomeMessage = () => {
  return (
    <Box sx={{ flexGrow: 1, margin: '0 auto' }}>
      <Grid
        columns={{ xs: 4, sm: 8, md: 12 }}
        container
        spacing={2}
        sx={{ mt: 2 }}
      >
        <Grid item md={8} sm={8}>
          <Image
            src={croppedRainbowMasjid}
            style={{
              borderRadius: '1em'
            }}
            width='98%'
          />
          {/*uhh do we want <ImageCarousel /> */}
        </Grid>
        <Grid item md={4} sm={4}>
          <WelcomeText />
        </Grid>
      </Grid>
    </Box>
  );
};

export default WelcomeMessage;
