import React, { createContext, useContext, useReducer } from "react";

// prepares the dataLayer
export const DataContext = createContext();

// wrap our app and provide the Data Layer
export const DataProvider = ({ children, reducer, initialState }) => {
  // const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </DataContext.Provider>
  );
};

// pull and push information from the data Layer
export const useStateValue = () => useContext(DataContext);

// import React, { createContext, useContext, useReducer } from "react";

// // prepares the dataLayer
// export const StateContext = createContext();

// // wrap our app and provide the Data Layer
// export const StateProvider = ({ reducer, initialState, children }) => (
//   <StateContext.Provider value={useReducer(reducer, initialState)}>
//     {children}
//   </StateContext.Provider>
// );
// // pull and push information from the data Layer
// export const useStateValue = () => useContext(StateContext);
