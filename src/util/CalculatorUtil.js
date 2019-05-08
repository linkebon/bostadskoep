export const calculateSuggestedDownPayment = (purchaseAmount, cash, moneySavedEachMonth, monthsCount, profitOnSale, moneyLeftAfterPurchase, pantBrevNeeded, house) => {
    const lagfartCost = house ? calculateLagfartCost(purchaseAmount) : 0;
    const pantBrevCost = pantBrevNeeded && house ? calculatePantBrevCost(purchaseAmount) : 0;
    return cash + calculateMoneySavedUntilPurchase(moneySavedEachMonth, monthsCount) + profitOnSale - moneyLeftAfterPurchase - pantBrevCost - lagfartCost;
};

export const calculateMinimumDownPayment = (purchaseAmount) => purchaseAmount * (15 / 100);

export const calculateMoneySavedUntilPurchase = (moneySavedEachMonth, monthsCount) => moneySavedEachMonth * monthsCount;

export const calculateLagfartCost = purchaseAmount => purchaseAmount * (1.5 / 100);

export const calculatePantBrevCost = purchaseAmount => purchaseAmount * (2 / 100);

export const calculateLoanAmount = (purchaseAmount, downPayment, house, pantBrevNeeded) => {
    return downPayment > 0 ? purchaseAmount - downPayment : purchaseAmount;
};

export const calculateLoanQuota = (purchaseAmount, downPayment) => (((purchaseAmount - downPayment) / purchaseAmount) * 100);

export const calculateMaxLoanFromBankFourPointFive = householdIncome => householdIncome * 4.5;

export const calculateAmortization = (householdIncome, loanAmount, purchaseAmount) => {
    let amortizationOnLoan = 0;
    if (loanAmount / purchaseAmount > 0.7) {
        amortizationOnLoan = 2;
    } else if (loanAmount / purchaseAmount > 0.5) {
        amortizationOnLoan = 1;
    }

    if (loanAmount > householdIncome * 4.5) {
        amortizationOnLoan = amortizationOnLoan + 1;
    }

    if (amortizationOnLoan > 0) {
        return loanAmount * (amortizationOnLoan / 100);
    } else {
        return 0;
    }
};

export const calculateInterestCost = (loanAmount, interest) => (loanAmount * (interest / 100));

export const calculateInterestCostWithReduction = (loanAmount, interest) => {
    const interestCost = calculateInterestCost(loanAmount, interest);
    return (interestCost - (interestCost * (30 / 100)));
};

export const getPerMonth = (value) => {
    if (value === 0) {
        return 0;
    }
    return value / 12;
};