import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import faker from 'faker'
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

const CreateClient = () => {
  const [newClientState, setNewClientState] = useState({
    id: faker.random.uuid(), lastname: '', firstname: '',
    phone: '', email: '', address: { street: '', city: '', zip: '', country: '',
    lat: faker.address.latitude(), lng: faker.address.longitude()},
    status: {id: faker.random.uuid(), label: 'Client Mobee'},
    createdAt: new Date(), updatedAt: new Date(),
  })
  const [resStatus, setResStatus] = useState({
    errorMessage: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewClientState({...newClientState, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    const url = 'http://localhost:5000/clients';

    axios.post(url, newClientState)
      .then((response) => {
        console.log('res ->', response);
        if (response.status === 200) {
          console.log(response);
          setResStatus({...resStatus, errorMessage: 'The User have been added successfully'});
        }
      })
      .catch((err) => {
        console.log(err);
        setResStatus({...resStatus, errorMessage: err.message});
      });
  }

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Add Client
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="lastname"
            label="lastname"
            type="text"
            value={newClientState.lastname}
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
            value={newClientState.firstname}
            id="firstname"
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="phone"
            label="phone"
            type="text"
            name="phone"
            value={newClientState.phone}
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="email"
            type="mail"
            name="email"
            value={newClientState.email}
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="street"
            label="street"
            type="text"
            name="street"
            value={newClientState.address.street}
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="city"
            label="city"
            type="text"
            name="city"
            value={newClientState.address.city}
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="zip"
            label="zip"
            type="text"
            name="zip"
            value={newClientState.address.zip}
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="country"
            label="country"
            type="text"
            name="country"
            value={newClientState.address.country}
            autoFocus
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Create Client
          </Button>
          <p>{resStatus.errorMessage}</p>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default CreateClient;