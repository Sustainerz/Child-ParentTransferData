import React, { useState, useEffect } from 'react';

const ChildComponent = ({ onDataChange }) => {
  const [childData, setChildData] = useState('');

  useEffect(() => {
    setTimeout(() => {
      const fetchedData = 'Hello Sustainerzz here!';
      setChildData(fetchedData);
      onDataChange(fetchedData);
    }, 2000);
  }, [onDataChange]);

  return <div>{childData}</div>;
};

export default ChildComponent;