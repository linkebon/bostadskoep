import React, {Component} from 'react';
import InputValues from "../components/BuyingParameters";
import ControlData from "../components/ControlData";
import * as CalculatorUtil from "../functions/CalculatorUtil";

class CalculateContainer extends Component {
/*    state = {
        pantBrev: false,
        purchaseAmount: 0,
        savingsPerMonth: 0,
        savingsMonths: 0,
        cash: 0,
        moneyLeftAfterPurchase: 0,
        maxLeverageLevel: 0,
        interest: 0,
        profitOnSale: 0
    };*/

    state = {
        pantBrev: false,
        purchaseAmount: 1000,
        savingsPerMonth: 10,
        savingsMonths: 5,
        cash: 100,
        moneyLeftAfterPurchase: 10,
        maxLeverageLevel: 0,
        interest: 0,
        profitOnSale: 100
    };

    handleNumberChange = name => event => {
        this.setState({[name]: Number(event.target.value)});
    };

    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };

    calculateDownPayment = () => {
        return CalculatorUtil.calculateDownPayment(
            this.state.purchaseAmount,
            this.state.cash,
            this.state.savingsPerMonth,
            this.state.savingsMonths,
            this.state.profitOnSale,
            this.state.moneyLeftAfterPurchase,
            this.state.pantBrev
        );
    };

    render() {
        const downPayment = this.calculateDownPayment();
        return (
            <div style={{marginTop: '2%'}}>
                <h4>Köp parametrar</h4>
                <InputValues
                    state={this.state}
                    handleChange={this.handleChange}
                    handleNumberChange={this.handleNumberChange}/>
                <br/>
                <ControlData downPayment={downPayment}/>
            </div>
        )
    }
}

export default CalculateContainer;