import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Шаг 1 — Заявка",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Вы отправляете нам фото товара, идею или просто описание бренда. Мы обсуждаем формат, стиль и цели
            рекламы — всё в мессенджере, без сложных брифов.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-primary text-sm">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Фото товара или идея ролика
            </div>
            <div className="flex items-center gap-3 text-primary text-sm">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Определяем формат: Reels, Promo или Product Ad
            </div>
            <div className="flex items-center gap-3 text-primary text-sm">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Согласовываем стиль и сроки
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Шаг 2 — AI-генерация",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Нейросети создают видео по вашей идее — кадры, движение, свет и атмосферу. Получается дорогой
            рекламный вид без съёмочной группы и студии.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-primary text-sm">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Генерация сцен и анимации товара
            </div>
            <div className="flex items-center gap-3 text-primary text-sm">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Кинематографичный свет и ракурсы
            </div>
            <div className="flex items-center gap-3 text-primary text-sm">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Несколько вариантов на выбор
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Шаг 3 — Монтаж и готовый ролик",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Добавляем монтаж, музыку, тексты и брендинг. Вы получаете готовый Reels, который можно сразу
            публиковать и запускать в рекламу.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-primary text-sm">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Профессиональный монтаж и звук
            </div>
            <div className="flex items-center gap-3 text-primary text-sm">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Логотип, тексты и призыв к действию
            </div>
            <div className="flex items-center gap-3 text-primary text-sm">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Готовый ролик в нужном формате
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="process" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Как это работает</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            От вашей идеи до готового рекламного ролика — всего три простых шага.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}