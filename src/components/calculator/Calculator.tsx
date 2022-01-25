import React, {useEffect, useRef, useState} from 'react'
import {useDispatch} from "react-redux"
import "react-rangeslider/lib/index.css"

import {optionsType, customStyleType} from '../../types/data'
import {
    fetchAmount,
    fetchMonthAmount,
    fetchProfitAmount,
    fetchTotalAmount
} from "../../store/action-creators/calculator"
import {changeSelectDeposit} from "../../store/action-creators/deposit"
import {useTypedSelector} from "../../hooks"
import {fetchCurrency} from "../../store/action-creators/deposit"
import Calendar from "../calendar"
import Amount from "../amount"
import Time from "../time"
import Deposit from "../deposit"
import './Calculator.scss'

const Calculator: React.FC = () => {
    const [amountValue, setAmountValue] = useState<number>(30000)
    const [timeValue, setTimeValue] = useState<number>(4)
    const [resultRate, setResultRate] = useState<number>(0.12)
    const currentSelect = useRef<HTMLElement>(null)
    const activeMonth = useRef<HTMLDivElement>(null)
    const dispatch = useDispatch()

    const {depositType, currency} = useTypedSelector(state => state.deposit)
    const {amount} = useTypedSelector(state => state.calculator)

    useEffect(() => {
        if(currentSelect && currentSelect.current) {
            const list = currentSelect.current.children
            list[0].classList.add('current-active')
        }

        if (activeMonth && activeMonth.current) {
            const listMonth = activeMonth.current.children

            for (let i = 0; i < listMonth.length; i++) {
                listMonth[i].classList.remove('active-month')
                if (Number(listMonth[i].id) === timeValue) {
                    listMonth[i].classList.add('active-month')
                }
            }
        }
    }, [timeValue])

    const options: optionsType[] = [
        { value: 'standart', label: 'Стандартный' },
        { value: 'quick', label: 'Быстрый' },
    ]

    const customStyle: customStyleType = {
        menu: (provided) => ({
            ...provided, width: '250px',
        }),

        control: (_) => ({
            display: 'flex',
            width: '250px',
            height: '45px',
            border: '2px solid #EEEEEE',
            borderRadius: '9px',
            fontSize: '17px',
            fontWeight: '500',
            color: '#222'
        }),

        singleValue: (provided, state) => {
            const opacity:number = state.isDisabled ? 0.5 : 1
            const transition:string = 'opacity 300ms'

            return { ...provided, opacity, transition }
        }
    }

    const changeTypeDeposit = (value: object):void => {
        dispatch(changeSelectDeposit(value))
    }

    const handlerCurrency = (e: React.MouseEvent<HTMLElement>): void => {
        const {currentTarget: {id: currency}} = e
        dispatch(fetchCurrency(currency))

        if(currentSelect && currentSelect.current) {
            const list = currentSelect.current.children
            for (let i = 0; i < list.length; i++) {
                list[i].classList.remove('current-active')
            }

            e.currentTarget.classList.add('current-active')
        }
    }

    const handlerCalculator = (value:number, month: number): void => {
        const days = value * 30

        if ( value >= 1 && value <= 4 ) {
            setResultRate(0.12)
            const setDataInAction = month / 100 * 0.12 * days
            dispatch(fetchProfitAmount(setDataInAction))
            dispatch(fetchTotalAmount(setDataInAction, month))
        }
        else if ( value > 4 && value <= 8 ) {
            setResultRate(0.37)
            const setDataInAction = month / 100 * 0.37 * days
            dispatch(fetchProfitAmount(setDataInAction))
            dispatch(fetchTotalAmount(setDataInAction, month))
        }
        else if ( value > 8 && value <= 12 ) {
            setResultRate(0.55)
            const setDataInAction = month / 100 * 0.55 * days
            dispatch(fetchProfitAmount(setDataInAction))
            dispatch(fetchTotalAmount(setDataInAction, month))
        }
    }

    const onChangeAmount = (value: number): void => {
        setAmountValue(value)
        dispatch(fetchAmount(value))
        handlerCalculator(timeValue, value)
    }

    const onChangeTime = (value: number): void => {
        setTimeValue(value)
        handlerCalculator(value, amountValue)
        dispatch(fetchMonthAmount(value))
    }

    return (
        <div className="calculator-wrapper">
            <div className="calculator-title">
                <div className="calculator-logo"><img src="image/logo.png" alt="Logo"/></div>
                <h1>Калькулятор доходности</h1>
            </div>
            <Deposit
                options={options}
                customStyle={customStyle}
                changeTypeDeposit={changeTypeDeposit}
                depositType={depositType}
                handlerCurrency={handlerCurrency}
                currentSelect={currentSelect}
            />
            <Amount
                amountValue={amountValue}
                onChangeAmount={onChangeAmount}
                currency={currency}
                amount={amount}
            />
            <Time
                onChangeTime={onChangeTime}
                timeValue={timeValue}
                resultRate={resultRate}
                activeMonth={activeMonth}
            />
            <Calendar timeValue={timeValue}/>
        </div>
    )
}

export default Calculator
