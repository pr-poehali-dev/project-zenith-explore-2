import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Сколько времени занимает создание ролика?",
      answer:
        "В среднем готовый ролик мы делаем за 2-4 дня. Для пакета «Бизнес» и срочных задач сроки можем сократить — обсудим при заказе.",
    },
    {
      question: "Что мне нужно прислать для старта?",
      answer:
        "Достаточно фото вашего товара или короткого описания идеи. Остальное — сцены, свет, движение и монтаж — берём на себя.",
    },
    {
      question: "Нужна ли реальная съёмка товара?",
      answer:
        "Нет. Мы создаём рекламу с помощью нейросетей, поэтому студия и съёмочная группа не нужны. Достаточно качественных фото товара.",
    },
    {
      question: "Можно ли вносить правки?",
      answer:
        "Да, количество правок зависит от тарифа. Мы согласовываем результат, пока вы не будете довольны финальным роликом.",
    },
    {
      question: "В каком формате я получу видео?",
      answer:
        "Отдаём готовый ролик в вертикальном формате для Reels, TikTok и Stories, а при необходимости — и в горизонтальном для YouTube или ТВ.",
    },
    {
      question: "Как происходит оплата?",
      answer:
        "Обсуждаем детали в Instagram Direct или WhatsApp, согласовываем формат и стоимость, после чего приступаем к работе.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы о создании AI-рекламы, сроках и форматах.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-primary/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-primary font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}