"use client";
export default function Kartu({ judul, children }) {
  return (
    <section className="kartu rounded-xl grid border border-gray-200 bg-white p-6 shadow-sm mt-8 dark:border-gray-700 dark:gb-gray-800">
      <h2 className="mb-3 text-2xl font-bold text-utama dark:-gray-100">
        {judul}
      </h2>
      {children}
    </section>
  );
}