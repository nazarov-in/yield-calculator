export interface DepositState {
    depositType: object,
    currency: string
}

export enum DepositActionTypes {
    DEPOSIT_TYPE = "DEPOSIT_TYPE",
    DEPOSIT_CURRENCY_TYPE = 'DEPOSIT_CURRENCY_TYPE'
}

interface DepositTypeAction {
    type: DepositActionTypes.DEPOSIT_TYPE
    payload: object
}

interface DepositCurrencyAction {
    type: DepositActionTypes.DEPOSIT_CURRENCY_TYPE
    payload: string
}

export type DepositAction = DepositTypeAction | DepositCurrencyAction
