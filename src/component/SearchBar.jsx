"use client"
import { Data } from '@/context/Context';
import { Label, SearchField } from '@heroui/react';
import React, { useContext } from 'react';

const SearchBar = () => {

    const {s,setS} = useContext(Data)

    return (
        <div className='mb-5'>
            <SearchField name="search">
                <Label>Search</Label>
                <SearchField.Group className={'shadow-md shadow-cyan-500'}>
                    <SearchField.SearchIcon />
                    <SearchField.Input onChange={(e) => setS(e.target.value)} className="w-70" placeholder="Search..." />
                    <SearchField.ClearButton />
                </SearchField.Group>
            </SearchField>
        </div>
    );
};

export default SearchBar;