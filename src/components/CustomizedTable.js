import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@material-ui/core';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
}));

function CustomizedTables(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell>Órgão</StyledTableCell>
            <StyledTableCell align="center">Serviço</StyledTableCell>
            <StyledTableCell align="center">Moderar</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
            props.data.map((list, i) => {
              return (
                <StyledTableRow key={i}>
                  <StyledTableCell component="th" scope="row">
                    {list.orgao_nome}
                  </StyledTableCell>
                  <StyledTableCell align="center">{list.servico_nome}</StyledTableCell>
                  <StyledTableCell align="center">
                    <Button onClick={() => props.onClickModerate(list.url)}>
                      Moderar
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              )
            })
          }
        </TableBody>
      </Table>
    </Paper>
  );
}


export default CustomizedTables;