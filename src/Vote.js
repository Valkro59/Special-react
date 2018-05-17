import React, { Component } from 'react';
import './Vote.css';
// Attention aux Imports/Exports
//Création du vote avec les étoiles (généralement les avis internet)


class Vote extends Component {

    onVote = (note) => {
        this.props.onNote(note);
    };

    isActive = (position) => {
        return this.props.note >= position ? ' active' : ''; //Ici on a une condition ternaire avec si this.props.note est inférieure ou égale à la position alors (ici ?) sinon (:)
    }
    render() {
        const renderStars = Array.from({ length: this.props.nbStars }, (v, k) => { // Fonction flèchée; Array.from sert à génèrer une séquence de nombres que l'on va pouvoir parcourir; Array est le code 'tableau' dans Javascript, v et k pour valeur(value) et clé(key)
            let position = k + 1; // Pour commencer la séquence à partir de 1, sinon c'est 0 et dans ce cas l'étoile ne va pas se créer
            return <span key={position}
                className={'star' + this.isActive(position)} // On concatène ici star avec le reste
                onClick={(e) => { this.onVote(position) }}>☆</span> // Va permettre d'afficher le nombre d'étoiles définies dans App.js / e pour event / on fait appel à une fonction dans le onClick qui elle même va faire appel à une fonction onVote
            /* Une étoile importé d'internet, code ascii, le active est défini dans le css */
        });

        return (
            <div className="stars"> {/* on va crée les étoiles qui vont se remplir*/}
                {renderStars}
            </div>


        )

    }

}

export default Vote;