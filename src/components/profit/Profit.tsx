import React, {useEffect, useState} from 'react'

import {useTypedSelector} from "../../hooks"
import {InvestmentProfit, ReceivedProfit} from './profitStyled'
import './Profit.scss'

interface keyable {[key: string]: any}

const Profit = () => {
    const {currency}: keyable = useTypedSelector(state => state.deposit)
    const {profit, amount, total, month} = useTypedSelector(state => state.calculator)
    const [percentage, setPercentage] = useState<number>(30)
    const [investment, setInvestment] = useState<number>(30)
    const [profitPercentage, setProfitPercentage] = useState<number>(42.0)

    useEffect(() => {
        const num:number = Number(amount.replace( /\s/g, "")) / 1000
        setInvestment(Math.floor(num))
        setPercentage(Math.floor(num) / 2)

        const numberAmount:number = Number(amount.replace( /\s/g, ""))
        const numberTotal:number = Number(total.replace( /\s/g, ""))
        const numb = (numberTotal - numberAmount) / numberAmount * 100

        if (Number.isFinite(numb)) setProfitPercentage(numb)
        else setProfitPercentage(0)
    }, [amount, month])

    return (
        <div className="profit-wrapper">
            <div className="profit-investment-wrapper">
                <div className="profit-investment">
                    <p>Инвестировали</p>
                    <span>{amount} {currency}</span>
                    <div className="profit-investment-box">
                        <InvestmentProfit investment={investment}/>
                    </div>
                </div>
                <div className="profit-investment-get">
                    <p>Получаете</p>
                    <span>{total} {currency}</span>
                    <div className="profit-investment-get-box">
                        <ReceivedProfit percentage={percentage} month={month} />
                    </div>
                </div>
            </div>
            <div className="profit-investment-inner">
                <div><p>Инвестиция</p><span>{amount} {currency}</span></div>
                <div><p>Процент прибыли</p><span>{profitPercentage.toFixed(1)}%</span></div>
            </div>
            <div className="profit-investment-total">
                <p>Прибыль с инвестиций</p>
                <span>{profit} {currency}</span>
            </div>
            <button className="profit-investment-btn">Инвестировать сейчас</button>
        </div>
    )
}

export default Profit
