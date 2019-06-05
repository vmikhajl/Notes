const SET_NOTES_DATA = 'SET_NOTES_DATA';
const CREATE_NOTE = 'CREATE_NOTE';

let initialState = {
    token: 'wx2xk2xvsgv9lu4wq7z940bwyypirquuteeo',
    notes: [],
    id: 1
};

const notesReducer = (state = initialState , action) => {
    switch (action.type){
        case SET_NOTES_DATA:{

            return {
                ...state,
                notes: [...action.notes],
            };
        }
        case CREATE_NOTE:{
            return {
                ...state,
                id: state.id + 1,
                notes: [...state.notes, action.note],
            };
        }
        default:
            return state;
    }

};
export const setNotesAC = (notes) => ({type: SET_NOTES_DATA, notes: notes});
export const createNoteAC = (note) => ({type: CREATE_NOTE, note: note});

export default notesReducer;
