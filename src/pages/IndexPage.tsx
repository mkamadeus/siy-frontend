import React from 'react';
import { navigate, RouteComponentProps } from '@reach/router';

const IndexPage: React.FC<RouteComponentProps> = (
  _props: RouteComponentProps
) => {
  return (
    <div className="w-full min-h-screen">
      <div className="w-full bg-gray-100 p-4">
        <div className="text-4xl">Sistem Informasi Akademik</div>
        <div>Institut Teknologi Bandung</div>
      </div>
      <div className="flex flex-col min-h-screen">
        <div className="flex flex-1 min-h-screen">
          {/*<div className="hidden lg:flex lg:flex-col lg:w-full h-full bg-gradient-to-b from-blue-500 to-green-500">
            <div className="flex-1">sad</div>
          </div>*/}
          <div className="container mx-auto p-6">
            <div className="mb-2">Silakan login untuk melanjutkan.</div>
            <div className="p-4 rounded shadow border border-gray-300">
              <form>
                <div className="mb-2">
                  <label className="text-sm" htmlFor="username">
                    Username
                  </label>
                  <input
                    name="username"
                    type="text"
                    className="border-gray-300 rounded-md shadow-sm w-full"
                  />
                </div>
                <div className="mb-2">
                  <label className="text-sm" htmlFor="password">
                    Password
                  </label>
                  <input
                    name="password"
                    type="text"
                    className="border-gray-300 rounded-md shadow-sm w-full"
                  />
                </div>
                <div className="mb-2 w-full">
                  <button
                    className="flex items-center justify-center w-full rounded-md bg-blue-500 text-white py-2 px-4 transform shadow-none hover:shadow-lg focus:ring focus:outline-none focus:bg-blue-600 transition duration-300"
                    onClick={() => {
                      navigate('/student');
                    }}
                  >
                    Login
                  </button>
                </div>
                <div className="flex justify-center space-x-1 w-full text-xs">
                  <div className="text-blue-500 underline">Lupa password?</div>
                  <div>·</div>
                  <div className="text-blue-500 underline">Daftar</div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
