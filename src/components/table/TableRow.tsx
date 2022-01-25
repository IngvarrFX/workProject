import React from "react";
import styles from "./TableRow.module.css"


type TableRowType = {
    data: string[]
}

export const TableRow:React.FC<TableRowType> = ({ data }) => {
    return (
        <tr>
            {data.map((item) => {
                return (
                    <td >{item}</td>
                )
            })}
        </tr>
    );
};

