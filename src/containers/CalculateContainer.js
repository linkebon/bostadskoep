import React, {Component} from 'react';
import BuyingParameters from "../components/BuyingParameters";
import ControlData from "../components/ControlData";
import * as CalculatorUtil from "../functions/CalculatorUtil";
import OneTimeCosts from "../components/OneTimeCosts";

class CalculateContainer extends Component {
    state = {
        pantBrev: false,
        purchaseAmount: "",
        savingsPerMonth: "",
        savingsMonths: "",
        cash: "",
        moneyLeftAfterPurchase: "",
        maxLeverageLevel: "",
        interest: "",
        profitOnSale: "",
        householdIncome: ""
    };

    handleNumberChange = name => event => {
        this.setState({[name]: Number(event.target.value)});
    };

    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };

    render() {
        const suggestedDownPayment = CalculatorUtil.calculateSuggestedDownPayment(this.state.purchaseAmount, this.state.cash, this.state.savingsPerMonth, this.state.savingsMonths, this.state.profitOnSale, this.state.moneyLeftAfterPurchase, this.state.pantBrev);

        const loanAmount = CalculatorUtil.calculateLoanAmount(this.state.purchaseAmount, suggestedDownPayment);
        return (
            <div style={{marginTop: '1%', marginBottom: '3%'}}>
                <BuyingParameters
                    state={this.state}
                    handleChange={this.handleChange}
                    handleNumberChange={this.handleNumberChange}/>
                <ControlData
                    suggestedDownPayment={suggestedDownPayment}
                    minimumDownPayment={CalculatorUtil.calculateMinimumDownPayment(this.state.purchaseAmount)}
                    moneySavedUntilPurchase={CalculatorUtil.calculateMoneySavedUntilPurchase(this.state.savingsPerMonth, this.state.savingsMonths)}
                    loanAmount={loanAmount}
                    loanQuota={CalculatorUtil.calculateLoanQuota(this.state.purchaseAmount, suggestedDownPayment)}
                    maxLoanAmontFromBank={CalculatorUtil.calculateMaxLoanFromBankFourPointFive(this.state.householdIncome)}
                />
                <OneTimeCosts
                    pantBrevCost={this.state.pantBrev ? CalculatorUtil.calculatePantBrevCost(this.state.purchaseAmount) : 0}
                    lagfartCost={CalculatorUtil.calculateLagfartCost(this.state.purchaseAmount)}
                />
            </div>
        )
    }
}

export default CalculateContainer;