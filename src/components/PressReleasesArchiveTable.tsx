import { ReactElement } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import ArchiveTable, { ArchiveTableRow } from '@layout/ArchiveTable';
import BodySubHeader from '@layout/BodySubheader';
import { ANNOUNCEMENT_TYPES } from '@util/constants';

const PressReleasesArchiveTable = (): ReactElement => {
  const rows: ArchiveTableRow[] = [
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
    <Box id={ANNOUNCEMENT_TYPES.PRESS_RELEASES}>
      <BodySubHeader>PRESS RELEASES ARCHIVE</BodySubHeader>
      <ArchiveTable
        rows={rows}
        columnOneHeader={'Title'}
        columnTwoHeader={'Date'}
      />
    </Box>
  );
};

export default PressReleasesArchiveTable;
