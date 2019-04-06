export const calculateSuggestedDownPayment = (purchaseAmount, cash, moneySavedEachMonth, monthsCount, profitOnSale, moneyLeftAfterPurchase, pantBrevNeeded) => {
    const lagfartCost = calculateLagfartCost(purchaseAmount);
    const pantBrevCost = pantBrevNeeded === true ? calculatePantBrevCost(purchaseAmount) : 0;
    const downPayment = cash + calculateMoneySavedUntilPurchase(moneySavedEachMonth, monthsCount) + profitOnSale - moneyLeftAfterPurchase - pantBrevCost - lagfartCost;
    return downPayment;
};

export const calculateMinimumDownPayment = (purchaseAmount) => purchaseAmount * (15 / 100);

export const calculateMoneySavedUntilPurchase = (moneySavedEachMonth, monthsCount) => moneySavedEachMonth * monthsCount;

export const calculateLagfartCost = purchaseAmount => purchaseAmount * (1.5 / 100);

export const calculatePantBrevCost = purchaseAmount => purchaseAmount * (2 / 100);

export const calculateLoanAmount = (purchaseAmount, downPayment) => downPayment > 0 ? purchaseAmount - downPayment : purchaseAmount;

export const calculateLoanQuota = (purchaseAmount, downPayment) => (((purchaseAmount - downPayment) / purchaseAmount) * 100);

export const calculateMaxLoanFromBankFourPointFive = householdIncome => householdIncome * 4.5;

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
        return purchaseAmount * (amortizationOnLoan / 100);
    } else {
        return 0;
    }
};

export const calculateInterestCostPerMonth = (purchaseAmount, interest) => purchaseAmount * (interest / 100);

export const calculateInterestCostWithReductionPerMonth = (purchaseAmount, interest) => {
    const interestCost = calculateInterestCostPerMonth(purchaseAmount, interest);
    return interestCost - (interestCost * (30 / 100));
};

export const getPerMonth = (value) => {
    if (value === 0) {
        return 0;
    }
    return value / 12;
};