import {TypedUseSelectorHook, useSelector} from "react-redux"
import {RootState} from "../store/reducers"

export const useBreakNumber = (totalPrice: number) => {
    const total:string = String(totalPrice)
        .replace(/(\d)(?=(\d{3})+([^\d]|$))/g, "$1 ")

    return {total}
}

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
