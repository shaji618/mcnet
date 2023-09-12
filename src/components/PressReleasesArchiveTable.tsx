import Typography from '@mui/material/Typography';
import ArchiveTable, { IRow } from '../layout/ArchiveTable';
import { appTertiaryColor } from '../util/constants';
import Box from '@mui/material/Box';

const PressReleasesArchiveTable = () => {
  const rows: IRow[] = [
    {
      columnOneData: 'Islam Forbids Extremism',
      columnTwoData: 'April 2, 2018',
      expand: {
        child: (
          <>
            <Typography>
              Anyone who is familiar with Islamic teachings knows very well that
              Islam forbids the killing of innocents.
            </Typography>
            <Typography>Allah says:</Typography>
            <Typography>
              Whosoever kills an innocent human being, it shall be as if he has
              killed all mankind, and whosoever saves the life of one, it shall
              be as if he had saved the life of all mankind.
            </Typography>
            <Typography>-- Qur'an 5:32</Typography>
          </>
        )
      }
    }
  ];

  return (
    <Box id='press-releases'>
      <Typography
        sx={{
          textAlign: 'center',
          textDecoration: `underline ${appTertiaryColor} 1px`,
          textUnderlineOffset: '0.3em'
        }}
        variant='h4'
      >
        PRESS RELEASES ARCHIVE
      </Typography>
      <ArchiveTable
        rows={rows}
        columnOneHeader={'Title'}
        columnTwoHeader={'Date'}
      />
    </Box>
  );
};

export default PressReleasesArchiveTable;
