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
import Warning from '@material-ui/icons/Warning'
import * as CalculatorUtil from "../util/CalculatorUtil";
import {BuyingParametersContext} from "../context/Context";

const ControlData = ({classes}) => {
    const {state} = useContext(BuyingParametersContext);
    const red = '';
    const green = '#c8e6c9';
    const suggestedDownPayment = CalculatorUtil.calculateSuggestedDownPayment(state.purchaseAmount, state.cash, state.savingsPerMonth, state.savingsMonths, state.profitOnSale, state.moneyLeftAfterPurchase, state.pantBrev, state.house);
    const loanAmount = CalculatorUtil.calculateLoanAmount(state.purchaseAmount, suggestedDownPayment, state.house, state.pantBrev);
    const moneySavedUntilPurchase = CalculatorUtil.calculateMoneySavedUntilPurchase(state.savingsPerMonth, state.savingsMonths);
    const lagfartCost = CalculatorUtil.calculateLagfartCost(state.purchaseAmount);
    const pantBrevCost = CalculatorUtil.calculatePantBrevCost(state.purchaseAmount);
    const loanQuota = CalculatorUtil.calculateLoanQuota(state.purchaseAmount, suggestedDownPayment);
    const loanIsNeeded = loanAmount >= 0;
    const increaseAmortizationBecauseOfLoanAmount = loanAmount > CalculatorUtil.calculateMaxLoanFromBankFourPointFive(state.householdIncome)

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow style={{backgroundColor: !loanIsNeeded ? green : ''}}>
                        <TableCell>
                            Beräknade värden för köp{!loanIsNeeded ? '(Inga lån behövs!)' : ''}
                        </TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            Pengar sparade tills köp (inräknat i möjlig kontantinsats)
                        </TableCell>
                        <TableCell>
                            <CurrencyFormat value={Math.round(moneySavedUntilPurchase)} displayType={'text'}
                                            thousandSeparator={true} suffix="kr"/>
                        </TableCell>
                    </TableRow>
                    <TableRow hidden={!state.house}>
                        <TableCell>
                            Lagfart
                        </TableCell>
                        <TableCell>
                            <CurrencyFormat value={Math.round(lagfartCost)} displayType={'text'}
                                            thousandSeparator={true}
                                            suffix="kr"/>
                            <Tooltip style={{textAlign: "top"}}
                                     title="Lagfart behöver betalas med kontanter och det finns inte tillräckligt med kontanter"
                                     interactive={true} leaveDelay={800} placement={"top"}
                                     hidden={suggestedDownPayment > 0}>
                                <Warning/>
                            </Tooltip>
                        </TableCell>
                    </TableRow>
                    <TableRow style={{backgroundColor: suggestedDownPayment <= 0 ? red : ''}}
                              hidden={pantBrevCost <= 0 || !state.house || !state.pantBrev}>
                        <TableCell>
                            Pantbrev
                        </TableCell>
                        <TableCell>
                            <CurrencyFormat value={Math.round(pantBrevCost)} displayType={'text'}
                                            thousandSeparator={true}
                                            suffix="kr"/>
                            <Tooltip style={{textAlign: "top"}}
                                     title="Pantbrev behöver betalas med kontanter och det finns inte tillräckligt med kontanter"
                                     interactive={true} leaveDelay={800} placement={"top"}
                                     hidden={suggestedDownPayment > 0}>
                                <Warning/>
                            </Tooltip>
                        </TableCell>
                    </TableRow>
                    <TableRow hidden={!loanIsNeeded}>
                        <TableCell>
                            Lånekvot
                        </TableCell>
                        <TableCell>
                            <CurrencyFormat value={loanQuota.toFixed(2)} displayType={'text'} suffix="%"/>
                            <Tooltip style={{textAlign: "top"}}
                                     title="Lånekvoten är större än din maximala lånekvot"
                                     interactive={true} leaveDelay={800} placement={"top"}
                                     hidden={loanQuota < state.maxLeverageLevel}>
                                <Warning/>
                            </Tooltip>
                        </TableCell>
                    </TableRow>
                    <TableRow hidden={!loanIsNeeded}>
                        <TableCell style={{fontWeight: 'bold'}}>
                            Lånesumma
                        </TableCell>
                        <TableCell style={{fontWeight: 'bold'}}>
                            <CurrencyFormat value={Math.round(loanAmount)}
                                            displayType={'text'}
                                            thousandSeparator={true}
                                            suffix="kr"/>
                            <Tooltip style={{textAlign: "top"}}
                                     title="Belåningen är större än 4.5 gånger årsinkomsten för hushållet och ökar därför amorteringskravet med 1%"
                                     interactive={true} leaveDelay={800} placement={"top"}
                                     hidden={!increaseAmortizationBecauseOfLoanAmount}>
                                <Warning/>
                            </Tooltip>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <div style={{fontWeight: 'bold'}}>
                                Möjlig kontantinsats
                            </div>
                            <div className='text-muted' style={{fontSize: '10px', marginLeft: '2%'}}>
                                Kontanter för köp (+{state.cash})
                                <br/>
                                Sparande tills köp (+{moneySavedUntilPurchase})
                                <br/>
                                Vinst på försäljning (+{state.profitOnSale})
                                <br/>
                                Kontanter kvar efter köp (-{state.moneyLeftAfterPurchase})
                            </div>
                            <div className='text-muted' style={{fontSize: '10px', marginLeft: '2%'}}
                                 hidden={!state.house}>
                                Lagfart (-{lagfartCost})
                            </div>
                            <div className='text-muted' style={{fontSize: '10px', marginLeft: '2%'}}
                                 hidden={!state.house || !state.pantBrev}>
                                Pantbrev (-{pantBrevCost})
                            </div>
                        </TableCell>
                        <TableCell style={{verticalAlign: 'top'}}>
                            <div style={{fontWeight: 'bold'}}>
                                <CurrencyFormat value={Math.round(suggestedDownPayment)} displayType={'text'}
                                                thousandSeparator={true}
                                                suffix="kr"/>
                                <Tooltip style={{textAlign: "top"}}
                                         title="Kostnaderna för pantbrev, lagfart, pengarna som ska vara kvar efter köp etc är för stora så kontantinsatsen är mindre än 0."
                                         interactive={true} leaveDelay={800} placement={"top"}
                                         hidden={suggestedDownPayment > 0}>
                                    <Warning/>
                                </Tooltip>
                            </div>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Paper>
    )
};

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {},
});

export default withStyles(styles)(ControlData)