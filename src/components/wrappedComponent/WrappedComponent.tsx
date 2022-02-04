import React, {useMemo, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../store/store";
import {ApiImprovedDataType} from "../../types/types";
import {TableData} from "../table/tableData";


type BasicTablePropsType = {
    theadData: string[]
    trow: ApiImprovedDataType[]
    chooseProduct: (id: string, title: string) => void
    changeCheckedWarehouse: (value: boolean, warehouseID: string) => void
    /*value: boolean*/
}


export const WrappedComponent: React.FC<BasicTablePropsType> = ({
                                                                    theadData,
                                                                    trow,
                                                                    chooseProduct,
                                                                    changeCheckedWarehouse,
                                                                }) => {


    const navigate = useNavigate();
    const dispatch = useDispatch();
    const data = useSelector<AppStateType, ApiImprovedDataType[]>(state => state.table.items);
    // const checkedAll = useSelector<AppStateType, boolean>(state => state.table.checkedAll );

    const [checkedAll, setCheckedAll] = useState(false)


    const onCheckedAll = (value: boolean) => {
        dispatch({type: "CHECKED_ALL", payload: {value}})
    }




    const isAllSelectedItems = useMemo(() => {
        return data.filter(item => !item.selected)
    }, [data])



/*
    if (!isAllSelectedItems.length) {
        setCheckedAll(true)
        //dispatch({type: "CHECKED_ALL_ITEMS"})
    }


    if (isAllSelectedItems.length) {
        setCheckedAll(false)
        //dispatch({type: "UNCHECKED_ALL_ITEMS"})
    }*/


    if (!isAllSelectedItems.length) {
        dispatch({type: "CHECKED_ALL", payload: {value: false}})
    }


    return <TableData trow={trow} changeCheckedWarehouse={changeCheckedWarehouse}
                      checkedAll={onCheckedAll}
                      chooseProduct={chooseProduct} value={checkedAll} theadData={theadData} navigate={navigate}/>
}