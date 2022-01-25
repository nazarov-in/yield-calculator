import React from 'react'
import Select from 'react-select'

import {optionsType, customStyleType} from '../../types/data'
import './Deposit.scss'

interface Props {
    options: optionsType[]
    customStyle: customStyleType
    changeTypeDeposit: (value: any) => void
    depositType: object
    handlerCurrency: (e: React.MouseEvent<HTMLElement>) => void
    currentSelect: any
}

const Deposit: React.FC<Props> = (props: Props) => {
    const {options, customStyle, changeTypeDeposit, depositType, handlerCurrency, currentSelect} = props

    return (
        <div className="calculator-deposit">
            <div className="calculator-deposit-select">
                <p className="calculator-text">Тип депозита</p>
                <Select
                    options={options}
                    styles={customStyle}
                    onChange={changeTypeDeposit}
                    defaultValue={depositType}
                />
            </div>
            <ul className="calculator-deposit-money" ref={currentSelect}>
                <li id="Btc" onClick={handlerCurrency}>Btc</li>
                <li id="Uah" onClick={handlerCurrency}>Uah</li>
                <li id="Rub" onClick={handlerCurrency}>Rub</li>
                <li id="Eur" onClick={handlerCurrency}>Eur</li>
                <li id="Usd" onClick={handlerCurrency}>Usd</li>
            </ul>
        </div>
    )
}

export default Deposit
