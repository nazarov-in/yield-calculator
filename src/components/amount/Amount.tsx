import React from 'react'
import Slider from "react-rangeslider"
import './Amount.scss'

interface Props {
    amountValue: number
    onChangeAmount: (value: number) => void
    currency: string
    amount: string
}

const Amount: React.FC<Props> = (props: Props) => {
    const {amountValue, onChangeAmount, currency, amount} = props

    return (
        <div className="calculator-investment-amount">
            <div className="calculator-investment-range">
                <p className="calculator-text">Сумма инвестиций</p>
                <Slider
                    min={0}
                    max={100000}
                    step={100}
                    value={amountValue}
                    tooltip={false}
                    onChange={onChangeAmount}
                />
            </div>
            <div className="calculator-investment-summa">
                <p>{amount}</p>
                <span>{currency}</span>
            </div>
        </div>
    )
}

export default Amount
