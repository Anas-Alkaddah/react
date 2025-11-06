import { createContext, useEffect, useMemo, useState } from 'react';

export const UserContext = createContext({
    user: null,
    login: async () => { },
    signup: async () => { },
    logout: () => { }
});

export function UserProvider({ children }) {
    const [user, setUser] = useState(() => {
        try {
            const raw = localStorage.getItem('user');
            return raw ? JSON.parse(raw) : null;
        } catch {
            return null;
        }
    });

    useEffect(() => {
        try {
            if (user) {
                localStorage.setItem('user', JSON.stringify(user));
            } else {
                localStorage.removeItem('user');
            }
        } catch { }
    }, [user]);

    const login = async ({ email }) => {
        await new Promise((r) => setTimeout(r, 700));
        setUser({ id: 'local', name: email.split('@')[0] || 'User', email });
    };

    const signup = async ({ name, email }) => {
        await new Promise((r) => setTimeout(r, 900));
        setUser({ id: 'local', name: name || (email ? email.split('@')[0] : 'User'), email });
    };

    const logout = () => {
        setUser(null);
    };

    const value = useMemo(() => ({ user, login, signup, logout }), [user]);

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}


