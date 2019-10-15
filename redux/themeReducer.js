import {lightTheme} from '../styles/theme'


const initialState = {
  theme: {lightTheme}
}

export default function(state = initialState, action){
  switch(action.type){
    case "SWITCH_THEME":
      let newState = {
        ...state,
        theme:{...state.theme, ...action.baseTheme}
      }
      return newState

      default:
        return state
  }
}