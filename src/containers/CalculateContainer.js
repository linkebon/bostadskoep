import React, {Component} from 'react';
import BuyingParameters from "../components/BuyingParameters";
import ControlData from "../components/ControlData";
import * as CalculatorUtil from "../functions/CalculatorUtil";
import OneTimeCosts from "../components/OneTimeCosts";
import OngoingCosts from "../components/OngoingCosts";

class CalculateContainer extends Component {
/*    state = {
        pantBrev: false,
        purchaseAmount: "",
        savingsPerMonth: "",
        savingsMonths: "",
        cash: "",
        moneyLeftAfterPurchase: "",
        maxLeverageLevel: "",
        interest: "",
        profitOnSale: "",
        householdIncome: "",
        operationCosts: ""
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
            profitOnSale: 100,
            householdIncome: 10,
            operationCosts: 10
        };

    handleNumberChange = name => event => {
        this.setState({[name]: Number(event.target.value)});
    };

    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };

    render() {
        const suggestedDownPayment = CalculatorUtil.calculateSuggestedDownPayment(
            this.state.purchaseAmount,
            this.state.cash,
            this.state.savingsPerMonth,
            this.state.savingsMonths,
            this.state.profitOnSale,
            this.state.moneyLeftAfterPurchase,
            this.state.pantBrev);
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
                <OngoingCosts interestCost={CalculatorUtil.calculateInterestCost(this.state.purchaseAmount, this.state.interest)}
                              interestCostTaxReduction={CalculatorUtil.calculateInterestCostWithReduction(this.state.purchaseAmount, this.state.interest)}
                              operationCosts={this.state.operationCosts}
                              amortization={CalculatorUtil.calculateAmortization(this.state.householdIncome, this.state.purchaseAmount)}
                />
            </div>
        )
    }
}

export default CalculateContainer;