export const SPLASH_CHANGED = 'SPLASH_CHANGED'
export const CHANGE_DATA = 'CHANGE_DATA'

/**
 * Change splash visibility
 */
export function changeSplash(show = true) {
  return {
    type: SPLASH_CHANGED,
    payload: show
  }
}

/**
 * Show splash
 */
export function showSplash() {
  return dispatch => {
    dispatch(changeSplash(true))
  }
}

export function changeData(data) {
  return {
    type: CHANGE_DATA,
    payload: data
  }
}

/**
 * Hide splash
 */
export function hideSplash() {
  return dispatch => {
    dispatch(changeSplash(false))
    // axios.get('/data')
    //   .then(r => {
    //     const data = r.data.sample

    //     dispatch(changeData(data))
    //   })
  }
}

export function changeRealData() {
  return dispatch => {
    const data = [
      {
        name: "hos",
        fname: "nsr"
      }
    ]
    dispatch(changeData(data))
    // axios.get('/data')
    //   .then(r => {
    //     const data = r.data.sample

    //     dispatch(changeData(data))
    //   })
  }
}

