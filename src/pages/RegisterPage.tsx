import { RouteComponentProps } from '@reach/router';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';

interface RegisterForm {
  username: string;
  password: string;
  repeatPassword: string;
  role: string;
}

const RegisterPage: React.FC<RouteComponentProps> = (
  props: RouteComponentProps
) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const password = useRef({});
  password.current = watch('password', '');
  const onSubmit = (data: RegisterForm) => {
    console.log(data);
  };

  return (
    <div className="container p-6">
      <div className="font-bold text-2xl mb-2">Daftar</div>
      <div className="rounded border border-gray-300 p-4 shadow">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-2">
            <label className="text-sm" htmlFor="username">
              Username
            </label>
            <input
              name="username"
              type="text"
              ref={register}
              className="border-gray-300 rounded-md shadow-sm w-full"
            />
          </div>
          <div className="mb-2">
            <label className="text-sm" htmlFor="username">
              Role
            </label>
            <select
              className="border-gray-300 rounded-md shadow-sm w-full"
              name="role"
              ref={register}
            >
              <option value="student">Mahasiswa</option>
              <option value="teacher">Dosen</option>
              <option value="admin">Administrator</option>
            </select>
          </div>
          <div className="mb-2">
            <label className="text-sm" htmlFor="password">
              Password
            </label>
            <input
              name="password"
              type="password"
              ref={register}
              className="border-gray-300 rounded-md shadow-sm w-full"
            />
          </div>
          <div className="mb-2">
            <label className="text-sm" htmlFor="repeatedPassword">
              Repeat Password
            </label>
            <input
              name="repeatPassword"
              type="password"
              ref={register({
                validate: (value) =>
                  value === password.current || 'The passwords do not match',
              })}
              className="border-gray-300 rounded-md shadow-sm w-full"
            />
            {errors.repeatPassword && (
              <span className="text-red-500 text-sm italic">
                Password tidak cocok!
              </span>
            )}
          </div>
          <div className="mb-2 w-full">
            <button
              type="submit"
              className="flex items-center justify-center w-full rounded-md bg-blue-500 text-white py-2 px-4 transform shadow-none hover:shadow-lg focus:ring focus:outline-none focus:bg-blue-600 transition duration-300"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
