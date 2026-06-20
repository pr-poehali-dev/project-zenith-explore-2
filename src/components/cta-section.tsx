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
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all shadow-[0_0_30px_hsl(var(--primary)/0.4)]"
            >
              <Icon name="Instagram" size={24} />
              Instagram Direct
            </a>
            <a
              href="https://wa.me/992000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl border border-primary text-primary font-bold text-lg hover:bg-primary hover:text-primary-foreground transition-all bg-transparent"
            >
              <Icon name="MessageCircle" size={24} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
