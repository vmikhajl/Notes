import React from 'react'
import * as axios from 'axios'
import Note from "./Note/Note";

class Notes extends React.Component{
    componentDidMount() {
        console.log(this.props);
        let config =  {
            headers: {
                'Authorization': 'Bearer ' + this.props.notesData.token
            }
        };
        axios.get('http://159.89.96.181/api/v1/notes', config)
            .then(
                response => {
                    console.log(response);
                })

    }
    notes() {
        return this.props.notesData.notes.map((note, index) => {
                return <Note key={index} state={note}/>
            })
    }
    render(){
        return (
            <div>{this.notes()}</div>
        )
    }
}

export default Notes;
