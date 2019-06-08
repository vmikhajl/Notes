import React from 'react'
import style from './EditNote.module.css'

class EditNote extends React.Component{
    constructor(props) {
        super(props);
        this.editTitleRef = React.createRef();
        this.editContentRef = React.createRef();
    }
    onTitleChange = () => {
        this.props.updateTitle(this.editTitleRef.current.value);
    };
    onContentChange = () => {
        this.props.updateContent(this.editContentRef.current.value);
    };
    deleteNote = () => {
        let url = this.props.notesData.url + '/' + this.props.editNote.id;

        this.props.notesData.axios.delete(url)
            .then(
                response => {
                    console.log(response);
                    this.props.deleteNote(this.props.editNote.id);
                    this.props.toggleNote({});
                })
            .catch((error) => {
                console.log(error)
            });
    };
    saveChanges = () => {
        let url = this.props.notesData.url + '/' + this.props.editNote.id;

        this.props.notesData.axios.patch(url, {'title': this.props.editNote.title, 'content': this.props.editNote.content})
            .then(
                response => {
                    console.log(response);
                    this.props.saveChanges(this.props.editNote);
                    this.props.toggleNote({});
                })
            .catch((error) => {
                console.log(error)
            });

    };
    toggleNote = () => {
        this.props.toggleNote({});
    };
    render(){
        return (
            <div className={style.note}>
                <div className={style.control}>
                    <button className={style.cancelBtn} onClick={this.toggleNote}>Cancel</button>
                    <button className={style.deleteBtn} onClick={this.deleteNote}>Delete</button>
                </div>
                <h3>Title:</h3>
                <input ref={this.editTitleRef} type="text" value={this.props.editNote.title} onChange={this.onTitleChange}/>
                <h3>Content:</h3>
                <textarea ref={this.editContentRef} name="content" cols="30" rows="10"  value={this.props.editNote.content}
                          onChange={this.onContentChange}> </textarea>
                <button onClick={this.saveChanges} className={style.saveBtn}>Save</button>
            </div>
        )
    }
}

export default EditNote;
