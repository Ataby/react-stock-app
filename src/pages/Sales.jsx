import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useStockCalls from '../hooks/useStockCalls';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const Sales = () => {
  const {getFirms,dataList,categories}= useStockCalls();
  return (
    <>
    <Box style={{width:"100vw"}} >
        <Typography variant='h4' color="error" mb={4} >
            Sales -- will be completed soon.
          </Typography>
        </Box>
    {/* {dataList?.length >0 && (
    <TableContainer component={Paper} sx={{mt:3}} elevation={22}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='center'>#</TableCell>
            <TableCell align="center">Brand</TableCell>
            <TableCell align="center">Category</TableCell>
            <TableCell align="center">Model</TableCell>
            <TableCell align="center">Stock</TableCell>
            <TableCell align="center">Operation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataList.map((item,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align='center'>
                {index+1}
              </TableCell>
              <TableCell align="center">{item.sirket_adi}</TableCell>
              <TableCell align="center">{item.fat}</TableCell>
              <TableCell align="center">{item.carbs}</TableCell>
              <TableCell align="center">{item.protein}</TableCell>
              <TableCell align="center"><DeleteOutlineOutlinedIcon/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )} */}
    </>
  )
}

export default Sales