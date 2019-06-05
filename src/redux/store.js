import {combineReducers, createStore} from "redux";
import notesReducer from "./reducer/NotesReducer";


let reducers = combineReducers({
    notesData : notesReducer
});

let store = createStore(reducers);
store.subscribe(() => console.log(store.getState()));

export default store;
