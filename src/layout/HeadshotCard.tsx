import { FC } from 'react';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PersonIcon from '@mui/icons-material/Person';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { APP_SECONDARY_COLOR } from '@util/constants';

type HeadshotCardProps = {
  dimensions?: { height: string | number; width: string | number };
  email: string;
  img?: string;
  name: string;
  title: string;
};

const HeadshotCard: FC<HeadshotCardProps> = ({
  dimensions,
  email,
  img,
  name,
  title
}) => {
  return (
    <Grid item md={3} mr={1}>
      <Card sx={dimensions || { height: 420, width: 300 }}>
        {img ? (
          <CardMedia sx={{ height: 300 }} image={img} />
        ) : (
          <CardMedia>
            <PersonIcon sx={{ height: 'auto', width: 'auto' }} />
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
            <WorkOutlineIcon sx={{ color: APP_SECONDARY_COLOR, mr: 1 }} />
            <Typography>{title}</Typography>
          </Stack>
          <Stack direction='row' overflow='visible'>
            <ContactMailIcon sx={{ color: APP_SECONDARY_COLOR, mr: 1 }} />
            <Link href={`mailto:${email}`}>
              <Typography>{email}</Typography>
            </Link>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default HeadshotCard;
