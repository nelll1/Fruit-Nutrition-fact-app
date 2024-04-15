import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FruitData from '../fruits';

function createData(name, calories, fat, sugar, protein) {
  return { name, calories, fat, sugar, protein };
}



export default function BasicTable(props) {
  const nameOfFruit = props.fruitName;
  
  let index = -1;

  FruitData.forEach((fruit, i) => {
    if(fruit.name === nameOfFruit){
      index = i;
    }
  });

  let rows = [
    createData("Fruit", "0", "0", "0", "0")
  ];

  if (nameOfFruit !== null && index !== -1) {
    rows = [
      createData(
        nameOfFruit,
        FruitData[index]?.nutrition?.calories || "N/A",
        FruitData[index]?.nutrition?.fat || "N/A",
        FruitData[index]?.nutrition?.sugar || "N/A",
        FruitData[index]?.nutrition?.protein || "N/A"
      )
    ];
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Fruit</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Sugars&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
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
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.sugar}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
