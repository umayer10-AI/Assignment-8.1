import Cards from '@/component/Cards';
import { getPost } from '@/lib/fetching';
import React from 'react';

const page = async () => {

    const data = await getPost()
    // console.log(data)

    return (
        <div>
            <Cards data={data}></Cards>
        </div>
    );
};

export default page;