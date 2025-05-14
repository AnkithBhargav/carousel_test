import React from 'react';// React is a JavaScript library for building user interfaces
import ReactDOM from 'react-dom';// ReactDOM is used to render the React component
import App from './App';// App component
import 'bootstrap/dist/css/bootstrap.min.css';// Bootstrap CSS for styling


ReactDOM.render(// ReactDOM.render is used to render the React component
    <React.StrictMode>
        <App />
    </React.StrictMode>,//helps identify potential problems
    document.getElementById('root')
);