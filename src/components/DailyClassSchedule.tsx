import { ReactElement } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import BodySubHeader from '@layout/BodySubheader';

const columns: GridColDef[] = [
  { field: 'time', headerName: 'Time', flex: 0.2 },
  { field: 'subject', headerName: 'Subject', flex: 0.2 },
  { field: 'level', headerName: 'Level', type: 'number', flex: 0.2 },
  { field: 'teacher', headerName: 'Teacher', flex: 0.2 },
  { field: 'location', headerName: 'Location', flex: 0.2 }
];

const rows = [
  {
    time: '11:30 am',
    subject: 'Arabic',
    level: 1,
    teacher: 'Shirin Fadel',
    location: 'Room 1'
  },
  {
    time: '11:30 am',
    subject: 'Arabic',
    level: 2,
    teacher: 'Adela Aboud',
    location: 'Room 2'
  },
  {
    time: '11:30 am',
    subject: 'Arabic',
    level: 3,
    teacher: 'Monia Allee',
    location: 'Room 3'
  },
  {
    time: '12:30 pm',
    subject: "Qur'an",
    level: 1,
    teacher: 'Selma Badour',
    location: 'Room 1'
  },
  {
    time: '12:30 pm',
    subject: "Qur'an",
    level: 2,
    teacher: 'Fatima Aydin',
    location: 'Room 2'
  },
  {
    time: '12:30 pm',
    subject: "Qur'an",
    level: 3,
    teacher: 'Monia Allee',
    location: 'Room 3'
  }
];

export default function DataTable(): ReactElement {
  return (
    <>
      <BodySubHeader>DAILY CLASS SCHEDULE</BodySubHeader>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(): number => Math.random()}
        hideFooter
      />
    </>
  );
}
