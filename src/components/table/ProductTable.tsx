import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {WarehouseType} from "../../data";
import {Checkbox} from "@mui/material";


type ProductTablePropsType = {
    theadData: string[]
    trow: WarehouseType[]

}


export const ProductTable:React.FC<ProductTablePropsType> = ({theadData, trow}) => {
    return (
        <TableContainer component={Paper} style={{height: "78vh"}}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {theadData.map((th,index) => th === "All products" ? <TableCell key={index}><Checkbox  style={{color: "#EE950F"}}  />{th}</TableCell> : <TableCell key={index}>{th}</TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>

                    {trow[0].products.map((row:any) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                <Checkbox  style={{color: "#EE950F"}}  />
                                {row.productName}
                            </TableCell>
                            <TableCell align="left">{row.manufacturer}</TableCell>
                            <TableCell align="left">{row.itemNumber}</TableCell>
                            <TableCell align="left">{row.purchasingTechnology}</TableCell>
                            <TableCell align="left">{row.shipmentMethod}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}




