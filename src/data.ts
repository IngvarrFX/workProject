export const data: DataType = [
    {
        "id": "1",
        "title": "Warehouse No. 1",
        "length": "82",
        "width": "29",
        "height": "9",
        selected: false,
        "products": [
            {
                "id": "11",
                "productName": "CC0603FRNPO",
                "manufacturer": "YAG",
                "itemNumber": "C88801",
                "purchasingTechnology": "S",
                "shipmentMethod": "AIR",
                selected: false,
            },
            {
                "id": "12",
                "productName": "CC0603FRNPO",
                "manufacturer": "YAG",
                "itemNumber": "C88802",
                "purchasingTechnology": "S",
                "shipmentMethod": "AIR",
                selected: false,
            },
            {
                "id": "13",
                "productName": "CC0603FRNPO",
                "manufacturer": "YAG",
                "itemNumber": "C88803",
                "purchasingTechnology": "S",
                "shipmentMethod": "SEA",
                selected: false,
            },
            {
                "id": "14",
                "productName": "CC0603FRNPO",
                "manufacturer": "YAG",
                "itemNumber": "C88804",
                "purchasingTechnology": "S",
                "shipmentMethod": "AIR",
                selected: false,
            },
            {
                "id": "15",
                "productName": "CC0603FRNPO",
                "manufacturer": "YAG",
                "itemNumber": "C88805",
                "purchasingTechnology": "S",
                "shipmentMethod": "SEA",
                selected: false,
            },
            {
                "id": "16",
                "productName": "CC0603FRNPO",
                "manufacturer": "YAG",
                "itemNumber": "C88806",
                "purchasingTechnology": "S",
                "shipmentMethod": "AIR",
                selected: false,
            }
        ]
    },
    {
        "id": "2",
        "title": "Warehouse No. 2",
        "length": "69",
        "width": "24",
        "height": "10",
        selected: false,
        "products": [
            {
                "id": "21",
                "productName": "CC0603FRNPO",
                "manufacturer": "YAG",
                "itemNumber": "C88101",
                "purchasingTechnology": "S",
                "shipmentMethod": "AIR",
                selected: false,
            },
            {
                "id": "22",
                "productName": "CC0603FRNPO",
                "manufacturer": "YAG",
                "itemNumber": "C88102",
                "purchasingTechnology": "S",
                "shipmentMethod": "SEA",
                selected: false,
            },
            {
                "id": "23",
                "productName": "CC0603FRNPO",
                "manufacturer": "YAG",
                "itemNumber": "C88103",
                "purchasingTechnology": "S",
                "shipmentMethod": "AIR",
                selected: false,
            },
            {
                "id": "24",
                "productName": "CC0603FRNPO",
                "manufacturer": "YAG",
                "itemNumber": "C88104",
                "purchasingTechnology": "S",
                "shipmentMethod": "SEA",
                selected: false,
            }
        ]
    },
    {
        "id": "3",
        "title": "Warehouse No. 3",
        "length": "72",
        "width": "24",
        "height": "6",
        selected: false,
        "products": [
            {
                "id": "31",
                "productName": "CC0603FRNPO",
                "manufacturer": "YAG",
                "itemNumber": "C88101",
                "purchasingTechnology": "S",
                "shipmentMethod": "AIR",
                selected: false,
            },
            {
                "id": "32",
                "productName": "CC0603FRNPO",
                "manufacturer": "YAG",
                "itemNumber": "C88102",
                "purchasingTechnology": "S",
                "shipmentMethod": "SEA",
                selected: false,
            }
        ]
    },
    {
        "id": "4",
        "title": "Warehouse No. 4",
        "length": "72",
        "width": "24",
        "height": "6",
        selected: false,
        "products": [
            {
                "id": "21",
                "productName": "CC0603FRNPO",
                "manufacturer": "YAG",
                "itemNumber": "C88101",
                "purchasingTechnology": "S",
                "shipmentMethod": "AIR",
                selected: false,
            },
            {
                "id": "22",
                "productName": "CC0603FRNPO",
                "manufacturer": "YAG",
                "itemNumber": "C88102",
                "purchasingTechnology": "S",
                "shipmentMethod": "SEA",
                selected: false,
            },
            {
                "id": "23",
                "productName": "CC0603FRNPO",
                "manufacturer": "YAG",
                "itemNumber": "C88103",
                "purchasingTechnology": "S",
                "shipmentMethod": "AIR",
                selected: false,
            },
            {
                "id": "24",
                "productName": "CC0603FRNPO",
                "manufacturer": "YAG",
                "itemNumber": "C88104",
                "purchasingTechnology": "S",
                "shipmentMethod": "SEA",
                selected: false,
            }
        ]
    }
    ,
]


export type DataType = WarehouseType[]


export type WarehouseType = {
    "id": string
    "title": string
    "length": string
    "width": string
    "height": string
    selected: boolean
    "products": ProductType[]
}


export type ProductType = {
    "id": string
    "productName": string
    "manufacturer": string
    "itemNumber": string
    "purchasingTechnology": string
    "shipmentMethod": ShipmentMethodType
    selected: boolean
}


export type ShipmentMethodType = "SEA" | "AIR" | "TRUCK"
