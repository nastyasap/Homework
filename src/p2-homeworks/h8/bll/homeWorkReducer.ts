import {UserType} from '../HW8'

type SortActionType = {
    type: 'sort'
    payload: 'up' | 'down'
}

type CheckActionType = {
    type: 'check'
    payload: 18
}

type ActionType = SortActionType | CheckActionType

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
                return [...state].sort((a, b) => a.name < b.name ? -1 : 1)
            }
            else {
                return [...state].sort((a, b) => a.name > b.name ? -1 : 1)
            }
        }
        // return [...state.sort((a, b) => a.name > b.name ? -1 : 1)]

        case 'check': {
            return state.filter(i => i.age > action.payload).sort((a, b) => b.age - a.age)
        }
        default:
            return state
    }
}


