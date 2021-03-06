import React from 'react'
import style from './Note.module.css'

class Note extends React.Component{

    deleteNote = () => {
        let url = this.props.state.url + '/' + this.props.note.id;
        this.props.state.axios.delete(url)
            .then(
                response => {
                    console.log(response);
                    this.props.deleteNote(this.props.note.id);
                })
            .catch((error) => {
                console.log(error)
            });
    };
    toggleNote = () => {
        this.props.toggleNote(this.props.note);
    };
    render(){
        return (
            <div  className={style.note}>
                <h3>{this.props.note.title}</h3>
                <p>{this.props.note.content}</p>
                <div className={style.control}>
                    <button className={style.editBtn} onClick={this.toggleNote}>Edit</button>
                    <button className={style.deleteBtn} onClick={this.deleteNote}>Delete</button>
                </div>

            </div>
        )
    }
}

export default Note;
