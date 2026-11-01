
import ProyekCard from "@/components/ProyekCard";
import { proyek } from "@/data/proyek";

export default function DaftarProyek() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold text-utama md:text-4xl">
        Proyek Saya
      </h1>

      <p className="mt-3 text-lg text-gray-700">
        Berikut adalah kumpulan hasil belajar dan proyek
        yang telah saya buat.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {proyek.map((item) => (
          <ProyekCard key={item.slug} proyek={item} />
        ))}
      </div>
    </main>
  );
}
