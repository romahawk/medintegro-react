const features = [
  {
    title: "Відображення",
    subtitle: "Єдине вікно для всіх джерел",
    description:
      "Ендоскопічне, мікроскопічне, рентгенівське зображення та дані пацієнта – на потрібних моніторах у потрібний момент.",
  },
  {
    title: "Збереження",
    subtitle: "Безпечний відео- та дата-архів",
    description:
      "Запис операцій, фото та відео у відповідних форматах з інтеграцією до лікарняних систем зберігання даних.",
  },
  {
    title: "Комунікація",
    subtitle: "Операційна, відкрита до світу",
    description:
      "Телемедицина, онлайн-консультації та навчальні трансляції – безпечні підключення для зовнішніх експертів.",
  },
];

export default function IntegratedORHighlights() {
  return (
    <section className="bg-slate-900 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <header className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">
            Інтегровані операційні
          </p>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold">
            Правильна інформація, у правильному місці, в правильний момент
          </h2>
          <p className="mt-3 text-sm text-slate-300 max-w-2xl mx-auto">
            Ми поєднуємо обладнання різних виробників в єдину екосистему, щоб
            команда у операційній працювала швидше, безпечніше та комфортніше.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl bg-slate-800/80 border border-slate-700/60 p-6 shadow-sm"
            >
              <h3 className="text-base font-semibold text-slate-50">
                {item.title}
              </h3>
              <p className="mt-1 text-xs font-medium text-sky-300">
                {item.subtitle}
              </p>
              <p className="mt-3 text-sm text-slate-200">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
