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


type BasicTablePropsType = {
    theadData: string[]
    trow: DataType
    chooseProduct: (id: string, title: string) => void
    checkedAll: (value: boolean) => void
    changeCheckedWarehouse: (value: boolean, warehouseID: string) => void
    value: boolean
}

type TableProps = {
    navigate:(value:string)=>void
    theadData: string[]
    trow: DataType
    chooseProduct: (id: string, title: string) => void
    checkedAll: (value: boolean) => void
    changeCheckedWarehouse: (value: boolean, warehouseID: string) => void
    value: boolean
};


/*
export const BasicTable: React.FC<BasicTablePropsType> = ({
                                                              theadData,
                                                              trow,
                                                              chooseProduct,
                                                              checkedAll,
                                                              changeCheckedWarehouse,
                                                              value
                                                          }) => {
    const navigate = useNavigate()

    const onClickHandle = (id: string, title: string) => {
        chooseProduct(id, title)
        navigate("/warehouses/warehouse")
    }


    const styleCell = {
        display: "flex",
        alignItems: "center",
    }

    return (
        <TableContainer component={Paper} style={{height: "78vh", userSelect: "none"}}>
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
                            key={row.id}
                            sx={{"&:last-child td, &:last-child th": {border: 0}}}
                        >

                            <TableCell style={styleCell} component="th" scope="row">
                                <CustomCheckbox value={row.selected}
                                                onChangeChecked={(value) => changeCheckedWarehouse(value, row.id)}/>

                                {/!*<input checked={row.selected} readOnly onChange={(e)=>changeCheckedWarehouse(e.currentTarget.checked, row.id)} type={"checkbox"} style={{textAlign: "center"}}/>*!/}
                                <button style={{marginLeft: 12, userSelect: "none"}} className={styles.button}
                                        onClick={() => onClickHandle(row.id, row.title)}>{row.title}</button>
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

*/

export const WrappedComponent:React.FC<BasicTablePropsType> = ({theadData,
                                                            trow,
                                                            chooseProduct,
                                                            checkedAll,
                                                            changeCheckedWarehouse,
                                                            value}) => {


    const navigate = useNavigate()

    return <BasicTable trow={trow} changeCheckedWarehouse={changeCheckedWarehouse} checkedAll={checkedAll} chooseProduct={chooseProduct} value={value} theadData={theadData} navigate={navigate} />
}


export class BasicTable extends React.Component<TableProps> {
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
                                key={row.id}
                                sx={{"&:last-child td, &:last-child th": {border: 0}}}
                            >
                                <TableCell style={styleCell} component="th" scope="row">
                                    <CustomCheckbox value={row.selected}
                                                    onChangeChecked={(value) => changeCheckedWarehouse(value, row.id)}/>
                                    <button style={{marginLeft: 12, userSelect: "none"}} className={styles.button}
                                            onClick={() => onClickHandle(row.id, row.title)}>{row.title}</button>
                                </TableCell>
                                <TableCell align="left">{row.products.length}</TableCell>
                                <TableCell align="left">{row.length}</TableCell>
                                <TableCell align="left">{row.width}</TableCell>
                                <TableCell align="left">{row.height}</TableCell>
                            </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>;
    }
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


/*
<input  type={"checkbox"} onChange={(e) => checkedAll(e.currentTarget.checked)}/>
{th}*/
