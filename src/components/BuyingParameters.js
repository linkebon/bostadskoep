import React, {useContext} from 'react';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from "@material-ui/core/MenuItem";
import Paper from '@material-ui/core/Paper';
import {BuyingParametersContext} from "../context/Context";

const BuyingParameters = ({classes}) => {
    const {state, dispatch} = useContext(BuyingParametersContext);
    const updateField = fieldName => event => {
        dispatch({
            'type': 'CALCULATE',
            'fieldName': fieldName,
            'value': event.target.value
        });
    };

    return (
        <Paper className={classes.root}>
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="houseId"
                    label="Typ av bostad"
                    className={classes.textField}
                    value={state.house}
                    onChange={updateField('house')}
                    margin="normal"
                    select={true}
                >
                    <MenuItem key="Hus" value={true}>Hus</MenuItem>
                    <MenuItem key="Bostadsrätt" value={false}>Bostadsrätt</MenuItem>
                </TextField>

                <TextField
                    id="pantbrev"
                    label="Pantbrev"
                    className={classes.textField + " hidden"}
                    value={state.pantBrev}
                    onChange={updateField("pantBrev")}
                    margin="normal"
                    select={true}
                    disabled={!state.house}>
                    <MenuItem key="yes" value={true}>Ja</MenuItem>
                    <MenuItem key="no" value={false}>Nej</MenuItem>
                </TextField>

                <TextField
                    id="purchaseAmountId"
                    label="Köpesumma"
                    className={classes.textField}
                    value={state.purchaseAmount}
                    onChange={updateField("purchaseAmount")}
                    margin="normal"
                    type="number"
                />

                <TextField
                    id="cashId"
                    label="Kontanter för köp"
                    className={classes.textField}
                    value={state.cash}
                    onChange={updateField("cash")}
                    margin="normal"
                    type="number"
                />

                <TextField
                    id="moneyLeftAfterPurchaseId"
                    label="Kontanter kvar efter köp"
                    className={classes.textField}
                    margin="normal"
                    value={state.moneyLeftAfterPurchase}
                    onChange={updateField("moneyLeftAfterPurchase")}
                    type="number"
                />

                <TextField
                    id="profitOnSale"
                    label="Vinst på egen försäljning"
                    className={classes.textField}
                    margin="normal"
                    value={state.profitOnSale}
                    onChange={updateField("profitOnSale")}
                    type="number"
                />

                <TextField
                    id="interestId"
                    label="Ränta lån (%)"
                    className={classes.textField}
                    margin="normal"
                    value={state.interest}
                    onChange={updateField("interest")}
                    type="number"
                />

                <TextField
                    id="maxLeverageId"
                    label="Max lånekvot (%)"
                    className={classes.textField}
                    margin="normal"
                    value={state.maxLeverageLevel}
                    onChange={updateField("maxLeverageLevel")}
                    type="number"
                />

                <TextField
                    id="householdIncomeId"
                    label="Hushållets totala inkomster per år (brutto)"
                    className={classes.textField}
                    margin="normal"
                    value={state.householdIncome}
                    onChange={updateField("householdIncome")}
                    type="number"
                />

                <TextField
                    id="savingsPerMonthId"
                    label="Sparande per månad"
                    className={classes.textField}
                    margin="normal"
                    value={state.savingsPerMonth}
                    onChange={updateField("savingsPerMonth")}
                    type="number"
                />

                <TextField
                    id="savingsMonthsId"
                    label="Tid kvar till köp (månader)"
                    className={classes.textField}
                    margin="normal"
                    value={state.savingsMonths}
                    onChange={updateField("savingsMonths")}
                    type="number"
                />

                <TextField
                    id="operationCostsId"
                    label="Driftkostnader (hyra, el etc)"
                    className={classes.textField}
                    value={state.operationCosts}
                    onChange={updateField("operationCosts")}
                    margin="normal"
                    type="number"
                />

            </form>
            <input type="button" className={"btn btn-danger " + classes.button} value="Rensa" onClick={(e) => {
                e.preventDefault();
                dispatch({'type': 'CLEAR'});
            }}/>
        </Paper>
    )
};

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
        padding: '1% 56px 1% 24px',
    },
    p: {
        paddingLeft: theme.spacing.unit,
    },
    button: {
        marginLeft: theme.spacing.unit,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '100%',
    },
});

export default withStyles(styles)(BuyingParameters);


