import {AppStoreType} from "./store"

export type loadingPropsType = { loading: boolean }

const initState = {
    loading: false
}

export const loadingReducer = (state = initState, action: ReturnType<typeof loadingAC>): loadingPropsType => {
    switch (action.type) {
        case 'LOADING': {
            return {...state, loading: action.loading}
        }
        default:
            return state
    }
}

export const loadingAC = (loading: boolean) => ({
    type: 'LOADING',
    loading: loading
})