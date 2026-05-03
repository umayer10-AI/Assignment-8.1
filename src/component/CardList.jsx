import { Button, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaBangladeshiTakaSign } from 'react-icons/fa6';

const CardList = ({p}) => {
    return (
        <div className='p-4 rounded-xl space-y-1.5 hover:scale-105 overflow-hidden transition duration-500 shadow-xl'>
            <div className='relative aspect-square'>
                <Image src={p.image} fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className='rounded-xl object-cover' alt='photo'></Image>
                <Chip size='sm' className='absolute top-2 right-2 px-1'>{p.type}</Chip>
            </div>
            <h2 className='font-bold'>{p.name}</h2>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <p className='font-semibold'>weight: </p>
                        <p className='font-bold'>{p.weight}KG</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <p className='font-semibold'>Age:</p>
                        <p className='font-bold'>{p.age}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <p className='font-semibold'>Price: </p>
                    <p className='font-bold text-green-600 flex items-center'><FaBangladeshiTakaSign />{p.price}</p>
                </div>
            <Link href={`all-animal/${p.id}`}><Button className={'bg-linear-to-r from-green-500 via-blue-500 bg-green-500 w-full'}>Details</Button></Link>
        </div>
    );
};

export default CardList;