import {CalculatorAction, CalculatorActionTypes, CalculatorState} from "../../types/calculator"

const defaultState: CalculatorState = {
    amount: '30 000',
    profit: '12 600',
    total: '42 600',
    month: 16
}

export const calculatorReducer = (state = defaultState, action: CalculatorAction): CalculatorState => {
    switch (action.type) {
        case CalculatorActionTypes.AMOUNT_TYPE:
            return {...state, amount: action.payload}
        case CalculatorActionTypes.PROFIT_TYPE:
            return {...state, profit: action.payload}
        case CalculatorActionTypes.TOTAL_TYPE:
            return {...state, total: action.payload}
        case CalculatorActionTypes.MONTH_TYPE:
            return {...state, month: action.payload}
        default:
            return state
    }
}
