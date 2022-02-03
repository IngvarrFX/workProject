import {InitialStateType} from "../../types/types";
import {SetDataType} from "../actions/setData";
import {SetUncheckedWarehousesType} from "../actions/setUncheckedWarehouses";
import {SetCheckedItemType} from "../actions/setCheckItem";
import {SetCheckedWarehousesType} from "../actions/setChecked";
import {AddItemType} from "../actions/addItem";
import {RemoveWarehousesType} from "../actions/removeWarehouses";


const initialState: InitialStateType = {
    checkedAll: false,
    items: []
}


export const tableReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "SET_DATA": {
            return {...state, items: [...state.items, ...action.payload]}
        }

        case "ADD_ITEM": {
            return {
                ...state, items: [{
                    "id": action.id,
                    "name": action.name,
                    "tagline": action.tagline,
                    "first_brewed": action.firstBrewed,
                    "description": "string",
                    "image_url": action.image,
                    "abv": 2,
                    "ibu": 2,
                    "target_fg": 2,
                    "target_og": 2,
                    "ebc": 2,
                    "srm": 2,
                    "ph": 2,
                    "selected": false,
                    "attenuation_level": 1,
                    "volume": {
                        "value": 2,
                        "unit": "s",
                    },
                    "boil_volume": {
                        "value": 2,
                        "unit": "sdf",
                    },
                    "method": {
                        "mash_temp": [
                            {
                                "temp": {
                                    "value": 2,
                                    "unit": "string",
                                },
                                "duration": 3,
                            }
                        ],
                        "fermentation": {
                            "temp": {
                                "value": 3,
                                "unit": "string",
                            }
                        },
                        "twist": null
                    },
                    "ingredients": {
                        "malt": [
                            {
                                "name": "string",
                                "amount": {
                                    "value": 3,
                                    "unit": "ing",
                                }
                            },
                            {
                                "name": "string",
                                "amount": {
                                    "value": 2,
                                    "unit": "string",
                                }
                            },
                            {
                                "name": "string",
                                "amount": {
                                    "value": 2,
                                    "unit": "string",
                                }
                            }
                        ],
                        "hops": [
                            {
                                "name": "string",
                                "amount": {
                                    "value": 2,
                                    "unit": "string",
                                },
                                "add": "string",
                                "attribute": "string",
                            },
                            {
                                "name": "string",
                                "amount": {
                                    "value": 2,
                                    "unit": "string",
                                },
                                "add": "string",
                                "attribute": "string",
                            },
                            {
                                "name": "string",
                                "amount": {
                                    "value": 2,
                                    "unit": "string",
                                },
                                "add": "string",
                                "attribute": "string",
                            },
                            {
                                "name": "string",
                                "amount": {
                                    "value": 2,
                                    "unit": "string",
                                },
                                "add": "string",
                                "attribute": "string",
                            },
                            {
                                "name": "string",
                                "amount": {
                                    "value": 2,
                                    "unit": "string",
                                },
                                "add": "string",
                                "attribute": "string",
                            }
                        ],
                        "yeast": "string",
                    }
                },...state.items]
            }
        }

        case "SET_CHECKED_ALL_WAREHOUSES": {
            return {...state, items: state.items.map(item => ({...item, selected: true}))}
        }
        case "SET_UNCHECKED_WAREHOUSES": {
            return {...state, items: state.items.map(item => ({...item, selected: false}))}
        }
        case "SET_CHECKED_ITEM": {
            return {
                ...state, items: state.items.map(item => item.id.toString() === action.payload.id ? {
                    ...item,
                    selected: action.payload.value
                } : item)
            }
        }
        case "REMOVE_WAREHOUSES": {
            return {...state, items: state.items.filter(warehouse => !action.payload.includes(warehouse.id))}
        }
        default:
            return state
    }
}

type ActionType = SetDataType
    | SetCheckedItemType
    | SetCheckedWarehousesType
    | SetUncheckedWarehousesType
    | AddItemType
    | RemoveWarehousesType