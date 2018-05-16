import React, { Component } from 'react';
import Article from './Article'; // On importe le fichier Article
import './App.css';
import TextEditable from './TextEditable';//  On importe également le ficheir TextEditable
import TextArea from './TextArea';
import NombreDeCaractères from './NombreDeCaractères';
import AffichageText from './AffichageText';

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
          Alea jacta est
        </Article>

        <div className="container">
          <h1>Message</h1>
          <TextArea className="text-area" />
          <NombreDeCaractères />
          <AffichageText />

        </div>



      </div>
    );
  }
}

export default App;