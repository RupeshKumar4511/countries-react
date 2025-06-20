import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

// custom hook
export const useTheme = ()=> useContext(ThemeContext);