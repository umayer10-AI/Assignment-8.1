import { Button } from '@heroui/react';
import React from 'react';

const Category = () => {
    return (
        <div className='bg-slate-800 pb-10 rounded-lg'>
            <h2 className='font-bold text-2xl text-center'>Categories</h2>
            <div className='flex flex-col gap-2 px-3'>
                <Button className={'w-full rounded-lg font-bold bg-linear-to-r from-cyan-500 to-blue-600'}>All</Button>
                <Button className={'w-full rounded-lg font-bold bg-linear-to-r from-cyan-500 to-blue-600'}>Story</Button>
                <Button className={'w-full rounded-lg font-bold bg-linear-to-r from-cyan-500 to-blue-600'}>Science</Button>
                <Button className={'w-full rounded-lg font-bold bg-linear-to-r from-cyan-500 to-blue-600'}>Tech</Button>
            </div>
        </div>
    );
};

export default Category;