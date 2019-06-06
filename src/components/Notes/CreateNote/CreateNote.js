import React from 'react'
import style from './CreateNote.module.css'

class CreateNote extends React.Component{
    constructor(props) {
        super(props);
        this.titleRef = React.createRef();
        this.contentRef = React.createRef();
    }
    onTitleChange = () => {
        this.props.updateTitle(this.titleRef.current.value, this.props.notesData.id);
    };
    onContentChange = () => {
        this.props.updateContent(this.contentRef.current.value, this.props.notesData.id);
    };
    onButtonClick = () => {
        this.props.createNote(this.props.newNote);
        this.props.clearNote();
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
