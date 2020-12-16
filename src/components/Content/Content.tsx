import React, {useState} from 'react';
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
interface IFetchClient {
  _id: string;
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

function createDataClient(  
  _id: string,
  lastname: string,
  firstname: string,
  phone: string,
  email: string,
  address: {
    street: string,
    city: string,
    zip: string,
    country: string,
    lat: number,
    lng: number
  },
  status: {
    id: string,
    label: string
  },
  createdAt: Date,
  updatedAt: Date) {
  return {_id, lastname, firstname, phone, email, address, status, createdAt, updatedAt}
};

type Client = [
  string,
  string,
  string, 
  string,
  string,
  string,
  string,
  string,
  number,
  number,
  string,
  string,
  Date,
  Date
]

// const rows = [
//   createDataClient(_id, lastname, firstname, phone, email, address, status, createdAt, updatedAt)
// ];

function createData(name: string, calories: number, fat: number, carbs: number, protein:number) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const [clientsState, setClientsState] = useState([]);

  const fetchDataClient = () => {
    const url = `http://localhost:5000/clients`;
    let clients: Client[][] = [];

    axios.get(url).then(res => {
      const client = res.data as IFetchClient;
  
      const _id = client._id;
      const lastname = client.lastname;
      const firstname = client.firstname;
      const phone = client.phone;
      const email = client.email;
      const address = {
        street: client.address.street,
        city: client.address.city,
        zip: client.address.zip,
        country: client.address.country,
        lat: client.address.lat,
        lng: client.address.lng
      },
      status = {
        id: client.status.id,
        label: client.status.label,
      },
      createdAt = client.createdAt,
      updatedAt = client.updatedAt

      clients = [_id, lastname, firstname, phone,email, address, status, createdAt, updatedAt];

      setClientsState(clients);
    }).catch(err => console.log("Errors FetchDataClients --->",err));
  }

  const classes = useStyles();

  fetchDataClient();
  return (
    <TableContainer className="content--div__container" component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Stats</StyledTableCell>
            <StyledTableCell align="right">email</StyledTableCell>
            <StyledTableCell align="right">lastname</StyledTableCell>
            <StyledTableCell align="right">firstname</StyledTableCell>
            <StyledTableCell align="right">status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}