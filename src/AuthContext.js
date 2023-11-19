import React, { createContext, useState  } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(null);
    const [songs, setSongs] = useState([]);

    const setToken = (token) => {
        setAuthToken(token);
    };

    const addSongs = (newSongs) => {
        setSongs([...songs, ...newSongs]);
    };

    const clearSongs = () => {
        setSongs([]);
    };

    return (
        <AuthContext.Provider value={{ authToken, setToken, songs, addSongs, clearSongs}}>
            {children}
        </AuthContext.Provider>
    );
};