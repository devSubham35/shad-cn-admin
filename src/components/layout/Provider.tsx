import React from 'react'
import { ThemeProvider, ThemeProviderProps } from 'next-themes';

const Provider = ({ children }:ThemeProviderProps) => {
    return (
        <ThemeProvider defaultTheme="light" attribute="class" enableSystem>
            {children}
        </ThemeProvider>
    )
}

export default Provider