import React, { Component } from 'react'; // On récupère Component pour manipuler les classes

class Message extends Component {


//ETAPE 6, on crée l'état qui va surveiller le texte 
state = {
    text:'' // la valeur par défaut (zeroValue) est vide ici
};

// ETAPE 9, on crée une fonction changeText qui va permettre de manipuler le changement dans le textarea
changeText = (event) => { // l'event fait référence au fait qu'on surveille le changement
    this.setState({text:event.target.value}); //Le setState va permettre de réattibuer l'état, le this sera l'élément qui incluera cette fonction ici ce sera le textarea, dans les {} le text sera bien changé avec la valeur 

};


// ETAPE 1 MESSAGE
render()  {   // Base du composant 

// ETAPE 11, on crée un composant qui va permettre de change la couleur du texte à partir d'une certaine valeur

        const style = {}; // on crée l'objet style
        const length = this.state.text.length; // on crée une constante qui va considérer la taille du texte dans l'élément désiré
    
        if (length > (this.props.limit - 10)) { // on ajoute la condition lorsue le nombre de caractères arrive à 10 caractères de moins que la limite
            style.color ='red';
    
        }

    
        return (
            // On construit l'élément qui va s'afficher
            <div> 
                {/* ETAPE 10 on injecte l'attribut onChange avec la fonction changeText qui va chnager l'état du texte  */}
                {/*ETAPE 3, avec maxLength pour fixer une limite de 50 ici dans le textarea */}
                {/* ETAPE 12 on fait appel à l'attribut style définie au dessus */}
            <textarea onChange={this.changeText}  
                      cols="15" 
                      rows="5" 
                      style={style}
                      maxLength={this.props.limit}  
                      placeholder="Saisir Message"></textarea>   
            {/* le {} permettent de communqiuer avec la balise html dans App.js */}
            {/* ETAPE 5, on rajoute la propriété 'limit' définie dans App.js,, tout ça dans  maxLength={this.props.limit}, this est textarea */}
            <div>Nombre de caractères:{length}</div> {/*ETAPE 7, avec l'implantation de this.state.text.length, length reprend le nombre de caractères   */}
            <p>{this.state.text}</p> {/*ETAPE 8 on va injecter le texte écrit dans textarea, this fait toujours référence avec textarea */}
            </div>
        )
    
    }

}



export default Message;