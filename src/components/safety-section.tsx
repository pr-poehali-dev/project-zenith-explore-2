import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const plans = [
  {
    name: "Старт",
    price: "50",
    unit: "сомони",
    description: "Для теста и первого видео",
    features: ["1 короткий AI Reels до 10 сек", "Для теста и первого видео"],
    popular: false,
  },
  {
    name: "Бизнес",
    price: "150",
    unit: "сомони",
    description: "3 рекламных AI Reels",
    features: ["3 рекламных AI Reels", "Текст, музыка, монтаж"],
    popular: true,
  },
  {
    name: "Бренд",
    price: "500",
    unit: "сомони",
    description: "10 рекламных роликов",
    features: ["10 рекламных роликов", "Единый стиль для Instagram"],
    popular: false,
  },
]

export function SafetySection() {
  return (
    <section id="pricing" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-orbitron">Цены</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Прозрачные тарифы под любые задачи — от теста до полного сопровождения бренда
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 slide-up transition-all duration-300 ${
                plan.popular
                  ? "glow-border bg-card shadow-[0_0_40px_hsl(var(--primary)/0.25)] scale-105"
                  : "border border-border bg-card"
              }`}
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                    Популярный
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold text-card-foreground font-orbitron mb-2">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-primary">{plan.price}</span>
                {plan.unit && <span className="text-muted-foreground ml-2">{plan.unit}</span>}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-card-foreground text-sm">
                    <Icon name="Check" size={18} className="text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className={`w-full font-bold ${
                  plan.popular
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                    : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                }`}
              >
                <a href="#contacts">Заказать</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SafetySection