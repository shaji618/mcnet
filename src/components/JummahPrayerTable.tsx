import { FC } from 'react';
import LinkIcon from '@mui/icons-material/Link';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';

import ArchiveTable, { ArchiveTableRow } from '@layout/ArchiveTable';

const ExpandContent: FC<{
  khutbaUrl: string;
  recordingUrl: string;
}> = ({ khutbaUrl, recordingUrl }) => {
  return (
    <List sx={{ listStyleType: 'none' }}>
      <ListItem>
        <Box display='flex' flexDirection='row'>
          <LinkIcon sx={{ mr: 1 }} />
          <Typography fontWeight={700} mr={1}>
            Khutba:
          </Typography>
          <Typography>
            <Link href={khutbaUrl} rel='noreferrer' target='_blank'>
              Link
            </Link>
          </Typography>
        </Box>
      </ListItem>
      <ListItem>
        <Box display='flex' flexDirection='row'>
          <LinkIcon sx={{ mr: 1 }} />
          <Typography fontWeight={700} mr={1}>
            Recording:
          </Typography>
          <Typography>
            <Link href={recordingUrl} rel='noreferrer' target='_blank'>
              Link
            </Link>
          </Typography>
        </Box>
      </ListItem>
    </List>
  );
};

const JummahPrayerTable: FC = () => {
  const rows: ArchiveTableRow[] = [
    {
      columnOneData: 'Jabbar Ghazi',
      columnTwoData: 'September 2, 2023',
      expand: {
        child: (
          <ExpandContent
            khutbaUrl='https://www.google.com/'
            recordingUrl='https://www.google.com/'
          />
        )
      }
    },
    {
      columnOneData: 'Adnan Sleiman',
      columnTwoData: 'September 9, 2023',
      expand: {
        child: (
          <ExpandContent
            khutbaUrl='https://www.google.com/'
            recordingUrl='https://www.google.com/'
          />
        )
      }
    },
    {
      columnOneData: 'Fahad Touma',
      columnTwoData: 'September 16, 2023',
      expand: {
        child: (
          <ExpandContent
            khutbaUrl='https://www.google.com/'
            recordingUrl='https://www.google.com/'
          />
        )
      }
    }
  ];

  return (
    <ArchiveTable
      rows={rows}
      columnOneHeader={'Khatib'}
      columnTwoHeader={'Date'}
    />
  );
};

export default JummahPrayerTable;
