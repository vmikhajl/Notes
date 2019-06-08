import {combineReducers, createStore} from "redux";
import notesReducer from "./reducer/NotesReducer";
import newNoteReducer from "./reducer/CreateNoteReducer";
import editNoteReducer from "./reducer/EditNoteReducer";


let reducers = combineReducers({
    notesData : notesReducer,
    newNote: newNoteReducer,
    editNote : editNoteReducer
});

let store = createStore(reducers);
store.subscribe(() => console.log(store.getState()));
window.store = store.getState();
export default store;
