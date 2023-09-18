import { MouseEvent, ReactElement, ReactNode, useState } from 'react';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ReactCardFlip from 'react-card-flip';

import { ReactComponent as Logo } from '@assets/svg-icons/logo.svg';
import { APP_SECONDARY_COLOR, APP_TERTIARY_COLOR } from '@util/constants';

const HomePageFlipCard = (props: {
  backContent: ReactNode;
  frontIcon: ReactNode;
  title: string;
}): ReactElement => {
  const { backContent, frontIcon, title } = props;
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (event: MouseEvent<HTMLElement>): void => {
    event.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <Box sx={{ cursor: 'pointer' }}>
      <ReactCardFlip infinite isFlipped={isFlipped}>
        <Box sx={{ height: 200, width: 200 }} onClick={handleClick}>
          {frontIcon}
          <SwapHorizIcon
            sx={{
              color: APP_SECONDARY_COLOR,
              position: 'absolute',
              right: '20px',
              textAlign: 'center',
              top: '100%'
            }}
          />
          <Box
            sx={{
              border: `1px solid ${APP_TERTIARY_COLOR}`,
              backgroundColor: APP_SECONDARY_COLOR,
              position: 'absolute',
              top: '50%',
              textAlign: 'center',
              width: '100%'
            }}
          >
            <Typography fontSize={20}>{title.toUpperCase()}</Typography>
          </Box>
        </Box>
        <Box
          alignItems='center'
          display='flex'
          justifyContent='center'
          onClick={handleClick}
          sx={{ height: 200, width: 200 }}
          textAlign='center'
        >
          <Stack alignItems='center' display='flex' spacing={2}>
            {backContent}
          </Stack>
          <SwapHorizIcon
            sx={{
              color: APP_SECONDARY_COLOR,
              position: 'absolute',
              right: '20px',
              textAlign: 'center',
              top: '100%'
            }}
          />
        </Box>
      </ReactCardFlip>
    </Box>
  );
};

const HomePageFlipCards = (): ReactElement => {
  return (
    <Grid container justifyContent='center' spacing={12}>
      <Grid item>
        <HomePageFlipCard
          backContent={
            <>
              <Typography>DAILY PRAYERS</Typography>
              <Typography>JUMMAH PRAYERS</Typography>
              <Typography>TARAWEEH</Typography>
              <Typography>QUR'AN STUDY</Typography>
            </>
          }
          frontIcon={
            <Logo
              style={{
                display: 'flex',
                height: '90%',
                justifyContent: 'center',
                width: '90%'
              }}
            />
          }
          title='FAITH'
        />
      </Grid>
      <Grid item>
        <HomePageFlipCard
          backContent={
            <>
              <Typography>LOREM ISPUM</Typography>
              <Typography>DOLOR SIT</Typography>
              <Typography>AMET CONSECTETUR</Typography>
              <Typography>ADIPISCING ELIT</Typography>
            </>
          }
          frontIcon={
            <Diversity3Icon
              sx={{
                display: 'flex',
                height: '100%',
                justifyContent: 'center',
                width: '100%'
              }}
            />
          }
          title='COMMUNITY'
        />
      </Grid>
      <Grid item>
        <HomePageFlipCard
          backContent={
            <>
              <Typography>SUNDAY SCHOOL</Typography>
              <Typography>ADULT CLASSES</Typography>
              <Typography>SISTERS' PROGRAM</Typography>
              <Typography>WEEKEND QUR'AN CLASSES</Typography>
            </>
          }
          frontIcon={
            <LocalLibraryIcon
              sx={{
                display: 'flex',
                height: '100%',
                justifyContent: 'center',
                width: '100%'
              }}
            />
          }
          title='EDUCATION'
        />
      </Grid>
      <Grid item>
        <HomePageFlipCard
          backContent={
            <>
              <Typography>MATRIMONIAL</Typography>
              <Typography>FUNERAL</Typography>
              <Typography>INTERFAITH OUTREACH</Typography>
              <Typography>COMMUNITY SERVICE</Typography>
            </>
          }
          frontIcon={
            <AccessibilityNewIcon
              sx={{
                color: APP_TERTIARY_COLOR,
                display: 'flex',
                height: '100%',
                justifyContent: 'center',
                width: '100%'
              }}
            />
          }
          title='SERVICE'
        />
      </Grid>
      <Grid item>
        <HomePageFlipCard
          backContent={
            <>
              <Typography>LOREM ISPUM</Typography>
              <Typography>DOLOR SIT</Typography>
              <Typography>AMET CONSECTETUR</Typography>
              <Typography>ADIPISCING ELIT</Typography>
            </>
          }
          frontIcon={
            <WorkspacePremiumIcon
              sx={{
                color: APP_SECONDARY_COLOR,
                display: 'flex',
                height: '100%',
                justifyContent: 'center',
                width: '100%'
              }}
            />
          }
          title='DEDICATION'
        />
      </Grid>
    </Grid>
  );
};

export default HomePageFlipCards;
