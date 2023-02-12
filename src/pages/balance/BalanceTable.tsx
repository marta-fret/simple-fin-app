import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IBalanceRowData } from './types';

interface IBalanceTableProps {
  data: IBalanceRowData[];
}

export const BalanceTable = ({ data }: IBalanceTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small">
        <TableHead>
          <TableRow>
            <TableCell>Data</TableCell>
            <TableCell align="right">Użytkownik</TableCell>
            <TableCell align="right">Kwota</TableCell>
            <TableCell align="right">Typ operacji</TableCell>
            <TableCell align="right">Klient/Serwis</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(
            ({
              id,
              date,
              user,
              actionType,
              amount,
              currency,
              clientOrService,
            }) => (
              <TableRow
                key={id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {new Date(date).toLocaleString()}
                </TableCell>
                <TableCell align="right">{user}</TableCell>
                <TableCell align="right">
                  <Amount amount={amount} currency={currency} />
                </TableCell>
                <TableCell align="right">{actionType}</TableCell>
                <TableCell align="right">
                  {clientOrService || 'Lorem ipsum'}
                </TableCell>
              </TableRow>
            ),
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const Amount = ({ amount, currency }: { amount: string; currency: string }) => {
  return (
    <>
      <p>{amount}</p>
      <p>{currency}</p>
    </>
  );
};
