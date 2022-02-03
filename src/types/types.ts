export interface ApiDataType  {
    "id": string
    "name": string
    "tagline": string
    "first_brewed": string
    "description": string
    "image_url": string
    "abv": number
    "ibu": number
    "target_fg": number
    "target_og": number
    "ebc": number
    "srm": number
    "ph": number
    "attenuation_level": number
    "volume": {
        "value": number
        "unit": string
    },
    "boil_volume": {
        "value": number
        "unit": string
    },
    "method": {
        "mash_temp": [
            {
                "temp": {
                    "value": number,
                    "unit": string
                },
                "duration": number
            }
        ],
        "fermentation": {
            "temp": {
                "value": number
                "unit": string
            }
        },
        "twist": null
    },
    "ingredients": {
        "malt": [
            {
                "name": string
                "amount": {
                    "value": number
                    "unit": string
                }
            },
            {
                "name": string
                "amount": {
                    "value": number
                    "unit": string
                }
            },
            {
                "name": string
                "amount": {
                    "value": number
                    "unit": string
                }
            }
        ],
        "hops": [
            {
                "name": string
                "amount": {
                    "value": number
                    "unit": string
                },
                "add": string
                "attribute": string
            },
            {
                "name": string
                "amount": {
                    "value": number
                    "unit": string
                },
                "add": string
                "attribute": string
            },
            {
                "name": string
                "amount": {
                    "value": number
                    "unit": string
                },
                "add": string
                "attribute": string
            },
            {
                "name": string
                "amount": {
                    "value": number
                    "unit": string
                },
                "add": string
                "attribute": string
            },
            {
                "name": string
                "amount": {
                    "value": number
                    "unit": string
                },
                "add": string
                "attribute": string
            }
        ],
        "yeast": string
    }
}

export interface ApiImprovedDataType extends ApiDataType{
    selected: boolean
}

export type InitialStateType = {
    checkedAll: boolean
    items: ApiImprovedDataType[] | []
}