import React, {useEffect, useReducer, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import Copyright from '@material-ui/icons/Copyright'
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
    return <div style={{marginTop: '1%', marginBottom: '1%'}} className="container">
        <div className={classes.root}>
            <div className="jumbotron" style={{marginBottom: '0%', overflowX: 'auto'}}>
                <h1 className="display-4">BK - en bostadsköpsuträknare</h1>
                <p>Ett användbart hjälpmedel för dig som ska köpa en ny bostad och som hjälper dig ta bättre beslut!
                </p>
            </div>

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
                        <Copyright/>
                        <a href="http://80.216.91.89:9000"
                           style={{verticalAlign: "middle"}}
                           className="text-muted"
                           target="_blank"
                           rel="noopener noreferrer">linkebon</a>
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
