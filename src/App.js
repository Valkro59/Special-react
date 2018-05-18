import React, { Component } from 'react';
import Article from './Article'; // On importe le fichier Article
import './App.css';
import TextEditable from './TextEditable';//  On importe également le fichier TextEditable
import Message from './Message'; // On importe le Message
import Quote from './Quote';


class App extends Component {
  state = {
    title: 'Un titre par défaut'
  }
  save = (text) => { // on définit ici une fonction 'save', le text modifié va être saisie, le champ n'est cependant pas encore mis à jour
    this.setState({ title: text });
  }
  render() {
    return (
      <div className="container">
        <h1>Mon composant APP</h1>

        <Quote />


        {/* On injecte ici le composant TextEditable et on donne la fonction 'save'; le premier save est une props et le second est la fonction définie avant*/}
        <TextEditable save={this.save}>
          {/* On reprend le champ text redéfinie aprés la fonction save */}
          <h2>{this.state.title}</h2>
        </TextEditable>
        <Article title="Mon super titre" img="Image/Image_Chat.jpg"> {/*  On peut également ajouter des propriétés appelées ici Props, similaires à des variables, ici title et img*/}
          SALUT LE CHAT
        </Article>
        {/* On ajoute Article dans la vue aprés l'avoir importé, REACT va transformer le fichier correspondant en HTML par la suite  */}
        <Article title='Hello React World' img="Image/Sonic.png">
          Sonic, super c'est Sonic
        </Article>


        {/* ETAPE 2 MESSAGE, on ajoute le message */}
        <h1>Message</h1>
        <Message limit="30"/>  {/* ETAPE 4 On rajoute un attribut limit pour définir une limite de caractères sur chaque message pour ne pas avoir qu'une limite unique */}
        
        {/* On ajoute les étoiles de Vote, nbStars permet de choisir le nombre d'étoiles */}
        
        

      </div>
    );

  }

}
export default App;