import React, { Component } from 'react'; // Raccourci 'imrc'
import axios from 'axios'; // on importe axios qui va permettre de faire des promesses et des requêtes


class Quote extends Component { // Raccourci 'ccs' pour définir une classe dans react
    state = {
        quote: {}


    };

    componentWillMount() { //D'aprés le Component Lifecycle, voir documentation React.Component
        this.getQuote();
    }

    getQuote = () => {
        axios.get('https://api.chucknorris.io/jokes/random').then((response) => { // On reprend l'url à partir de l'API Chuck Norris avec .get; le .then définit ce qui doit se passe aprés
            // 'response' correspond au JSON obtenu de l'URL
            console.log(response.data);
            this.setState({quote: response.data}); // On associe la valeur du JSON concernant la citation (response.data) 
        });
    };

    



    render() {
        return (
            <div>
                <blockquote>
                   {this.state.quote.value} {/*  On ajoute ici la valeur de la citation 'quote' */}
                </blockquote>
                <button className="btn btn-success" onClick= {this.getQuote}>Refresh</button> {/* className btn btn success avec bootstrap */}
            </div>

        );
    }
}

export default Quote;
