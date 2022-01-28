import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {ProductType, WarehouseType} from "../../data";
import styles from "./ProductTable.module.css"


type ProductTablePropsType = {
    theadData: string[]
    trow: WarehouseType[]
    checkedAll: (value: boolean) => void
    onChangeChecked: (value: boolean, productId: string) => void
}


export const ProductTable: React.FC<ProductTablePropsType> = ({theadData, trow, checkedAll, onChangeChecked}) => {


    return (
        <TableContainer component={Paper} style={{height: "78vh"}}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {theadData.map((th, index) => th === "All products" ?
                            <TableCell key={index}>
                                <input type="checkbox" readOnly
                                                          onChange={(e) => checkedAll(e.currentTarget.checked)}/>{th}
                            </TableCell> : <TableCell key={index}>{th}</TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>

                    {trow[0].products.map((row: ProductType) => (
                        <TableRow
                            key={row.id}
                            sx={{"&:last-child td, &:last-child th": {border: 0}}}
                        >
                            <TableCell component="th" scope="row">
                                <input type="checkbox" checked={row.selected} readOnly
                                       onChange={(e) => onChangeChecked(e.currentTarget.checked, row.id)}/>
                                {row.productName}
                            </TableCell>
                            <TableCell align="left">{row.manufacturer}</TableCell>
                            <TableCell align="left">{row.itemNumber}</TableCell>
                            <TableCell align="left">{row.purchasingTechnology}</TableCell>
                            <TableCell className={styles[row.shipmentMethod]}
                                       align="left">{row.shipmentMethod}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}




