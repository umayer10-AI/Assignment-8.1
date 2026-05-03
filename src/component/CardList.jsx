import { Button, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CardList = ({p}) => {
    return (
        <div className='rounded-2xl border border-gray-400 space-y-1.5 hover:scale-105 shadow-md shadow-cyan-500 overflow-hidden transition duration-500'>
            <div className='relative aspect-square'>
                <Image src={p.image_url} fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className='object-cover' alt='photo'></Image>
                <Chip size='sm' className='absolute top-2 right-2 px-1'>{p.category}</Chip>
            </div>
            <div className='p-4 space-y-1.5'>
                <h2 className='font-bold'>{p.title}</h2>
                <p className='text-gray-400 line-clamp-2'>{p.description}</p>
                
                <div className='flex items-center gap-1'>
                    <p className='font-semibold'>Quantity:</p>
                    <p className='font-bold text-green-600'>{p.available_quantity}</p>
                </div>
            <Link href={`all-book/${p.id}`}><Button className={'bg-linear-to-r from-cyan-500 to-blue-600 w-full mt-2'}>Details</Button></Link>
            </div>

        </div>
    );
};

export default CardList;