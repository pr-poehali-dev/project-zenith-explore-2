import Icon from "@/components/ui/icon"

export function CTASection() {
  return (
    <section
      id="contacts"
      className="py-24 px-6 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-orbitron text-balance">
            Готовы заказать рекламу?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
            Напишите нам в Instagram Direct или WhatsApp — обсудим вашу идею и сделаем рекламный ролик,
            который будет продавать.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://instagram.com/neuro.ads.tj"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all shadow-[0_0_30px_hsl(var(--primary)/0.4)]"
            >
              <Icon name="Instagram" size={24} />
              Instagram Direct
            </a>
            <div className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl border border-primary/40 text-muted-foreground font-bold text-lg bg-transparent cursor-not-allowed select-none">
              <Icon name="MessageCircle" size={24} />
              Написать в WhatsApp
              <span className="text-xs font-normal opacity-60 ml-1">— скоро</span>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-muted-foreground font-space-mono">
            <span className="flex items-center gap-2">
              <Icon name="Instagram" size={16} className="text-primary" />
              @neuro.ads.tj
            </span>
            <span className="hidden sm:block text-border">|</span>
            <span className="flex items-center gap-2">
              <Icon name="MessageCircle" size={16} className="text-muted-foreground/50" />
              WhatsApp — скоро будет добавлен
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection