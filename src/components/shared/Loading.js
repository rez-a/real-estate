import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

const Loading = () => {
  return (
    <ThreeDots
      visible={true}
      height="40"
      width="40"
      color="#fff"
      radius="9"
      wrapperClass="justify-center"
    />
  );
};

export default Loading;
