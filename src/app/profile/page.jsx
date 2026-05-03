"use client"
import { authClient } from '@/lib/auth-client';
import { Avatar } from '@heroui/react';
import React from 'react';

const page = () => {

    const { data: session } = authClient.useSession()
    const user = session?.user

    return (
        <div className='flex justify-center mt-5'>
            <div className='border text-center w-90 py-5 rounded-xl space-y-3'>
                <Avatar className='h-20 w-20 mx-auto'>
                    <Avatar.Image alt="Umayer Ahmad"
                        referrerPolicy='no-referrer'
                        src={user?.image} />
                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                </Avatar>
            <h2 className='font-bold text-2xl'>{user?.name}</h2>
            <h2 className='text-gray-400'>{user?.email}</h2>
            </div>
        </div>
    );
};

export default page;