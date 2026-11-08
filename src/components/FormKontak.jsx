"use client";
import { useState } from "react";

const kelasInput = "mt-1 w-full rounded-lg border border-gray-300 bg-white p-2 text-gray-800 dark:border-gray-600 dark:bg-gray-800 dark:text-white";
const kelasError = "mt-1 text-sm text-red-600 dark:text-red-400"

export default function FormKontak() {
    const [nama, setNama] = useState("") ;
    const [email,setEmail] = useState("");
    const [noHp, setNoHp] = useState("");
    const [keperluan, setKeperluan] = useState("");
    const [pesan, setPesan] = useState("");
    const [error, setError] = useState({});
    const [berhasil, setBerhasil] = useState(false);

    function kirim(e) {
        e.preventDefault ();
        const errorBaru = {};

        if (nama.trim() === "") {
            errorBaru.nama = "Nama wajib diisi.";
        }
        if (!email.includes("@") || !
            email.includes(".")) {
            errorBaru.email = "Masukan email yang valid";
        }

        if (noHp.trim() === "") {
            errorBaru.noHp="Nomor HP wajib diisi";
        } else if (!/^\d{10,}$/.test(noHp)){
            errorBaru.noHp = "Nomor HP harus minimal 10 angka.";
        }

        if(keperluan === "") {
            errorBaru.keperluan = "Silahkan pilih keperluan";
        }

        if(pesan.trim() .length < 10) {
            errorBaru.pesan = "Pesan minimal 10 karakter dan wajib di isi";
        }

        setError (errorBaru);

        setBerhasil(Object.keys(errorBaru).length === 0);
    }


return (
    <form onSubmit={kirim} noValidate className="space-y-4">
        <div>
            <label htmlFor="nama" className="block font-semibold text-gray-800 dark:text-gray-200">
                Nama lengkap
            </label>
            <input 
            type="text"
            id="nama"
            value={nama}
            onChange ={(e) => setNama (e.target.value)}
            placeholder="contoh: Dewi lestari"
            className={kelasInput}
            />
            {error.nama && (
                <p className={kelasError}>{error.nama}</p>
            )}   
        </div>

        <div>
            <label htmlFor="email" className="block font-semibold text-gray-800 dark:text-gray-200">
                Email
            </label>
            <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="nama@gmail.com"
            className={kelasInput}
            />

            {error.email && <p className={kelasError}>{error.email}</p>}
        </div>

         <div>
        <label htmlFor="noHp" className="block font-semibold dark:text-gray-200">
          Nomor HP
        </label>
        <input
          type="tel"
          id="noHp"
          value={noHp}
          onChange={(e) => setNoHp(e.target.value)}
          placeholder="Contoh: 081234567890"
          className={kelasInput}
        />
        {error.noHp && <p className={kelasError}>{error.noHp}</p>}
      </div>

      <div>
        <label htmlFor="keperluan" className="block font-semibold dark:text-gray-200">
          Keperluan
        </label>
        <select
          id="keperluan"
          value={keperluan}
          onChange={(e) => setKeperluan(e.target.value)}
          className={kelasInput}
        >
          <option value="">Pilih keperluan</option>
          <option value="Pertanyaan">Pertanyaan</option>
          <option value="Diskusi">Diskusi</option>
          <option value="Kolaborasi">Kolaborasi</option>
          <option value="Lainnya">Lainnya</option>
        </select>
        {error.keperluan && (
          <p className={kelasError}>{error.keperluan}</p>
        )}
      </div>

        <div>
            <label htmlFor="pesan" className="block font-semibold text-gray-800 dark:text-gray-200">
                pesan
            </label>
                <textarea
                id="pesan"
                value={pesan}
                onChange={(e) => setPesan(e.target.value)}
                placeholder="Tulis pesan..."
                className={kelasInput}
                rows={4}/>

                {error.pesan && (
                    <p className={kelasError}>{error.pesan}</p>
                )}
        </div>

        <button
        type="submit"
        className="rounded-lg bg-aksen px-5 py-2 font-semibold text-white">kirim pesan
        </button>

        {berhasil && (
            <p className="text-sm font-semibold text-green-600 dark:green-400">
                pesan berhasil divalidasi!
            </p>
        )}

    </form>
    );
}