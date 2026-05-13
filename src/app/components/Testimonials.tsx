import { Star, Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const testimonials = [
  {
    name: 'OHara Sofia',
    role: 'Mãe da Eva, 2 anos',
    content: 'Dra. Eliana é simplesmente maravilhosa! Ela acompanha minha filha desde o nascimento. Ela conquistou a confiança da Eva desde a primeira consulta. Atenciosa, carinhosa e extremamente competente.',
    rating: 5
  },
  {
    name: 'Juliana Santos',
    role: 'Mãe da Sofia, 1 ano',
    content: 'Encontrei na Dra. Eliana não só uma pediatra, mas uma parceira no cuidado da minha filha. Ela esclarece todas as minhas dúvidas com paciência e sempre está disponível quando precisamos.',
    rating: 5
  },
  {
    name: 'Mariana Oliveira',
    role: 'Mãe do Pedro, 5 anos',
    content: 'Acompanho meu filho com a Dra. Eliana desde que ele nasceu. É uma profissional dedicada que trata cada criança com muito amor. Recomendo de olhos fechados!',
    rating: 5
  }
  
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-pink-500 mb-2">Depoimentos</p>
          <h3 className="text-3xl md:text-4xl mb-4 text-gray-900">
            O que as mães dizem sobre nós
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A confiança das famílias é nosso maior reconhecimento
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg relative">
              <Quote className="absolute top-6 right-6 w-12 h-12 text-pink-100" />
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-xl overflow-hidden">
              <ImageWithFallback
                src="/images/DraEliana1.jpg"
                alt="Bebê sorridente"
                className="w-full h-64 object-cover"
              />
            </div>
            <div>
              <h4 className="text-2xl md:text-3xl mb-4 text-gray-900">
                Quer fazer parte dessa família?
              </h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Agende sua primeira consulta e descubra como podemos cuidar da saúde do seu filho com dedicação e carinho.
              </p>
              <a
                href="https://api.whatsapp.com/send?phone=553599353010&text=Olá%2C%20tudo%20bem%3F%20Quero%20agendar%20uma%20consulta%20para%20meu%20filho(a)%20com%20a%20Dra.%20Eliana%20Cintra.%20Poderia%20me%20informar%20os%20horários%20disponíveis%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all inline-block text-center"
              >
                Agendar Primeira Consulta
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
