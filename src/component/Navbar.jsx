"use client"
import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {

    const p = usePathname()

    return (
       <div className='border-b border-b-slate-600'>
         <div className='flex justify-between items-center py-3 w-[90%] mx-auto'>
            <div className='flex items-center gap-1'>
                <Image 
                src={'https://img.icons8.com/?size=100&id=OYbXGW7sJiOG&format=png&color=000000'}
                width={38} height={38} alt='book'></Image>
                <h2 className='text-xl font-bold'>Online Book</h2>
            </div>
            <div className='font-semibold text-sm flex items-center justify-center gap-5'>
                <Link href={'/'}>{p==='/'? <Button size='sm' className={'bg-linear-to-r from-cyan-500 to-blue-600'}>Home</Button> :<button className='cursor-pointer'>Home</button>}</Link>
                <Link href={'/all-book'}>{p==='/all-book'? <Button size='sm' className={'bg-linear-to-r from-cyan-500 to-blue-600'}>All book</Button> :<button className='cursor-pointer'>All book</button>}</Link>
                <Link href={'/profile'}>{p==='/profile'? <Button size='sm' className={'bg-linear-to-r from-cyan-500 to-blue-600'}>Profile</Button> :<button className='cursor-pointer'>Profile</button>}</Link>
            </div>
            <div className='text-sm flex items-center gap-2'>
                <Link href={'/signup'}>Sign Up</Link>
                <Link href={'/signin'}>Sign In</Link>
            </div>
        </div>
       </div>
    );
};

export default Navbar;