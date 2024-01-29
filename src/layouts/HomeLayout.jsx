import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero/Hero';
import ChefsSection from '../components/ChefsSection/ChefsSection';

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
        <ChefsSection chefsData={chefsData} />
      </div>
    </>
  );
};

export default HomeLayout;
