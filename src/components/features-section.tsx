import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const features = [
  {
    title: "AI Reels для соцсетей",
    description: "Цепляющие вертикальные ролики для Instagram и TikTok, которые продают и собирают просмотры.",
    icon: "Clapperboard",
    badge: "Reels",
  },
  {
    title: "AI Product Video",
    description: "Эффектные видео для товаров — одежда, напитки, гаджеты и аксессуары в кинематографичном качестве.",
    icon: "Package",
    badge: "Product",
  },
  {
    title: "Promo-видео",
    description: "Рекламные промо-ролики для запусков, акций и спецпредложений с динамичным монтажом.",
    icon: "Megaphone",
    badge: "Promo",
  },
  {
    title: "Реклама для магазинов",
    description: "Видео-витрины для розницы и маркетплейсов, которые повышают продажи и узнаваемость бренда.",
    icon: "Store",
    badge: "Retail",
  },
  {
    title: "Реклама для кафе",
    description: "Аппетитные ролики для кафе и ресторанов — еда, напитки и атмосфера, от которых текут слюнки.",
    icon: "Coffee",
    badge: "Food",
  },
  {
    title: "Реклама для авто",
    description: "Премиальные авто-ролики с эффектными ракурсами и неоновой подачей для автосалонов и сервисов.",
    icon: "Car",
    badge: "Auto",
  },
]

export function FeaturesSection() {
  return (
    <section id="services" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Наши услуги</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Создаём рекламные видео нового поколения с помощью нейросетей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-primary">
                    <Icon name={feature.icon} size={32} />
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}