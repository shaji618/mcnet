/**
 * On the back end, we'll need to check to make sure that emails
 * are not already on the list so we can bubble the error up here
 *
 * TODO: wire this up to the back end
 */

import { FC, FormEvent, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import snowyMasjid from '@assets/mosque-photos/snowyMasjid.jpg';
import { APP_TERTIARY_COLOR } from '@util/constants';

const MailingListCTA: FC = () => {
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

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSnackbarClose = (): void => {
    setSnackbarOpen(false);
  };

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    setSnackbarOpen(true);
    setFullName('');
    setFullNameTouched(false);
    setEmail('');
    setEmailTouched(false);
  };

  return (
    <>
      <Card variant='outlined'>
        <CardMedia component='img' height='298' image={snowyMasjid} />
        <CardContent
          sx={{
            bgcolor: `${APP_TERTIARY_COLOR}1F`,
            borderTop: `1px solid ${APP_TERTIARY_COLOR}`
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
              fullNameTouched && fullName === ''
                ? 'Please enter your name.'
                : ' '
            }
            label='Name'
            onChange={(e): void => setFullName(e.target.value)}
            onFocus={(): void => setFullNameTouched(true)}
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
            onChange={(e): void => setEmail(e.target.value)}
            onFocus={(): void => setEmailTouched(true)}
            required
            sx={{ mb: 0.8 }}
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
      <Snackbar
        action={
          <>
            <IconButton
              aria-label='close'
              color='inherit'
              sx={{ p: 0.5 }}
              onClick={handleSnackbarClose}
            >
              <CloseIcon />
            </IconButton>
          </>
        }
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        autoHideDuration={5000}
        key='{}'
        onClose={handleSnackbarClose}
        message={`${email} added to mailing list!`}
        open={snackbarOpen}
      />
    </>
  );
};

export default MailingListCTA;
