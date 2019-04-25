import React, {useEffect, useReducer, useState} from 'react';
import './App.css';
import BuyingParameters from "./components/BuyingParameters";
import ControlData from "./components/ControlData";
import OngoingCosts from "./components/OngoingCosts";
import {buyingParametersReducer, initialBuyingParameters} from "./context/Reducers";
import {BuyingParametersContext} from './context/Context'

const App = () => {
    const [state, dispatch] = useReducer(buyingParametersReducer, initialBuyingParameters);
    const [loadLocalStorage, setLoadLocalStorage] = useState(true);
    useEffect(() => {
        if (loadLocalStorage) {
            dispatch({'type': 'LOAD_LOCAL_STORAGE'});
            setLoadLocalStorage(false);
        }
    });
    return <div style={{width: '55%', marginTop: '1%', marginBottom: '3%'}} className="container">
        <BuyingParametersContext.Provider value={{state, dispatch}}>
            <BuyingParameters/>
            <ControlData/>
            <OngoingCosts/>
            <br/>
            <a href="https://www.linkedin.com/in/staffan-holmgren-0b39aa44/" className="text-muted" target="_blank"
               rel="noopener noreferrer">Linkedin</a>
        </BuyingParametersContext.Provider>
    </div>;
};

export default App;
