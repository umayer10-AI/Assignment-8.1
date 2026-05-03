import { Button, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CardList = ({p}) => {
    return (
        <div className='p-4 rounded-xl space-y-1.5 hover:scale-105 overflow-hidden transition duration-500 shadow-xl'>
            <div className='relative aspect-square'>
                <Image src={p.image} fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className='rounded-xl object-cover' alt='photo'></Image>
                <Chip size='sm' className='absolute top-2 right-2 px-1'>{p.category}</Chip>
            </div>
            <h2 className='font-bold'>{p.title}</h2>
            <p className='text-gray-400 line-clamp-2'>{p.description}</p>
                
                    <div className='flex items-center gap-1'>
                        <p className='font-semibold'>Quantity:</p>
                        <p className='font-bold text-green-600'>{p.available_quantity}</p>
                    </div>

            <Link href={`all-animal/${p.id}`}><Button className={'bg-linear-to-r from-green-500 via-blue-500 bg-green-500 w-full mt-2'}>Details</Button></Link>
        </div>
    );
};

export default CardList;