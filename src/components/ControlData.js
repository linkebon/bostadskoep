import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const ControlData = ({classes, suggestedDownPayment, minimumDownPayment, moneySavedUntilPurchase, loanAmount, loanQuota, maxLoanAmontFromBank}) => {
    return (
        <div>
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Beräknade värden</TableCell>
                            <TableCell></TableCell>
                            {/*<TableCell align="left">kr</TableCell>*/}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                Beräknad möjlig kontantinsats
                            </TableCell>
                            <TableCell>
                                {suggestedDownPayment} kr
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                Minsta möjliga kontantinsats (15% av köpesumma)
                            </TableCell>
                            <TableCell>
                                {minimumDownPayment} kr
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                Pengar sparade tills köp
                            </TableCell>
                            <TableCell>
                                {moneySavedUntilPurchase} kr
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                Lånesumma
                            </TableCell>
                            <TableCell>
                                {loanAmount} kr
                            </TableCell>
                        </TableRow>
                        <TableRow hidden={isNaN(loanQuota)}>
                            <TableCell>
                                Lånekvot
                            </TableCell>
                            <TableCell>
                                {loanQuota} %
                            </TableCell>
                        </TableRow>
                        <TableRow style={{backgroundColor: loanAmount > maxLoanAmontFromBank ? 'red' : ''}}>
                            <TableCell>
                                Maxutlåning från bank 4,5 gånger årsinkomst
                            </TableCell>
                            <TableCell>
                                {maxLoanAmontFromBank}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        </div>
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