import React from 'react';

const ListItems = ({ list }) => {
  return !!list.length ? (
    <ul className="text-sm list-disc space-y-2 pr-4">
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  ) : (
    <p className="text-red-600 bg-red-50 p-3 rounded-lg text-xs">
      هیچ آیتمی وجود ندارد
    </p>
  );
};

export default ListItems;
