import {connect} from "react-redux";
import CreateNote from "./CreateNote";
import {
    clearNewNoteAC,
    hideCreatorAC,
    showCreatorAC,
    updateContentAC,
    updateTitleAC
} from "../../../redux/reducer/CreateNoteReducer";
import {createNoteAC, setNotesAC} from "../../../redux/reducer/NotesReducer";


let mapStateToProps = (state) => {
    return {
        display: state.newNote.display,
        newNote: state.newNote.newNote,
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
        createNote: (note) => {
            dispatch(createNoteAC(note));
        },
        clearNote: () => {
            dispatch(clearNewNoteAC());
        },
        showCreator: () => {
            dispatch(showCreatorAC());
        },
        hideCreator: () => {
            dispatch(hideCreatorAC());
        },
        setNotes: (notes) => {
            dispatch(setNotesAC(notes));
        },

    }
};
const CreateNoteContainer = connect(mapStateToProps, mapDispatchToProps)(CreateNote);

export default CreateNoteContainer;
