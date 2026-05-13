import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Award, Heart, Shield } from 'lucide-react';

export function Hero() {
  return (
    <section id="inicio" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6">
              <Award className="w-4 h-4 text-pink-500" />
              <span className="text-sm text-gray-700">+30 anos de experiência</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-gray-900">
              Cuidado especializado para o seu{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                pequeno tesouro
              </span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Atendimento pediátrico humanizado e de excelência, oferecendo todo o suporte que seu filho precisa em cada fase do desenvolvimento.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="https://api.whatsapp.com/send?phone=553599353010&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Quero%20agendar%20uma%20consulta%20para%20meu%20filho(a)%20com%20a%20Dra.%20Eliana%20Cintra.%20Poderia%20me%20informar%20os%20hor%C3%A1rios%20dispon%C3%ADveis%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
              >
                Agendar Consulta
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-pink-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Ambiente</p>
                  <p className="text-gray-900">Seguro e Acolhedor</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-purple-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Atendimento</p>
                  <p className="text-gray-900">Humanizado</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-400 rounded-3xl transform rotate-3"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="/images/Eli-ausculta.jpg"
                alt="Dra. Eliana Cintra"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}