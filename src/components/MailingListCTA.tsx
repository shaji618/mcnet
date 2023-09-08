/**
 * On the back end, we'll need to check to make sure that emails
 * are not already on the list so we can bubble the error up here
 *
 * TODO: wire this up to the back end
 */

import { FormEvent, useState } from 'react';
import { appTertiaryColor } from '../util/constants';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import snowyMasjid from '../assets/snowyMasjid.jpg';
import CardContent from '@mui/material/CardContent';

const MailingListCTA = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [fullNameTouched, setFullNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);

  const emailErrorCondition =
    emailTouched &&
    !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    ) &&
    email !== '';

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setEmail('');
    console.log('Email added to mailing list:', email, 'name: ', fullName);
  };

  return (
    <Card variant='outlined'>
      <CardMedia component='img' height='298' image={snowyMasjid} />
      <CardContent
        sx={{
          bgcolor: `${appTertiaryColor}1F`,
          borderTop: `1px solid ${appTertiaryColor}`
        }}
      >
        <Typography fontWeight={500} variant='h5'>
          Join our mailing list
        </Typography>
        <Typography mb={2}>
          to hear about important news and announcements.
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
          required
          sx={{ mb: 1 }}
          type='email'
          value={email}
          variant='outlined'
        />
        <Button
          fullWidth
          onSubmit={handleSubmit}
          sx={{ mb: 0.95 }}
          type='submit'
          variant='outlined'
        >
          Sign up
        </Button>
      </CardContent>
    </Card>
  );
};

export default MailingListCTA;
