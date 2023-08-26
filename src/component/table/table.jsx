import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './table.css'
function createData(name, trackingId,date,status) {
  return { name,  trackingId,date,status};
}

const rows = [
  createData("Computer Mouse",18876469,"24 August 2023", "Approved"),
  createData("HP InkJet Printer ",28676469,"21 August 2023", "Pending"),
  createData("Lenovo Laptop",78872309,"19 August 2023", "Approved"),
  createData("Rayzen",88251057,"22 August 2023", "Delivered"),
];

const makeStyle = (status) => {
    if(status === 'Approved') {
        return{
            background:"rgb(145 254 159 / 47%)",
            color:'green',
            borderRadius:"10px"
        }
    }
    else if(status === 'Pending') {
        return{
            background:"#ffadad8f",
            color:'red',
            borderRadius:"10px"
        }
    }
    else{
        return{
            background:"#59bfff",
            color:'white',
            borderRadius:"10px"
        }
    }
}

export default function BasicTable() {
  return (
    <div className='table'>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead style={{background:'black'}}>
          <TableRow>
            <TableCell style={{color:'white'}}>Product</TableCell>
            <TableCell style={{color:'white'}} align="left">Tracking Id</TableCell>
            <TableCell style={{color:'white'}} align="left">Date</TableCell>
            <TableCell style={{color:'white'}} align="left">Status</TableCell>
            <TableCell style={{color:'white'}} align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.trackingId}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left" className='status' style={makeStyle(row.status)}>{row.status}</TableCell>
              <TableCell className='details' align="left">Details</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}