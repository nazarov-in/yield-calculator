import {DepositAction, DepositActionTypes, DepositState} from "../../types/deposit"

const defaultState: DepositState = {
    depositType: {
        value: 'standart',
        label: 'Стандартный'
    },
    currency: 'Btc'
}

export const depositReducer = (state = defaultState, action: DepositAction): DepositState => {
    switch (action.type) {
        case DepositActionTypes.DEPOSIT_TYPE:
            return {...state, depositType: action.payload}
        case DepositActionTypes.DEPOSIT_CURRENCY_TYPE:
            return {...state, currency: action.payload}
        default:
            return state
    }
}
