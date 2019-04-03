import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from "@material-ui/core/MenuItem";
import Paper from '@material-ui/core/Paper';

const BuyingParameters = ({classes, state, handleChange, handleNumberChange, clearInput}) => {
    return (
        <Paper className={classes.root}>
            <p className={classes.p}>Parametrar för köp (kr)</p>
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="purchaseAmountId"
                    label="Köpesumma"
                    className={classes.textField}
                    value={state.purchaseAmount}
                    onChange={handleNumberChange("purchaseAmount")}
                    margin="normal"
                    required={true}
                    type="number"
                />

                <TextField
                    id="operationCostsId"
                    label="Driftkostnader (hyra, el etc)"
                    className={classes.textField}
                    value={state.operationCosts}
                    onChange={handleNumberChange("operationCosts")}
                    margin="normal"
                    required={true}
                    type="number"
                />

                <TextField
                    id="cashId"
                    label="Kontanter för köp"
                    className={classes.textField}
                    value={state.cash}
                    onChange={handleNumberChange("cash")}
                    margin="normal"
                    required={true}
                    type="number"
                />

                <TextField
                    id="savingsPerMonthId"
                    label="Sparande per månad"
                    className={classes.textField}
                    margin="normal"
                    required={true}
                    value={state.savingsPerMonth}
                    onChange={handleNumberChange("savingsPerMonth")}
                    type="number"
                />

                <TextField
                    id="savingsMonthsId"
                    label="Antal månader"
                    className={classes.textField}
                    margin="normal"
                    required={true}
                    value={state.savingsMonths}
                    onChange={handleNumberChange("savingsMonths")}
                    type="number"
                />

                <TextField
                    id="moneyLeftAfterPurchaseId"
                    label="Pengar kvar efter köp"
                    className={classes.textField}
                    margin="normal"
                    required={true}
                    value={state.moneyLeftAfterPurchase}
                    onChange={handleNumberChange("moneyLeftAfterPurchase")}
                    type="number"
                />
                <TextField
                    id="profitOnSale"
                    label="Vinst på försäljning"
                    className={classes.textField}
                    margin="normal"
                    required={true}
                    value={state.profitOnSale}
                    onChange={handleNumberChange("profitOnSale")}
                    type="number"
                />
                <TextField
                    id="householdIncomeId"
                    label="Totala inkomster"
                    className={classes.textField}
                    margin="normal"
                    required={true}
                    value={state.householdIncome}
                    onChange={handleNumberChange("householdIncome")}
                    type="number"
                />

                <TextField
                    id="pantbrev"
                    label="Pantbrev"
                    className={classes.textField}
                    value={state.pantBrev}
                    onChange={handleChange("pantBrev")}
                    margin="normal"
                    required={true}
                    select={true}>

                    <MenuItem key="yes" value={true}>Ja</MenuItem>
                    <MenuItem key="no" value={false}>Nej</MenuItem>
                </TextField>

                <TextField
                    id="interestId"
                    label="Ränta lån (%)"
                    className={classes.textField}
                    margin="normal"
                    value={state.interest}
                    onChange={handleNumberChange("interest")}
                    type="number"
                />

                <TextField
                    id="maxLeverageId"
                    label="Max lånekvot (%)"
                    className={classes.textField}
                    margin="normal"
                    value={state.maxLeverageLevel}
                    onChange={handleNumberChange("maxLeverageLevel")}
                    type="number"
                />
            </form>
            <input type="button" className={"btn btn-danger " + classes.button}  value="Rensa" onClick={(e) => {
                e.preventDefault();
                clearInput();
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
        width: 200,
    },
});

export default withStyles(styles)(BuyingParameters);


