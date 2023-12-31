import { FC, ReactNode, useState } from 'react';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import Avatar from '@mui/material/Avatar';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ArcherContainer, ArcherElement } from 'react-archer';

import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';

import { ReactComponent as MCNETIcon } from '@assets/svg-icons/logo.svg';
import {
  APP_PRIMARY_COLOR,
  APP_SECONDARY_COLOR,
  APP_TERTIARY_COLOR
} from '@util/constants';

type PickerOptions = 'address' | 'phoneNumber' | 'email';

type PickerProps = {
  active: boolean;
  archerElId: PickerOptions;
  icon: ReactNode;
  onClick: () => void;
  textContent: ReactNode;
};

const Picker: FC<PickerProps> = ({
  active,
  archerElId,
  icon,
  onClick,
  textContent
}) => {
  return (
    <ArcherElement id={archerElId}>
      <Stack
        alignItems='center'
        direction='row'
        onClick={onClick}
        sx={{ cursor: 'pointer' }}
      >
        <Avatar
          className={active ? 'active' : ''}
          sx={{
            height: '50px',
            width: '50px',
            '&:hover': {
              backgroundColor: APP_TERTIARY_COLOR,
              color: APP_SECONDARY_COLOR,
              cursor: 'pointer'
            },
            '&.active': {
              backgroundColor: APP_TERTIARY_COLOR,
              color: APP_SECONDARY_COLOR
            }
          }}
        >
          {icon}
        </Avatar>
        {textContent}
      </Stack>
    </ArcherElement>
  );
};

const ContactPicker: FC = () => {
  const [pickerState, setPickerState] = useState<PickerOptions>('address');

  return (
    <Box>
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
            <Avatar
              sx={{
                height: '100px',
                width: '100px',
                bgcolor: APP_PRIMARY_COLOR
              }}
            >
              <MCNETIcon />
            </Avatar>
          </ArcherElement>
          <Stack spacing={13}>
            <Picker
              active={pickerState === 'address'}
              archerElId='address'
              icon={
                <LocationOnOutlinedIcon sx={{ height: '50%', width: '50%' }} />
              }
              onClick={(): void => setPickerState('address')}
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
              onClick={(): void => setPickerState('phoneNumber')}
              textContent={<Typography ml={2}>423.975.6681</Typography>}
            />
            <Picker
              active={pickerState === 'email'}
              archerElId='email'
              icon={<AlternateEmailIcon sx={{ height: '50%', width: '50%' }} />}
              onClick={(): void => setPickerState('email')}
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
                      backgroundColor: APP_TERTIARY_COLOR,
                      color: APP_PRIMARY_COLOR,
                      cursor: 'pointer'
                    }
                  }}
                >
                  <PhonelinkRingIcon sx={{ height: '50%', width: '50%' }} />
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
                      backgroundColor: APP_TERTIARY_COLOR,
                      color: APP_PRIMARY_COLOR,
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
    </Box>
  );
};

export default ContactPicker;
