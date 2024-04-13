// Define initial state for form data
const initialState = {
    // Define common fields for all forms
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    residentStatus: 'Canadian Resident or Citizen',
    emailConsent: true,
    // Add fields specific to Form 4
    income: '',
    debt: '',
    payableAmount: '',
    perMonthSelected: true,
    // Add fields specific to Form 5
    downPayment: '',
    // Add fields specific to Form 6 (if needed)
    location: '',
    // Add fields specific to Form 3
    buyingTimeframe: '',
  };
  
  // Define action types
  const UPDATE_FORM_DATA = 'UPDATE_FORM_DATA';
  const UPDATE_BUYING_TIMEFRAME = 'UPDATE_BUYING_TIMEFRAME';
  const UPDATE_FINANCIAL_DATA = 'UPDATE_FINANCIAL_DATA';
  const UPDATE_DOWN_PAYMENT = 'UPDATE_DOWN_PAYMENT';
  const UPDATE_LOCATION = 'UPDATE_LOCATION';
  
  // Define action creators
  export const updateFormData = (formData) => ({
    type: UPDATE_FORM_DATA,
    payload: formData,
  });
  
  export const updateLocation = (location) => ({
    type: UPDATE_LOCATION,
    payload: location,
  });
  
  // Action creators for specific form actions
  export const updateBuyingTimeframe = (timeframe) => ({
    type: UPDATE_BUYING_TIMEFRAME,
    payload: timeframe,
  });
  
  export const updateFinancialData = (financialData) => ({
    type: UPDATE_FINANCIAL_DATA,
    payload: financialData,
  });
  
  export const updateDownPayment = (downPayment) => ({
    type: UPDATE_DOWN_PAYMENT,
    payload: downPayment,
  });
  
  // Define reducer function
  const formReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_FORM_DATA:
        return {
          ...state,
          ...action.payload,
        };
      case UPDATE_BUYING_TIMEFRAME:
        return {
          ...state,
          buyingTimeframe: action.payload,
        };
      case UPDATE_FINANCIAL_DATA:
        return {
          ...state,
          ...action.payload,
        };
      case UPDATE_DOWN_PAYMENT:
        return {
          ...state,
          downPayment: action.payload,
        };
      case UPDATE_LOCATION:
        return {
          ...state,
          location: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default formReducer;
  