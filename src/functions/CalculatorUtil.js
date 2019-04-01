export const calculateDownPayment = (purchaseAmount, cash, moneySavedEachMonth, monthsCount, profitOnSale, moneyLeftAfterPurchase, pantBrevNeeded) => {
    const lagfartCost = calculateLagfartCost(purchaseAmount);
    const pantBrevCost = pantBrevNeeded === true ? calculatePantBrevCost(purchaseAmount) : 0;
    const downPayment = cash + calculateMoneySavedUntilPurchase(moneySavedEachMonth, monthsCount) + profitOnSale - moneyLeftAfterPurchase - pantBrevCost - lagfartCost;
    return downPayment;
};

export const calculateMoneySavedUntilPurchase = (moneySavedEachMonth, monthsCount) => moneySavedEachMonth * monthsCount;

export const calculateLagfartCost = (purchaseAmount) => purchaseAmount * (1.5/100);

export const calculatePantBrevCost = (purchaseAmount) => purchaseAmount * (2 / 100);