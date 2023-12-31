import { FC } from 'react';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import ArchiveTable, { ArchiveTableRow } from '@layout/ArchiveTable';
import BodySubHeader from '@layout/BodySubheader';
import { APP_SECONDARY_COLOR } from '@util/constants';

const ExpandComponent: FC<{ email?: string }> = ({ email }) => {
  return (
    <List>
      <ListItem>
        <Stack direction='row' overflow='visible'>
          <ContactMailIcon sx={{ color: APP_SECONDARY_COLOR, mr: 1 }} />
          <Link href={`mailto:${email || 'isnetschool@gmail.com'}`}>
            <Typography>{email || 'isnetschool@gmail.com'}</Typography>
          </Link>
        </Stack>
      </ListItem>
      <ListItem>
        <Stack direction='row' overflow='visible'>
          <PhoneOutlinedIcon sx={{ color: APP_SECONDARY_COLOR, mr: 1 }} />
          <Typography>423.975.6681</Typography>
        </Stack>
      </ListItem>
    </List>
  );
};

const SundaySchoolTeachersTable: FC = () => {
  const rows: ArchiveTableRow[] = [
    {
      columnOneData: 'Shirin Fadel',
      columnTwoData: (
        <>
          <Typography>Arabic, Qur'an, Islamic Studies</Typography>
        </>
      ),
      expand: {
        child: <ExpandComponent />
      }
    },
    {
      columnOneData: 'Adela Aboud',
      columnTwoData: (
        <>
          <Typography>Arabic, Qur'an, Islamic Studies</Typography>
        </>
      ),
      expand: {
        child: <ExpandComponent />
      }
    },
    {
      columnOneData: 'Monia Allee',
      columnTwoData: (
        <>
          <Typography>Arabic, Qur'an, Islamic Studies</Typography>
        </>
      ),
      expand: {
        child: <ExpandComponent />
      }
    },
    {
      columnOneData: 'Selma Badour',
      columnTwoData: (
        <>
          <Typography>Arabic, Qur'an, Islamic Studies</Typography>
        </>
      ),
      expand: {
        child: <ExpandComponent />
      }
    },
    {
      columnOneData: 'Fatima Aydin',
      columnTwoData: (
        <>
          <Typography>Arabic, Qur'an, Islamic Studies</Typography>
        </>
      ),
      expand: {
        child: <ExpandComponent />
      }
    }
  ];
  return (
    <Stack width='100%'>
      <BodySubHeader>MEET THE TEACHERS</BodySubHeader>
      <Typography component='div'>
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
        columnOneHeader={'Teacher'}
        columnTwoHeader={'Subject(s)'}
        rows={rows}
      />
    </Stack>
  );
};

export default SundaySchoolTeachersTable;
