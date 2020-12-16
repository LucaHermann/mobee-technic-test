import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import axios from 'axios';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Mobee
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const CreateUser = () => {
  const [newUserState, setNewUserState] = useState({
    _id: Math.random(), email: '', lastname: '', firstname: '',
    password: '', createdAt: new Date(), updatedAt: new Date(),
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewUserState({...newUserState, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e: any): void => {
    const url = 'http://localhost:5000/users'
    e.preventDefault();
    axios.post(url, newUserState)
      .then((response) => {
        console.log('res ->', response);
      })
      .catch(error => console.log(error));
  }

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Add User
        </Typography>
        <form className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="email"
            type="mail"
            name="email"
            value={newUserState.email}
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="lastname"
            label="lastname"
            type="text"
            value={newUserState.lastname}
            id="lastname"
            onChange={handleChange}
          />
         <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="firstname"
            label="firstname"
            type="text"
            value={newUserState.firstname}
            id="firstname"
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="password"
            type="password"
            value={newUserState.password}
            id="password"
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onSubmit={handleSubmit}
          >
            Create User
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default CreateUser;