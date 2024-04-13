// Define action types
export const UPDATE_FORM_DATA = 'UPDATE_FORM_DATA';
export const UPDATE_LOCATION = 'UPDATE_LOCATION';
export const UPDATE_BUYING_TIMEFRAME = 'UPDATE_BUYING_TIMEFRAME';
export const UPDATE_FINANCIAL_DATA = 'UPDATE_FINANCIAL_DATA';
export const UPDATE_DOWN_PAYMENT = 'UPDATE_DOWN_PAYMENT';

// Action creators for updating form data
export const updateFormData = (formData) => ({
  type: UPDATE_FORM_DATA,
  payload: formData,
});

// Action creator for updating location
export const updateLocation = (location) => ({
  type: UPDATE_LOCATION,
  payload: location,
});

// Action creator for updating buying timeframe (Form 3)
export const updateBuyingTimeframe = (timeframe) => ({
  type: UPDATE_BUYING_TIMEFRAME,
  payload: timeframe,
});

// Action creator for updating financial data (Form 4)
export const updateFinancialData = (financialData) => ({
  type: UPDATE_FINANCIAL_DATA,
  payload: financialData,
});

// Action creator for updating down payment (Form 5)
export const updateDownPayment = (downPayment) => ({
  type: UPDATE_DOWN_PAYMENT,
  payload: downPayment,
});
