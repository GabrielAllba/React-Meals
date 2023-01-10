import { useState} from "react";
import ErrorContext from "./error-context";

const defaultErrorState = {
  message: 'this is a message'
};



const ErrorProvider = (props) => {
    
  const errorContext = {
    message: 'Error'
  };
  return (
    <ErrorContext.Provider value={errorContext}>
      {props.children}
    </ErrorContext.Provider>
  );
};

export default ErrorProvider;
