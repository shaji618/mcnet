import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import sMalikHeadshot from '../assets/headshots/sMalikHeadshot.jpg';
import Link from '@mui/material/Link';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import aWarsyHeadshot from '../assets/headshots/aWarsyHeadshot.png';
import Stack from '@mui/material/Stack';
import { appSecondaryColor } from '../util/constants';
import PersonIcon from '@mui/icons-material/Person';

const MemberCard = (props: {
  email: string;
  img?: string;
  name: string;
  title: string;
}) => {
  const { email, img, name, title } = props;

  return (
    <Grid item md={3} mr={1}>
      <Card sx={{ height: 420, width: 300 }}>
        {img ? (
          <CardMedia sx={{ height: 300 }} image={img} />
        ) : (
          <CardMedia>
            <PersonIcon sx={{ height: 300, width: 300 }} />
            <Typography mt={-3.5} textAlign='center'>
              NO PHOTO
            </Typography>
          </CardMedia>
        )}
        <CardContent>
          <Typography gutterBottom mb={0} variant='h5'>
            {name}
          </Typography>
          <Stack direction='row'>
            <WorkOutlineIcon sx={{ color: appSecondaryColor, mr: 1 }} />
            <Typography>{title}</Typography>
          </Stack>
          <Stack direction='row' overflow='visible'>
            <ContactMailIcon sx={{ color: appSecondaryColor, mr: 1 }} />
            <Link href={`mailto:${email}`}>
              <Typography>{email}</Typography>
            </Link>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
};

const Shura = () => {
  return (
    <>
      <Grid justifyContent='center' container mt={2} spacing={2}>
        <MemberCard
          email='smalik@mcnethostname.org'
          img={sMalikHeadshot}
          name='Dr. Shahram Malik'
          title='President'
        />
        <MemberCard
          email='awarsy@mcnethostname.org'
          img={aWarsyHeadshot}
          name='Dr. Adil Warsy'
          title='Vice President'
        />
        <MemberCard
          email='ssiddiqui@mcnethostname.org'
          name='Sajida Siddiqui'
          title='General Secretary'
        />
        <MemberCard
          email='meldeeb@mcnethostname.org'
          name='Maha Eldeeb'
          title='Treasury'
        />
        <MemberCard
          email='syavas@mcnethostname.org'
          name='Sinan Yavas'
          title='Member'
        />
        <MemberCard
          email='apopoola@mcnethostname.org'
          name='Abdullah Popoola'
          title='Book Keeper'
        />
      </Grid>
    </>
  );
};

export default Shura;
