import React from 'react'
import style from './EditNote.module.css'

class EditNote extends React.Component{

    deleteNote = () => {
        debugger;
        let url = this.props.state.url + '/' + this.props.editNote.id;
        this.props.state.axios.delete(url)
            .then(
                response => {
                    console.log(response);
                    this.props.deleteNote(this.props.editNote.id);
                    this.props.toggleNote(this.props.note);
                })
            .catch((error) => {
                console.log(error)
            });
        console.log(this);

    };
    toggleNote = () => {
        this.props.toggleNote(this.props.note);
    };
    render(){
        return (
            <div className={style.note}>
                <h3>Title:</h3>
                <input type="text" value={this.props.editNote.title}/>
                <h3>Content:</h3>
                <textarea name="content" cols="30" rows="10" value={this.props.editNote.content}> </textarea>
                <button className={style.deleteBtn} onClick={this.deleteNote}>delete</button>
                <button onClick={this.toggleNote}>cancel</button>
            </div>
        )
    }
}

export default EditNote;
