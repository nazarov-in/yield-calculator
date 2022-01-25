export interface CalculatorState {
    amount: string
    profit: string
    total: string
    month: number
}

export enum CalculatorActionTypes {
    AMOUNT_TYPE = 'AMOUNT_TYPE',
    PROFIT_TYPE = 'PROFIT_TYPE',
    TOTAL_TYPE = 'TOTAL_TYPE',
    MONTH_TYPE = 'MONTH_TYPE'
}

interface CalculatorAmountAction {
    type: CalculatorActionTypes.AMOUNT_TYPE
    payload: string
}

interface CalculatorProfitAction {
    type: CalculatorActionTypes.PROFIT_TYPE
    payload: string
}

interface CalculatorTotalAction {
    type: CalculatorActionTypes.TOTAL_TYPE
    payload: string
}

interface CalculatorMonthAction {
    type: CalculatorActionTypes.MONTH_TYPE
    payload: number
}

export type CalculatorAction =
    CalculatorAmountAction
    | CalculatorProfitAction
    | CalculatorTotalAction
    | CalculatorMonthAction
