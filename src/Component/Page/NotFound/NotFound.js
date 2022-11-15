import React from 'react';
import notFond from '../../../notFound/404.jpg'

const NotFound = () => {
    return (
        <div>
            <img className='mx-auto w-3/6' src={notFond} alt="" />
        </div>
    );
};

export default NotFound;