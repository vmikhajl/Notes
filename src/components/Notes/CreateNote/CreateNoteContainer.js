import {connect} from "react-redux";
import CreateNote from "./CreateNote";
import {
    clearNewNoteAC,
    hideCreatorAC,
    showCreatorAC,
    updateContentAC,
    updateTitleAC
} from "../../../redux/reducer/noteCreateReducer";
import {createNoteAC} from "../../../redux/reducer/NotesReducer";


let mapStateToProps = (state) => {
    return {
        display: state.newNote.display,
        newNote: state.newNote.newNote,
        notesData: state.notesData
    }
};
let mapDispatchToProps = (dispatch) => {

    return {
        updateTitle: (value, id) => {
            dispatch(updateTitleAC(value, id));
        },
        updateContent: (value, id) => {
            dispatch(updateContentAC(value, id));
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

    }
};
const CreateNoteContainer = connect(mapStateToProps, mapDispatchToProps)(CreateNote);

export default CreateNoteContainer;
