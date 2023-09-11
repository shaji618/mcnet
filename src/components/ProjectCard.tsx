import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import {
  appPrimaryColor,
  appSecondaryColor,
  appTertiaryColor
} from '../util/constants';
import { MouseEvent, ReactNode, useState } from 'react';
import Grid from '@mui/material/Grid';
import ReactCardFlip from 'react-card-flip';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import Badge from '@mui/material/Badge';
import { currencyFormatter } from '../util/helpers';
import DonateButton from './DonateButton';
import Chip from '@mui/material/Chip';

const ProjectCard = (props: {
  backContent: ReactNode;
  fundsRaised: number;
  fundTarget: number;
  headerText: string;
  image: ReactNode;
  status: 'GOAL MET' | 'FUNDRAISING' | 'PLANNING';
}) => {
  const { backContent, fundsRaised, fundTarget, headerText, image, status } =
    props;
  const [isFlipped, setIsFlipped] = useState(false);

  const fundsNeededRatio = fundsRaised / fundTarget;
  const areFundsNeededMet = fundsNeededRatio === 1;

  const getChipColor = () => {
    switch (status) {
      case 'GOAL MET':
        return 'success';

      case 'FUNDRAISING':
        return 'primary';
      case 'PLANNING':
        return 'warning';
    }
  };

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <Grid
      item
      mb={8}
      mr={4}
      sx={{
        border: `1px solid ${
          areFundsNeededMet ? appSecondaryColor : appTertiaryColor
        }`,
        cursor: 'pointer'
      }}
    >
      <Badge
        badgeContent='FUNDED'
        color='success'
        invisible={!areFundsNeededMet}
      >
        <Stack>
          <ReactCardFlip
            flipDirection='vertical'
            infinite
            isFlipped={isFlipped}
          >
            <Box onClick={handleClick} width={500}>
              <Typography mb={2} mt={1} textAlign='center' variant='h5'>
                {headerText}
              </Typography>
              <Stack direction='row' ml={2} spacing={1}>
                <Stack>
                  <CircularProgress
                    size={200}
                    sx={{ color: appSecondaryColor }}
                    value={fundsNeededRatio * 100}
                    variant='determinate'
                  />
                  <Typography fontWeight={700} mt={2}>
                    Funds raised:{' '}
                    <Box display='inline' fontWeight={100}>
                      {currencyFormatter.format(fundsRaised)}
                    </Box>
                  </Typography>
                  <Typography fontWeight={700}>
                    Fundraising target:{' '}
                    <Box display='inline' fontWeight={100}>
                      {currencyFormatter.format(fundTarget)}
                    </Box>
                  </Typography>
                </Stack>
                {image}
              </Stack>
            </Box>
            <Box
              alignItems='center'
              display='flex'
              height={361}
              justifyContent='center'
              onClick={handleClick}
              textAlign='center'
              width={500}
            >
              <Stack alignItems='center' display='flex' spacing={2}>
                <Stack direction='row'>
                  <Typography mb={2} textAlign='center' variant='h4'>
                    Status:{' '}
                  </Typography>
                  <Chip
                    label={status}
                    color={getChipColor()}
                    sx={{ ml: 1, mt: 1 }}
                  />
                </Stack>
                {backContent}
              </Stack>
            </Box>
          </ReactCardFlip>
          <DonateButton
            sx={{
              color: appPrimaryColor,
              borderColor: appPrimaryColor,
              mb: 2,
              mr: 2
            }}
          />
          <Box onClick={handleClick} sx={{ width: '97%' }}>
            <SwapHorizIcon
              sx={{
                float: 'right',
                color: appSecondaryColor
              }}
            />
          </Box>
        </Stack>
      </Badge>
    </Grid>
  );
};

export default ProjectCard;
