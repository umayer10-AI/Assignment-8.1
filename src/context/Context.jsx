"use client"
import React, { createContext, useState } from 'react';

export const Data = createContext()

const Context = ({children}) => {

    const [s,setS] = useState('')

    return (
        <Data.Provider value={{s,setS}}>
            {children}
        </Data.Provider>
    );
};

export default Context;