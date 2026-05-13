import { Clock, MapPin, Smile, HeartHandshake } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const differentials = [
  {
    icon: Clock,
    title: 'Horários Flexíveis',
    description: 'Atendimento adaptado à rotina da sua família'
  },
  {
    icon: MapPin,
    title: 'Localização Privilegiada',
    description: 'Consultório de fácil acesso'
  },
  {
    icon: Smile,
    title: 'Ambiente Lúdico',
    description: 'Espaço com brinquedos e ambiente acolhedor para as crianças'
  },
  {
    icon: HeartHandshake,
    title: 'Atendimento Personalizado',
    description: 'Tempo dedicado para ouvir suas preocupações'
  }
];

export function Differentials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-pink-500 mb-2">Diferenciais</p>
            <h3 className="text-3xl md:text-4xl mb-6 text-gray-900">
              Por que escolher nosso consultório?
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Nosso compromisso é oferecer muito mais do que um atendimento médico. Criamos uma experiência completa de cuidado, onde cada detalhe é pensado para o conforto e bem-estar da sua família.
            </p>

            <div className="space-y-6">
              {differentials.map((differential, index) => {
                const Icon = differential.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-pink-500" />
                    </div>
                    <div>
                      <h4 className="text-lg text-gray-900 mb-1">{differential.title}</h4>
                      <p className="text-gray-600">{differential.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-pink-200 rounded-3xl transform -rotate-3"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="/public/images/Eli-paciente-mãe.jpg"
                alt="Consultório pediátrico"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
