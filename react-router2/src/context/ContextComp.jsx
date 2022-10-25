import React from "react";
import { createContext } from "react";

// state를 담아서 전달
export const StateContext = createContext(null);
// set을 담아서 전달
export const SetContext = React.createContext(null);