import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import { appTertiaryColor } from '../util/constants';
import Chip from '@mui/material/Chip';
import FormHelperText from '@mui/material/FormHelperText';

type ProgramType =
  | 'youth-program'
  | 'adult-program'
  | 'sisters-programs'
  | 'weekend-quran-class';

const ProgramSelectMenu = () => {
  const [selectState, setSelectState] = useState<ProgramType>('youth-program');

  const handleChange = (event: SelectChangeEvent) => {
    setSelectState(event.target.value as ProgramType);
  };

  return (
    <>
      <Box>
        <FormControl fullWidth>
          <InputLabel id='program'>Program</InputLabel>
          <Select
            color='success'
            label='Program'
            labelId='program'
            onChange={handleChange}
            value={selectState}
          >
            <MenuItem value='youth-program'>Youth Program</MenuItem>
            <MenuItem value='adult-program'>Adult Program</MenuItem>
            <MenuItem value='sisters-programs'>Sisters' Programs</MenuItem>
            <MenuItem value='weekend-quran-class'>
              Weekend Qur'an Class
            </MenuItem>
          </Select>
          <FormHelperText>
            Select an option above to see programs offered by MCNET
          </FormHelperText>
        </FormControl>
      </Box>
      <Box>
        {selectState === 'youth-program' && (
          <>
            <Typography
              sx={{
                mb: 2,
                textAlign: 'center',
                textDecoration: `underline ${appTertiaryColor} 1px`,
                textUnderlineOffset: '0.3em'
              }}
              variant='h5'
            >
              YOUTH PROGRAM
            </Typography>
            <Typography>
              MCNET does not have a youth program at this time, but we hope to
              establish one in the near future, Inshallah.
            </Typography>
          </>
        )}
        {selectState === 'adult-program' && (
          <>
            <Typography
              sx={{
                mb: 2,
                textAlign: 'center',
                textDecoration: `underline ${appTertiaryColor} 1px`,
                textUnderlineOffset: '0.3em'
              }}
              variant='h5'
            >
              MUSLIM EDUCATION AND SUPPORT GROUP CLASS
            </Typography>
            <Typography>
              The Muslim Education and Support Group meets every Sunday evening
              from 6:30 - 8:00pm and is focused on educating members of our
              community on the foundations of Islam, specifically targeting
              topics most relevant to convert Muslims. This class is open to
              both men and women and features a Q&A session at the end of each
              class.
            </Typography>
          </>
        )}
        {selectState === 'sisters-programs' && (
          <>
            <Typography
              sx={{
                mb: 2,
                textAlign: 'center',
                textDecoration: `underline ${appTertiaryColor} 1px`,
                textUnderlineOffset: '0.3em'
              }}
              variant='h5'
            >
              SISTER'S{' '}
              <Box display='inline' fontStyle='italic'>
                HALAQA
              </Box>
            </Typography>
            <Typography>
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
            <Typography
              sx={{
                mb: 2,
                textAlign: 'center',
                textDecoration: `underline ${appTertiaryColor} 1px`,
                textUnderlineOffset: '0.3em'
              }}
              variant='h5'
            >
              BEGINNERS' ARABIC FOR SISTERS
            </Typography>
            <Typography>
              Beginners level Arabic class for sisters led by Sr. Haifa Abu
              Sneineh.
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
            <Typography
              sx={{
                mb: 2,
                textAlign: 'center',
                textDecoration: `underline ${appTertiaryColor} 1px`,
                textUnderlineOffset: '0.3em'
              }}
              variant='h5'
            >
              ADVANCED ARABIC FOR SISTERS
            </Typography>
            <Typography>
              Advanced level Arabic class for sisters lead by Sr. Haifa Abu
              Sneineh.
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
        )}
      </Box>
    </>
  );
};

export default ProgramSelectMenu;
