import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {photosReducer} from "./photos-reducer";

let rootReducer = combineReducers({
  photo: photosReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;

// @ts-ignore
window.store = store