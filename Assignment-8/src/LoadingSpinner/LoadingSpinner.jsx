import React from 'react';
import { ClipLoader } from 'react-spinners';

const LoadingSpinner = () => {
    return (
        <div className='flex justify-center items-center w-full h-full py-20'>
            <ClipLoader size={50}></ClipLoader>
        </div>
    );
};

export default LoadingSpinner;