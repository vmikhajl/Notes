import * as axios from 'axios'

const SET_NOTES_DATA = 'SET_NOTES_DATA';
const CREATE_NOTE = 'CREATE_NOTE';
const DELETE_NOTE = 'DELETE_NOTE';
const UPDATE_NOTE = 'UPDATE_NOTE';


const API = {
    headers: {
        'Authorization': 'Bearer wx2xk2xvsgv9lu4wq7z940bwyypirquuteeo'
    }
};

let initialState = {
    axios: axios.create(API),
    url: 'http://159.89.96.181/api/v1/notes',
    token: 'wx2xk2xvsgv9lu4wq7z940bwyypirquuteeo',
    notes: [],
    toggleNote: false
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
                notes: [...state.notes, action.note]
            };
        }
        case DELETE_NOTE:{
            return {
                ...state,
                notes: state.notes.filter(function(note) {
                    return note.id !== action.id;
                })
            }
        }
        case UPDATE_NOTE:{
            return {
                ...state,
                notes: state.notes.map(function(note) {
                    if (note.id === action.newData.id) {
                        return action.newData;
                    }
                    return note;
                })
            }
        }
        default:
            return state;
    }

};
export const setNotesAC = (notes) => ({type: SET_NOTES_DATA, notes: notes});
export const createNoteAC = (note) => ({type: CREATE_NOTE, note: note});
export const deleteNoteAC = (id) => ({type: DELETE_NOTE, id: id});
export const updateNoteAC = (newData) => ({type: UPDATE_NOTE, newData: newData});

export default notesReducer;
