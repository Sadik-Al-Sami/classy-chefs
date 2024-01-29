import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero/Hero';
import ChefsSection from '../components/ChefsSection/ChefsSection';
import Chef from '../components/Chef/Chef';
import { Link } from 'react-router-dom';

const HomeLayout = () => {
  const [chefsData, setChefsData] = useState([]);
  useEffect(() => {
    fetch('https://classy-chefs-server.vercel.app/chefs')
      .then((res) => res.json())
      .then((data) => setChefsData(data.slice(0, 6)))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <div className='container mx-auto mt-6'>
        <Hero />
        <ChefsSection />
        <div className='grid grid-cols-3'>
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
    </>
  );
};

export default HomeLayout;
