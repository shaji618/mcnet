import { ReactElement, useState } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import AdultProgramContent from '@components/programs/AdultProgramContent';
import SistersProgramContent from '@components/programs/SistersProgramContent';
import WeekendQuranClassContent from '@components/programs/WeekendQuranClassContent';
import YouthProgramContent from '@components/programs/YouthProgramContent';

type ProgramType =
  | 'youth-program'
  | 'adult-program'
  | 'sisters-programs'
  | 'weekend-quran-class';

const ProgramSelectMenu = (): ReactElement => {
  const [selectState, setSelectState] = useState<ProgramType>('youth-program');

  const handleChange = (event: SelectChangeEvent): void => {
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
        {selectState === 'youth-program' && <YouthProgramContent />}
        {selectState === 'adult-program' && <AdultProgramContent />}
        {selectState === 'sisters-programs' && <SistersProgramContent />}
        {selectState === 'weekend-quran-class' && <WeekendQuranClassContent />}
      </Box>
    </>
  );
};

export default ProgramSelectMenu;
