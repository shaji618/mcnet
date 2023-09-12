import Typography from '@mui/material/Typography';
import ArchiveTable, { IRow } from '../layout/ArchiveTable';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import LinkIcon from '@mui/icons-material/Link';
import Link from '@mui/material/Link';

const ExpandContent = (props: { khutbaUrl: string; recordingUrl: string }) => {
  return (
    <List sx={{ listStyleType: 'none' }}>
      <ListItem>
        <Box display='flex' flexDirection='row'>
          <LinkIcon sx={{ mr: 1 }} />
          <Typography fontWeight={700} mr={1}>
            Khutba:
          </Typography>
          <Typography>
            <Link href={props.khutbaUrl} rel='noreferrer' target='_blank'>
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
            <Link href={props.recordingUrl} rel='noreferrer' target='_blank'>
              Link
            </Link>
          </Typography>
        </Box>
      </ListItem>
    </List>
  );
};

const JummahPrayerTable = () => {
  const rows: IRow[] = [
    {
      columnOneData: 'Shaji Samiuddin',
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
      columnOneData: 'Shahram Malik',
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
      columnOneData: 'Adil Warsy',
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
