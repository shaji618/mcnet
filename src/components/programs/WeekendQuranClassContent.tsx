import { FC } from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';

import BodySubHeader from '@layout/BodySubheader';

import '@style-sheets/SuperResponsiveTableStyle.css';

const WeekendQuranClassContent: FC = () => {
  return (
    <>
      <BodySubHeader>WEEKEND QUR'AN CLASS LIST</BodySubHeader>
      <Paper>
        <Table>
          <Thead>
            <Tr>
              <Th>Batch</Th>
              <Th>Duration of Class</Th>
              <Th>Class Details</Th>
              <Th>Class Time</Th>
              <Th>Days of Week</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>CLASS</Td>
              <Td>
                <Chip
                  label='1st January 2020 to 30th December 2020'
                  sx={{
                    height: 'auto',
                    textAlign: 'center',
                    '& .MuiChip-label': {
                      display: 'block',
                      whiteSpace: 'normal'
                    }
                  }}
                  variant='outlined'
                />
              </Td>
              <Td>
                Quran Tajweed Classes Fridays, Saturdays, and Sundays after
                Salatul Isha for 15 minutes. Everyone welcome to attend. No
                tajweed knowledge necessary.
              </Td>
              <Td>
                <Chip label='08:30 PM To 08:45 PM' variant='outlined' />
              </Td>
              <Td>
                <Stack spacing={1}>
                  <Chip
                    label='Friday'
                    sx={{
                      height: 'auto',
                      textAlign: 'center',
                      '& .MuiChip-label': {
                        display: 'block',
                        whiteSpace: 'normal'
                      }
                    }}
                    variant='outlined'
                  />
                  <Chip
                    label='Saturday'
                    sx={{
                      height: 'auto',
                      textAlign: 'center',
                      '& .MuiChip-label': {
                        display: 'block',
                        whiteSpace: 'normal'
                      }
                    }}
                    variant='outlined'
                  />
                  <Chip
                    label='Sunday'
                    sx={{
                      height: 'auto',
                      textAlign: 'center',
                      '& .MuiChip-label': {
                        display: 'block',
                        whiteSpace: 'normal'
                      }
                    }}
                    variant='outlined'
                  />
                </Stack>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Paper>
      <BodySubHeader>
        WEEKEND{' '}
        <Box display='inline' fontStyle='italic'>
          TAJWEED
        </Box>{' '}
        CLASSES
      </BodySubHeader>
      <Typography component='div'>
        <Box display='inline' fontStyle='italic'>
          Tajweed
        </Box>{' '}
        Classes offered Fridays, Saturdays, and Sundays after{' '}
        <Box display='inline' fontStyle='italic'>
          Salatul Isha
        </Box>{' '}
        for 15 min. No prior knowledge necessary. Everyone welcome to attend.
      </Typography>
    </>
  );
};

export default WeekendQuranClassContent;
