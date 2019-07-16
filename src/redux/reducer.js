// Reducer ....
export default function reducer(
    state = {
        splash: true,
        data: []
    },
    { type, payload }
) {
    switch (type) {
        // case SPLASH_CHANGED:
        //     return Object.assign({}, state, { splash: payload })

        // case CHANGE_DATA:
        //     return Object.assign({}, state, { data: payload })

        default:
            return state
    }
}
