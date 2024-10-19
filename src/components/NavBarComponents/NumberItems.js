import React from 'react';
import useStorage from '../CostumHook/useStorage';

const NumberItems = ({ itemTitle }) => {
  const { items } = useStorage(itemTitle); 
  return (
    <>{items ? items.length : 0}</>
  );
};

export default NumberItems;
