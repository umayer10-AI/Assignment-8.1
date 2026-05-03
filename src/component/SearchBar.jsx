"use client"
import { Data } from '@/context/Context';
import { Button, Label, SearchField } from '@heroui/react';
import React, { useContext } from 'react';

const SearchBar = () => {

    const {s,setS,setC} = useContext(Data)
    const a = () => {
        setC(s)
    }

    return (
        <div className='my-5'>
            <div>
                <SearchField name="search">
                    <Label>Search</Label>
                    <SearchField.Group className={'shadow-md shadow-cyan-500'}>
                        <SearchField.SearchIcon />
                        <SearchField.Input onChange={(e) => setS(e.target.value)} className="w-70" placeholder="Search..." />
                        <SearchField.ClearButton />
            <button onClick={a} className='px-3 py-2 bg-blue-500 text-white font-semibold rounded-r-xl'>Search</button>
                    </SearchField.Group>
                </SearchField>
            </div>
        </div>
    );
};

export default SearchBar;