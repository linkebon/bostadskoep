import React from 'react';
import './App.css';
import CalculateContainer from "./containers/CalculateContainer";

const App = () =>
    <div style={{width: '55%'}} className="container">
    <CalculateContainer/>
        <a href="https://www.linkedin.com/in/staffan-holmgren-0b39aa44/" className="text-muted" target="_blank" rel="noopener noreferrer">Linkedin </a>
        <a href="https://github.com/linkebon" className="text-muted" target="_blank" rel="noopener noreferrer">Github</a>

        <br />
        TODO
        <ul>
            <li>gör lånekvot röd om den överstiger max lånekvot</li>
        </ul>

    </div>;

export default App;
