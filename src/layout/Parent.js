import React, { useState } from 'react';
import ChildComponent from './Child';
import ResultComponent from './Result';

const ParentComponent = () => {
  const [data, setData] = useState('');

  const handleDataChange = (childData) => {
    setData(childData);
  };

  return (
    <div>
      <ChildComponent onDataChange={handleDataChange} />
      <ResultComponent data={data} />
    </div>
  );
};

export default ParentComponent;