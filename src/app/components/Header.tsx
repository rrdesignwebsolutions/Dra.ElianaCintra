import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          <div className="flex items-center">
            <img src="/public/images/logo Eli variação.png" alt="Dra. Eliana Cintra" className="h-20" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-pink-500 transition-colors">
              Início
            </button>
            <button onClick={() => scrollToSection('sobre')} className="text-gray-700 hover:text-pink-500 transition-colors">
              Sobre
            </button>
            <button onClick={() => scrollToSection('especialidades')} className="text-gray-700 hover:text-pink-500 transition-colors">
              Especialidades
            </button>
            <button onClick={() => scrollToSection('depoimentos')} className="text-gray-700 hover:text-pink-500 transition-colors">
              Depoimentos
            </button>
            <a
              href="https://api.whatsapp.com/send?phone=553599353010&text=Olá%2C%20tudo%20bem%3F%20Quero%20agendar%20uma%20consulta%20para%20meu%20filho(a)%20com%20a%20Dra.%20Eliana%20Cintra.%20Poderia%20me%20informar%20os%20horários%20disponíveis%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all"
            >
              Agendar Consulta
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-pink-500 transition-colors text-left">
                Início
              </button>
              <button onClick={() => scrollToSection('sobre')} className="text-gray-700 hover:text-pink-500 transition-colors text-left">
                Sobre
              </button>
              <button onClick={() => scrollToSection('especialidades')} className="text-gray-700 hover:text-pink-500 transition-colors text-left">
                Especialidades
              </button>
              <button onClick={() => scrollToSection('depoimentos')} className="text-gray-700 hover:text-pink-500 transition-colors text-left">
                Depoimentos
              </button>
              <a
                href="https://api.whatsapp.com/send?phone=553599353010&text=Olá%2C%20tudo%20bem%3F%20Quero%20agendar%20uma%20consulta%20para%20meu%20filho(a)%20com%20a%20Dra.%20Eliana%20Cintra.%20Poderia%20me%20informar%20os%20horários%20disponíveis%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all text-center inline-block w-full"
              >
                Agendar Consulta
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
