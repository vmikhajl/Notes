import React from 'react'
import style from './CreateNote.module.css'

class CreateNote extends React.Component{
    constructor(props) {
        super(props);
        this.titleRef = React.createRef();
        this.contentRef = React.createRef();
    }
    onTitleChange = () => {
        this.props.updateTitle(this.titleRef.current.value);
    };
    onContentChange = () => {
        this.props.updateContent(this.contentRef.current.value);
    };
    onButtonClick = () => {
        if (this.props.newNote.title === '') {
            this.props.newNote.title = 'Untitled';
        }

        this.props.notesData.axios.post(this.props.notesData.url, this.props.newNote)
            .then(
                response => {
                    console.log(response);
                    this.props.createNote(response.data);
                    this.props.clearNote();
                })
            .catch((error) => {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    // console.log(error.response.data);
                    console.log(error.response.status);
                    // console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
            });
    };
    showCreator = () => {
        this.props.showCreator();
    };
    hideCreator = () => {
        this.props.hideCreator();
    };
    render(){
        return (

            <div className={this.props.display.displayStyle}>
                <div className={style.note}>
                    {
                        this.props.display.visibility === true
                        ? <button className={style.displayButton} onClick={this.hideCreator}>hide</button>
                        : <button className={style.displayButton} onClick={this.showCreator}>Create Note</button>
                    }
                    Title: <input ref={this.titleRef} type="text" value={this.props.newNote.title} onChange={this.onTitleChange}/>
                    Content: <textarea ref={this.contentRef} name='content' onChange={this.onContentChange} cols="30"
                              rows="10" value={this.props.newNote.content}> </textarea>
                    <button className={style.button} onClick={this.onButtonClick}>Create</button>
                </div>
            </div>
        )
    }
}

export default CreateNote;
