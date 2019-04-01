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

export const calculateLoanAmount = (purchaseAmount, downPayment) => purchaseAmount - downPayment;

export const calculateLoanQuota = (purchaseAmount, downPayment) => (((purchaseAmount - downPayment) / purchaseAmount) * 100).toFixed(2);

export const calculateMaxLoanFromBankFourPointFive = householdIncome => Math.floor(householdIncome * 4.5);