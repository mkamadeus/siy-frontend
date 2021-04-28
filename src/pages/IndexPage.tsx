import React from 'react';
import ITBBackground from '~/images/itbBackground.png';
import { Link, navigate, RouteComponentProps } from '@reach/router';
import { useForm } from 'react-hook-form';
import { CredentialsBody } from '~/model/Auth';
import { login } from '~/api/Auth';
import { useLocalStorage } from 'react-use';

const IndexPage: React.FC<RouteComponentProps> = (
  _props: RouteComponentProps
) => {
  const { register, handleSubmit } = useForm();
  const [, setAccessToken] = useLocalStorage('accessToken');
  const [, setRefreshToken] = useLocalStorage('refreshToken');

  const onSubmit = async (data: CredentialsBody) => {
    try {
      const token = await login(data);
      setAccessToken(token.accessToken);
      setRefreshToken(token.refreshToken);
      navigate('/student');
    } catch (err) {
      alert('Login gagal!');
    }
  };

  return (
    <div className="w-full min-h-screen">
      <div className="w-full bg-gray-100 p-6">
        <div className="text-4xl">Sistem Informasi Akademik</div>
        <div>Institut Teknologi Bandung</div>
      </div>
      <div className="flex flex-col h-screen">
        <div className="flex flex-col-reverse md:flex-row h-screen">
          <div className="lg:flex lg:flex-col lg:w-full items-start lg:justify-center h-full bg-gradient-to-br from-blue-500 to-purple-500 relative text-white w-full md:w-1/2">
            <div className="p-6">
              <div className="mb-4">
                <div className="text-xl font-semibold mb-2">
                  Layanan Login SIY
                </div>
                <div>
                  Layanan Login SIY tidak memanfaatkan berbasis SSO (Single Sign
                  On) yang memungkinkan civitas akademika ITB untuk mengakses
                  beberapa aplikasi pendukung kegiatan ITB dengan menggunakan
                  satu akun saja yaitu akun INA (ITB Network Account). Sehingga,
                  perlu menggunakan akun baru yang dibuatkan.
                </div>
              </div>
              <div className="mb-4">
                <div className="text-xl font-semibold mb-2">Daftar Akun</div>
                <div>
                  Untuk mendaftarkan diri, bisa digunakan link yang tersedia
                  pada link yang ada.
                </div>
              </div>
            </div>
            <img className="absolute bottom-0" src={ITBBackground} />
          </div>
          <div className="container mx-auto p-6">
            <div className="mb-2">Silakan login untuk melanjutkan.</div>
            <div className="p-4 rounded shadow border border-gray-300">
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
                <div className="mb-2 w-full">
                  <button
                    type="submit"
                    className="flex items-center justify-center w-full rounded-md bg-blue-500 text-white py-2 px-4 transform shadow-none hover:shadow-lg focus:ring focus:outline-none focus:bg-blue-600 transition duration-300"
                  >
                    Login
                  </button>
                </div>
                <div className="flex justify-center space-x-1 w-full text-xs">
                  <div className="text-blue-500 underline">Lupa password?</div>
                  <div>·</div>
                  <div className="text-blue-500 underline">
                    <Link to="/register">Daftar</Link>
                  </div>
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
