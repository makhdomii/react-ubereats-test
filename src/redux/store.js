import { default as GeneralModule } from './reducer'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const defaultReducers = {
    General: GeneralModule,
}

const store = createStore(
    combineReducers(defaultReducers),
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store