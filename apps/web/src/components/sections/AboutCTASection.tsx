import Link from "next/link";

export default function AboutCTASection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-sky-900 via-slate-950 to-slate-950 py-16">
      <div className="mx-auto max-w-4xl px-6 text-center text-slate-50">
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-sky-300">
          Готові до нової ери в медицині?
        </p>
        <h2 className="mt-4 text-2xl md:text-3xl font-semibold">
          Наша команда допоможе спроєктувати та запустити інтегровані
          операційні під ваші задачі.
        </h2>
        <p className="mt-4 text-sm text-slate-200">
          Залиште контакти – ми запропонуємо оптимальний формат співпраці:
          аудит, пілотний проєкт або повний комплекс «під ключ».
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-sky-400 px-8 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/40 hover:bg-sky-300 transition"
          >
            Напишіть або зателефонуйте нам
          </Link>
          <span className="text-xs text-slate-300">
            Або надішліть план операційного блоку – ми підготуємо варіанти
            рішень.
          </span>
        </div>
      </div>
    </section>
  );
}
