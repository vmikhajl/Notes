import {connect} from "react-redux";
import CreateNote from "./CreateNote";
import {clearNewNoteAC, updateContentAC, updateTitleAC} from "../../../redux/reducer/noteCreateReducer";
import {createNoteAC} from "../../../redux/reducer/NotesReducer";


let mapStateToProps = (state) => {

    return {
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
        }

    }
};
const CreateNoteContainer = connect(mapStateToProps, mapDispatchToProps)(CreateNote);

export default CreateNoteContainer;
