import Cards from '@/component/Cards';
import { getPost } from '@/lib/fetching';
import React from 'react';

const page = async () => {

    const data = await getPost()
    // console.log(data)

    return (
        <div>
            <h2 className='text-2xl font-bold my-5 bg-linear-to-r from-cyan-500 to-blue-600 text-transparent bg-clip-text'>All Books</h2>
            <Cards data={data}></Cards>
        </div>
    );
};

export default page;