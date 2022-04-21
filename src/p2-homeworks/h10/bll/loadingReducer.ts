import {AppStoreType} from "./store"

export type loadingPropsType = { isLoading: boolean }

const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: ReturnType<typeof loadingAC>): loadingPropsType => {
    switch (action.type) {
        case 'LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean) => ({
    type: 'LOADING',
    isLoading
})