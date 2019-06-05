import {combineReducers, createStore} from "redux";
import notesReducer from "./reducer/NotesReducer";
import newNoteReducer from "./reducer/noteCreateReducer";


let reducers = combineReducers({
    notesData : notesReducer,
    newNote: newNoteReducer
});

let store = createStore(reducers);
store.subscribe(() => console.log(store.getState()));
window.store = store.getState();
export default store;
