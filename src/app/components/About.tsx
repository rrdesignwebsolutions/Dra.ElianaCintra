import { ImageWithFallback } from './figma/ImageWithFallback';
import { GraduationCap, Stethoscope, Users, BookOpen } from 'lucide-react';

export function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="/images/Eli-brincando-paciente.jpg"
                alt="Mãe feliz com bebê"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-[200px]">
              <p className="text-3xl mb-1">10.000+</p>
              <p className="text-sm text-gray-600">Famílias atendidas com carinho</p>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <p className="text-pink-500 mb-2">Sobre a Doutora</p>
            <h3 className="text-3xl md:text-4xl mb-6 text-gray-900">
              Experiência e dedicação ao cuidado infantil
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Com mais de 30 anos de experiência em pediatria, dedico minha carreira ao cuidado integral das crianças, desde o nascimento até a adolescência. Acredito que cada criança é única e merece atenção personalizada.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Minha missão é proporcionar um atendimento humanizado, criando um ambiente acolhedor onde pais e filhos se sintam seguros e bem cuidados.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <p className="text-gray-900 mb-1">Pediatra e Neonatologista</p>
                  <p className="text-sm text-gray-500">Especialista em Aleitamento Materno e Humanização Neonatal</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Stethoscope className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <p className="text-gray-900 mb-1">Método Canguru</p>
                  <p className="text-sm text-gray-500">Experiência e Referência Nacional</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <p className="text-gray-900 mb-1">SBP</p>
                  <p className="text-sm text-gray-500">Membro ativo</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <p className="text-gray-900 mb-1">USP</p>
                  <p className="text-sm text-gray-500">Palestrante em Aleitamento
Materno e Neonatologia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
