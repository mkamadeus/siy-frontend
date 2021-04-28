import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { RouteComponentProps } from '@reach/router';

const StudentPeerAssessmentForm: React.FC<RouteComponentProps> = (
  _props: RouteComponentProps
) => {
  // const {nama, nim, kelompok} = useForm();
  // const {namaAnggotaKelompok1, nimAnggotaKelompok1, kontribusi1, pemecahanMasalah1, sikap1, bekerjaDenganOrangLain1} = useForm();
  // const {namaAnggotaKelompok2, nimAnggotaKelompok2, kontribusi2, pemecahanMasalah2, sikap2, bekerjaDenganOrangLain2} = useForm();
  // const {namaAnggotaKelompok3, nimAnggotaKelompok3, kontribusi3, pemecahanMasalah3, sikap3, bekerjaDenganOrangLain3} = useForm();
  // const {namaAnggotaKelompok4, nimAnggotaKelompok4, kontribusi4, pemecahanMasalah4, sikap4, bekerjaDenganOrangLain4} = useForm();
  // const {namaAnggotaKelompok5, nimAnggotaKelompok5, kontribusi5, pemecahanMasalah5, sikap5, bekerjaDenganOrangLain5} = useForm();
  // const {namaAnggotaKelompok6, nimAnggotaKelompok6, kontribusi6, pemecahanMasalah6, sikap6, bekerjaDenganOrangLain6} = useForm();
  // const {namaAnggotaKelompok7, nimAnggotaKelompok7, kontribusi7, pemecahanMasalah7, sikap7, bekerjaDenganOrangLain7} = useForm();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data: unknown) => {
    console.log(data);
  };

  const [memberCount, setMemberCount] = useState<number>(1);
  const incrementCount = () => {
    setMemberCount(memberCount + 1);
  };
  const decrementCount = () => {
    if (memberCount > 1) setMemberCount(memberCount - 1);
  };

  return (
    <div className="container mx-auto p-6 text-xs md:text-base">
      <div className="font-bold text-2xl mb-2">
        Rubrik Penilaian Kemampuan Kerja Sama
      </div>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-4">
          <div className="font-medium text-xl mb-2">Identitas Penilai</div>
          <div className="mb-2">
            <label htmlFor="name">Nama</label>
            <input
              name="name"
              type="text"
              className="border-gray-300 rounded-md shadow-sm w-full"
              ref={register}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="nim">NIM</label>
            <input
              name="nim"
              type="text"
              className="border-gray-300 rounded-md shadow-sm w-full"
              ref={register}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="course">Mata Kuliah</label>
            <select
              name="course"
              className="border-gray-300 rounded-md shadow-sm w-full"
              ref={register}
            >
              <option label=" "></option>
              <option value="IF1111">IF1111</option>
              <option value="IF1112">IF1112</option>
              <option value="IF1113">IF1113</option>
            </select>
          </div>
          <div className="mb-2">
            <label htmlFor="group">Kelompok</label>
            <input
              name="group"
              type="text"
              className="border-gray-300 rounded-md shadow-sm w-full"
              ref={register}
            />
          </div>
        </div>
        <hr />
        <div className="my-4">
          <div className="mb-2">
            <label htmlFor="member-count">Jumlah Anggota</label>
            <div className="flex space-x-1 items-center">
              <input
                name="member-count"
                type="number"
                value={memberCount}
                readOnly
                className="border-gray-300 rounded-md shadow-sm w-full"
                ref={register}
              />
              <button
                onClick={decrementCount}
                className="rounded bg-blue-500 h-8 w-8 font-mono text-white font-bold text-lg"
              >
                -
              </button>
              <button
                onClick={incrementCount}
                className="rounded bg-blue-500 h-8 w-8 font-mono text-white font-bold text-lg"
              >
                +
              </button>
            </div>
          </div>
        </div>
        <hr />
        {Array(memberCount)
          .fill(1)
          .map((_, index) => {
            return (
              <>
                <div className="my-4">
                  <div className="font-medium text-xl mb-2">
                    Penilaian Anggota Kelompok {index + 1}
                  </div>
                  <div className="text-xs italic mb-2 text-gray-500">
                    Pertanyaan berikut merupakan penilaian terhadap anggota
                    kelompok, bukan Anda sendiri. Harap menilai kinerja
                    masing-masing anggota kelompok dengan jujur karena penilaian
                    yang Anda berikan tidak akan mempengaruhi indeks prestasi
                    (IP) Anda maupun anggota kelompok.
                  </div>
                  <div className="mb-2">
                    <label htmlFor={`member-name-${index + 1}`}>
                      Nama Anggota {index + 1}
                    </label>
                    <input
                      name={`member-name-${index + 1}`}
                      type="text"
                      className="border-gray-300 rounded-md shadow-sm w-full"
                      ref={register}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor={`member-nim-${index + 1}`}>
                      NIM Anggota {index + 1}
                    </label>
                    <input
                      name={`member-nim-${index + 1}`}
                      type="text"
                      className="border-gray-300 rounded-md shadow-sm w-full"
                      ref={register}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor={`member-contribution-${index + 1}`}>
                      Kontribusi Anggota {index + 1}
                    </label>
                    <select
                      name={`member-contribution-${index + 1}`}
                      className="border-gray-300 rounded-md shadow-sm w-full"
                      ref={register}
                    >
                      <option value="1">
                        Jarang memberikan ide yang berguna ketika berpartisipasi
                        dalam kelompok dan diskusi dalam kelas. Mungkin menolak
                        untuk ikut berpartisipasi
                      </option>
                      <option value="2">
                        Terkadang memberikan ide yang berguna ketika
                        berpartisipasi dalam kelompok dan diskusi dalam kelas.
                        Anggota kelompok yang melakukan apa yang diperlukan
                      </option>
                      <option value="3">
                        Biasanya memberikan ide yang berguna ketika
                        berpartisipasi dalam kelompok dan diskusi dalam kelas.
                        Anggota kelompok yang berusaha keras.
                      </option>
                      <option value="4">
                        Secara rutin memberikan ide yang berguna ketika
                        berpartisipasi dalam kelompok dan diskusi dalam kelas.
                        Seorang pemimpin yang menyumbang banyak usaha.
                      </option>
                    </select>
                  </div>
                  <div className="mb-2">
                    <label htmlFor={`member-problem-solving-${index + 1}`}>
                      Pemecahan Masalah
                    </label>
                    <select
                      name={`member-problem-solving-${index + 1}`}
                      className="border-gray-300 rounded-md shadow-sm w-full"
                      ref={register}
                    >
                      <option value="1">
                        Tidak mencoba memecahkan masalah atau tidak membantu
                        oarang lain memecahkan masalah. Memungkinkan orang lain
                        melakukan pekerjaan.
                      </option>
                      <option value="2">
                        Tidak menyarankan atau tidak memberikan solusi, tetapi
                        mau mencoba solusi yang disarankan oleh orang lain
                      </option>
                      <option value="3">
                        Menyempurnakan solusi yang disarankan oleh orang lain
                      </option>
                      <option value="4">
                        Secara aktif mencari dan menyarankan solusi utuk masalah
                        yang dihadapi
                      </option>
                    </select>
                  </div>
                  <div className="mb-2">
                    <label htmlFor={`member-attribute-${index + 1}`}>
                      Sikap
                    </label>
                    <select
                      name={`member-attribute-${index + 1}`}
                      className="border-gray-300 rounded-md shadow-sm w-full"
                      ref={register}
                    >
                      <option value="1">
                        Sering mengkritik tugas atau pekerjaan anggota lain
                        dalam kelompok secara terbuka. Selalu bersikap negatif
                        tentang tugas yang diberikan.
                      </option>
                      <option value="2">
                        Terkadang secara terbuka mengkritik tugas atau pekerjaan
                        anggota lain dalam kelompok. Biasanya memiliki sikat
                        positif tentang tugas yang diberikan.
                      </option>
                      <option value="3">
                        Jarang secara terbuka mengkritik tugas atau pekerjaan
                        anggota lain dalam kelompok. Seringkali memiliki sikat
                        positif tentang tugas yang diberikan.
                      </option>
                      <option value="4">
                        Tidak pernah secara terbuka mengkritik tugas atau
                        pekerjaan anggota lain dalam kelompok. Selalu memiliki
                        sikat positif tentang tugas yang diberikan.
                      </option>
                    </select>
                  </div>
                  <div className="mb-2">
                    <label htmlFor={`member-teamwork-${index + 1}`}>
                      Bekerja dengan Orang Lain
                    </label>
                    <select
                      name={`member-teamwork-${index + 1}`}
                      className="border-gray-300 rounded-md shadow-sm w-full"
                      ref={register}
                    >
                      <option value="1">
                        Jarang mendengarkan, berbagi, dan mendukung upaya
                        anggota lain dalam kelompok. Seringkali bukan anggota
                        kelompok yang bagus.
                      </option>
                      <option value="2">
                        Seringkali mendengarkan, berbagi, dan mendukung upaya
                        anggota lain dalam kelompok, tetapi terkadang bukan
                        sebagai anggota kelompok yang baik.
                      </option>
                      <option value="3">
                        Biasanya mendengarkan, berbagi, dan mendukung upaya
                        anggota lain dalam kelompok. Tidak menyebabkan
                        perselisihan dalam kelompok.
                      </option>
                      <option value="4">
                        Hampir selalu mendengarkan, berbagi, dan mendukung upaya
                        anggota lain dalam kelompok. Mencoba untuk membuat
                        anggota lain bekerjasama dengan baik dalam kelompok.
                      </option>
                    </select>
                  </div>
                </div>
                <hr />
              </>
            );
          })}
        <button
          type="submit"
          className="flex w-full items-center justify-center rounded-md bg-blue-500 text-white py-2 px-4 shadow-none hover:shadow-lg focus:ring focus:outline-none focus:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default StudentPeerAssessmentForm;
