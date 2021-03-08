import React from 'react';
import { useForm } from 'react-hook-form';

const PeerAssesmentForm: React.FC = () => {
  // const {nama, nim, kelompok} = useForm();
  // const {namaAnggotaKelompok1, nimAnggotaKelompok1, kontribusi1, pemecahanMasalah1, sikap1, bekerjaDenganOrangLain1} = useForm();
  // const {namaAnggotaKelompok2, nimAnggotaKelompok2, kontribusi2, pemecahanMasalah2, sikap2, bekerjaDenganOrangLain2} = useForm();
  // const {namaAnggotaKelompok3, nimAnggotaKelompok3, kontribusi3, pemecahanMasalah3, sikap3, bekerjaDenganOrangLain3} = useForm();
  // const {namaAnggotaKelompok4, nimAnggotaKelompok4, kontribusi4, pemecahanMasalah4, sikap4, bekerjaDenganOrangLain4} = useForm();
  // const {namaAnggotaKelompok5, nimAnggotaKelompok5, kontribusi5, pemecahanMasalah5, sikap5, bekerjaDenganOrangLain5} = useForm();
  // const {namaAnggotaKelompok6, nimAnggotaKelompok6, kontribusi6, pemecahanMasalah6, sikap6, bekerjaDenganOrangLain6} = useForm();
  // const {namaAnggotaKelompok7, nimAnggotaKelompok7, kontribusi7, pemecahanMasalah7, sikap7, bekerjaDenganOrangLain7} = useForm();

  const { peerSubmit, handleSubmit} = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="container mx-auto p-6">
      <form onSubmit={handleSubmit(onSubmit)}>
          <div className="identitas-penilai">
            <div>Rubrik Penilaian Kemampuan Kerja Sama</div>
            <div>Identitas Penilai</div>
            <div>Nama</div>
              <input name="nama" ref={peerSubmit} />
            <div>NIM</div>
              <input name="nim" ref={peerSubmit} />
            <div>Kelompok</div>
              <input name="kelompok" ref={peerSubmit} />
          </div>
          <div className="scoring-1">
            <div>Penilaian Anggota Kelompok (1)</div>
            <div>Pertanyaan berikut merupakan penilaian terhadap anggota kelompok, bukan Anda sendiri. Harap menilai kinerja masing-masing anggota kelompok dengan jujur karena penilaian yang Anda berikan tidak akan mempengaruhi indeks prestasi (IP) Anda maupun anggota kelompok.</div>
            <div>Nama Anggota (1)</div>
              <input name="nama1" ref={peerSubmit} />
            <div>NIM Anggota (1)</div>
              <input name="nim1" ref={peerSubmit} />
            <div>Kontribusi</div>
              <select name="kontribusi1" ref={register}>
                <option value="1">Jarang memberikan ide yang berguna ketika berpartisipasi dalam kelompok dan diskusi dalam kelas. Mungkin menolak untuk ikut berpartisipasi</option>
                <option value="2">Terkadang memberikan ide yang berguna ketika berpartisipasi dalam kelompok dan diskusi dalam kelas. Anggota kelompok yang melakukan apa yang diperlukan</option>
                <option value="3">Biasanya memberikan ide yang berguna ketika berpartisipasi dalam kelompok dan diskusi dalam kelas. Anggota kelompok yang berusaha keras.</option>
                <option value="4">Secara rutin memberikan ide yang berguna ketika berpartisipasi dalam kelompok dan diskusi dalam kelas. Seorang pemimpin yang menyumbang banyak usaha.</option>
              </select>
            <div>Pemecahan Masalah</div>
              <select name="pemecahanMasalah1" ref={register}>
                  <option value="1">Tidak mencoba memecahkan masalah atau tidak membantu oarang lain memecahkan masalah. Memungkinkan orang lain melakukan pekerjaan.</option>
                  <option value="2">Tidak menyarankan atau tidak memberikan solusi, tetapi mau mencoba solusi yang disarankan oleh orang lain</option>
                  <option value="3">Menyempurnakan solusi yang disarankan oleh orang lain</option>
                  <option value="4">Secara aktif mencari dan menyarankan solusi utuk masalah yang dihadapi</option>
              </select>
            <div>Sikap</div>
              <select name="sikap1" ref={register}>
                    <option value="1">Sering mengkritik tugas atau pekerjaan anggota lain dalam kelompok secara terbuka. Selalu bersikap negatif tentang tugas yang diberikan.</option>
                    <option value="2">Terkadang secara terbuka mengkritik tugas atau pekerjaan anggota lain dalam kelompok. Biasanya memiliki sikat positif tentang tugas yang diberikan.</option>
                    <option value="3">Jarang secara terbuka mengkritik tugas atau pekerjaan anggota lain dalam kelompok. Seringkali memiliki sikat positif tentang tugas yang diberikan.</option>
                    <option value="4">Tidak pernah secara terbuka mengkritik tugas atau pekerjaan anggota lain dalam kelompok. Selalu memiliki sikat positif tentang tugas yang diberikan.</option>
              </select>
            <div>Fokus terhadap tugas</div>
              <select name="fokusTerhadapTugas1" ref={register}>
                    <option value="1">Jarang fokus pada tugas dan apa yang perlu dilakukan. Memungkinkan orang lain melakukan pekerjaan.</option>
                    <option value="2">Berfokus pada tugas dan apa yang perlu dilakukan dalam beberapa waktu. Anggota kelompok lainnya kadang-kadang harus mengingatkan supaya mengerjakan tugas.</option>
                    <option value="3">Berfokus pada tugas dan apa yang perlu dilakukan dalam sebagian besar waktu untuk menyelesaikannya. Anggota kelompok lain dapat mengandalkan orang ini.</option>
                    <option value="4">Secara konsisten tetap fokus pada tugas dan apa yang perlu dilakukan. Sangat mandiri.</option>
                </select>
            <div>Bekerja dengan orang lain</div>
              <select name="bekerjaDenganOrangLain1" ref={register}>
                    <option value="1">Jarang mendengarkan, berbagi, dan mendukung upaya anggota lain dalam kelompok. Seringkali bukan anggota kelompok yang bagus.</option>
                    <option value="2">Seringkali mendengarkan, berbagi, dan mendukung upaya anggota lain dalam kelompok, tetapi terkadang bukan sebagai anggota kelompok yang baik.</option>
                    <option value="3">Biasanya mendengarkan, berbagi, dan mendukung upaya anggota lain dalam kelompok. Tidak menyebabkan perselisihan dalam kelompok.</option>
                    <option value="4">Hampir selalu mendengarkan, berbagi, dan mendukung upaya anggota lain dalam kelompok. Mencoba untuk membuat anggota lain bekerjasama dengan baik dalam kelompok.</option>
                </select>
            <div>Apakah masih ada anggota kelompok lain yang ingin Anda nilai?</div>
              <select name="apakahMasihAda1" ref={register}>
                    <option value="1">Ya</option>
                    <option value="0">Tidak</option>
                </select>
          </div>
          <div className="scoring-2">
            <div>Penilaian Anggota Kelompok (1)</div>
            <div>Pertanyaan berikut merupakan penilaian terhadap anggota kelompok, bukan Anda sendiri. Harap menilai kinerja masing-masing anggota kelompok dengan jujur karena penilaian yang Anda berikan tidak akan mempengaruhi indeks prestasi (IP) Anda maupun anggota kelompok.</div>
            <div>Nama Anggota (2)</div>
              <input name="nama2" ref={peerSubmit} />
            <div>NIM Anggota (2)</div>
              <input name="nim2" ref={peerSubmit} />
            <div>Kontribusi</div>
              <select name="kontribusi2" ref={register}>
                <option value="1">Jarang memberikan ide yang berguna ketika berpartisipasi dalam kelompok dan diskusi dalam kelas. Mungkin menolak untuk ikut berpartisipasi</option>
                <option value="2">Terkadang memberikan ide yang berguna ketika berpartisipasi dalam kelompok dan diskusi dalam kelas. Anggota kelompok yang melakukan apa yang diperlukan</option>
                <option value="3">Biasanya memberikan ide yang berguna ketika berpartisipasi dalam kelompok dan diskusi dalam kelas. Anggota kelompok yang berusaha keras.</option>
                <option value="4">Secara rutin memberikan ide yang berguna ketika berpartisipasi dalam kelompok dan diskusi dalam kelas. Seorang pemimpin yang menyumbang banyak usaha.</option>
              </select>
            <div>Pemecahan Masalah</div>
              <select name="pemecahanMasalah2" ref={register}>
                  <option value="1">Tidak mencoba memecahkan masalah atau tidak membantu oarang lain memecahkan masalah. Memungkinkan orang lain melakukan pekerjaan.</option>
                  <option value="2">Tidak menyarankan atau tidak memberikan solusi, tetapi mau mencoba solusi yang disarankan oleh orang lain</option>
                  <option value="3">Menyempurnakan solusi yang disarankan oleh orang lain</option>
                  <option value="4">Secara aktif mencari dan menyarankan solusi utuk masalah yang dihadapi</option>
              </select>
            <div>Sikap</div>
              <select name="sikap2" ref={register}>
                    <option value="1">Sering mengkritik tugas atau pekerjaan anggota lain dalam kelompok secara terbuka. Selalu bersikap negatif tentang tugas yang diberikan.</option>
                    <option value="2">Terkadang secara terbuka mengkritik tugas atau pekerjaan anggota lain dalam kelompok. Biasanya memiliki sikat positif tentang tugas yang diberikan.</option>
                    <option value="3">Jarang secara terbuka mengkritik tugas atau pekerjaan anggota lain dalam kelompok. Seringkali memiliki sikat positif tentang tugas yang diberikan.</option>
                    <option value="4">Tidak pernah secara terbuka mengkritik tugas atau pekerjaan anggota lain dalam kelompok. Selalu memiliki sikat positif tentang tugas yang diberikan.</option>
              </select>
            <div>Fokus terhadap tugas</div>
              <select name="fokusTerhadapTugas2" ref={register}>
                    <option value="1">Jarang fokus pada tugas dan apa yang perlu dilakukan. Memungkinkan orang lain melakukan pekerjaan.</option>
                    <option value="2">Berfokus pada tugas dan apa yang perlu dilakukan dalam beberapa waktu. Anggota kelompok lainnya kadang-kadang harus mengingatkan supaya mengerjakan tugas.</option>
                    <option value="3">Berfokus pada tugas dan apa yang perlu dilakukan dalam sebagian besar waktu untuk menyelesaikannya. Anggota kelompok lain dapat mengandalkan orang ini.</option>
                    <option value="4">Secara konsisten tetap fokus pada tugas dan apa yang perlu dilakukan. Sangat mandiri.</option>
                </select>
            <div>Bekerja dengan orang lain</div>
              <select name="bekerjaDenganOrangLain2" ref={register}>
                    <option value="1">Jarang mendengarkan, berbagi, dan mendukung upaya anggota lain dalam kelompok. Seringkali bukan anggota kelompok yang bagus.</option>
                    <option value="2">Seringkali mendengarkan, berbagi, dan mendukung upaya anggota lain dalam kelompok, tetapi terkadang bukan sebagai anggota kelompok yang baik.</option>
                    <option value="3">Biasanya mendengarkan, berbagi, dan mendukung upaya anggota lain dalam kelompok. Tidak menyebabkan perselisihan dalam kelompok.</option>
                    <option value="4">Hampir selalu mendengarkan, berbagi, dan mendukung upaya anggota lain dalam kelompok. Mencoba untuk membuat anggota lain bekerjasama dengan baik dalam kelompok.</option>
                </select>
            <div>Apakah masih ada anggota kelompok lain yang ingin Anda nilai?</div>
              <select name="apakahMasihAda2" ref={register}>
                    <option value="1">Ya</option>
                    <option value="0">Tidak</option>
                </select>
          </div>
          <div className="scoring-3">
            <div>Penilaian Anggota Kelompok (1)</div>
            <div>Pertanyaan berikut merupakan penilaian terhadap anggota kelompok, bukan Anda sendiri. Harap menilai kinerja masing-masing anggota kelompok dengan jujur karena penilaian yang Anda berikan tidak akan mempengaruhi indeks prestasi (IP) Anda maupun anggota kelompok.</div>
            <div>Nama Anggota (3)</div>
              <input name="nama3" ref={peerSubmit} />
            <div>NIM Anggota (3)</div>
              <input name="nim3" ref={peerSubmit} />
            <div>Kontribusi</div>
              <select name="kontribusi3" ref={register}>
                <option value="1">Jarang memberikan ide yang berguna ketika berpartisipasi dalam kelompok dan diskusi dalam kelas. Mungkin menolak untuk ikut berpartisipasi</option>
                <option value="2">Terkadang memberikan ide yang berguna ketika berpartisipasi dalam kelompok dan diskusi dalam kelas. Anggota kelompok yang melakukan apa yang diperlukan</option>
                <option value="3">Biasanya memberikan ide yang berguna ketika berpartisipasi dalam kelompok dan diskusi dalam kelas. Anggota kelompok yang berusaha keras.</option>
                <option value="4">Secara rutin memberikan ide yang berguna ketika berpartisipasi dalam kelompok dan diskusi dalam kelas. Seorang pemimpin yang menyumbang banyak usaha.</option>
              </select>
            <div>Pemecahan Masalah</div>
              <select name="pemecahanMasalah3" ref={register}>
                  <option value="1">Tidak mencoba memecahkan masalah atau tidak membantu oarang lain memecahkan masalah. Memungkinkan orang lain melakukan pekerjaan.</option>
                  <option value="2">Tidak menyarankan atau tidak memberikan solusi, tetapi mau mencoba solusi yang disarankan oleh orang lain</option>
                  <option value="3">Menyempurnakan solusi yang disarankan oleh orang lain</option>
                  <option value="4">Secara aktif mencari dan menyarankan solusi utuk masalah yang dihadapi</option>
              </select>
            <div>Sikap</div>
              <select name="sikap3" ref={register}>
                    <option value="1">Sering mengkritik tugas atau pekerjaan anggota lain dalam kelompok secara terbuka. Selalu bersikap negatif tentang tugas yang diberikan.</option>
                    <option value="2">Terkadang secara terbuka mengkritik tugas atau pekerjaan anggota lain dalam kelompok. Biasanya memiliki sikat positif tentang tugas yang diberikan.</option>
                    <option value="3">Jarang secara terbuka mengkritik tugas atau pekerjaan anggota lain dalam kelompok. Seringkali memiliki sikat positif tentang tugas yang diberikan.</option>
                    <option value="4">Tidak pernah secara terbuka mengkritik tugas atau pekerjaan anggota lain dalam kelompok. Selalu memiliki sikat positif tentang tugas yang diberikan.</option>
              </select>
            <div>Fokus terhadap tugas</div>
              <select name="fokusTerhadapTugas3" ref={register}>
                    <option value="1">Jarang fokus pada tugas dan apa yang perlu dilakukan. Memungkinkan orang lain melakukan pekerjaan.</option>
                    <option value="2">Berfokus pada tugas dan apa yang perlu dilakukan dalam beberapa waktu. Anggota kelompok lainnya kadang-kadang harus mengingatkan supaya mengerjakan tugas.</option>
                    <option value="3">Berfokus pada tugas dan apa yang perlu dilakukan dalam sebagian besar waktu untuk menyelesaikannya. Anggota kelompok lain dapat mengandalkan orang ini.</option>
                    <option value="4">Secara konsisten tetap fokus pada tugas dan apa yang perlu dilakukan. Sangat mandiri.</option>
                </select>
            <div>Bekerja dengan orang lain</div>
              <select name="bekerjaDenganOrangLain3" ref={register}>
                    <option value="1">Jarang mendengarkan, berbagi, dan mendukung upaya anggota lain dalam kelompok. Seringkali bukan anggota kelompok yang bagus.</option>
                    <option value="2">Seringkali mendengarkan, berbagi, dan mendukung upaya anggota lain dalam kelompok, tetapi terkadang bukan sebagai anggota kelompok yang baik.</option>
                    <option value="3">Biasanya mendengarkan, berbagi, dan mendukung upaya anggota lain dalam kelompok. Tidak menyebabkan perselisihan dalam kelompok.</option>
                    <option value="4">Hampir selalu mendengarkan, berbagi, dan mendukung upaya anggota lain dalam kelompok. Mencoba untuk membuat anggota lain bekerjasama dengan baik dalam kelompok.</option>
                </select>
            <div>Apakah masih ada anggota kelompok lain yang ingin Anda nilai?</div>
              <select name="apakahMasihAda3" ref={register}>
                    <option value="1">Ya</option>
                    <option value="0">Tidak</option>
                </select>
          </div>
          <div className="scoring-4">
            <div>Penilaian Anggota Kelompok (1)</div>
            <div>Pertanyaan berikut merupakan penilaian terhadap anggota kelompok, bukan Anda sendiri. Harap menilai kinerja masing-masing anggota kelompok dengan jujur karena penilaian yang Anda berikan tidak akan mempengaruhi indeks prestasi (IP) Anda maupun anggota kelompok.</div>
            <div>Nama Anggota (4)</div>
              <input name="nama1" ref={peerSubmit} />
            <div>NIM Anggota (4)</div>
              <input name="nim1" ref={peerSubmit} />
            <div>Kontribusi</div>
              <select name="kontribusi4" ref={register}>
                <option value="1">Jarang memberikan ide yang berguna ketika berpartisipasi dalam kelompok dan diskusi dalam kelas. Mungkin menolak untuk ikut berpartisipasi</option>
                <option value="2">Terkadang memberikan ide yang berguna ketika berpartisipasi dalam kelompok dan diskusi dalam kelas. Anggota kelompok yang melakukan apa yang diperlukan</option>
                <option value="3">Biasanya memberikan ide yang berguna ketika berpartisipasi dalam kelompok dan diskusi dalam kelas. Anggota kelompok yang berusaha keras.</option>
                <option value="4">Secara rutin memberikan ide yang berguna ketika berpartisipasi dalam kelompok dan diskusi dalam kelas. Seorang pemimpin yang menyumbang banyak usaha.</option>
              </select>
            <div>Pemecahan Masalah</div>
              <select name="pemecahanMasalah4" ref={register}>
                  <option value="1">Tidak mencoba memecahkan masalah atau tidak membantu oarang lain memecahkan masalah. Memungkinkan orang lain melakukan pekerjaan.</option>
                  <option value="2">Tidak menyarankan atau tidak memberikan solusi, tetapi mau mencoba solusi yang disarankan oleh orang lain</option>
                  <option value="3">Menyempurnakan solusi yang disarankan oleh orang lain</option>
                  <option value="4">Secara aktif mencari dan menyarankan solusi utuk masalah yang dihadapi</option>
              </select>
            <div>Sikap</div>
              <select name="sikap4" ref={register}>
                    <option value="1">Sering mengkritik tugas atau pekerjaan anggota lain dalam kelompok secara terbuka. Selalu bersikap negatif tentang tugas yang diberikan.</option>
                    <option value="2">Terkadang secara terbuka mengkritik tugas atau pekerjaan anggota lain dalam kelompok. Biasanya memiliki sikat positif tentang tugas yang diberikan.</option>
                    <option value="3">Jarang secara terbuka mengkritik tugas atau pekerjaan anggota lain dalam kelompok. Seringkali memiliki sikat positif tentang tugas yang diberikan.</option>
                    <option value="4">Tidak pernah secara terbuka mengkritik tugas atau pekerjaan anggota lain dalam kelompok. Selalu memiliki sikat positif tentang tugas yang diberikan.</option>
              </select>
            <div>Fokus terhadap tugas</div>
              <select name="fokusTerhadapTugas4" ref={register}>
                    <option value="1">Jarang fokus pada tugas dan apa yang perlu dilakukan. Memungkinkan orang lain melakukan pekerjaan.</option>
                    <option value="2">Berfokus pada tugas dan apa yang perlu dilakukan dalam beberapa waktu. Anggota kelompok lainnya kadang-kadang harus mengingatkan supaya mengerjakan tugas.</option>
                    <option value="3">Berfokus pada tugas dan apa yang perlu dilakukan dalam sebagian besar waktu untuk menyelesaikannya. Anggota kelompok lain dapat mengandalkan orang ini.</option>
                    <option value="4">Secara konsisten tetap fokus pada tugas dan apa yang perlu dilakukan. Sangat mandiri.</option>
                </select>
            <div>Bekerja dengan orang lain</div>
              <select name="bekerjaDenganOrangLain4" ref={register}>
                    <option value="1">Jarang mendengarkan, berbagi, dan mendukung upaya anggota lain dalam kelompok. Seringkali bukan anggota kelompok yang bagus.</option>
                    <option value="2">Seringkali mendengarkan, berbagi, dan mendukung upaya anggota lain dalam kelompok, tetapi terkadang bukan sebagai anggota kelompok yang baik.</option>
                    <option value="3">Biasanya mendengarkan, berbagi, dan mendukung upaya anggota lain dalam kelompok. Tidak menyebabkan perselisihan dalam kelompok.</option>
                    <option value="4">Hampir selalu mendengarkan, berbagi, dan mendukung upaya anggota lain dalam kelompok. Mencoba untuk membuat anggota lain bekerjasama dengan baik dalam kelompok.</option>
                </select>
            <div>Apakah masih ada anggota kelompok lain yang ingin Anda nilai?</div>
              <select name="apakahMasihAda4" ref={register}>
                    <option value="1">Ya</option>
                    <option value="0">Tidak</option>
                </select>
          </div>
          <div className="scoring-5">
            <div>Penilaian Anggota Kelompok (1)</div>
            <div>Pertanyaan berikut merupakan penilaian terhadap anggota kelompok, bukan Anda sendiri. Harap menilai kinerja masing-masing anggota kelompok dengan jujur karena penilaian yang Anda berikan tidak akan mempengaruhi indeks prestasi (IP) Anda maupun anggota kelompok.</div>
            <div>Nama Anggota (5)</div>
              <input name="nama1" ref={peerSubmit} />
            <div>NIM Anggota (5)</div>
              <input name="nim5" ref={peerSubmit} />
            <div>Kontribusi</div>
              <select name="kontribusi5" ref={register}>
                <option value="1">Jarang memberikan ide yang berguna ketika berpartisipasi dalam kelompok dan diskusi dalam kelas. Mungkin menolak untuk ikut berpartisipasi</option>
                <option value="2">Terkadang memberikan ide yang berguna ketika berpartisipasi dalam kelompok dan diskusi dalam kelas. Anggota kelompok yang melakukan apa yang diperlukan</option>
                <option value="3">Biasanya memberikan ide yang berguna ketika berpartisipasi dalam kelompok dan diskusi dalam kelas. Anggota kelompok yang berusaha keras.</option>
                <option value="4">Secara rutin memberikan ide yang berguna ketika berpartisipasi dalam kelompok dan diskusi dalam kelas. Seorang pemimpin yang menyumbang banyak usaha.</option>
              </select>
            <div>Pemecahan Masalah</div>
              <select name="pemecahanMasalah5" ref={register}>
                  <option value="1">Tidak mencoba memecahkan masalah atau tidak membantu oarang lain memecahkan masalah. Memungkinkan orang lain melakukan pekerjaan.</option>
                  <option value="2">Tidak menyarankan atau tidak memberikan solusi, tetapi mau mencoba solusi yang disarankan oleh orang lain</option>
                  <option value="3">Menyempurnakan solusi yang disarankan oleh orang lain</option>
                  <option value="4">Secara aktif mencari dan menyarankan solusi utuk masalah yang dihadapi</option>
              </select>
            <div>Sikap</div>
              <select name="sikap5" ref={register}>
                    <option value="1">Sering mengkritik tugas atau pekerjaan anggota lain dalam kelompok secara terbuka. Selalu bersikap negatif tentang tugas yang diberikan.</option>
                    <option value="2">Terkadang secara terbuka mengkritik tugas atau pekerjaan anggota lain dalam kelompok. Biasanya memiliki sikat positif tentang tugas yang diberikan.</option>
                    <option value="3">Jarang secara terbuka mengkritik tugas atau pekerjaan anggota lain dalam kelompok. Seringkali memiliki sikat positif tentang tugas yang diberikan.</option>
                    <option value="4">Tidak pernah secara terbuka mengkritik tugas atau pekerjaan anggota lain dalam kelompok. Selalu memiliki sikat positif tentang tugas yang diberikan.</option>
              </select>
            <div>Fokus terhadap tugas</div>
              <select name="fokusTerhadapTugas5" ref={register}>
                    <option value="1">Jarang fokus pada tugas dan apa yang perlu dilakukan. Memungkinkan orang lain melakukan pekerjaan.</option>
                    <option value="2">Berfokus pada tugas dan apa yang perlu dilakukan dalam beberapa waktu. Anggota kelompok lainnya kadang-kadang harus mengingatkan supaya mengerjakan tugas.</option>
                    <option value="3">Berfokus pada tugas dan apa yang perlu dilakukan dalam sebagian besar waktu untuk menyelesaikannya. Anggota kelompok lain dapat mengandalkan orang ini.</option>
                    <option value="4">Secara konsisten tetap fokus pada tugas dan apa yang perlu dilakukan. Sangat mandiri.</option>
                </select>
            <div>Bekerja dengan orang lain</div>
              <select name="bekerjaDenganOrangLain5" ref={register}>
                    <option value="1">Jarang mendengarkan, berbagi, dan mendukung upaya anggota lain dalam kelompok. Seringkali bukan anggota kelompok yang bagus.</option>
                    <option value="2">Seringkali mendengarkan, berbagi, dan mendukung upaya anggota lain dalam kelompok, tetapi terkadang bukan sebagai anggota kelompok yang baik.</option>
                    <option value="3">Biasanya mendengarkan, berbagi, dan mendukung upaya anggota lain dalam kelompok. Tidak menyebabkan perselisihan dalam kelompok.</option>
                    <option value="4">Hampir selalu mendengarkan, berbagi, dan mendukung upaya anggota lain dalam kelompok. Mencoba untuk membuat anggota lain bekerjasama dengan baik dalam kelompok.</option>
                </select>
            <div>Apakah masih ada anggota kelompok lain yang ingin Anda nilai?</div>
              <select name="apakahMasihAda5" ref={register}>
                    <option value="1">Ya</option>
                    <option value="0">Tidak</option>
                </select>
          </div>
          <div className="scoring-6">
            <div>Penilaian Anggota Kelompok (6)</div>
            <div>Pertanyaan berikut merupakan penilaian terhadap anggota kelompok, bukan Anda sendiri. Harap menilai kinerja masing-masing anggota kelompok dengan jujur karena penilaian yang Anda berikan tidak akan mempengaruhi indeks prestasi (IP) Anda maupun anggota kelompok.</div>
            <div>Nama Anggota (6)</div>
              <input name="nama1" ref={peerSubmit} />
            <div>NIM Anggota (6)</div>
              <input name="nim1" ref={peerSubmit} />
            <div>Kontribusi</div>
              <select name="kontribusi6" ref={register}>
                <option value="1">Jarang memberikan ide yang berguna ketika berpartisipasi dalam kelompok dan diskusi dalam kelas. Mungkin menolak untuk ikut berpartisipasi</option>
                <option value="2">Terkadang memberikan ide yang berguna ketika berpartisipasi dalam kelompok dan diskusi dalam kelas. Anggota kelompok yang melakukan apa yang diperlukan</option>
                <option value="3">Biasanya memberikan ide yang berguna ketika berpartisipasi dalam kelompok dan diskusi dalam kelas. Anggota kelompok yang berusaha keras.</option>
                <option value="4">Secara rutin memberikan ide yang berguna ketika berpartisipasi dalam kelompok dan diskusi dalam kelas. Seorang pemimpin yang menyumbang banyak usaha.</option>
              </select>
            <div>Pemecahan Masalah</div>
              <select name="pemecahanMasalah6" ref={register}>
                  <option value="1">Tidak mencoba memecahkan masalah atau tidak membantu oarang lain memecahkan masalah. Memungkinkan orang lain melakukan pekerjaan.</option>
                  <option value="2">Tidak menyarankan atau tidak memberikan solusi, tetapi mau mencoba solusi yang disarankan oleh orang lain</option>
                  <option value="3">Menyempurnakan solusi yang disarankan oleh orang lain</option>
                  <option value="4">Secara aktif mencari dan menyarankan solusi utuk masalah yang dihadapi</option>
              </select>
            <div>Sikap</div>
              <select name="sikap6" ref={register}>
                    <option value="1">Sering mengkritik tugas atau pekerjaan anggota lain dalam kelompok secara terbuka. Selalu bersikap negatif tentang tugas yang diberikan.</option>
                    <option value="2">Terkadang secara terbuka mengkritik tugas atau pekerjaan anggota lain dalam kelompok. Biasanya memiliki sikat positif tentang tugas yang diberikan.</option>
                    <option value="3">Jarang secara terbuka mengkritik tugas atau pekerjaan anggota lain dalam kelompok. Seringkali memiliki sikat positif tentang tugas yang diberikan.</option>
                    <option value="4">Tidak pernah secara terbuka mengkritik tugas atau pekerjaan anggota lain dalam kelompok. Selalu memiliki sikat positif tentang tugas yang diberikan.</option>
              </select>
            <div>Fokus terhadap tugas</div>
              <select name="fokusTerhadapTugas6" ref={register}>
                    <option value="1">Jarang fokus pada tugas dan apa yang perlu dilakukan. Memungkinkan orang lain melakukan pekerjaan.</option>
                    <option value="2">Berfokus pada tugas dan apa yang perlu dilakukan dalam beberapa waktu. Anggota kelompok lainnya kadang-kadang harus mengingatkan supaya mengerjakan tugas.</option>
                    <option value="3">Berfokus pada tugas dan apa yang perlu dilakukan dalam sebagian besar waktu untuk menyelesaikannya. Anggota kelompok lain dapat mengandalkan orang ini.</option>
                    <option value="4">Secara konsisten tetap fokus pada tugas dan apa yang perlu dilakukan. Sangat mandiri.</option>
                </select>
            <div>Bekerja dengan orang lain</div>
              <select name="bekerjaDenganOrangLain6" ref={register}>
                    <option value="1">Jarang mendengarkan, berbagi, dan mendukung upaya anggota lain dalam kelompok. Seringkali bukan anggota kelompok yang bagus.</option>
                    <option value="2">Seringkali mendengarkan, berbagi, dan mendukung upaya anggota lain dalam kelompok, tetapi terkadang bukan sebagai anggota kelompok yang baik.</option>
                    <option value="3">Biasanya mendengarkan, berbagi, dan mendukung upaya anggota lain dalam kelompok. Tidak menyebabkan perselisihan dalam kelompok.</option>
                    <option value="4">Hampir selalu mendengarkan, berbagi, dan mendukung upaya anggota lain dalam kelompok. Mencoba untuk membuat anggota lain bekerjasama dengan baik dalam kelompok.</option>
                </select>
            <div>Apakah masih ada anggota kelompok lain yang ingin Anda nilai?</div>
              <select name="apakahMasihAda6" ref={register}>
                    <option value="1">Ya</option>
                    <option value="0">Tidak</option>
                </select>
          </div>
          <div className="scoring-7">
            <div>Penilaian Anggota Kelompok (7)</div>
            <div>Pertanyaan berikut merupakan penilaian terhadap anggota kelompok, bukan Anda sendiri. Harap menilai kinerja masing-masing anggota kelompok dengan jujur karena penilaian yang Anda berikan tidak akan mempengaruhi indeks prestasi (IP) Anda maupun anggota kelompok.</div>
            <div>Nama Anggota (7)</div>
              <input name="nama7" ref={peerSubmit} />
            <div>NIM Anggota (7)</div>
              <input name="nim7" ref={peerSubmit} />
            <div>Kontribusi</div>
              <select name="kontribusi7" ref={register}>
                <option value="1">Jarang memberikan ide yang berguna ketika berpartisipasi dalam kelompok dan diskusi dalam kelas. Mungkin menolak untuk ikut berpartisipasi</option>
                <option value="2">Terkadang memberikan ide yang berguna ketika berpartisipasi dalam kelompok dan diskusi dalam kelas. Anggota kelompok yang melakukan apa yang diperlukan</option>
                <option value="3">Biasanya memberikan ide yang berguna ketika berpartisipasi dalam kelompok dan diskusi dalam kelas. Anggota kelompok yang berusaha keras.</option>
                <option value="4">Secara rutin memberikan ide yang berguna ketika berpartisipasi dalam kelompok dan diskusi dalam kelas. Seorang pemimpin yang menyumbang banyak usaha.</option>
              </select>
            <div>Pemecahan Masalah</div>
              <select name="pemecahanMasalah7" ref={register}>
                  <option value="1">Tidak mencoba memecahkan masalah atau tidak membantu oarang lain memecahkan masalah. Memungkinkan orang lain melakukan pekerjaan.</option>
                  <option value="2">Tidak menyarankan atau tidak memberikan solusi, tetapi mau mencoba solusi yang disarankan oleh orang lain</option>
                  <option value="3">Menyempurnakan solusi yang disarankan oleh orang lain</option>
                  <option value="4">Secara aktif mencari dan menyarankan solusi utuk masalah yang dihadapi</option>
              </select>
            <div>Sikap</div>
              <select name="sikap7" ref={register}>
                    <option value="1">Sering mengkritik tugas atau pekerjaan anggota lain dalam kelompok secara terbuka. Selalu bersikap negatif tentang tugas yang diberikan.</option>
                    <option value="2">Terkadang secara terbuka mengkritik tugas atau pekerjaan anggota lain dalam kelompok. Biasanya memiliki sikat positif tentang tugas yang diberikan.</option>
                    <option value="3">Jarang secara terbuka mengkritik tugas atau pekerjaan anggota lain dalam kelompok. Seringkali memiliki sikat positif tentang tugas yang diberikan.</option>
                    <option value="4">Tidak pernah secara terbuka mengkritik tugas atau pekerjaan anggota lain dalam kelompok. Selalu memiliki sikat positif tentang tugas yang diberikan.</option>
              </select>
            <div>Fokus terhadap tugas</div>
              <select name="fokusTerhadapTugas7" ref={register}>
                    <option value="1">Jarang fokus pada tugas dan apa yang perlu dilakukan. Memungkinkan orang lain melakukan pekerjaan.</option>
                    <option value="2">Berfokus pada tugas dan apa yang perlu dilakukan dalam beberapa waktu. Anggota kelompok lainnya kadang-kadang harus mengingatkan supaya mengerjakan tugas.</option>
                    <option value="3">Berfokus pada tugas dan apa yang perlu dilakukan dalam sebagian besar waktu untuk menyelesaikannya. Anggota kelompok lain dapat mengandalkan orang ini.</option>
                    <option value="4">Secara konsisten tetap fokus pada tugas dan apa yang perlu dilakukan. Sangat mandiri.</option>
                </select>
            <div>Bekerja dengan orang lain</div>
              <select name="bekerjaDenganOrangLain7" ref={register}>
                    <option value="1">Jarang mendengarkan, berbagi, dan mendukung upaya anggota lain dalam kelompok. Seringkali bukan anggota kelompok yang bagus.</option>
                    <option value="2">Seringkali mendengarkan, berbagi, dan mendukung upaya anggota lain dalam kelompok, tetapi terkadang bukan sebagai anggota kelompok yang baik.</option>
                    <option value="3">Biasanya mendengarkan, berbagi, dan mendukung upaya anggota lain dalam kelompok. Tidak menyebabkan perselisihan dalam kelompok.</option>
                    <option value="4">Hampir selalu mendengarkan, berbagi, dan mendukung upaya anggota lain dalam kelompok. Mencoba untuk membuat anggota lain bekerjasama dengan baik dalam kelompok.</option>
                </select>
            <div>Apakah masih ada anggota kelompok lain yang ingin Anda nilai?</div>
              <select name="apakahMasihAda7" ref={register}>
                    <option value="1">Ya</option>
                    <option value="0">Tidak</option>
                </select>
          </div>
      </form>
    </div>
  );
};

export default PeerAssesmentForm;