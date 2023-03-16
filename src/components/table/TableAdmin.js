import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
//import Grid from '@mui/material/Grid';
//import Box from '@mui/material/Box';



function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(ci, name, lastname, email) {
  return { ci, name, lastname, email };
}

const rows = [
  createData('5620369','Alfredo','Montes Miranda', 'alfredo.mm@gmail.com'),
  createData('5620144','Cesar Pedro','Montes Miranda', 'alfredo.mm@gmail.com'),
  createData('5620036922','Bruno','Montes Miranda', 'alfredo.mm@gmail.com'),
  createData('562036958','Carlos','Montes Miranda', 'alfredo.mm@gmail.com'),
  createData('56203696','Jorge','Montes Miranda', 'alfredo.mm@gmail.com'),
  createData('56203696','Faviana','Montes Miranda', 'alfredo.mm@gmail.com'),
  createData('56203692','Alejandra','Montes Miranda', 'alfredo.mm@gmail.com'),
  createData('56203699','Marco','Montes Miranda', 'alfredo.mm@gmail.com'),
  createData('562036988','Liz','Montes Miranda', 'alfredo.mm@gmail.com'),
  createData('562036119','Federico Hugo','Montes Miranda', 'alfredo.mm@gmail.com'),
  
].sort((a, b) => (a.calories < b.calories ? -1 : 1));

export default function TableAdmin() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(7);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const columns = [
    {
      title: 'Cédula',
      align: 'leght'
    },
    {
      title: 'Nombres',
      align: 'leght'
    },
    {
      title: 'Apellidos',
      align: 'leght'
    },
    {
      title: 'Correo electrónico',
      align: 'leght'
    },
    {
      title: 'Acción',
      align: 'center'
    }

  ]
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            {columns.map((column, index) => (
              <TableCell
                key={index}
                align={column.align}
                style={{ fontWeight: "bold"}}
              >
                {column.title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.ci}>
              <TableCell  style={{ width: 160 }} component="th" scope="row">
                {row.ci}
              </TableCell>
              <TableCell style={{ width: 160 }} align="leght">
                {row.name}
              </TableCell>
              <TableCell style={{ width: 160 }} align="leght">
                {row.lastname}
              </TableCell>
              <TableCell style={{ width: 160 }} align="leght">
                {row.email}
              </TableCell>
              
              <TableCell style={{ width: 160}} align="center">
                    <InfoIcon color='primary' sx={{marginInline:0.5}} />
                    <EditIcon sx={{marginInline:0.5}}/>
                    <DeleteIcon color='secondary' sx={{marginInline:0.5}} />

              </TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={7} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={5}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}