import React from 'react'
import style from './Note.module.css'

class Note extends React.Component{
    render(){
        return (
            <div className={style.note}>
                <h3>{this.props.state.title}</h3>
                <p>{this.props.state.content}</p>
            </div>
        )
    }
}

export default Note;
