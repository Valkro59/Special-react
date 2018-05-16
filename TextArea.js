import React, { Component } from 'react';

class TextArea extends Component {
    state = {
        editing: true
    };


    renderInputText = () => {
        return
        const element = this.props.children;
        return (
            <input
                type="text-area"
                className={this.props.classes} 
                defaultValue={element.props.children}
                onBlur={this.onToggle} 
                onKeyUp={this.onSave} 
                autoFocus />
        )




    }

}

TextArea.defaultProps = {
    classes: 'form-control'


}




export default TextArea;