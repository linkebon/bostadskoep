export const calculateSuggestedDownPayment = (purchaseAmount, cash, moneySavedEachMonth, monthsCount, profitOnSale, moneyLeftAfterPurchase, pantBrevNeeded) => {
    console.log(purchaseAmount + " " + cash + " " + moneySavedEachMonth + " " + monthsCount + " " + profitOnSale + " " + moneyLeftAfterPurchase + " " + pantBrevNeeded);
    const lagfartCost = calculateLagfartCost(purchaseAmount);
    console.log("lagfart cost: " + lagfartCost);
    const pantBrevCost = pantBrevNeeded === true ? calculatePantBrevCost(purchaseAmount) : 0;
    console.log("pantBrev cost: " + pantBrevCost);
    const downPayment = cash + calculateMoneySavedUntilPurchase(moneySavedEachMonth, monthsCount) + profitOnSale - moneyLeftAfterPurchase - pantBrevCost - lagfartCost;
    console.log(downPayment);
    return Math.round(downPayment);
};

export const calculateMinimumDownPayment = (purchaseAmount) => Math.round(purchaseAmount * (15 / 100));

export const calculateMoneySavedUntilPurchase = (moneySavedEachMonth, monthsCount) => Math.round(moneySavedEachMonth * monthsCount);

export const calculateLagfartCost = purchaseAmount => Math.round(purchaseAmount * (1.5 / 100));

export const calculatePantBrevCost = purchaseAmount => Math.round(purchaseAmount * (2 / 100));

export const calculateLoanAmount = (purchaseAmount, downPayment) => downPayment > 0 ? Math.round(purchaseAmount - downPayment) : purchaseAmount;

export const calculateLoanQuota = (purchaseAmount, downPayment) => (((purchaseAmount - downPayment) / purchaseAmount) * 100);

export const calculateMaxLoanFromBankFourPointFive = householdIncome => Math.round(householdIncome * 4.5);

export const calculateAmortization = (householdIncome, purchaseAmount) => {
    let amortizationOnLoan = 0;
    if (householdIncome / purchaseAmount > 0.7) {
        amortizationOnLoan = 2;
    } else if (householdIncome / purchaseAmount > 0.5) {
        amortizationOnLoan = 1;
    }

    if (purchaseAmount > householdIncome * 4.5) {
        amortizationOnLoan = amortizationOnLoan + 1;
    }

    if (amortizationOnLoan > 0) {
        return Math.round(purchaseAmount * (amortizationOnLoan / 100));
    } else {
        return 0;
    }
};

export const calculateInterestCostPerMonth = (purchaseAmount, interest) => Math.round(purchaseAmount * (interest / 100));

export const calculateInterestCostWithReductionPerMonth = (purchaseAmount, interest) => {
    const interestCost = calculateInterestCostPerMonth(purchaseAmount, interest);
    return Math.round(interestCost - (interestCost * (30 / 100)));
};

export const getPerMonth = (value) => {
    if (value === 0) {
        return 0;
    }
    return Math.round(value / 12);
};