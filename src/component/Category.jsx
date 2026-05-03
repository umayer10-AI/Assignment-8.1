import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const Category = ({k}) => {

    return (
        <div className='bg-slate-800 pb-10 rounded-lg'>
            <h2 className='font-bold text-2xl text-center py-3'>Categories</h2>
            <div className='flex flex-col gap-2 px-3'>
                <Link href={`/all-book`}><Button className={`w-full rounded-lg font-bold ${!k ? "bg-linear-to-r from-cyan-500 to-blue-600" : 'bg-black'}`}>All</Button></Link>
                <Link href={`?category=story`}><Button className={`w-full rounded-lg font-bold ${k==='story' ? "bg-linear-to-r from-cyan-500 to-blue-600" : 'bg-black'}`}>Story</Button></Link>
                <Link href={`?category=science`}><Button className={`w-full rounded-lg font-bold ${k==='science' ? "bg-linear-to-r from-cyan-500 to-blue-600" : 'bg-black'}`}>Science</Button></Link>
                <Link href={`?category=tech`}><Button className={`w-full rounded-lg font-bold ${k==='tech' ? "bg-linear-to-r from-cyan-500 to-blue-600" : 'bg-black'}`}>Tech</Button></Link>
            </div>
        </div>
    );
};

export default Category;