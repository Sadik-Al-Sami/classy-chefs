import React from 'react';
import Chef from '../Chef/Chef';
import { Link } from 'react-router-dom';
const ChefsSection = ({chefsData}) => {
  return (
    <div className='bg-base-100'>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 container mx-auto'>
        {chefsData.map((chef) => (
          <Chef
            key={chef.id}
            chef={chef}></Chef>
        ))}
      </div>
      <Link to='/chefs'>
        <div className='flex justify-center items-center my-4'>
          <button className='hover:bg-success hover:scale-95 font-medium hover:text-white w-1/4 py-2 rounded-full hover:shadow-xl  shadow-[0px_0px_10px_#E2DADA] duration-500 outline outline-1 outline-success mx-auto'>
            Show All Chefs
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ChefsSection;
