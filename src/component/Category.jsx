import { Button } from '@heroui/react';
import Link from 'next/link';
import React, { useContext } from 'react';

const Category = () => {

    return (
        <div className='bg-slate-800 pb-10 rounded-lg'>
            <h2 className='font-bold text-2xl text-center'>Categories</h2>
            <div className='flex flex-col gap-2 px-3'>
                <Link href={`/all-book`}><Button className={'w-full rounded-lg font-bold bg-linear-to-r from-cyan-500 to-blue-600'}>All</Button></Link>
                <Link href={`?category=story`}><Button className={'w-full rounded-lg font-bold bg-linear-to-r from-cyan-500 to-blue-600'}>Story</Button></Link>
                <Link href={`?category=science`}><Button className={'w-full rounded-lg font-bold bg-linear-to-r from-cyan-500 to-blue-600'}>Science</Button></Link>
                <Link href={`?category=tech`}><Button className={'w-full rounded-lg font-bold bg-linear-to-r from-cyan-500 to-blue-600'}>Tech</Button></Link>
            </div>
        </div>
    );
};

export default Category;