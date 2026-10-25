import Hero from "@/components/Hero"; 
import SkillCard from "@/components/SkillCard";
import Kartu from "@/components/Kartu"; 
const skills = [
    { nama: "HTML", level: "Menengah" },
    { nama: "CSS", level: "Menengah" },  
    { nama: "Git dan GitHub", level: "Dasar" },  
    { nama: "Desain poster dengan Canva", level: "Mahir" },  
    { nama: "JavaScript", level: "Dasar" }, 
  ]; 
  
  export default function Home() {  
    return (    
      <main className="mx-auto max-w-5xl px-4 py-10">      
        <Hero        
          nama="Dewi Lestari"        
          tagline="Siswa kelas X SMK, calon Junior Web Developer di Kelas Industri UBIG."      
        />  

        <Kartu judul="Tentang Saya">
          <p className="leading-7 text-gray-700">Saya adalah Siswa dari SMKN 1 KEPANJEN, dan saya adalah seorang web developer siswa yang mengikuti kelas industri UBIG</p>
        </Kartu>

        <section className="mt-5 grid gap-6 md:grid-cols-2 ">
          <div className="rounded-xl border border-gray-300 bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-bold text-utama">Hobi</h2>
            <ul className="list-inside list-disc space-y-2 text-gray-600">
              <li>mendengarkan musik</li>
              <li>menyanyi</li>
              <li>menggambar</li>
              <li>coding</li>
            </ul>
          </div>

          <div className="rounded-xl border border-gray-300 bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-bold text-utama">Cita-cita</h2>
            <p className="mb-2 text-sm text-gray-600">
              Saya ingin menjadi 
              <strong> Web Developer</strong> langkah yang saya rencanakan:
            </p> <br></br>

            <ul className="list-inside list-disc space-y-2 text-gray-600">
              <ol type="1" className="list-decimal pl-5 marker:text-gray-500 marker:font-bold">
                <li>menyelesaikan kelas industri</li>
                <li>melamar pekerjaan menjadi Web Developer </li>
                <li>bekerja di perusahaan teknologi sebagai Web Developer</li>
              </ol>
            </ul>
          </div>
        </section>    
        
        <section className="mt-10 rounded-2xl border border-gray-300 bg-white p-6 shadow-sm">        
          <h2 className="mb-4 text-2xl font-bold text-utama">Keahlian</h2>        
          <div className="grid gap-4 md:grid-cols-3">          
            {skills.map((skill) => (            
              <SkillCard key={skill.nama} nama={skill.nama} level={skill.level} />          
            ))}        
          </div>      
        </section>  

        <section className="mt-10 rounded-2xl border border-gray-300 bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-lg font-bold text-utama">Jadwal Belajar</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead className="bg-table-header text-white bg-black">
                <tr>
                  <th className="px-5 py-5">Hari</th>
                  <th className="px-5 py-5">waktu</th>
                  <th className="px-5 py-5">kegiatan</th>
                </tr>
              </thead>

              <tbody className="text-gray-700">
                <tr className="border-b border-gray-700">
                  <td className="px-4 py-4">senin</td>
                  <td className="px-4 py-4">19.00-20.00</td>
                  <td className="px-4 py-4">membaca ulang modul yang di kirim</td>
                </tr>

                <tr className="border-b border-gray-700">
                  <td className="px-4 py-4">rabu</td>
                  <td className="px-4 py-4">19.00-20.00</td>
                  <td className="px-4 py-4">mengerjakan tugas praktek</td>
                </tr>

                <tr className="border-b border-gray-700">
                  <td className="px-4 py-4">jumat</td>
                  <td className="px-4 py-4">18.00-20.00</td>
                  <td>merekam video dan menulis laporan tugas</td>
                </tr>

              </tbody>
            </table>
          </div>
        </section>
      </main>
    );
  }