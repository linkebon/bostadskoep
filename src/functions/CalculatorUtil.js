export const calculateSuggestedDownPayment = (purchaseAmount, cash, moneySavedEachMonth, monthsCount, profitOnSale, moneyLeftAfterPurchase, pantBrevNeeded) => {
    const lagfartCost = calculateLagfartCost(purchaseAmount);
    const pantBrevCost = pantBrevNeeded === true ? calculatePantBrevCost(purchaseAmount) : 0;
    const downPayment = cash + calculateMoneySavedUntilPurchase(moneySavedEachMonth, monthsCount) + profitOnSale - moneyLeftAfterPurchase - pantBrevCost - lagfartCost;
    return Math.floor(downPayment);
};

export const calculateMinimumDownPayment = (purchaseAmount) => Math.floor(purchaseAmount * (15 / 100));

export const calculateMoneySavedUntilPurchase = (moneySavedEachMonth, monthsCount) => Math.floor(moneySavedEachMonth * monthsCount);

export const calculateLagfartCost = purchaseAmount => Math.ceil(purchaseAmount * (1.5 / 100));

export const calculatePantBrevCost = purchaseAmount => Math.ceil(purchaseAmount * (2 / 100));

export const calculateLoanAmount = (purchaseAmount, downPayment) => Math.floor(purchaseAmount - downPayment);

export const calculateLoanQuota = (purchaseAmount, downPayment) => (((purchaseAmount - downPayment) / purchaseAmount) * 100).toFixed(2);

export const calculateMaxLoanFromBankFourPointFive = householdIncome => Math.floor(householdIncome * 4.5);