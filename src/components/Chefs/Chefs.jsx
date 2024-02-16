import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chef from '../Chef/Chef';

const Chefs = () => {
  const chefsData = useLoaderData();
  return (
    <div className='bg-base-200'>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 container mx-auto'>
        {setTimeout(() => {
          chefsData.map((chef) => (
            <Chef
              key={chef.id}
              chef={chef}></Chef>
          ));
        }, 5000)}
      </div>
    </div>
  );
};

export default Chefs;
