import {connect} from "react-redux";
import {deleteNoteAC, setNotesAC} from "../../redux/reducer/NotesReducer";
import Notes from "./Notes";
import {toggleNoteAC} from "../../redux/reducer/EditNoteReducer";

let mapStateToProps = (state) => {
    return {
        notesData: state.notesData,
        editNote: state.editNote
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        setNotes: (notes) => {
            dispatch(setNotesAC(notes));
        },
        deleteNote: (id) => {
            dispatch(deleteNoteAC(id));
        },

        toggleNote: (note) => {
            dispatch(toggleNoteAC(note))
        }
    }
};
const NotesContainer = connect(mapStateToProps, mapDispatchToProps)(Notes);

export default NotesContainer;
