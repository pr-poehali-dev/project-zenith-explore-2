import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const works = [
  {
    title: "Парфюм Premium",
    category: "Product Ad",
    image: "https://cdn.poehali.dev/projects/8c0155ba-4458-4dc3-a974-0a696ddf4886/files/4f8c9460-2254-4a36-8b03-e2e513a78106.jpg",
  },
  {
    title: "Авто в неоне",
    category: "Promo",
    image: "https://cdn.poehali.dev/projects/8c0155ba-4458-4dc3-a974-0a696ddf4886/files/913174e6-2bf3-4e80-a3e0-055e482c24b3.jpg",
  },
  {
    title: "Напиток Splash",
    category: "Reels",
    image: "https://cdn.poehali.dev/projects/8c0155ba-4458-4dc3-a974-0a696ddf4886/files/e3d55456-df4f-4b98-878c-24d40a432371.jpg",
  },
  {
    title: "Одежда Streetwear",
    category: "Reels",
    image: "https://cdn.poehali.dev/projects/8c0155ba-4458-4dc3-a974-0a696ddf4886/files/c01a90e6-b845-43a0-9de4-eb6e351fa080.jpg",
  },
  {
    title: "Кафе & Food",
    category: "Promo",
    image: "https://cdn.poehali.dev/projects/8c0155ba-4458-4dc3-a974-0a696ddf4886/files/67d9d782-c852-4fc3-ae27-a688d1b9bf17.jpg",
  },
  {
    title: "Гаджет Tech",
    category: "Product Ad",
    image: "https://cdn.poehali.dev/projects/8c0155ba-4458-4dc3-a974-0a696ddf4886/files/59d17ceb-5088-4aaa-8306-3499156bad14.jpg",
  },
]

export function TechnologySection() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-orbitron">Портфолио</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Примеры рекламных роликов, созданных нейросетями для брендов
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {works.map((work, index) => (
            <div
              key={index}
              className="group relative aspect-[9/16] rounded-xl overflow-hidden glow-border slide-up cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={work.image}
                alt={work.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center text-primary-foreground">
                  <Icon name="Play" size={26} />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <Badge className="bg-primary text-primary-foreground mb-2 border-0">{work.category}</Badge>
                <h3 className="text-white font-bold text-sm md:text-base font-orbitron">{work.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechnologySection
