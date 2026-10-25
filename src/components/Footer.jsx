export default function Footer() {
  return (
    <footer className="mt-auto w-full bg-black py-4 text-center text-xs font-light text-white">
      &copy; {new Date().getFullYear()} Dewi Lestari. Dibuat
      dengan Next.js di Kelas Industri UBIG.
    </footer>
  );
}