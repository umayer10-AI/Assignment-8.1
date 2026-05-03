"use client"
import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {

    const p = usePathname()

    return (
        <div className='flex justify-between items-center py-4 w-[90%] mx-auto'>
            <div className='flex items-center gap-2'>
                <Image src={'/g.png'} width={32} height={32} alt='book'></Image>
                <h2 className='text-xl font-bold'>Online Book</h2>
            </div>
            <div className='font-semibold text-sm flex items-center justify-center gap-5'>
                <Link href={'/'}>{p==='/'? <Button size='sm' className={'bg-linear-to-r from-cyan-500 to-blue-600'}>Home</Button> :<button>Home</button>}</Link>
                <Link href={'/all-book'}>{p==='/all-book'? <Button size='sm' className={'bg-linear-to-r from-cyan-500 to-blue-600'}>All book</Button> :<button>All book</button>}</Link>
                <Link href={'/profile'}>{p==='/profile'? <Button size='sm' className={'bg-linear-to-r from-cyan-500 to-blue-600'}>Profile</Button> :<button>Profile</button>}</Link>
            </div>
            <div className='text-sm flex items-center gap-2'>
                <Link href={'/signup'}>Sign Up</Link>
                <Link href={'/signin'}>Sign In</Link>
            </div>
        </div>
    );
};

export default Navbar;