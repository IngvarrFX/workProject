import React from "react";


type TableHeadItemType = {
    item:string
}

export const TableHeadItem:React.FC<TableHeadItemType> = ({ item }) => {
    return (
        <td title={item}>
            {item}
        </td>
    );
};

