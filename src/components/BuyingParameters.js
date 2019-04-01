import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from "@material-ui/core/MenuItem";

const BuyingParameters = ({classes, state, handleChange, handleNumberChange}) => {
    return (
        <form className={classes.container} noValidate autoComplete="off">
            <TextField
                id="purchaseAmountId"
                label="Köpesumma (kr)"
                className={classes.textField}
                value={state.purchaseAmount}
                onChange={handleNumberChange("purchaseAmount")}
                margin="normal"
                required={true}
                type="number"
            />

            <TextField
                id="cashId"
                label="Likvider (kr)"
                className={classes.textField}
                value={state.cash}
                onChange={handleNumberChange("cash")}
                margin="normal"
                required={true}
                type="number"
            />

            <TextField
                id="savingsPerMonthId"
                label="Sparande per månad (kr)"
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
                label="Pengar kvar efter köp (kr)"
                className={classes.textField}
                margin="normal"
                required={true}
                value={state.moneyLeftAfterPurchase}
                onChange={handleNumberChange("moneyLeftAfterPurchase")}
                type="number"
            />

            <TextField
                id="interestId"
                label="Ränta lån (%)"
                className={classes.textField}
                margin="normal"
                required={true}
                value={state.interest}
                onChange={handleNumberChange("interest")}
                type="number"
            />

            <TextField
                id="maxLeverageId"
                label="Max lånekvot (%)"
                className={classes.textField}
                margin="normal"
                required={true}
                value={state.maxLeverageLevel}
                onChange={handleNumberChange("maxLeverageLevel")}
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
                id="profitOnSale"
                label="Vinst på försäljning (kr)"
                className={classes.textField}
                margin="normal"
                required={true}
                value={state.profitOnSale}
                onChange={handleNumberChange("profitOnSale")}
                type="number"
            />
        </form>
    )
};

const styles = theme => ({
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


