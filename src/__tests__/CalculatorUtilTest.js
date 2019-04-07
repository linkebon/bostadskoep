import * as CalculatorUtil from '../functions/CalculatorUtil';

it('calculate lagfart cost', () => {
   expect(CalculatorUtil.calculateLagfartCost(100)).toEqual(1.5);
});

it('calculate pantbrev cost', () => {
    expect(CalculatorUtil.calculatePantBrevCost(100)).toEqual(2.0);
});

it('calculate loan amount', () => {
    expect(CalculatorUtil.calculateLoanAmount(100, 50)).toEqual(50);
    expect(CalculatorUtil.calculateLoanAmount(100, 0)).toEqual(100);
});

it('calculate Money Saved Until Purchase', () => {
   expect(CalculatorUtil.calculateMoneySavedUntilPurchase(1000, 20)).toEqual(20000);
   expect(CalculatorUtil.calculateMoneySavedUntilPurchase(1000, 0)).toEqual(0)
});

it('calculate minimum down payment', () => {
   expect(CalculatorUtil.calculateMinimumDownPayment(100)).toEqual(15);
});

it('calculate Loan Quota', () => {
   expect(CalculatorUtil.calculateLoanQuota(100, 50)).toEqual(50)
});

it('calculateMaxLoanFromBankFourPointFive', () => {
    expect(CalculatorUtil.calculateMaxLoanFromBankFourPointFive(100)).toEqual(450)
});

it('calculate amortization', () => {
    expect(CalculatorUtil.calculateAmortization(50000, 700000, 1000000)).toEqual(14000)
    expect(CalculatorUtil.calculateAmortization(10, 75, 100)).toEqual(2.25)
});

it('calculate interest cost', () => {
    expect(CalculatorUtil.calculateInterestCost(75, 3)).toEqual(2.25)
});

it('calculate interest cost with tax reduction', () => {
    expect(CalculatorUtil.calculateInterestCostWithReduction(100, 3)).toEqual(2.1)
});

it('get per month', () => {
    expect(CalculatorUtil.getPerMonth(120)).toEqual(10)
});

it('calculate suggested down payment', () => {
    expect(CalculatorUtil.calculateSuggestedDownPayment(100, 10, 1, 20, 10, 15, true)).toEqual(21.5)
    expect(CalculatorUtil.calculateSuggestedDownPayment(100, 10, 1, 20, 10, 15, false)).toEqual(23.5)
});
