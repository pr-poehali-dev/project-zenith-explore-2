import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-black/95 backdrop-blur-md border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="font-orbitron text-xl font-bold text-white">
              NEURO ADS<span className="text-primary"> TJ</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#services"
                className="font-geist text-white hover:text-primary transition-colors duration-200"
              >
                Услуги
              </a>
              <a href="#portfolio" className="font-geist text-white hover:text-primary transition-colors duration-200">
                Портфолио
              </a>
              <a href="#process" className="font-geist text-white hover:text-primary transition-colors duration-200">
                Как работает
              </a>
              <a href="#pricing" className="font-geist text-white hover:text-primary transition-colors duration-200">
                Цены
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-geist font-bold border-0">
              <a href="#contacts">Заказать рекламу</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-red-500 transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/98 border-t border-primary/20">
              <a
                href="#services"
                className="block px-3 py-2 font-geist text-white hover:text-primary transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Услуги
              </a>
              <a
                href="#portfolio"
                className="block px-3 py-2 font-geist text-white hover:text-primary transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Портфолио
              </a>
              <a
                href="#process"
                className="block px-3 py-2 font-geist text-white hover:text-primary transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Как работает
              </a>
              <a
                href="#pricing"
                className="block px-3 py-2 font-geist text-white hover:text-primary transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Цены
              </a>
              <div className="px-3 py-2">
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-geist font-bold border-0">
                  <a href="#contacts" onClick={() => setIsOpen(false)}>Заказать рекламу</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}