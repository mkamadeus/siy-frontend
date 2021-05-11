import React from 'react';

const ErrorPage: React.FC = () => {
  return (
    <div className="container mx-auto p-6 py-0 min-h-screen flex flex-col justify-center items-center">
      <div className="text-3xl font-bold">Error</div>
      <div className="italic">
        Hubungi pengelola bila terjadi berulang-ulang.
      </div>
    </div>
  );
};

export default ErrorPage;
