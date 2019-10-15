export const switchTheme = (BaseTheme) => {
  return(dispatch) => {
    dispatch({
      type:"SWITCH_THEME",
      baseTheme:BaseTheme
    })
  }
}