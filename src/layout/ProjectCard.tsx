import { MouseEvent, ReactElement, ReactNode, useState } from 'react';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ReactCardFlip from 'react-card-flip';

import DonateButton from '@components/DonateButton';
import {
  APP_PRIMARY_COLOR,
  APP_SECONDARY_COLOR,
  APP_TERTIARY_COLOR
} from '@util/constants';
import { currencyFormatter } from '@util/helpers';

const ProjectCard = (props: {
  backContent: ReactNode;
  fundsRaised: number;
  fundTarget: number;
  headerText: string;
  image: ReactNode;
  status: 'GOAL MET' | 'FUNDRAISING' | 'PLANNING';
}): ReactElement => {
  const { backContent, fundsRaised, fundTarget, headerText, image, status } =
    props;
  const [isFlipped, setIsFlipped] = useState(false);

  const fundsNeededRatio = fundsRaised / fundTarget;
  const areFundsNeededMet = fundsNeededRatio === 1;

  const getChipColor = (): 'primary' | 'success' | 'warning' => {
    switch (status) {
      case 'GOAL MET':
        return 'success';

      case 'FUNDRAISING':
        return 'primary';
      case 'PLANNING':
        return 'warning';
    }
  };

  const handleClick = (event: MouseEvent<HTMLElement>): void => {
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
          areFundsNeededMet ? APP_SECONDARY_COLOR : APP_TERTIARY_COLOR
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
                    sx={{ color: APP_SECONDARY_COLOR }}
                    value={fundsNeededRatio * 100}
                    variant='determinate'
                  />
                  <Typography component='div' fontWeight={700} mt={2}>
                    Funds raised:{' '}
                    <Box display='inline' fontWeight={100}>
                      {currencyFormatter.format(fundsRaised)}
                    </Box>
                  </Typography>
                  <Typography component='div' fontWeight={700}>
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
              color: APP_PRIMARY_COLOR,
              borderColor: APP_PRIMARY_COLOR,
              mb: 2,
              mr: 2
            }}
          />
          <Box onClick={handleClick} sx={{ width: '97%' }}>
            <SwapHorizIcon
              sx={{
                float: 'right',
                color: APP_SECONDARY_COLOR
              }}
            />
          </Box>
        </Stack>
      </Badge>
    </Grid>
  );
};

export default ProjectCard;
