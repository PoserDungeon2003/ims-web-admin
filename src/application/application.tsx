import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm, SubmitHandler } from "react-hook-form"

type FormInput = {
  firstName: string
  lastName: string
  email: string;
  phone: number;
  resume?: string;
  coverLetter?: string;
  appliedTo: string;
}

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Application() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>()
  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log(data)
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Apply Now
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  {...register('firstName', {
                    required: 'First name is required'
                  })}
                />
                {errors.firstName && <p style={{ color: 'red', fontWeight: 'bold' }}>*{errors.firstName.message}</p>}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  autoComplete="family-name"
                  {...register('lastName', {
                    required: 'Last name is required'
                  })}
                />
                {errors.lastName && <p style={{ color: 'red', fontWeight: 'bold' }}>*{errors.lastName.message}</p>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  label="Email Address"
                  autoComplete="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: 'Invalid email address'
                    }
                  })}
                />
                {errors.email && <p style={{ color: 'red', fontWeight: 'bold' }}>*{errors.email.message}</p>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="phone"
                  label="Phone"
                  type='tel'
                  autoComplete="phone"
                  {...register('phone', {
                    required: 'Phone number is required',
                    minLength: { value: 10, message: 'Phone number must be at least 10 digits' },
                    maxLength: { value: 10, message: 'Phone number must be at most 10 digits' }
                  })}
                />
                {errors.phone && <p style={{ color: 'red', fontWeight: 'bold' }}>*{errors.phone.message}</p>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="resume"
                  label="Resume"
                  type='file'
                  {...register('resume')}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="coverletter"
                  label="Cover Letter"
                  type='file'
                  {...register('coverLetter')}
                />
                {/* <input type="file" name='CV'/> */}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="appliedTo"
                  label="Applied to"
                  type='text'
                  {...register('appliedTo', {
                    required: 'Applied to is required'
                  })}
                />
                {errors.appliedTo && <p style={{ color: 'red', fontWeight: 'bold' }}>*{errors.appliedTo.message}</p>}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Apply
            </Button>
          </form>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}