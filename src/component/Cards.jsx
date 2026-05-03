import React from 'react';

const Cards = () => {
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
                {
                    all.map(v => <CardList key={v.id} p={v}></CardList>)
                }
            </div>
        </div>
    );
};

export default Cards;