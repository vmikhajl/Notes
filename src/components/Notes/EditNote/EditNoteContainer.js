import {connect} from "react-redux";
import {
    toggleNoteAC,
    updateContentAC,
    updateTitleAC
} from "../../../redux/reducer/EditNoteReducer";
import EditNote from "./EditNote";
import {deleteNoteAC, updateNoteAC} from "../../../redux/reducer/NotesReducer";

let mapStateToProps = (state) => {
    return {
        editNote: state.editNote.note,
        notesData: state.notesData
    }
};
let mapDispatchToProps = (dispatch) => {

    return {
        updateTitle: (value) => {
            dispatch(updateTitleAC(value));
        },
        updateContent: (value) => {
            dispatch(updateContentAC(value));
        },
        deleteNote: (id) => {
            dispatch(deleteNoteAC(id));
        },
        toggleNote: (note) => {
            dispatch(toggleNoteAC(note));
        },
        saveChanges: (newData) => {
            dispatch(updateNoteAC(newData));
        }

    }
};
const EditNoteContainer = connect(mapStateToProps, mapDispatchToProps)(EditNote);

export default EditNoteContainer;
