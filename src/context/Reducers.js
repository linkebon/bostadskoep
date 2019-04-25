import * as ls from "../util/LocalStorage";

export const initialBuyingParameters = {
    house: true,
    pantBrev: false,
    purchaseAmount: 0,
    savingsPerMonth: 0,
    savingsMonths: 0,
    cash: 0,
    moneyLeftAfterPurchase: 0,
    maxLeverageLevel: 0,
    interest: 0,
    profitOnSale: 0,
    householdIncome: 0,
    operationCosts: 0
};

export const buyingParametersReducer = (state, action) => {
    switch (action.type) {
        case 'CALCULATE':
            const isNumeric = (n) => !isNaN(parseFloat(n)) && isFinite(n);
            const newState = isNumeric(action.value)
                ? {...state, [action.fieldName]: Number(action.value)}
                : {...state, [action.fieldName]: action.value};
            ls.saveState('buyParameters', newState);
            return newState;
        case 'CLEAR':
            ls.clear();
            return {...initialBuyingParameters};
        case 'LOAD_LOCAL_STORAGE':
            const s = ls.getState("buyParameters");
            if (s != null) {
                return s;
            }
            return {...initialBuyingParameters};
        default:
            throw new Error("No action found");
    }
};