import React from 'react';
import ErrorPage from '../../assets/error-404.png'
import { Link } from 'react-router-dom';

const ErrorPaged = () => {
    return (
       <div className=" py-20">
         <div className="w-full flex justify-center items-center">
      <img className="  object-cover" src={ErrorPage} alt="" />
    </div>
    <div className="text-center mt-10 space-y-3">
       <h3 className="lg:text-4xl text-3xl font-semibold text-[#001931]"> OPPS!! 40</h3>
       <p className="lg:text-xl text-sm text-[#627382]">The Page you are requesting is not found on our system.  please try another apps</p>
     <div className="mt-7">
        <Link to='/' className=" bg-gradient-to-l from-[#9f62f2] to-[#632ee3] px-8 py-3 rounded-lg text-[#ffffff] font-semibold "> 
     Go Back
     </Link>
     </div>
    </div>
   </div>
    );
};

export default ErrorPaged;