import React, { Component } from 'react';

class Message extends Component {

    render () {
     return(
    <div className="container">
        <h1>Message</h1>
        <TextArea/>
        <NombreDeCaractères/>
        <AffichageText/>

    </div>

);
}
}

export default Message;