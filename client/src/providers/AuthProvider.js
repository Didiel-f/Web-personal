import jwtDecode from 'jwt-decode';
import React, { createContext, useEffect, useState } from 'react';
import { getAccessTokenApi, getRefreshTokenApi, logout, refreshAccessTokenApi } from '../api/auth';


export const AuthContext = createContext();

export const AuthProvider = (props) => {

    const { children } = props;
    const [user, setUser] = useState({
        user: null,
        isLoading: true
    });

    useEffect( () => {
        checkUserLogin( setUser );
    }, [] )

    return <AuthContext.Provider value={ user }>{ children }</AuthContext.Provider>
};

const checkUserLogin = ( setUser ) => {
    const accessToken = getAccessTokenApi();

    if ( !accessToken ) {
        const refreshToken = getRefreshTokenApi();

        if ( !refreshToken ) {
            logout();
            setUser({
                user: null,
                isLoading: false
            });
        } else {
            refreshAccessTokenApi( refreshToken );
        }
        
    } else {
        setUser({
            isLoading: false,
            user: jwtDecode( accessToken )
        });
    }
    
    
};
