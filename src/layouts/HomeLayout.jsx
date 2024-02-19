import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero/Hero';
import ChefsSection from '../components/ChefsSection/ChefsSection';
import VerticalAccordion from '../components/VerticalAccordion/VerticalAccordion';
import Stats from '../components/Stats/Stats';
import Location from '../components/Location/Location';
import Scroll from '../utils/Scroll';

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
      <section>
        <Scroll />
        <Hero />
        <ChefsSection chefsData={chefsData} />
        <VerticalAccordion />
        <div className='container mx-auto flex justify-center'>
          <Stats />
        </div>
        <Location />
      </section>
    </>
  );
};

export default HomeLayout;
