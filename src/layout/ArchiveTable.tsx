import { FC, ReactNode, useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export interface ArchiveTableRow {
  columnOneData: string;
  columnTwoData: string | ReactNode;
  expand: { child: ReactNode };
}

const Row: FC<{ row: ArchiveTableRow }> = ({ row }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow
        onClick={(): void => setOpen(!open)}
        sx={{
          cursor: 'pointer',
          '& > *': { borderBottom: 'unset' }
        }}
      >
        <TableCell>
          <IconButton aria-label='expand row' size='small'>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

        <TableCell>{row.columnOneData}</TableCell>
        <TableCell>{row.columnTwoData}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={3}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ margin: 1, maxWidth: 1000 }}>{row.expand.child}</Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

const ArchiveTable: FC<
  { rows: ArchiveTableRow[] } & {
    columnOneHeader: string;
    columnTwoHeader: string;
  }
> = ({ rows, columnOneHeader, columnTwoHeader }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label='collapsible table'>
        <TableHead>
          <TableRow>
            <TableCell>Expand</TableCell>
            <TableCell>{columnOneHeader}</TableCell>
            <TableCell>{columnTwoHeader}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={Math.random()} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ArchiveTable;
