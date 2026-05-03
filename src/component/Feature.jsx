import { getPost } from '@/lib/fetching';
import React from 'react';
import CardList from './CardList';

const Feature = async () => {

    const data = await getPost()

    return (
        <div>
            <h2 className='text-2xl font-bold mt-10 mb-5'>Top Books</h2>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-5'>
                {
                    data.slice(0,4).map(v => <CardList key={v.id} p={v}></CardList>)
                }
            </div>
        </div>
    );
};

export default Feature;