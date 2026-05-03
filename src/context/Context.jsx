"use client"
import React, { createContext, useState } from 'react';

export const Data = createContext()

const Context = ({children}) => {

    const [s,setS] = useState('')
    const [c,setC] = useState('')

    return (
        <Data.Provider value={{s,setS,c,setC}}>
            {children}
        </Data.Provider>
    );
};

export default Context;