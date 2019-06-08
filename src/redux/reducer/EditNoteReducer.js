const TOGGLE_NOTE = 'TOGGLE_NOTE';
const UPDATE_EDIT_TITLE = 'UPDATE_EDIT_TITLE';
const UPDATE_EDIT_CONTENT = 'UPDATE_EDIT_CONTENT';

let initialState = {
    toggleNote: false,
    note: {}
};

const editNoteReducer = (state = initialState , action) => {
    switch (action.type){
        case TOGGLE_NOTE:{
            return {
                ...state,
                toggleNote: !state.toggleNote,
                note: action.note
            }
        }
        case UPDATE_EDIT_TITLE:{
            return {
                ...state,
                note: {
                    ...state.note,
                    title : action.value,
                }
            };
        }
        case UPDATE_EDIT_CONTENT:{
            return {
                ...state,
                note: {
                        ...state.note,
                        content : action.value,
                    }
            };
        }
        default:
            return state;
    }

};

export const toggleNoteAC = (note) => ({type: TOGGLE_NOTE, note: note});
export const updateTitleAC = (value) => ({type: UPDATE_EDIT_TITLE, value: value});
export const updateContentAC = (value) => ({type: UPDATE_EDIT_CONTENT, value: value});

export default editNoteReducer;
