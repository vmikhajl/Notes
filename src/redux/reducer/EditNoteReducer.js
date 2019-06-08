const TOGGLE_NOTE = 'TOGGLE_NOTE';

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
        default:
            return state;
    }

};

export const toggleNoteAC = (note) => ({type: TOGGLE_NOTE, note: note});

export default editNoteReducer;
