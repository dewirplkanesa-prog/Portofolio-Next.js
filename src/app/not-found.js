
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[85vh] items-center justify-center bg-gray-50 px-6">

      <section className="w-full max-w-xl text-center">

        <h1 className="text-8xl font-bold text-[#243b64] sm:text-9xl">
          404
        </h1>

        <h2 className="mt-5 text-2xl font-bold text-gray-800">
          Halaman Tidak Ditemukan
        </h2>

        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-gray-500">
          Maaf, halaman yang kamu cari tidak dapat ditemukan.
          Silakan kembali ke halaman utama untuk melanjutkan.
        </p>

        <Link
          href="/"
          className="mt-7 inline-block rounded-lg bg-[#243b64] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#344f7e]"
        >
          ← Kembali ke Beranda
        </Link>

      </section>

    </main>
  );
}
