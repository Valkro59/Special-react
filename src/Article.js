import React from 'react'; // On importe React à partir de la bibliothèque node_modules

const Article = function (props) {// On créé un composant avec une fonction, avec le même nom de fichier, props
    console.log(props);
    
    return ( // Il faut une div parent pour React afin d'englober tout ce qui suit pour fonctionner; Les parenthèses de return permettent d'englober le HTML sur plusieurs lignes
                
// Ce qui suit a été copié dans la documentation bootstrap (ici une mise en forme de carte) puis réadapté en JSX pour REACT, par exemple renommer les 'class' en 'className'

<div className="card" style={{width: '20rem'}}>
    <img className="card-img-top" src={props.img} alt={props.title}/>{/*Le 'alt' permet d'afficher le texte 'toto' si l'image est cassée(pas accessible), bien enregistrer l'image dans le répertoire public */}
    {/* On charge l'image avec src */}
    <div className="card-body">
        <h5 className="card-title">{props.title}</h5>{/*Va afficher le titre seulement lorsque la propriété title a été définie dans le App.js */}
        <p className ="card-text"> {props.children} </p> {/* on récupère l'enfant du paragraphe et donc le texte Bla Bla Bla ... définie dans App.js */}
        
    </div>
</div>

    )
};

export default Article; // On exporte le fichier