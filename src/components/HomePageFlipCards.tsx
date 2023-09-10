import { MouseEvent, ReactNode, useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { appSecondaryColor, appTertiaryColor } from '../util/constants';
import { ReactComponent as Logo } from '../assets/svg-icons/logo.svg';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const HomePageFlipCard = (props: {
  backContent: ReactNode;
  frontIcon: ReactNode;
  title: string;
}) => {
  const { backContent, frontIcon, title } = props;
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <Grid item sx={{ cursor: 'pointer' }}>
      <ReactCardFlip infinite isFlipped={isFlipped}>
        <Box sx={{ height: 200, width: 200 }} onClick={handleClick}>
          {frontIcon}
          <SwapHorizIcon
            sx={{
              color: appSecondaryColor,
              position: 'absolute',
              right: '20px',
              textAlign: 'center',
              top: '100%'
            }}
          />
          <Box
            sx={{
              border: `1px solid ${appTertiaryColor}`,
              backgroundColor: appSecondaryColor,
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
              color: appSecondaryColor,
              position: 'absolute',
              right: '20px',
              textAlign: 'center',
              top: '100%'
            }}
          />
        </Box>
      </ReactCardFlip>
    </Grid>
  );
};

const HomePageFlipCards = () => {
  return (
    <Grid container spacing={12}>
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
              color: appTertiaryColor,
              display: 'flex',
              height: '100%',
              justifyContent: 'center',
              width: '100%'
            }}
          />
        }
        title='SERVICE'
      />
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
              color: appSecondaryColor,
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
  );
};

export default HomePageFlipCards;
