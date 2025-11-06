import { createContext, useEffect, useMemo, useState } from 'react';

export const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => { },
    setTheme: () => { }
});

export function ThemeProvider({ children }) {
    const [theme, setThemeState] = useState(() => {
        try {
            const saved = localStorage.getItem('theme');
            return saved === 'dark' ? 'dark' : 'light';
        } catch {
            return 'light';
        }
    });

    const setTheme = (next) => {
        setThemeState(next);
    };

    const toggleTheme = () => {
        setThemeState((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {
        try {
            localStorage.setItem('theme', theme);
        } catch { }
        const root = document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(theme);
    }, [theme]);

    const value = useMemo(() => ({ theme, toggleTheme, setTheme }), [theme]);

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}


