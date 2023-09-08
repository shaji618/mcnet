// TODO: wire this up to the back end

import { ChangeEvent, FormEvent, useState } from 'react';
import { appSecondaryColor } from '../util/constants';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ContactForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [fullNameTouched, setFullNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [phoneNumberTouched, setPhoneNumberTouched] = useState(false);
  const [messageTouched, setMessageTouched] = useState(false);

  const handlePhoneNumberChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    if (value === '' || /^[0-9\s\+\-\(\)]+$/.test(value)) {
      setPhoneNumber(value);
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setFullName('');
    setFullNameTouched(false);
    setEmail('');
    setPhoneNumber('');
    setMessage('');
    setMessageTouched(false);
    console.log(
      'name: ',
      fullName,
      'email: ',
      email,
      'phone number: ',
      phoneNumber,
      'message: ',
      message
    );
  };

  const emailErrorCondition =
    emailTouched &&
    !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    ) &&
    email !== '';

  const phoneNumberErrorCondition =
    phoneNumberTouched &&
    !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(
      phoneNumber
    ) &&
    phoneNumber !== '';

  return (
    <Card
      sx={{ bgcolor: `${appSecondaryColor}1F`, padding: '2em' }}
      variant='outlined'
    >
      <Typography textAlign='center' variant='h5'>
        Contact us
      </Typography>
      <Typography mb={2} textAlign='center'>
        MCNET will be in touch as soon as possible.
      </Typography>
      <TextField
        color='success'
        error={fullNameTouched && fullName === ''}
        fullWidth
        helperText={
          fullNameTouched && fullName === '' ? 'Please enter your name.' : ' '
        }
        label='Name'
        onChange={(e) => setFullName(e.target.value)}
        onFocus={() => setFullNameTouched(true)}
        required
        sx={{
          mb: 1
        }}
        type='text'
        value={fullName}
        variant='outlined'
      />
      <TextField
        color='success'
        error={emailErrorCondition}
        fullWidth
        helperText={
          emailErrorCondition ? 'Please enter a valid email address.' : ' '
        }
        label='Email'
        onChange={(e) => setEmail(e.target.value)}
        onFocus={() => setEmailTouched(true)}
        sx={{ mb: 1 }}
        type='email'
        value={email}
        variant='outlined'
      />
      <TextField
        color='success'
        error={phoneNumberErrorCondition}
        fullWidth
        helperText={
          phoneNumberErrorCondition ? 'Please enter a valid phone number.' : ' '
        }
        label='Phone number'
        onChange={(e) => handlePhoneNumberChange(e)}
        onFocus={() => setPhoneNumberTouched(true)}
        sx={{ mb: 1 }}
        type='tel'
        value={phoneNumber}
        variant='outlined'
      />
      <TextField
        color='success'
        error={messageTouched && message.length <= 5}
        fullWidth
        helperText={
          messageTouched && message.length <= 5
            ? 'Message needs to be at least five characters.'
            : ' '
        }
        label='Message'
        minRows={5}
        maxRows={5}
        multiline
        onFocus={() => setMessageTouched(true)}
        onChange={(e) => setMessage(e.target.value)}
        required
        sx={{ mb: 2 }}
        value={message}
        variant='outlined'
      />
      <Button fullWidth onClick={handleSubmit} type='submit' variant='outlined'>
        Send
      </Button>
    </Card>
  );
};

export default ContactForm;
