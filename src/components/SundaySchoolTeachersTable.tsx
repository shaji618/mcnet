import Typography from '@mui/material/Typography';
import ArchiveTable, { IRow } from '../layout/ArchiveTable';
import { appTertiaryColor } from '../util/constants';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

const SundaySchoolTeachersTable = () => {
  const rows: IRow[] = [
    {
      columnOneData: 'Shirin Fadel',
      columnTwoData: (
        <>
          <Typography>
            Arabic, Qur'an,{' '}
            <Box display='inline' fontStyle='italic'>
              Seerah
            </Box>
            ,{' '}
            <Box display='inline' fontStyle='italic'>
              Hadith
            </Box>
          </Typography>
        </>
      )
    },
    {
      columnOneData: 'Adela Aboud',
      columnTwoData: (
        <>
          <Typography>
            Arabic, Qur'an,{' '}
            <Box display='inline' fontStyle='italic'>
              Hadith
            </Box>
          </Typography>
        </>
      )
    },
    {
      columnOneData: 'Monia Allee',
      columnTwoData: (
        <>
          <Typography>
            Arabic, Qur'an,{' '}
            <Box display='inline' fontStyle='italic'>
              Fiqh
            </Box>
          </Typography>
        </>
      )
    },
    {
      columnOneData: 'Selma Badour',
      columnTwoData: (
        <>
          <Typography>
            <Box display='inline' fontStyle='italic'>
              Hadith
            </Box>
            ,{' '}
            <Box display='inline' fontStyle='italic'>
              Seerah
            </Box>
          </Typography>
        </>
      )
    },
    {
      columnOneData: 'Fatima Aydin',
      columnTwoData: (
        <>
          <Typography>Arabic, Qur'an</Typography>
        </>
      )
    }
  ];
  return (
    <Stack width='100%'>
      <Typography
        mb={1}
        sx={{
          textDecoration: `underline ${appTertiaryColor} 1px`,
          textUnderlineOffset: '0.3em'
        }}
        variant='h5'
      >
        MEET THE TEACHERS
      </Typography>
      <Typography>
        Our volunteer staff is experienced teaching Arabic,{' '}
        <Box display='inline' fontStyle='italic'>
          Seerah
        </Box>
        , the Qur'an,{' '}
        <Box display='inline' fontStyle='italic'>
          Fiqh
        </Box>
        , and{' '}
        <Box display='inline' fontStyle='italic'>
          Hadith
        </Box>
        .
      </Typography>
      <ArchiveTable
        hideExpandColumn
        columnOneHeader={'Teacher'}
        columnTwoHeader={'Subject(s)'}
        rows={rows}
      />
    </Stack>
  );
};

export default SundaySchoolTeachersTable;
