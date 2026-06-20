import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer className="bg-black border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-orbitron text-2xl font-bold text-white mb-4">
              NEURO ADS<span className="text-primary"> TJ</span>
            </h2>
            <p className="font-space-mono text-gray-300 mb-6 max-w-md">
              AI-реклама для брендов нового поколения. Создаём Reels, Promo и Product Ads для бизнеса в Таджикистане.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/neuro.ads.tj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors duration-200"
              >
                <Icon name="Instagram" size={20} />
              </a>
              <span
                className="text-gray-600 cursor-not-allowed"
                title="WhatsApp — скоро будет добавлен"
              >
                <Icon name="MessageCircle" size={20} />
              </span>
              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors duration-200"
              >
                <Icon name="Send" size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="font-space-mono text-gray-400 hover:text-primary transition-colors duration-200">
                  AI Reels
                </a>
              </li>
              <li>
                <a href="#services" className="font-space-mono text-gray-400 hover:text-primary transition-colors duration-200">
                  Product Video
                </a>
              </li>
              <li>
                <a href="#services" className="font-space-mono text-gray-400 hover:text-primary transition-colors duration-200">
                  Promo-видео
                </a>
              </li>
              <li>
                <a href="#portfolio" className="font-space-mono text-gray-400 hover:text-primary transition-colors duration-200">
                  Портфолио
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Меню</h3>
            <ul className="space-y-2">
              <li>
                <a href="#process" className="font-space-mono text-gray-400 hover:text-primary transition-colors duration-200">
                  Как работает
                </a>
              </li>
              <li>
                <a href="#pricing" className="font-space-mono text-gray-400 hover:text-primary transition-colors duration-200">
                  Цены
                </a>
              </li>
              <li>
                <a href="#faq" className="font-space-mono text-gray-400 hover:text-primary transition-colors duration-200">
                  Вопросы
                </a>
              </li>
              <li>
                <a href="#contacts" className="font-space-mono text-gray-400 hover:text-primary transition-colors duration-200">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-primary/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-space-mono text-gray-400 text-sm">2025 NEURO ADS TJ. Все права защищены.</p>
            <p className="font-space-mono text-gray-400 text-sm mt-4 md:mt-0">
              AI-реклама для брендов и бизнеса
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer