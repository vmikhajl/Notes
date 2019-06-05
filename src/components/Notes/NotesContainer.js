import {connect} from "react-redux";
import {setNotesAC} from "../../redux/reducer/NotesReducer";
import Notes from "./Notes";

let mapStateToProps = (state) => {
    return {
        notesData: state.notesData
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        setNotes: (notes) => {
            dispatch(setNotesAC(notes));
        }
    }
};
const NotesContainer = connect(mapStateToProps, mapDispatchToProps)(Notes);

export default NotesContainer;
