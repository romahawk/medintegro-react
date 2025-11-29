export default function AboutIntroSection() {
  return (
    <section className="bg-slate-950 py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 md:flex-row md:items-start">
        {/* Left border accent + title */}
        <div className="md:w-5/12">
          <div className="border-l-4 border-sky-400 pl-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-50">
              MedIntegro – інтеграція медичних технологій нового покоління
            </h2>
          </div>
          <p className="mt-4 text-sm text-slate-300">
            Ми допомагаємо медичним закладам впроваджувати інноваційні рішення,
            перетворюючи операційні на сучасні цифрові простори.
          </p>
          <p className="mt-2 text-sm text-slate-300">
            Від першої консультації до повноцінного запуску – ми супроводжуємо
            кожен етап вашого проєкту, щоб забезпечити бездоганний результат.
          </p>
        </div>

        {/* Right: bullet list */}
        <div className="md:w-7/12">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-sky-300">
            Що ми робимо для вас
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-200">
            <li>• Аналізуємо потреби лікарні та команди хірургів.</li>
            <li>• Проєктується архітектура інтегрованих операційних.</li>
            <li>• Підбираємо та постачаємо обладнання провідних виробників.</li>
            <li>• Інсталюємо, налаштовуємо та тестуємо всі системи.</li>
            <li>• Навчаємо персонал та супроводжуємо після запуску.</li>
          </ul>

          <p className="mt-6 text-sm text-slate-300">
            <span className="font-semibold text-slate-100">MedIntegro</span> –
            ваш партнер у створенні інтелектуальних медичних просторів
            майбутнього.
          </p>
        </div>
      </div>
    </section>
  );
}
