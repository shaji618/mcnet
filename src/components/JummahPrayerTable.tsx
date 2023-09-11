import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import LinkIcon from '@mui/icons-material/Link';
import Link from '@mui/material/Link';

function createData(
  khatib: string,
  date: string,
  khutbaUrl: string,
  recordingUrl: string
) {
  return {
    khatib,
    date,
    khutbaUrl,
    recordingUrl
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label='expand row'
            size='small'
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{row.khatib}</TableCell>
        <TableCell>{row.date}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={2}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <List sx={{ listStyleType: 'none' }}>
                <ListItem>
                  <Box display='flex' flexDirection='row'>
                    <LinkIcon sx={{ mr: 1 }} />
                    <Typography fontWeight={700} mr={1}>
                      Khutba:
                    </Typography>
                    <Typography>
                      <Link
                        href={row.khutbaUrl}
                        rel='noreferrer'
                        target='_blank'
                      >
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
                      <Link
                        href={row.recordingUrl}
                        rel='noreferrer'
                        target='_blank'
                      >
                        Link
                      </Link>
                    </Typography>
                  </Box>
                </ListItem>
              </List>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData(
    'Shaji Samiuddin',
    'September 2, 2023',
    'https://www.google.com/',
    'https://www.google.com/'
  ),
  createData(
    'Shahram Malik',
    'September 9, 2023',
    'https://www.google.com/',
    'https://www.google.com/'
  ),
  createData(
    'Adil Warsy',
    'September 16, 2023',
    'https://www.google.com/',
    'https://www.google.com/'
  )
];

const JummahPrayerTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label='collapsible table'>
        <TableHead>
          <TableRow>
            <TableCell>Expand</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Khatib</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.khatib} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default JummahPrayerTable;
