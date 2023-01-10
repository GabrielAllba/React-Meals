import React from "react";
import { createContext } from "react";

const ErrorContext = createContext({
    message: 'Error'
});

export default ErrorContext;
