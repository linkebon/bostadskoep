import React, {Component} from 'react';
import * as ls from '../functions/LocalStorage';
import BuyingParameters from "../components/BuyingParameters";
import ControlData from "../components/ControlData";
import * as CalculatorUtil from "../functions/CalculatorUtil";
import OneTimeCosts from "../components/OneTimeCosts";
import OngoingCosts from "../components/OngoingCosts";

const initialState = {pantBrev: false, purchaseAmount: "", savingsPerMonth: "", savingsMonths: "", cash: "", moneyLeftAfterPurchase: "", maxLeverageLevel: "", interest: "", profitOnSale: "", householdIncome: "", operationCosts: ""};

class CalculateContainer extends Component {
    state = initialState;

    componentDidMount() {
        const existingState = ls.getState('buyParameters');
        if (existingState != null) {
            this.setState(existingState);
        }
    }

    clearInput = () => {
        ls.clear();
        this.setState(initialState);
    };

    handleNumberChange = name => event => {
        const newState = {...this.state, [name]: Number(event.target.value)};
        ls.saveState('buyParameters', newState);
        this.setState(newState);
    };

    handleChange = name => event => {
        const newState = {...this.state, [name]: event.target.value};
        ls.saveState('buyParameters', newState);
        this.setState(newState);
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
                    handleNumberChange={this.handleNumberChange}
                    clearInput={this.clearInput}
                />
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
                <OngoingCosts
                    interestCost={CalculatorUtil.calculateInterestCost(this.state.purchaseAmount, this.state.interest)}
                    interestCostTaxReduction={CalculatorUtil.calculateInterestCostWithReduction(this.state.purchaseAmount, this.state.interest)}
                    operationCosts={this.state.operationCosts}
                    amortization={CalculatorUtil.calculateAmortization(this.state.householdIncome, this.state.purchaseAmount)}
                />
            </div>
        )
    }
}



export default CalculateContainer;