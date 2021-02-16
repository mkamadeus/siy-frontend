import React from 'react';
import LogoITB from '~/svg/itb.svg';

const LoadingPage: React.FC = () => {
  return (
    <div className="container mx-auto p-6 py-0 min-h-screen flex flex-col justify-center items-center">
      <div className="flex justify-center items-center relative">
        <img
          src={LogoITB}
          className="w-20"
          style={{
            filter:
              'invert(85%) sepia(0%) saturate(1465%) hue-rotate(179deg) brightness(82%) contrast(85%)',
          }}
        />
        <div className="animate-ping w-20 h-20 rounded-full absolute bg-gray-200 opacity-75" />
      </div>
      <div className="italic text-sm text-gray-400">Loading...</div>
    </div>
  );
};

export default LoadingPage;
