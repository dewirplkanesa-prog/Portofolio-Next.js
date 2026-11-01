
import { proyek } from "@/data/proyek";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export function generateStaticParams() {
  return proyek.map((item) => ({
    slug: item.slug,
  }));
}

export default function HalamanDetailProyek({ params }) {
  return (
    <Suspense fallback={<p className="p-10 text-center">Memuat proyek...</p>}>
      <DetailProyek params={params} />
    </Suspense>
  );
}

async function DetailProyek({ params }) {
  const { slug } = await params;

  const item = proyek.find((p) => p.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <Link
        href="/proyek"
        className="text-sm font-semibold text-blue-600 hover:underline"
      >
        ← Kembali ke Proyek
      </Link>

      <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <Image
          src={item.gambar}
          alt={item.judul}
          width={900}
          height={600}
          className="h-auto w-full rounded-lg"
        />

        <span className="mt-5 inline-block rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-blue-600">
          {item.kategori}
        </span>

        <h1 className="mt-4 text-3xl font-bold text-utama">
          {item.judul}
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          {item.minggu}
        </p>

        <p className="mt-5 text-gray-700">
          {item.deskripsi}
        </p>

        <h2 className="mt-6 text-xl font-bold text-utama">
          Fitur Proyek
        </h2>

        <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700">
          {item.fitur.map((fitur, index) => (
            <li key={index}>{fitur}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
