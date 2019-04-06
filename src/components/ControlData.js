import React from 'react';
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

const ControlData = ({classes, suggestedDownPayment, minimumDownPayment, moneySavedUntilPurchase, loanAmount, loanQuota, maxLoanAmontFromBank, lagfartCost, pantBrevCost}) => {
    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow style={{backgroundColor: suggestedDownPayment >= loanAmount ? '#c8e6c9' : ''}}>
                        <TableCell>
                            Beräknade värden {suggestedDownPayment >= loanAmount ? '(Inga lån behövs!)' : ''}</TableCell>
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
                    <TableRow style={{backgroundColor: suggestedDownPayment <= 0 ? '#ff5252' : ''}}>
                        <TableCell>
                            Lagfart
                        </TableCell>
                        <TableCell>
                            <CurrencyFormat value={Math.round(lagfartCost)} displayType={'text'} thousandSeparator={true}
                                            suffix="kr"/>
                            <Tooltip style={{textAlign: "top"}}
                                     title="Lagfart behöver betalas med kontanter och det finns inte tillräckligt med kontanter"
                                     interactive={true} leaveDelay={800} placement={"top"}
                                     hidden={suggestedDownPayment > 0}>
                                <Info/>
                            </Tooltip>
                        </TableCell>
                    </TableRow>
                    <TableRow style={{backgroundColor: suggestedDownPayment <= 0 ? '#ff5252' : ''}}
                              hidden={pantBrevCost <= 0}>
                        <TableCell>
                            Pantbrev
                        </TableCell>
                        <TableCell>
                            <CurrencyFormat value={Math.round(pantBrevCost)} displayType={'text'} thousandSeparator={true}
                                            suffix="kr"/>
                            <Tooltip style={{textAlign: "top"}}
                                     title="Pantbrev behöver betalas med kontanter och det finns inte tillräckligt med kontanter"
                                     interactive={true} leaveDelay={800} placement={"top"}
                                     hidden={suggestedDownPayment > 0}>
                                <Info/>
                            </Tooltip>
                        </TableCell>
                    </TableRow>
                    <TableRow hidden={isNaN(loanQuota) || suggestedDownPayment >= loanAmount}>
                        <TableCell>
                            Lånekvot
                        </TableCell>
                        <TableCell>
                            <CurrencyFormat value={Math.round(loanQuota)} displayType={'text'} suffix="%"/>
                        </TableCell>
                    </TableRow>
                    <TableRow style={{backgroundColor: loanAmount > maxLoanAmontFromBank ? 'orange' : ''}}
                              hidden={suggestedDownPayment >= loanAmount}>
                        <TableCell>
                            Utlåning från bank större 4,5 gånger
                            årsinkomst {loanAmount > maxLoanAmontFromBank ? '(amorteringkrav ökar med 1%)' : ''}
                        </TableCell>
                        <TableCell>
                            <CurrencyFormat value={Math.round(maxLoanAmontFromBank)} displayType={'text'} thousandSeparator={true}
                                            suffix="kr"/>
                            <Tooltip style={{textAlign: "top"}}
                                     title="Om belåningen är större än 4.5 gånger årsinkomsten för hushållet ökar amorteringskravet med 1%"
                                     interactive={true} leaveDelay={800} placement={"top"}>
                                <Info/>
                            </Tooltip>
                        </TableCell>
                    </TableRow>
                    <TableRow hidden={suggestedDownPayment >= loanAmount}>
                        <TableCell style={{fontWeight: 'bold'}}>
                            Lånesumma
                        </TableCell>
                        <TableCell style={{fontWeight: 'bold'}}>
                            <CurrencyFormat value={Math.round(loanAmount)} displayType={'text'} thousandSeparator={true}
                                            suffix="kr"/>
                        </TableCell>
                    </TableRow>
                    <TableRow style={{backgroundColor: suggestedDownPayment <= 0 ? 'orange' : ''}}>
                        <TableCell style={{fontWeight: 'bold'}}>
                            Möjlig kontantinsats
                        </TableCell>
                        <TableCell style={{fontWeight: 'bold'}}>
                            <CurrencyFormat value={Math.round(suggestedDownPayment)} displayType={'text'} thousandSeparator={true}
                                            suffix="kr"/>
                            <Tooltip style={{textAlign: "top"}}
                                     title="Kostnaderna för pantbrev, lagfart, pengarna som ska vara kvar efter köp etc är för stora så kontantinsatsen är mindre än 0."
                                     interactive={true} leaveDelay={800} placement={"top"}
                                     hidden={suggestedDownPayment > 0}>
                                <Info/>
                            </Tooltip>
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
    table: {
        minWidth: 700,
    },
});

export default withStyles(styles)(ControlData)