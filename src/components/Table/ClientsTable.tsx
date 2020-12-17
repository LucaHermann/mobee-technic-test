import React, {useState, useEffect} from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

import './Content.css';

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      color: theme.palette.common.black,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
  )(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

interface IFetchClient {
  id: string;
  lastname: string;
  firstname: string;
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    zip: string;
    country: string;
    lat: number;
    lng: number;
  }
  status: {
    id: string;
    label: string
  }
  createdAt: Date;
  updatedAt: Date;
}

export default function ContentClient() {
  const [clientsState, setClientsState] = useState<IFetchClient[]>([])

  useEffect(() => {
    const url = 'http://localhost:5000/clients';

    axios.get(url).then(res => {
      const clients = res.data;
      setClientsState(clients);
    }).catch(err => console.log("Errors FetchDataClients -->",err));
  }, []);

  const classes = useStyles();

  return (
    <TableContainer className="content--div__container" component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Email</StyledTableCell>
            <StyledTableCell align="left">Lastname</StyledTableCell>
            <StyledTableCell align="left">Firstname</StyledTableCell>
            <StyledTableCell align="left">Status</StyledTableCell>
            <StyledTableCell align="left">City</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clientsState.map((client: IFetchClient) => (
            <StyledTableRow key={client.id}>
              <StyledTableCell align="left">{client.email}</StyledTableCell>
              <StyledTableCell align="left">{client.lastname}</StyledTableCell>
              <StyledTableCell align="left">{client.firstname}</StyledTableCell>
              <StyledTableCell align="left">{client.status.label}</StyledTableCell>
              <StyledTableCell align="left">{client.address.city}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}