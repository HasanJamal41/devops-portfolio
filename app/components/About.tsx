interface Stat {
  id: number;
  value: string;
  label: string;
}

const stats: Stat[] = [
  { id: 1, value: "3.5+", label: "Years in DevOps & Cloud" },
  { id: 2, value: "20+", label: "Projects Secured & Shipped" },
  { id: 3, value: "2", label: "Clouds Mastered — AWS & Azure" },
  { id: 4, value: "0", label: "Excuses for Downtime" },
];

export default function About(): React.JSX.Element {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <p className="text-2xl max-w-3xl mx-auto">
            I&apos;m currently looking to join a{" "}
            <span className="text-purple-400">team that treats production like it matters</span>
            <br />
            <span className="text-sm text-white/60">
              where security isn&apos;t a checkbox and automation isn&apos;t optional.
            </span>
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="text-center bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10"
            >
              <p className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-violet-600 via-violet-400 to-violet-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </p>
              <p className="text-white/70 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
