import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
        <div className='h-[60vh] rounded-lg bg-[url("https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGJvb2t8ZW58MHx8MHx8fDA%3D")] bg-cover bg-no-repeat bg-center'>
            <div className='bg-black/50 h-full flex items-center justify-center'>
                <div className='max-w-75 lg:max-w-2xl mx-auto space-y-4'>
                    <h2 className='text-2xl lg:text-6xl font-bold'>Online Book Borrowing Platform</h2>
                    <h2 className='font-semibold text-gray-300'>An online platform where users can easily borrow and lend books anytime.</h2>
                    <div className='flex items-center gap-2'>
                        <Link href={'/all-book'}><Button className={'bg-linear-to-r from-cyan-500 to-blue-600'}>Browse Now</Button></Link>
                        <Link href={'/price'}><Button variant='outline' className={'text-white'}>All price</Button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;