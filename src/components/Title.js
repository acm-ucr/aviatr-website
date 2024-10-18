import React from 'react';

const Title = ({ title }) => {
  return (
    <div className="title-container">
      {/* Title text */}
      <h1 className="text-3xl font-bold">{title}</h1>

      {/* Line underneath the title */}
      <div className="border-t-2 border-gray-300 mt-2 ml-4"></div>
    </div>
  );
};

export default Title;



