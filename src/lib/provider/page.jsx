import Context from '@/context/Context';
import React from 'react';

const ProviderPage = ({children}) => {
    return (
        <div>
            <Context>
                {children}
            </Context>
        </div>
    );
};

export default ProviderPage;