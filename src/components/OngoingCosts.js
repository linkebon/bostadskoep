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

const OngoingCosts = ({classes, interestCost, interestCostTaxReduction, amortization, operationCosts}) => (
    <Paper className={classes.root}>
        <Table className={classes.table}>
            <TableHead>
                <TableRow>
                    <TableCell>Löpande månadsutgifter</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>
                        Räntekostnader
                    </TableCell>
                    <TableCell>
                        <CurrencyFormat value={Math.round(interestCost)} displayType={'text'} thousandSeparator={true} suffix="kr"/>
                        <Tooltip style={{textAlign: "top"}}
                                 title={`Med ränteavdrag blir räntekostnaden: ${interestCostTaxReduction} kr`}
                                 interactive={true} leaveDelay={800} placement={"top"}>
                            <Info/>
                        </Tooltip>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        Amortering
                    </TableCell>
                    <TableCell>
                        <CurrencyFormat value={Math.round(amortization)} displayType={'text'} thousandSeparator={true} suffix="kr"/>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        Driftkostnader (el, vatten, hyra etc)
                    </TableCell>
                    <TableCell>
                        <CurrencyFormat value={Math.round(operationCosts)} displayType={'text'} thousandSeparator={true}
                                        suffix="kr"/>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{fontWeight: 'bold'}}>Totalt per månad</TableCell>
                    <TableCell style={{fontWeight: 'bold'}}>
                        <CurrencyFormat value={Math.round(replaceNanWithZero(operationCosts) + replaceNanWithZero(interestCost) + replaceNanWithZero(amortization))} displayType={'text'}
                                        thousandSeparator={true} suffix="kr"/>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </Paper>
);

const replaceNanWithZero = (v) => isNaN(v) ? 0 : v;

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

export default withStyles(styles)(OngoingCosts)
