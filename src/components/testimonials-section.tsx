import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Фарход Рахимов",
    role: "Владелец магазина одежды, Душанбе",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Заказал Reels для новой коллекции — ролик собрал больше просмотров, чем все наши прошлые видео вместе. Продажи выросли заметно.",
  },
  {
    name: "Нигина Саидова",
    role: "Кафе «Aroma», маркетинг",
    avatar: "/professional-woman-scientist.png",
    content:
      "Видео получилось такое аппетитное, что гости приходят со словами «видели вас в Instagram». Сделали быстро и без съёмок.",
  },
  {
    name: "Бахтиёр Каримов",
    role: "Автосалон AutoLux",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Промо-ролик авто выглядит дорого, как реклама мировых брендов. Клиенты в восторге, а цена приятно удивила.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Нам доверяют бренды</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Что говорят владельцы бизнеса о нашей AI-рекламе
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}