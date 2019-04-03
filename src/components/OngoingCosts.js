import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
                        {interestCost}
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        Räntekostnader med ränteavdrag (30%)
                    </TableCell>
                    <TableCell>
                        {interestCostTaxReduction}
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        Amortering
                    </TableCell>
                    <TableCell color={'red'}>
                        {amortization}
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        Driftkostnader (el, vatten, hyra etc)
                    </TableCell>
                    <TableCell>
                        {operationCosts}
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{fontWeight: 'bold'}}>Totalt per månad</TableCell>
                    <TableCell style={{fontWeight: 'bold'}}>{operationCosts + interestCost + amortization}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </Paper>
);

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
