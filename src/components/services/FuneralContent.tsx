import { FC } from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MaterialLink from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

import {
  APP_SECONDARY_COLOR,
  APP_TERTIARY_COLOR,
  PATHS
} from '@util/constants';

const FuneralContent: FC = () => {
  return (
    <>
      <MaterialLink
        href='https://quran.com/50?startingVerse=43'
        rel='noreferrer'
        target='_blank'
      >
        <Typography
          color={APP_SECONDARY_COLOR}
          fontFamily='Noto Sans Arabic, sans-serif'
          fontSize='30px'
          fontWeight='900'
          textAlign='center'
        >
          إِنَّا نَحْنُ نُحْىِۦ وَنُمِيتُ وَإِلَيْنَا ٱلْمَصِيرُ
        </Typography>
      </MaterialLink>
      <Typography mt={1} textAlign='center'>
        Verily, it is We who give life and death, and to Us is the final goal.
      </Typography>
      <Divider
        sx={{
          '&::before, &::after': {
            borderColor: APP_TERTIARY_COLOR
          },
          my: 2
        }}
      >
        <Chip
          label='The Holy Qurân: Surah Qaf, Verse 43'
          sx={{ backgroundColor: APP_SECONDARY_COLOR }}
        />
      </Divider>
      <Typography mb={2}>Dear brother or sister,</Typography>
      <Typography>
        We are deeply sorry for the loss of your beloved family member. We ask
        Allah SWT to forgive his or her sins and grant him or her paradise
        insha'allah.
      </Typography>
      <Typography>
        To schedule and/ or accommodate a funeral, please{' '}
        <Link to={PATHS.CONTACT_US_PAGE}>contact MCNET</Link> or one of the
        following people:
      </Typography>
      <List sx={{ ml: 2 }}>
        <ListItem>
          <Typography>Br. Dr. Ahmad Atiya: (423) 426-3133</Typography>
        </ListItem>
        <ListItem>
          <Typography>Br. Dr. Shahram Malik: (423) 737-5478</Typography>
        </ListItem>
      </List>
      <Typography>
        MCNET can assist with the following funeral needs:
      </Typography>
      <List sx={{ ml: 2 }}>
        <ListItem>
          <Typography>
            Inform the community about the loss; ask for duas and Janazah prayer
            timing
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            Help coordinate or assist with washing of the deceased (family
            members are welcome to assist as well)
          </Typography>
        </ListItem>
        <ListItem>
          <Typography component='div'>
            Provide{' '}
            <Box fontStyle='italic' display='inline'>
              kafan
            </Box>{' '}
            (burial shroud), if needed
          </Typography>
        </ListItem>
        <ListItem>
          <Typography component='div'>
            Arrange the{' '}
            <Box fontStyle='italic' display='inline'>
              salaatul janazah
            </Box>{' '}
            (funeral prayer) at the masjid
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            Assist at the cemetery with the rituals or duaa and burial
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            Continue to follow-up after the funeral if the family needs any
            assistance
          </Typography>
        </ListItem>
      </List>
    </>
  );
};

export default FuneralContent;
