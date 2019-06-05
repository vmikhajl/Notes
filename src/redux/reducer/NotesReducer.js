const SET_NOTES_DATA = 'SET_NOTES_DATA';

let initialState = {
    token: 'wx2xk2xvsgv9lu4wq7z940bwyypirquuteeo',
    notes: [
        {id: 1, title: 'Chicken', connect: 'asdfs'},
        {id: 2, title: 'Chicken1', connect: 'asdfs234'},
        {id: 3, title: 'Chicken2', connect: 'asdfs1212'},
        {id: 4, title: 'Chicken3', connect: 'asdfs55555'},
    ],
};

const notesReducer = (state = initialState , action) => {
    switch (action.type){
        case SET_NOTES_DATA:{
            return {
                ...state,
                notes: [...action.notes],
            };
        }

        default:
            return state;
    }

};
export const setNotesAC = (notes) => ({type: SET_NOTES_DATA, notes: notes});

export default notesReducer;
