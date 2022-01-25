export interface optionsType {
    value: string,
    label: string
}

export interface customStyleType {
    menu: (provided:object) => any,
    control: (_:object) => any,
    singleValue: (provided:object, state:any) => object | any | string
}
