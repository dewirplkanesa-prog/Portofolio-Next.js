import SkillCard from "@/components/SkillCard";

export default function Keahlian() {
  const skills = [
    { nama: "HTML", level: "Menengah" },
    { nama: "CSS", level: "Menengah" },
    { nama: "JavaScript", level: "Dasar" },
    { nama: "Git dan GitHub", level: "Dasar" },
    { nama: "Next.js", level: "Dasar" },
    { nama: "Desain Canva", level: "Mahir" },
  ];

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-4 py-10">
      <h1 className="mb-3 text-3xl font-bold text-utama dark:text-gray-100 md:text-4xl">
        Keahlian Saya
      </h1>

      <p className="mb-10 text-gray-600 dark:text-gray-400">
        Berikut beberapa keahlian yang saya pelajari selama belajar
        di bidang teknologi dan desain.
      </p>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            nama={skill.nama}
            level={skill.level}
          />
        ))}
      </section>
    </main>
  );
}