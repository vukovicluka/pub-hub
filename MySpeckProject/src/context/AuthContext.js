import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState('pending');

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {props.children}
        </AuthContext.Provider>
    );
}

const AuthConsumer = AuthContext.Consumer;

export { AuthContext, AuthProvider, AuthConsumer };