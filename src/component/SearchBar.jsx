import { Label, SearchField } from '@heroui/react';
import React from 'react';

const SearchBar = () => {
    return (
        <div className='mb-5'>
            <SearchField name="search">
                <Label>Search</Label>
                <SearchField.Group className={'shadow-md shadow-cyan-500'}>
                    <SearchField.SearchIcon />
                    <SearchField.Input className="w-70" placeholder="Search..." />
                    <SearchField.ClearButton />
                </SearchField.Group>
            </SearchField>
        </div>
    );
};

export default SearchBar;