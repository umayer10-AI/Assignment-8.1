"use client"
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {

    const p = usePathname()
    const { data: session } = authClient.useSession()

    const user = session?.user

    return (
       <div className='border-b border-b-slate-600'>
         <div className='flex flex-col lg:flex-row gap-3 lg:gap-0 justify-between items-center py-3 w-[90%] mx-auto'>
            <div className='flex items-center gap-1'>
                <Link href={'/'}>
                    <Image 
                    src={'https://img.icons8.com/?size=100&id=OYbXGW7sJiOG&format=png&color=000000'}
                    width={38} height={38} alt='book'></Image>
                </Link>
                <h2 className='text-xl font-bold'>Online Book</h2>
            </div>
            <div className='font-semibold text-sm flex items-center justify-center gap-5'>
                <Link href={'/'}>{p==='/'? <Button size='sm' className={'bg-linear-to-r from-cyan-500 to-blue-600'}>Home</Button> :<button className='cursor-pointer'>Home</button>}</Link>
                <Link href={'/all-book'}>{p==='/all-book'? <Button size='sm' className={'bg-linear-to-r from-cyan-500 to-blue-600'}>All book</Button> :<button className='cursor-pointer'>All book</button>}</Link>
                <Link href={'/profile'}>{p==='/profile'? <Button size='sm' className={'bg-linear-to-r from-cyan-500 to-blue-600'}>Profile</Button> :<button className='cursor-pointer'>Profile</button>}</Link>
            </div>
            {
                user? <div className='text-sm flex items-center gap-2'>
                     <Link href={'/profile'}>
                     <Avatar size='sm'>
                        <Avatar.Image alt="Umayer Ahmad"
                        referrerPolicy='no-referrer'
                         src={user?.image} />
                        <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                    </Avatar></Link>
                    <Button size='sm' variant='danger' onClick={async() => await authClient.signOut()}>Sign Out</Button>
                </div> : 
                <div className='text-sm flex items-center gap-2'>
                    <Link href={'/signup'}><Button className={'bg-linear-to-r from-cyan-500 to-blue-600'}>Sign Up</Button></Link>
                    <Link href={'/signin'}><Button variant='secondary'>Sign In</Button></Link>
                </div>
            }
        </div>
       </div>
    );
};

export default Navbar;