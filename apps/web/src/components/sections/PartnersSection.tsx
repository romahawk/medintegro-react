const partners = [
  "SURGIRIS SAS",
  "SURGIMEDIA",
  "ADVANTECH",
  "MEDICAPTURE",
  "ERGOMOUNTS",
  "FSN",
  "TELEMIS",
  "AG NEOVO",
];

export default function PartnersSection() {
  return (
    <section className="bg-slate-950 py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 md:flex-row md:items-start">
        <div className="md:w-4/12">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-50">
            Наші партнери
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            Ми працюємо з виробниками, чиї рішення встановлені у провідних
            клініках світу.
          </p>
          <ul className="mt-4 space-y-1 text-sm text-slate-200">
            {partners.map((name) => (
              <li key={name}>• {name}</li>
            ))}
          </ul>
        </div>

        <div className="md:w-8/12">
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            {partners.map((name) => (
              <div
                key={name}
                className="flex h-16 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
