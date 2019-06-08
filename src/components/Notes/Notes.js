import React from 'react'
import * as axios from 'axios'
import Note from "./Note/Note";
import style from './Note/Note.module.css'
import EditNote from "./EditNote/EditNote";

class Notes extends React.Component{
    componentDidMount() {
        let config =  {
            headers: {
                'Authorization': 'Bearer ' + this.props.notesData.token
            }
        };
        axios.get('http://159.89.96.181/api/v1/notes/', config)
            .then(
                response => {
                    console.log(response);
                    this.props.setNotes(response.data.notes);
                })
            .catch((error) => {
                console.log(error)
            });

    }

    getNotes(){
        return this.props.notesData.notes.map((note, index) => {
            return <Note key={note.id} state={this.props.notesData}
                         note={note}
                         deleteNote={this.props.deleteNote}
                         toggleNote={this.props.toggleNote}
            />;
        })
    }
    notes() {
        let length = this.props.notesData.notes.length;
        return  length > 0 ? this.getNotes() : <div><h1>Hello</h1></div>;
    }
    render(){
        return (
            <div className={style.notes}>
                {this.props.editNote.toggleNote
                    ? <EditNote state={this.props.notesData}
                                editNote={this.props.editNote.note}
                                deleteNote={this.props.deleteNote}
                                toggleNote={this.props.toggleNote}
                    /> :this.notes()}
            </div>
        )
    }
}

export default Notes;
