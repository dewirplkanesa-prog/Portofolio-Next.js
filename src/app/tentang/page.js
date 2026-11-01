import Kartu from "@/components/Kartu";

export const metadata = {
  title: "Tentang",
  description: "Cerita, hobi, cita-cita, dan jadwal belajar.",
};

export default function TentangPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold text-utama md:text-4xl">
        Tentang Saya
      </h1>

      {/* Perkenalan */}
      <div className="mt-8">
        <Kartu judul="Perkenalan">
          <p className="leading-7 text-gray-700">
            Saya adalah siswa dari SMKN 1 KEPANJEN, dan saya
            adalah seorang siswa web developer yang mengikuti
            kelas industri UBIG.
          </p>
        </Kartu>
      </div>

      {/* Hobi dan Cita-cita */}
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <Kartu judul="Hobi">
          <ul className="list-inside list-disc space-y-2 text-gray-600">
            <li>Mendengarkan musik</li>
            <li>Menyanyi</li>
            <li>Menggambar</li>
            <li>Coding</li>
          </ul>
        </Kartu>

        <Kartu judul="Cita-cita">
          <p className="mb-4 text-sm text-gray-600">
            Saya ingin menjadi <strong>Web Developer</strong>.
            Langkah yang saya rencanakan:
          </p>

          <ol className="list-decimal space-y-2 pl-5 text-gray-600">
            <li>Menyelesaikan kelas industri</li>
            <li>Melamar pekerjaan menjadi Web Developer</li>
            <li>
              Bekerja di perusahaan teknologi sebagai Web Developer
            </li>
          </ol>
        </Kartu>
      </div>

      {/* Jadwal Belajar */}
      <div className="mt-6">
        <Kartu judul="Jadwal Belajar">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-xs">
              <thead className="bg-black text-white">
                <tr>
                  <th className="px-5 py-5">Hari</th>
                  <th className="px-5 py-5">Waktu</th>
                  <th className="px-5 py-5">Kegiatan</th>
                </tr>
              </thead>

              <tbody className="text-gray-700">
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-4">Senin</td>
                  <td className="px-4 py-4">19.00-20.00</td>
                  <td className="px-4 py-4">
                    Membaca ulang modul yang dikirim
                  </td>
                </tr>

                <tr className="border-b border-gray-200">
                  <td className="px-4 py-4">Rabu</td>
                  <td className="px-4 py-4">19.00-20.00</td>
                  <td className="px-4 py-4">
                    Mengerjakan tugas praktik
                  </td>
                </tr>

                <tr className="border-b border-gray-200">
                  <td className="px-4 py-4">Jumat</td>
                  <td className="px-4 py-4">18.00-20.00</td>
                  <td className="px-4 py-4">
                    Merekam video dan menulis laporan tugas
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Kartu>
      </div>
    </main>
  );
}