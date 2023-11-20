import React, { createContext, useState  } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(null);
    const [songs, setSongs] = useState([]);
    const [isLoggedIn, setLoggedIn] = useState(false);


    const setToken = (token) => {
        setAuthToken(token);
    };

    const setLogin = () => {
        setLoggedIn(true);
    }

    const addSongs = (newSongs) => {
        setSongs([...songs, ...newSongs]);
    };

    const clearSongs = () => {
        setSongs([]);
    };

    return (
        <AuthContext.Provider value={{ authToken, setToken, songs, addSongs, clearSongs, isLoggedIn, setLogin}}>
            {children}
        </AuthContext.Provider>
    );
};