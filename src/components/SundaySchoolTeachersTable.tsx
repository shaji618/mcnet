import Typography from '@mui/material/Typography';
import ArchiveTable, { IRow } from '../layout/ArchiveTable';
import { appSecondaryColor, appTertiaryColor } from '../util/constants';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Link from '@mui/material/Link';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';

const ExpandComponent = (props: { email?: string }) => {
  return (
    <List>
      <ListItem>
        <Stack direction='row' overflow='visible'>
          <ContactMailIcon sx={{ color: appSecondaryColor, mr: 1 }} />
          <Link href={`mailto:${props.email || 'isnetschool@gmail.com'}`}>
            <Typography>{props.email || 'isnetschool@gmail.com'}</Typography>
          </Link>
        </Stack>
      </ListItem>
      <ListItem>
        <Stack direction='row' overflow='visible'>
          <PhoneOutlinedIcon sx={{ color: appSecondaryColor, mr: 1 }} />
          <Typography>423.975.6681</Typography>
        </Stack>
      </ListItem>
    </List>
  );
};

const SundaySchoolTeachersTable = () => {
  const rows: IRow[] = [
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
      <Typography
        mb={1}
        sx={{
          textDecoration: `underline ${appTertiaryColor} 1px`,
          textUnderlineOffset: '0.3em'
        }}
        variant='h5'
      >
        MEET THE TEACHERS
      </Typography>
      <Typography>
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
