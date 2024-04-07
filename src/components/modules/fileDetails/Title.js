import React from 'react';

const Title = ({ title }) => {
  return (
    <h2 className="font-bold text-blue-600 border-b py-2 mb-2">
      {title}
    </h2>
  );
};

export default Title;
