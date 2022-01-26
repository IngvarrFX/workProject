import {DataType} from "../../data";
import {AddWarehouseType} from "../actions/addWarehouse";
import {AddProductType} from "../actions/addProduct";
import {SetCheckedWarehousesType} from "../actions/setChecked";
import {SetUncheckedWarehousesType} from "../actions/setUncheckedWarehouses";
import {SetCheckedAllProductType} from "../actions/setCheckedAllProduct";
import {SetUnCheckedAllProductType} from "../actions/setUncheckedAllProduct";
import {SetCheckedProductType} from "../actions/setCheckedProduct";
import {SetCheckedWarehouseType} from "../actions/setCheckWarehouse";


const initialState: DataType = [
    {
        id: "1",
        title: "Warehouse No. 1",
        length: "82",
        width: "29",
        height: "9",
        selected: false,
        products: [
            {
                id: "11",
                productName: "CC0603FRNPO",
                manufacturer: "YAG",
                itemNumber: "C88801",
                purchasingTechnology: "S",
                shipmentMethod: "AIR",
                selected: false,
            },
            {
                id: "12",
                productName: "CC0603FRNPO",
                manufacturer: "YAG",
                itemNumber: "C88802",
                purchasingTechnology: "S",
                shipmentMethod: "AIR",
                selected: false,
            },
            {
                id: "13",
                productName: "CC0603FRNPO",
                manufacturer: "YAG",
                itemNumber: "C88803",
                purchasingTechnology: "S",
                shipmentMethod: "SEA",
                selected: false,
            },
            {
                id: "14",
                productName: "CC0603FRNPO",
                manufacturer: "YAG",
                itemNumber: "C88804",
                purchasingTechnology: "S",
                shipmentMethod: "AIR",
                selected: false,
            },
            {
                id: "15",
                productName: "CC0603FRNPO",
                manufacturer: "YAG",
                itemNumber: "C88805",
                purchasingTechnology: "S",
                shipmentMethod: "SEA",
                selected: false,
            },
            {
                id: "16",
                productName: "CC0603FRNPO",
                manufacturer: "YAG",
                itemNumber: "C88806",
                purchasingTechnology: "S",
                shipmentMethod: "AIR",
                selected: false,
            }
        ]
    },
    {
        id: "2",
        title: "Warehouse No. 2",
        length: "69",
        width: "24",
        height: "10",
        selected: false,
        products: [
            {
                id: "21",
                productName: "CC0603FRNPO",
                manufacturer: "YAG",
                itemNumber: "C88101",
                purchasingTechnology: "S",
                shipmentMethod: "AIR",
                selected: false,
            },
            {
                id: "22",
                productName: "CC0603FRNPO",
                manufacturer: "YAG",
                itemNumber: "C88102",
                purchasingTechnology: "S",
                shipmentMethod: "SEA",
                selected: false,
            },
            {
                id: "23",
                productName: "CC0603FRNPO",
                manufacturer: "YAG",
                itemNumber: "C88103",
                purchasingTechnology: "S",
                shipmentMethod: "AIR",
                selected: false,
            },
            {
                id: "24",
                productName: "CC0603FRNPO",
                manufacturer: "YAG",
                itemNumber: "C88104",
                purchasingTechnology: "S",
                shipmentMethod: "SEA",
                selected: false,
            }
        ]
    },
    {
        id: "3",
        title: "Warehouse No. 3",
        length: "72",
        width: "24",
        height: "6",
        selected: false,
        products: [
            {
                id: "31",
                productName: "CC0603FRNPO",
                manufacturer: "YAG",
                itemNumber: "C88101",
                purchasingTechnology: "S",
                shipmentMethod: "AIR",
                selected: false,
            },
            {
                id: "32",
                productName: "CC0603FRNPO",
                manufacturer: "YAG",
                itemNumber: "C88102",
                purchasingTechnology: "S",
                shipmentMethod: "SEA",
                selected: false,
            }
        ]
    },
    {
        id: "4",
        title: "Warehouse No. 4",
        length: "72",
        width: "24",
        height: "6",
        selected: false,
        products: [
            {
                id: "21",
                productName: "CC0603FRNPO",
                manufacturer: "YAG",
                itemNumber: "C88101",
                purchasingTechnology: "S",
                shipmentMethod: "AIR",
                selected: false,
            },
            {
                id: "22",
                productName: "CC0603FRNPO",
                manufacturer: "YAG",
                itemNumber: "C88102",
                purchasingTechnology: "S",
                shipmentMethod: "SEA",
                selected: false,
            },
            {
                id: "23",
                productName: "CC0603FRNPO",
                manufacturer: "YAG",
                itemNumber: "C88103",
                purchasingTechnology: "S",
                shipmentMethod: "AIR",
                selected: false,
            },
            {
                id: "24",
                productName: "CC0603FRNPO",
                manufacturer: "YAG",
                itemNumber: "C88104",
                purchasingTechnology: "S",
                shipmentMethod: "SEA",
                selected: false,
            }
        ]
    }
    ,
]


export const WarehouseReducer = (state = initialState, action: ActionType): DataType => {
    switch (action.type) {
        case "ADD_WAREHOUSE": {
            return [{
                id: action.id,
                title: action.name,
                length: action.lenght,
                width: action.width,
                height: action.height,
                selected: false,
                products: [],
            }, ...state,]
        }
        case "ADD_PRODUCT": {
            return state.map(warehouse => warehouse.id === action.data.warehouseId ? {
                ...warehouse, products: [...warehouse.products, {
                    id: action.data.id,
                    productName: action.data.productName,
                    manufacturer: action.data.manufacturer,
                    itemNumber: action.data.itemNumber,
                    purchasingTechnology: action.data.payMethod,
                    shipmentMethod: action.data.shipMethod,
                    selected: false,
                }]
            } : warehouse)
        }
        case "SET_CHECKED_ALL_WAREHOUSES": {
            return state.map(warehouse => ({...warehouse, selected: true}))
        }
        case "SET_UNCHECKED_WAREHOUSES": {
            return state.map(warehouse => ({...warehouse, selected: false}))
        }
        case "SET_CHECKED_ALL_PRODUCT": {
            const warehouse = state.filter(warehouse => warehouse.id === action.idWarehouse)[0]
            const checkProducts = warehouse.products.map(product => ({...product, selected: true}))
            return state.map(warehouse => warehouse.id === action.idWarehouse ? {
                ...warehouse,
                products: checkProducts
            } : warehouse)

        }
        case "SET_UNCHECKED_ALL_PRODUCT": {
            const warehouse = state.filter(warehouse => warehouse.id === action.idWarehouse)[0]
            const checkProducts = warehouse.products.map(product => ({...product, selected: false}))
            return state.map(warehouse => warehouse.id === action.idWarehouse ? {
                ...warehouse,
                products: checkProducts
            } : warehouse)
        }
        case "SET_CHECKED_WAREHOUSE": {
            return state.map(warehouse => warehouse.id === action.idWarehouse ? {...warehouse, selected: action.value} : warehouse)
        }
        case "SET_CHECKED_PRODUCT": {
            const warehouse = state.filter(warehouse => warehouse.id === action.idWarehouse)[0]
            const checkProducts = warehouse.products.map(product => product.id === action.productId ? {
                ...product,
                selected: action.value
            } : product)
            return state.map(warehouse => warehouse.id === action.idWarehouse ? {...warehouse, products: checkProducts} : warehouse)
        }
        default:
            return state
    }
}

type ActionType = AddWarehouseType
    | AddProductType
    | SetCheckedWarehousesType
    | SetUncheckedWarehousesType
    | SetCheckedAllProductType
    | SetUnCheckedAllProductType
    | SetCheckedProductType
    | SetCheckedWarehouseType
