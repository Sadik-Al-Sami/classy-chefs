import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chef from '../Chef/Chef';

const Chefs = () => {
  const chefsData = useLoaderData();
  return (
    <div className='grid grid-cols-4 container mx-auto'>
      {chefsData.map((chef) => (
        <Chef
          key={chef.id}
          chef={chef}>
          hello
        </Chef>
      ))}
    </div>
  );
};

export default Chefs;
