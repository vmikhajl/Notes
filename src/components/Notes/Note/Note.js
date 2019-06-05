import React from 'react'

class Note extends React.Component{
    render(){
        return (
            <div>
                <p>id: {this.props.state.id}</p>
                <p>title: {this.props.state.title}</p>
                <p>content: {this.props.state.content}</p>
            </div>
        )
    }
}

export default Note;
