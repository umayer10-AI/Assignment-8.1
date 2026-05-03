"use client"
import React, { useContext } from 'react';
import Cards from './Cards';
import { Data } from '@/context/Context';

const Emergency = ({data}) => {

    const {c} = useContext(Data)
    const f = [...data]
    const a = f.filter(v => v.title.toLowerCase().includes(c))

    return (
        <div>
            <Cards data={a}></Cards>
        </div>
    );
};

export default Emergency;