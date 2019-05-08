import React, {useContext} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CurrencyFormat from 'react-currency-format';
import Tooltip from '@material-ui/core/Tooltip';
import Info from '@material-ui/icons/Info';
import * as CalculatorUtil from "../util/CalculatorUtil";
import {BuyingParametersContext} from "../context/Context";

const OngoingCosts = ({classes}) => {
    const {state} = useContext(BuyingParametersContext);
    const suggestedDownPayment = CalculatorUtil.calculateSuggestedDownPayment(state.purchaseAmount, state.cash, state.savingsPerMonth, state.savingsMonths, state.profitOnSale, state.moneyLeftAfterPurchase, state.pantBrev);
    const loanAmount = CalculatorUtil.calculateLoanAmount(state.purchaseAmount, suggestedDownPayment);
    const interestCost = CalculatorUtil.getPerMonth(CalculatorUtil.calculateInterestCost(loanAmount, state.interest));
    const interestCostTaxReduction = CalculatorUtil.getPerMonth(CalculatorUtil.calculateInterestCostWithReduction(loanAmount, state.interest));
    const operationCosts = state.operationCosts;
    const amortization = CalculatorUtil.getPerMonth(CalculatorUtil.calculateAmortization(state.householdIncome, loanAmount, state.purchaseAmount));

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Löpande månadsutgifter</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            Räntekostnader
                        </TableCell>
                        <TableCell style={{textAlign: 'right'}}>
                            <CurrencyFormat value={interestCost.toFixed(2)} displayType={'text'}
                                            thousandSeparator={true}
                                            suffix="kr"/>
                        </TableCell>
                        <TableCell>
                            <Tooltip style={{textAlign: "top"}}
                                     title={`Med ränteavdrag blir räntekostnaden: ${interestCostTaxReduction.toFixed(2)} kr`}
                                     interactive={true}
                                     leaveDelay={800}
                                     enterTouchDelay={150}
                                     placement={"top"}>
                                <Info/>
                            </Tooltip>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            Amortering
                        </TableCell>
                        <TableCell style={{textAlign: 'right'}}>
                            <CurrencyFormat value={amortization.toFixed(2)} displayType={'text'}
                                            thousandSeparator={true}
                                            suffix="kr"/>
                        </TableCell>
                        <TableCell/>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            Driftkostnader (el, vatten, hyra etc)
                        </TableCell>
                        <TableCell style={{textAlign: 'right'}}>
                            <CurrencyFormat value={operationCosts.toFixed(2)} displayType={'text'}
                                            thousandSeparator={true}
                                            suffix="kr"/>
                        </TableCell>
                        <TableCell/>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{fontWeight: 'bold'}}>Totalt per månad</TableCell>
                        <TableCell style={{fontWeight: 'bold', textAlign: 'right'}}>
                            <CurrencyFormat
                                value={(replaceNanWithZero(operationCosts) + replaceNanWithZero(interestCost) + replaceNanWithZero(amortization)).toFixed(2)}
                                displayType={'text'}
                                thousandSeparator={true} suffix="kr"/>
                        </TableCell>
                        <TableCell/>
                    </TableRow>
                </TableBody>
            </Table>
        </Paper>
    );
};

const replaceNanWithZero = (v) => isNaN(v) ? 0 : v;

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    }
});

export default withStyles(styles)(OngoingCosts)
