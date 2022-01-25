import {Dispatch} from "redux"

import {useBreakNumber} from "../../hooks"
import {CalculatorAction, CalculatorActionTypes} from "../../types/calculator"

export const fetchAmount = (sum: number) => {
    return (dispatch: Dispatch<CalculatorAction>) => {
        const {total} = useBreakNumber(sum)
        dispatch({type: CalculatorActionTypes.AMOUNT_TYPE, payload: total})
    }
}

export const fetchProfitAmount = (sum: number) => {
    return (dispatch: Dispatch<CalculatorAction>) => {
        const {total} = useBreakNumber(Math.trunc(sum))
        dispatch({type: CalculatorActionTypes.PROFIT_TYPE, payload: total})
    }
}

export const fetchTotalAmount = (sum: number, amountValue:number) => {
    return (dispatch: Dispatch<CalculatorAction>) => {
        const result = Math.trunc(sum + amountValue)
        const {total} = useBreakNumber(result)
        dispatch({type: CalculatorActionTypes.TOTAL_TYPE, payload: total})
    }
}

export const fetchMonthAmount = (month:number) => {
    return (dispatch: Dispatch<CalculatorAction>) => {
        const result = Math.floor(month * 4.167)
        dispatch({type: CalculatorActionTypes.MONTH_TYPE, payload: result})
    }
}
