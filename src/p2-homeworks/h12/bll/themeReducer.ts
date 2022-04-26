const initState = {
    theme: 'some'
};



export const themeReducer = (state = initState, action: ActionType): typeof initState => { // fix any
    switch (action.type) {
        case 'CHANGE-THEME': {
            return {...state, theme: action.theme};
        }
        default:
            return state;
    }
};

type ActionType = {
    type: 'CHANGE-THEME'
    theme: string
}

export const changeThemeC = (theme: string): ActionType => ({type: 'CHANGE-THEME', theme});