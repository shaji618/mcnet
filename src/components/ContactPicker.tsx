import { ArcherContainer, ArcherElement } from 'react-archer';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import CardMedia from '@mui/material/CardMedia';
import { ReactNode, useState } from 'react';
import {
  appPrimaryColor,
  appSecondaryColor,
  appTertiaryColor
} from '../util/constants';
import { ReactComponent as PhoneIcon } from '../assets/phoneIcon.svg';
import Tooltip from '@mui/material/Tooltip';

type Picker = 'address' | 'phoneNumber' | 'email';

const Picker = (props: {
  active: boolean;
  archerElId: Picker;
  icon: ReactNode;
  onClick: () => void;
  textContent: ReactNode;
}) => {
  return (
    <ArcherElement id={props.archerElId}>
      <Stack
        alignItems='center'
        direction='row'
        onClick={props.onClick}
        sx={{ cursor: 'pointer' }}
      >
        <Avatar
          className={props.active ? 'active' : ''}
          sx={{
            height: '50px',
            width: '50px',
            '&:hover': {
              backgroundColor: appTertiaryColor,
              color: appSecondaryColor,
              cursor: 'pointer'
            },
            '&.active': {
              backgroundColor: appTertiaryColor,
              color: appSecondaryColor
            }
          }}
        >
          {props.icon}
        </Avatar>
        {props.textContent}
      </Stack>
    </ArcherElement>
  );
};

const ContactPicker = () => {
  const [pickerState, setPickerState] = useState<Picker>('address');

  return (
    <>
      <ArcherContainer endMarker={false} strokeColor='#c6c6c6'>
        <Stack
          direction='row'
          height='350px'
          spacing={30}
          sx={{ alignItems: 'center' }}
        >
          <ArcherElement
            id='person'
            relations={[
              {
                sourceAnchor: 'right',
                style: { strokeDasharray: '5,5' },
                targetAnchor: 'left',
                targetId: 'address'
              },
              {
                sourceAnchor: 'right',
                style: { strokeDasharray: '5,5' },
                targetAnchor: 'left',
                targetId: 'phoneNumber'
              },
              {
                sourceAnchor: 'right',
                style: { strokeDasharray: '5,5' },
                targetAnchor: 'left',
                targetId: 'email'
              }
            ]}
          >
            <Avatar sx={{ height: '100px', width: '100px' }} />
          </ArcherElement>
          <Stack spacing={13}>
            <Picker
              active={pickerState === 'address'}
              archerElId='address'
              icon={
                <LocationOnOutlinedIcon sx={{ height: '50%', width: '50%' }} />
              }
              onClick={() => setPickerState('address')}
              textContent={
                <Stack ml={2}>
                  <Typography>3010 Antioch Rd</Typography>
                  <Typography>Johnson City ,TN 37604</Typography>
                </Stack>
              }
            />
            <Picker
              active={pickerState === 'phoneNumber'}
              archerElId='phoneNumber'
              icon={<PhoneOutlinedIcon sx={{ height: '50%', width: '50%' }} />}
              onClick={() => setPickerState('phoneNumber')}
              textContent={<Typography ml={2}>423.975.6681</Typography>}
            />
            <Picker
              active={pickerState === 'email'}
              archerElId='email'
              icon={<AlternateEmailIcon sx={{ height: '50%', width: '50%' }} />}
              onClick={() => setPickerState('email')}
              textContent={<Typography ml={2}>whoever@whatever.com</Typography>}
            />
          </Stack>
          {pickerState === 'address' && (
            <ArcherElement id='googleMap'>
              <CardMedia
                component='iframe'
                image='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3216.1047652679135!2d-82.40763692433264!3d36.28550779654397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885a635ecc697bbb%3A0x583dc06d8c043738!2s3010%20Antioch%20Rd%2C%20Johnson%20City%2C%20TN%2037604!5e0!3m2!1sen!2sus!4v1693968027634!5m2!1sen!2sus'
                sx={{ border: '0px', height: '100%', width: 400 }}
              />
            </ArcherElement>
          )}
          {pickerState === 'phoneNumber' && (
            <Tooltip
              arrow
              disableFocusListener
              disableTouchListener
              title='Tap here on a mobile device to call'
            >
              <Link href='tel:4239756681'>
                <Avatar
                  sx={{
                    height: 300,
                    width: 300,
                    '&:hover': {
                      backgroundColor: appTertiaryColor,
                      cursor: 'pointer'
                    }
                  }}
                >
                  <PhoneIcon height={200} />
                </Avatar>
              </Link>
            </Tooltip>
          )}
          {pickerState === 'email' && (
            <Tooltip
              arrow
              disableFocusListener
              disableTouchListener
              title='Tap here to open your mail client'
            >
              <Link href='mailto:whoever@whatever.com'>
                <Avatar
                  sx={{
                    height: 300,
                    width: 300,
                    '&:hover': {
                      backgroundColor: appTertiaryColor,
                      color: appPrimaryColor,
                      cursor: 'pointer'
                    }
                  }}
                >
                  <MailOutlineIcon sx={{ height: '50%', width: '50%' }} />
                </Avatar>
              </Link>
            </Tooltip>
          )}
        </Stack>
      </ArcherContainer>
    </>
  );
};

export default ContactPicker;
