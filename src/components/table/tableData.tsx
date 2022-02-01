import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {DataType} from "../../data";
import {Navigate, useNavigate} from "react-router-dom";
import styles from "./Table.module.css"
import {CustomCheckbox} from "../customCheckbox/CustomCheckbox";
import {ApiDataType} from "../../types/types";



type BasicTablePropsType = {
    theadData: string[]
    trow: ApiDataType[]
    chooseProduct: (id: string, title: string) => void
    checkedAll: (value: boolean) => void
    changeCheckedWarehouse: (value: boolean, warehouseID: string) => void
    value: boolean
}

type TableProps = {
    navigate: (value: string) => void
    theadData: string[]
    trow: ApiDataType[]
    chooseProduct: (id: string, title: string) => void
    checkedAll: (value: boolean) => void
    changeCheckedWarehouse: (value: boolean, warehouseID: string) => void
    value: boolean
};






export const WrappedComponent: React.FC<BasicTablePropsType> = ({
                                                                    theadData,
                                                                    trow,
                                                                    chooseProduct,
                                                                    checkedAll,
                                                                    changeCheckedWarehouse,
                                                                    value
                                                                }) => {


    const navigate = useNavigate()

    return <TableData trow={trow} changeCheckedWarehouse={changeCheckedWarehouse} checkedAll={checkedAll}
                       chooseProduct={chooseProduct} value={value} theadData={theadData} navigate={navigate}/>
}







export class TableData extends React.Component<TableProps> {
    constructor(props: TableProps) {
        super(props);
    }

    render() {

        const {
            theadData,
            trow,
            chooseProduct,
            checkedAll,
            changeCheckedWarehouse,
            value,
            navigate,
        } = this.props


        let onClickHandle = (id: string, title: string) => {
            chooseProduct(id, title)
            navigate("/warehouses/warehouse")
        }


        const styleCell = {
            display: "flex",
            alignItems: "center",
        }
        return <TableContainer component={Paper} style={{height: "78vh", userSelect: "none"}}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {theadData.map((th, index) => th === "All stores" ?
                            <TableCell style={styleCell} key={index}>
                                <CustomCheckbox value={value} onChangeChecked={checkedAll}/>
                                <div style={{marginLeft: 16}}>{th}</div>
                            </TableCell> :
                            <TableCell key={index}>{th}</TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {trow.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{"&:last-child td, &:last-child th": {border: 0}}}
                        >
                            <TableCell style={styleCell} component="th" scope="row">
                                <CustomCheckbox value={false}
                                                onChangeChecked={(value) => changeCheckedWarehouse(value, row.id.toString())}/>
                                <button style={{marginLeft: 12, userSelect: "none"}} className={styles.button}
                                        onClick={() => onClickHandle(row.id.toString(), row.name)}>{row.id}</button>
                            </TableCell>
                            <TableCell align="left">{row.name}</TableCell>
                            <TableCell align="left">{row.tagline}</TableCell>
                            <TableCell align="left">{row.first_brewed}</TableCell>
                            <TableCell align="left">
                                <img width={"30px"} height={"30px"} src= {row.image_url}/>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>;
    }
}