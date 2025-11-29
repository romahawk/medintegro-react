// apps/web/src/components/sections/HeroAbout.tsx

const particles = [
  { left: "8%", top: "25%", size: 4 },
  { left: "22%", top: "60%", size: 3 },
  { left: "38%", top: "18%", size: 5 },
  { left: "55%", top: "70%", size: 3 },
  { left: "68%", top: "30%", size: 4 },
  { left: "82%", top: "50%", size: 3 },
];

export default function HeroAbout() {
  return (
    <section className="relative flex h-[80vh] w-full items-center justify-center overflow-hidden text-center text-slate-50">
      {/* Gradient background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at top left, rgba(56, 189, 248, 0.22), transparent 55%),
            radial-gradient(circle at bottom right, rgba(59, 130, 246, 0.22), transparent 55%),
            linear-gradient(135deg, #020617 0%, #020617 40%, #0f172a 100%)
          `,
        }}
      />

      {/* Subtle grid overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-soft-light bg-[radial-gradient(circle_at_1px_1px,#1e293b_1px,transparent_0)] bg-[length:24px_24px]" />

      {/* Particles overlay */}
      <div className="pointer-events-none absolute inset-0">
        {particles.map((p, idx) => (
          <span
            key={idx}
            className="absolute rounded-full bg-sky-400/80 blur-[1px]"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              animation: `hero-particle-float ${18 + idx * 2}s ease-in-out infinite`,
              animationDelay: `${idx * 1.7}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex max-w-4xl flex-col items-center px-6">
        <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-sky-300/90">
          ПРО НАС
        </p>

        <h1 className="mt-4 max-w-4xl text-4xl font-bold md:text-6xl">
          MedIntegro → Ми створюємо медичні простори майбутнього
        </h1>

        <p className="mt-6 max-w-2xl text-sm md:text-lg text-slate-200/95">
          Наша місія — створювати інтегровані операційні, які об’єднують
          хірургічне обладнання, цифрові потоки даних та телемедичні
          можливості в єдину інтелектуальну екосистему.
        </p>
      </div>
    </section>
  );
}
