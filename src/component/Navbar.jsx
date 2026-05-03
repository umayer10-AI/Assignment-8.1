"use client"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {

    const p = usePathname()

    return (
        <div>
            <div>
                <Image src={'/g.png'} width={32} height={32} alt='book'></Image>
                <h2 className='text-xl font-bold'>Online Book</h2>
            </div>
            <div>
                <Link>{p==='/'? <button>Home</button>}</Link>
            </div>
        </div>
    );
};

export default Navbar;