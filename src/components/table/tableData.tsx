import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "./Table.module.css"
import {CustomCheckbox} from "../customCheckbox/CustomCheckbox";
import {ApiImprovedDataType} from "../../types/types";
import {v1} from "uuid";


type TableProps = {
    navigate: (value: string) => void
    theadData: string[]
    trow: ApiImprovedDataType[]
    chooseProduct: (id: string, title: string) => void
    checkedAll: (value: boolean) => void
    changeCheckedWarehouse: (value: boolean, warehouseID: string) => void
    value: boolean
};





export class TableData extends React.Component<TableProps> {
    constructor(props: TableProps) {
        super(props);
    }

    render() {

        const {
            theadData,
            trow,
            chooseProduct,
            changeCheckedWarehouse,
            value,
            navigate,
            checkedAll,
        } = this.props


        let onClickHandle = (id: string, title: string) => {
            chooseProduct(id, title)
            navigate("/warehouses/warehouse")
        }

        let onChangeCheckedAll = (value: boolean) => {
            checkedAll(value)
        }


        const styleCell = {
            display: "flex",
            alignItems: "center",
        }
        return <TableContainer component={Paper} style={{height: "78vh", userSelect: "none"}}>
            <Table sx={{width: "100%"}} stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        {theadData.map((th, index) => <TableCell key={index}>{
                            th === "Id"
                                ?
                                <div style={{display: "flex", alignItems: "center"}}>
                                    <CustomCheckbox value={value} onChangeChecked={onChangeCheckedAll}/>
                                    <div style={{marginLeft: 16}}>{th}</div>
                                </div>
                                : th
                        }</TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {trow.map((row) => (
                        <TableRow
                            key={row.id + v1()}
                            sx={{"&:last-child td, &:last-child th": {border: 0}}}
                        >
                            <TableCell component="th" scope="row">
                                <div style={styleCell}>
                                    <CustomCheckbox value={row.selected}
                                                    onChangeChecked={(value) => changeCheckedWarehouse(value, row.id.toString())}/>
                                    <button style={{marginLeft: 12}} className={styles.button}
                                            onClick={() => onClickHandle(row.id.toString(), row.name)}>{row.id}</button>
                                </div>
                            </TableCell>
                            <TableCell align="left">{row.name}</TableCell>
                            <TableCell align="left">{row.tagline}</TableCell>
                            <TableCell align="left">{row.first_brewed}</TableCell>
                            <TableCell align="left">
                                <img style={{width: 20}} src={row.image_url} alt={"item"}/>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>;
    }
}