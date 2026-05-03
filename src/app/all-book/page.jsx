import Category from '@/component/Category';
import Emergency from '@/component/Emergency';
import SearchBar from '@/component/SearchBar';
import { getPost } from '@/lib/fetching';
import React from 'react';

const page = async ({searchParams}) => {

    const data = await getPost()
    const {category} = await searchParams
    const f = category? [...data].filter(v => v.category.toLowerCase() === category.toLowerCase()) : [...data]
    console.log(category)

    return (
        <div>
            <h2 className='text-3xl font-bold mt-5 bg-linear-to-r from-cyan-500 to-blue-600 text-transparent bg-clip-text'>All Books</h2>
            <div className='flex justify-center'>
                <SearchBar></SearchBar>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
            <div className='rounded-lg'>
                <Category></Category>
            </div>
            <div className='col-span-3'>
                <div>
                    <Emergency data={f}></Emergency>
                </div>
            </div>
        </div>
        </div>
    );
};

export default page;