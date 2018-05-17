import React, { Component } from 'react'; // On importe React à partir de la bibliothèque node_modules
import Vote from './Vote';

class Article extends Component {// On créé un composant avec une fonction, avec le même nom de fichier, props
    
    state = {
        note: 0 // Etat par défaut des étoiles
    };

    // On définit la fonction getNote
    getNote = (note) => {
        this.setState({note:note});
    };



    render() {

        return ( // Il faut une div parent pour React afin d'englober tout ce qui suit pour fonctionner; Les parenthèses de return permettent d'englober le HTML sur plusieurs lignes

            // Ce qui suit a été copié dans la documentation bootstrap (ici une mise en forme de carte) puis réadapté en JSX pour REACT, par exemple renommer les 'class' en 'className'

            <div className="card" style={{ width: '20rem' }}>
                <img className="card-img-top" src={this.props.img} alt={this.props.title}/> {/*Le 'alt' permet d'afficher le texte 'toto' si l'image est cassée(pas accessible), bien enregistrer l'image dans le répertoire public */}
                {/* On charge l'image avec src */}
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>{/*Va afficher le titre seulement lorsque la propriété title a été définie dans le App.js */}
                    <p className="card-text"> {this.props.children} </p> {/* on récupère l'enfant du paragraphe et donc le texte Bla Bla Bla ... définie dans App.js */}
                    <Vote nbStars="5" note ={this.state.note} onNote={this.getNote}/> {/* On inclue les notes avec les étoiles, on a ici différentes props (qui permettent de donner des valeurs aux éléments) et 'this.getNote' dans 'onNote' est une fonction */}
                </div>
            </div>

        )
    }
};

export default Article; // On exporte le fichier