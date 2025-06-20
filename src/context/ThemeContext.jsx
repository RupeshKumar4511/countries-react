import { useState } from 'react';
import { createContext } from 'react';



export const ThemeContext = createContext();


export function ThemeContextProvider ({children}){

    const [isDark,setDark] = useState(JSON.parse(localStorage.getItem('isDark')));
    return (
       
        <ThemeContext.Provider value={[isDark,setDark]}>
            {children}
        </ThemeContext.Provider>
    )
} 