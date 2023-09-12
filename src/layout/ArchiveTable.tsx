import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { ReactNode, useState } from 'react';

export interface IRow {
  columnOneData: string;
  columnTwoData: string;
  expand?: { child: ReactNode };
}

const Row = (props: { row: IRow }) => {
  const { row } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        {row.expand && (
          <TableCell>
            <IconButton
              aria-label='expand row'
              size='small'
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
        )}
        <TableCell>{row.columnOneData}</TableCell>
        <TableCell>{row.columnTwoData}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          style={{ paddingBottom: 0, paddingTop: 0 }}
          colSpan={row.expand ? 3 : 2}
        >
          {row.expand && (
            <Collapse in={open} timeout='auto' unmountOnExit>
              <Box sx={{ margin: 1 }}>{row.expand.child}</Box>
            </Collapse>
          )}
        </TableCell>
      </TableRow>
    </>
  );
};

const ArchiveTable = (
  props: { rows: IRow[] } & { columnOneHeader: string; columnTwoHeader: string }
) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label='collapsible table'>
        <TableHead>
          <TableRow>
            <TableCell>Expand</TableCell>
            <TableCell>{props.columnOneHeader}</TableCell>
            <TableCell>{props.columnTwoHeader}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => (
            <Row key={row.columnOneData} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ArchiveTable;
