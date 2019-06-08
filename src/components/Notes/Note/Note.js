import React from 'react'
import style from './Note.module.css'

class Note extends React.Component{

    deleteNote = () => {
        debugger;
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
        console.log(this);

    };
    render(){
        return (
            <div className={style.note}>
                <button onClick={this.deleteNote}>delete</button>
                <h3>{this.props.note.title}</h3>
                <p>{this.props.note.content}</p>
            </div>
        )
    }
}

export default Note;
