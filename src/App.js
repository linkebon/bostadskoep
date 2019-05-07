import React, {useEffect, useReducer, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import './App.css';
import BuyingParameters from "./components/BuyingParameters";
import ControlData from "./components/ControlData";
import OngoingCosts from "./components/OngoingCosts";
import {buyingParametersReducer, initialBuyingParameters} from "./context/Reducers";
import {BuyingParametersContext} from './context/Context'


const App = ({classes}) => {
    const [state, dispatch] = useReducer(buyingParametersReducer, initialBuyingParameters);
    const [loadLocalStorage, setLoadLocalStorage] = useState(true);
    useEffect(() => {
        if (loadLocalStorage) {
            dispatch({'type': 'LOAD_LOCAL_STORAGE'});
            setLoadLocalStorage(false);
        }
    });
    return <div style={{marginTop: '1%', marginBottom: '3%'}} className="container">
        <div className={classes.root}>
            <Grid container spacing={24}>
                <BuyingParametersContext.Provider value={{state, dispatch}}>
                    <Grid item xs={12}>
                        <BuyingParameters/>
                    </Grid>
                    <Grid item xs={6}>
                        <ControlData/>
                    </Grid>
                    <Grid item xs={6}>
                        <OngoingCosts/>
                    </Grid>
                    <Grid item xs={12}>
                        <a href="https://www.linkedin.com/in/staffan-holmgren-0b39aa44/" className="text-muted"
                           target="_blank"
                           rel="noopener noreferrer">Linkedin</a>
                    </Grid>
                </BuyingParametersContext.Provider>
            </Grid>
        </div>
    </div>;
};

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

export default withStyles(styles)(App);
