import style from '../../components/Notes/CreateNote/CreateNote.module.css'

const UPDATE_TITLE = 'UPDATE_TITLE';
const UPDATE_CONTENT = 'UPDATE_CONTENT';
const CLEAR_NEW_NOTE = 'CLEAR_NEW_NOTE';
const HIDE_NOTE_CREATOR = 'HIDE_NOTE_CREATOR';
const SHOW_NOTE_CREATOR = 'SHOW_NOTE_CREATOR';

let initialState = {
    newNote: {title: '', content: ''},
    display: {
        visibility: true,
        displayStyle: style.createNote
    }

};

const newNoteReducer = (state = initialState , action) => {
    switch (action.type){
        case UPDATE_TITLE:{
            return {
                ...state,
                newNote:{...state.newNote,
                    title : action.value,
                }
            };
        }
        case UPDATE_CONTENT:{
            return {
                ...state,
                newNote:{...state.newNote,
                    content : action.value,
                }
            };
        }
        case CLEAR_NEW_NOTE:{
            return {
                ...state,
                newNote:{...state.newNote,
                    content : '',
                    title: ''
                }
            };
        }
        case HIDE_NOTE_CREATOR:{
            return {
                ...state,
                display: {
                    ...state.display,
                    visibility: false,
                    displayStyle: style.createNoteHidden
                }
            }
        }
        case SHOW_NOTE_CREATOR:{
            return {
                ...state,
                display: {
                    ...state.display,
                    visibility: true,
                    displayStyle: style.createNote
                }
            }
        }
        default:
            return state;
    }

};
export const updateTitleAC = (value) => ({type: UPDATE_TITLE, value: value});
export const updateContentAC = (value) => ({type: UPDATE_CONTENT, value: value});
export const clearNewNoteAC = () => ({type: CLEAR_NEW_NOTE});
export const showCreatorAC = () => ({type: SHOW_NOTE_CREATOR});
export const hideCreatorAC = () => ({type: HIDE_NOTE_CREATOR});

export default newNoteReducer;
