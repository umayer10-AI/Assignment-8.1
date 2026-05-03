import { getPost } from '@/lib/fetching';
import React from 'react';

const page = async () => {

    const data = await getPost()
    // console.log(data)

    return (
        <div>
            
        </div>
    );
};

export default page;