import React from 'react';

const Footer: React.FunctionComponent = () => {
  return (
    <div className="flex flex-col p-6 bg-gray-900 text-white">
      <div className="text-xl mb-2">Institut Teknologi Bandung</div>
      <div className="flex">
        <div className="flex flex-col w-3/4">
          <div className="text-xs">
            Jl. Ganesa No.10, <br />
            Lb. Siliwangi, Kecamatan Coblong, <br /> Kota Bandung, Jawa Barat
            40132
          </div>
        </div>
        <div className="flex flex-col w-1/4"></div>
      </div>
    </div>
  );
};

export default Footer;
