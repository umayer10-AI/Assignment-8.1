import Cards from '@/component/Cards';
import SearchBar from '@/component/SearchBar';
import { getPost } from '@/lib/fetching';
import React from 'react';

const page = async () => {

    const data = await getPost()

    return (
        <div>
            <h2 className='text-2xl font-bold my-5 bg-linear-to-r from-cyan-500 to-blue-600 text-transparent bg-clip-text'>All Books</h2>
            <SearchBar></SearchBar>
            <Cards data={data}></Cards>
        </div>
    );
};

export default page;