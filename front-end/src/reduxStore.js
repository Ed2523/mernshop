import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

//Reducer is like a robot that changes things in our store
//combineReducers 
const reducer = combineReducers({})


const initialState = {}

/*Redux Thunk middleware allows you to write action creators that 
return a function instead of an action. 
The thunk can be used to delay the dispatch of an action,
 or to dispatch only if a certain condition is met. 
The inner function receives the store methods dispatch and getState as parameters. */
const middleware = [thunk]

/*The createStore create a store XD, and receive two parameters
the first is the reducer that is a function in charge of making changes in our store,
the second one is the initial state
*/
const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(
        [...middleware]
    ))
)

export default store