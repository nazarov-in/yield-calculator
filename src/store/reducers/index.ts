import {combineReducers} from 'redux'
import {depositReducer} from './depositReducer'
import {calculatorReducer} from "./calculatorReducer"

export const rootReducer = combineReducers({
    deposit: depositReducer,
    calculator: calculatorReducer
})

export type RootState = ReturnType<typeof rootReducer>
