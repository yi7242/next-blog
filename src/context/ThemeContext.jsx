"use client";

import { createContext, useState } from "react";

export const ThemeContext = createContext();

const getFromLocalStorage = () => {
    if (typeof window !== "undefined") {
        const theme = localStorage.getItem("theme");
        return theme || "light";
    }
}

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => getFromLocalStorage());
    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )
}