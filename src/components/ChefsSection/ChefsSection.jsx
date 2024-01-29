import React from 'react';
import Chef from '../Chef/Chef';
import { Link } from 'react-router-dom';
const ChefsSection = ({chefsData}) => {
  return (
    <div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3'>
        {chefsData.map((chef) => (
          <Chef
            key={chef.id}
            chef={chef}></Chef>
        ))}
      </div>
      <Link to='/chefs'>
        <div className='flex justify-center items-center my-4'>
          <button className='hover:bg-[#0095FF] hover:scale-95 font-medium hover:text-white w-1/3 py-2 rounded-full hover:shadow-xl   text-gray-400 shadow-[0px_0px_10px_#E2DADA] duration-500 outline outline-1 outline-[#0095FF] mx-auto'>
            Show All Chefs
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ChefsSection;
