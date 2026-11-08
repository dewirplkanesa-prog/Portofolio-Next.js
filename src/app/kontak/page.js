import FormKontak from "@/components/FormKontak";

export const metadata = {
  title: "Kontak | Dewi Lestari",
  description:
    "Hubungi Dewi Lestari untuk pertanyaan, diskusi, atau kolaborasi proyek.",
};

 export default function Kontak() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10">

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-utama dark:text-gray-100 md:text-4xl tracking-tight">
          Hubungi Saya
        </h1>

        <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
          Punya pertanyaan atau ingin bekerja sama membuat proyek?
          Silakan isi formulir berikut:
        </p>
      </div>

      <div className="mt-8 grid w-full gap-6 md:grid-cols-3">

        
        <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:col-span-2">
          <FormKontak />
        </section>

        
        <div className="flex h-full w-full flex-col justify-start rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-8">

          <h2 className="mb-4 text-lg font-bold text-gray-800 dark:text-gray-100">
            Temukan Saya di
          </h2>

          <div className="flex flex-col space-y-3 text-sm">

            <a
              href="https://github.com/dewirplkanesa-prog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-medium text-aksen hover:underline dark:text-red-300"
            >
              GitHub
            </a>

            <a
              href="mailto:dewirplkanesa@gmail.com"
              className="inline-block break-all font-medium text-aksen hover:underline dark:text-red-300"
            >
              dewirplkanesa@gmail.com
            </a>

          </div>
        </div>

      </div>
    </main>
  );
 }
