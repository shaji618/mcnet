import { FC } from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';

import BodySubHeader from '@layout/BodySubheader';

const SistersProgramContent: FC = () => {
  return (
    <>
      <BodySubHeader>
        SISTER'S{' '}
        <Box display='inline' fontStyle='italic'>
          HALAQA
        </Box>
      </BodySubHeader>
      <Typography component='div'>
        "Reviving the Hearts with{' '}
        <Box display='inline' fontStyle='italic'>
          Seerat An Nabi
        </Box>{' '}
        (PBUH)" is a sisters'{' '}
        <Box display='inline' fontStyle='italic'>
          halaqa
        </Box>{' '}
        led by Sr. Haifa Abu Sneineh.
      </Typography>
      <Box alignItems='center' display='flex' my={1}>
        <Typography fontWeight={500} mr={1}>
          When:
        </Typography>
        <Chip label='Every Sunday from 12:30-1:30pm' />
      </Box>
      <Box alignItems='center' display='flex'>
        <Typography fontWeight={500} mr={1}>
          Where:
        </Typography>
        <Chip label="Ladies' prayer room" />
      </Box>
      <BodySubHeader>BEGINNERS' ARABIC FOR SISTERS</BodySubHeader>
      <Typography>
        Beginners level Arabic class for sisters led by Sr. Haifa Abu Sneineh.
      </Typography>
      <Box alignItems='center' display='flex' my={1}>
        <Typography fontWeight={500} mr={1}>
          When:
        </Typography>
        <Chip label='Every Sunday from 2:15-3:00pm' />
      </Box>
      <Box alignItems='center' display='flex'>
        <Typography fontWeight={500} mr={1}>
          Where:
        </Typography>
        <Chip label="Sisters' prayer room" />
      </Box>
      <BodySubHeader>ADVANCED ARABIC FOR SISTERS</BodySubHeader>
      <Typography>
        Advanced level Arabic class for sisters lead by Sr. Haifa Abu Sneineh.
      </Typography>
      <Box alignItems='center' display='flex' my={1}>
        <Typography fontWeight={500} mr={1}>
          When:
        </Typography>
        <Chip label='Every Sunday 11:30am-12:30pm' />
      </Box>
      <Box alignItems='center' display='flex'>
        <Typography fontWeight={500} mr={1}>
          Where:
        </Typography>
        <Chip label="Sisters' prayer room" />
      </Box>
    </>
  );
};

export default SistersProgramContent;
