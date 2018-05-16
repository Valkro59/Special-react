import React from 'react';
import ReactDOM from 'react-dom'; // Permet d'injecter les balises
import './index.css'; // compiler les fichiers css
import App from './App'; // importe le composant App
import '../node_modules/bootstrap/dist/css/bootstrap.css'; // importer le bootstrap aprés l'avoir installé dans git
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));//  'root' est ici l'élément dans lequel injecter App
registerServiceWorker();

