import {Dispatch} from "redux"

import {DepositAction, DepositActionTypes} from "../../types/deposit"

export const changeSelectDeposit = (newObject: object) => {
    return (dispatch: Dispatch<DepositAction>) => {
        dispatch({type: DepositActionTypes.DEPOSIT_TYPE, payload: newObject})
    }
}

export const fetchCurrency = (currency: string) => {
    return (dispatch: Dispatch<DepositAction>) => {
        dispatch({type: DepositActionTypes.DEPOSIT_CURRENCY_TYPE, payload: currency})
    }
}
