import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {DataType} from "../../data";
import styles from "./Table.module.css"
import {Checkbox} from "@mui/material";


type TablePropsType = {
    theadData: string[]
    trow: DataType
    chooseProduct: (id: string, title: string) => void
}


export const BasicTable: React.FC<TablePropsType> = ({theadData, trow,chooseProduct}) => {



    const styleCell = {
        display: "flex",
        alignItems: "center",
    }

    return (
        <TableContainer component={Paper} style={{height: "78vh"}}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {theadData.map((th, index) => th === "All stores" ? <TableCell style={styleCell} key={index}><input type={"checkbox"}/>{th}</TableCell> : <TableCell key={index}>{th}</TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {trow.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{"&:last-child td, &:last-child th": {border: 0}}}
                        >

                            <TableCell component="th" scope="row">
                                <input type={"checkbox"}  style={{textAlign:"center"}} />
                                <button className={styles.button}
                                        onClick={() => chooseProduct(row.id, row.title)}>{row.title}</button>
                            </TableCell>
                            <TableCell align="left">{row.products.length}</TableCell>
                            <TableCell align="left">{row.length}</TableCell>
                            <TableCell align="left">{row.width}</TableCell>
                            <TableCell align="left">{row.height}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}


/*import React from "react";
import {TableHeadItem} from "./TableHeadItem";
import {TableRow} from "./TableRow";
import styles from "./Table.module.css"



type TablePropsType = {
    theadData:Array<string>
    tbodyData:Array<{id: string, items: Array<string>}>
    customClass?:any
}

export const Table:React.FC<TablePropsType> = ({ theadData, tbodyData, customClass }) => {
    return (
        <table className={customClass}>
            <thead>
            <tr>
                <input type={"checkbox"}/>
                {theadData.map((h) => {
                    return <TableHeadItem key={h} item={h} />;
                })}
            </tr>
            </thead>
            <tbody>
            {tbodyData.map((item) => {
                return (<div className={styles.row}>
                        <input type={"checkbox"}/>
                        <TableRow key={item.id} data={item.items} />
                </div>
                    );
            })}
            </tbody>
        </table>
    );
};*/



