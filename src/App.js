import React, {useEffect, useReducer, useState} from 'react';
import './App.css';
import * as ls from "./util/LocalStorage";
import BuyingParameters from "./components/BuyingParameters";
import ControlData from "./components/ControlData";
import OngoingCosts from "./components/OngoingCosts";

export const BuyingParametersContext = React.createContext();
const initialBuyingParameters = {
    house: true,
    pantBrev: false,
    purchaseAmount: 0,
    savingsPerMonth: 0,
    savingsMonths: 0,
    cash: 0,
    moneyLeftAfterPurchase: 0,
    maxLeverageLevel: 0,
    interest: 0,
    profitOnSale: 0,
    householdIncome: 0,
    operationCosts: 0
};
const buyingParametersReducer = (state, action) => {
    switch (action.type) {
        case 'CALCULATE':
            const isNumeric = (n) => !isNaN(parseFloat(n)) && isFinite(n);
            const newState = isNumeric(action.value)
                ? {...state, [action.fieldName]: Number(action.value)}
                : {...state, [action.fieldName]: action.value};
            ls.saveState('buyParameters', newState);
            return newState;
        case 'CLEAR':
            ls.clear();
            return {...initialBuyingParameters};
        case 'LOAD_LOCAL_STORAGE':
            const s = ls.getState("buyParameters");
            if (s != null) {
                return s;
            }
            return {...initialBuyingParameters};
        default:
            throw new Error("No action found");
    }
};

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
            <a href="https://www.linkedin.com/in/staffan-holmgren-0b39aa44/" className="text-muted" target="_blank"
               rel="noopener noreferrer">Linkedin</a>
        </BuyingParametersContext.Provider>
    </div>;
};

export default App;
