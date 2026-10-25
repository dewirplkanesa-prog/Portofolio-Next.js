export default function Kartu({ judul, children }) {
  return (
    <section className="rounded-xl grid border border-gray-200 bg-white p-6 shadow-sm mt-8">
      <h2 className="mb-3 text-2xl font-bold text-utama">
        {judul}
      </h2>
      {children}
    </section>
  );
}