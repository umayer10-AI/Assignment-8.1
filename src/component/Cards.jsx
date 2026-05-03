import React from 'react';
import CardList from './CardList';

const Cards = ({data}) => {
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    data.map(v => <CardList key={v.id} p={v}></CardList>)
                }
            </div>
        </div>
    );
};

export default Cards;