import React, { Component } from 'react'; // Component

class TextEditable extends Component { // ici une classe qui hérite de component de bootstrap
    state = { // Etat de base du composant 
        editing: false // ici par défaut on ne peut pas éditer
    };

    onToggle = () => {  // similaire bouton on/off (afin de permettre le déblocage de l'édition), le '() =>' dans React est similaire à 'function ()'
        this.setState({ editing: !this.state.editing });   //  le setState attend un nouvel état sur editing, le ! permet d'inverser le this.state.editing et alterner de false à true et vice-versa
    };

    onSave = (event) => {
        if (event.keyCode === 27) {
            this.onToggle();// On applique le onToggle
            return;
        } // On sort du champ text en appuyant sur 'echap', keycode 27 en lien avec le 'renderInputText'

        if (event.keyCode === 13) { //évènement lorsqu'on appuie sur 'entrée', keyCode 13
            const text = event.target.value; //  on reprend les modifications dans le champ text
            if (text.trim()) {
                this.props.save(text); // Pour éviter de supprimer le titre lors d'un blanc, on remet le titre par défaut
            }
            this.onToggle();

        }

    };

    renderDefault = () => {
        return (
            <div onClick={this.onToggle}>   {/*on ajoute un évènement avec 'on' dans React  */}
                {this.props.children}
            </div>
        )
    };

    renderInputText = () => { // Permet de superposer un champ text au dessus des éléments choisis, ici le h2 TextEditable
        const element = this.props.children; // ici le h2 de Text Editable
        return (
            <input
                type="text"
                className={this.props.classes} // qui va reprendre les propriété par défaut définies à la fin
                defaultValue={element.props.children}//  le premier children est le h2 le second est le text, 'defaultValue' considère la valeur par défaut plutôt que 'value'
                onBlur={this.onToggle} // En sortant du champ, le titre revient à la normale avec le Blur (on pour l'évènement)
                onKeyUp={this.onSave} // voir méthode onSave définie au préalable
                autoFocus />
        )
    };


    // Test 

    // render() { // Pouvoir afficher le HTML
    //     return (
    //         <div>
    //         {this.props.children} {/* On récupère le h2 TextEditable dans le App */}
    //         {this.state.editing + ''} {/* Dans ce cas, si on clique sur le titre h2, on passe de editing:false à editing:true, on concatène avec une chaine de caractères afin qu'il s'affiche à l'écran*/}
    //         </div>
    //     )

    // }

    render() {
        if (this.state.editing) {
            return this.renderInputText();
        }
        return this.renderDefault();
    }


}
// on rajout un objet à l'objet comprenant les propriétés par défaut ici le form-control de bootstrap
TextEditable.defaultProps = { 
    classes: 'form-control'
}


export default TextEditable;