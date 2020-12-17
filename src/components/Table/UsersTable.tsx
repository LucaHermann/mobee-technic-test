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

interface IFetchUser {
  id: string;
  email: string;
  lastname: string;
  firstname: string;
  password: string
  createdAt: Date;
  updatedAt: Date;
}

export default function UsersTable() {
  const [usersState, setUsersState] = useState<IFetchUser[]>([])

  useEffect(() => {
    const url = 'http://localhost:5000/users';

    axios.get(url).then((res) => {
      const users = res.data;
      setUsersState(users);
    }).catch(err => console.log("Errors FetchDataUsers -->",err));
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
          </TableRow>
        </TableHead>
        <TableBody>
          {usersState.map((user: IFetchUser) => (
            <StyledTableRow key={user.id}>
              <StyledTableCell align="left">{user.email}</StyledTableCell>
              <StyledTableCell align="left">{user.lastname}</StyledTableCell>
              <StyledTableCell align="left">{user.firstname}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}