import React from 'react';

const SidebarCard = ({ children }) => {
  return (
    <div className="shadow-lg rounded-lg p-4 text-center">
      {children}
    </div>
  );
};

export default SidebarCard;
