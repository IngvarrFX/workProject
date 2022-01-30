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
import {CustomCheckbox} from "../customCheckbox/CustomCheckbox";


type ProductTablePropsType = {
    theadData: string[]
    trow: WarehouseType[]
    checkedAll: (value: boolean) => void
    onChangeChecked: (value: boolean, productId: string) => void
    value: boolean
}


export const ProductTable: React.FC<ProductTablePropsType> = ({
                                                                  theadData,
                                                                  trow,
                                                                  checkedAll,
                                                                  onChangeChecked,
                                                                  value
                                                              }) => {


    const styleCell = {
        display: "flex",
        alignItems: "center",
    }

    return (
        <TableContainer component={Paper} style={{height: "78vh", userSelect: "none"}}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {theadData.map((th, index) => th === "All products" ?
                            <TableCell style={styleCell} key={index}>
                                <CustomCheckbox value={value} onChangeChecked={checkedAll}/>
                                <div style={{marginLeft: 16}}> {th}</div>
                            </TableCell> : <TableCell key={index}>{th}</TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>

                    {trow[0].products.map((row: ProductType) => (
                        <TableRow
                            key={row.id}
                            sx={{"&:last-child td, &:last-child th": {border: 0}}}
                        >
                            <TableCell style={styleCell} component="th" scope="row">
                                <CustomCheckbox value={row.selected} onChangeChecked={(value) => onChangeChecked(value, row.id)}/>
                                <div style={{marginLeft: 12, userSelect: "none"}}>{row.productName}</div>
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


/*
<input type="checkbox" readOnly onChange={(e) => checkedAll(e.currentTarget.checked)}/>
{th}*/


/*
<input type="checkbox" checked={row.selected} readOnly onChange={(e) => onChangeChecked(e.currentTarget.checked, row.id)}/>
{row.productName}*/
