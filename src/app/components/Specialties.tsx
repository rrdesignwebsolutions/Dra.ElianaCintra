import { Baby, Heart, Syringe, Activity, Stethoscope, Thermometer } from 'lucide-react';

const specialties = [
  {
    icon: Baby,
    title: 'Puericultura',
    description: 'Acompanhamento completo do crescimento e desenvolvimento do seu bebê',
    color: 'from-pink-400 to-pink-600'
  },
  {
    icon: Syringe,
    title: 'Vacinação',
    description: 'Calendário vacinal atualizado e orientação sobre imunização',
    color: 'from-purple-400 to-purple-600'
  },
  {
    icon: Activity,
    title: 'Consultas de Rotina',
    description: 'Avaliação periódica da saúde e prevenção de doenças',
    color: 'from-blue-400 to-blue-600'
  },
  {
    icon: Stethoscope,
    title: 'Doenças Respiratórias',
    description: 'Tratamento especializado para asma, bronquite e outras condições',
    color: 'from-green-400 to-green-600'
  },
  {
    icon: Heart,
    title: 'Orientação Nutricional',
    description: 'Acompanhamento nutricional para todas as fases da infância',
    color: 'from-orange-400 to-orange-600'
  },
  {
    icon: Thermometer,
    title: 'Urgências Pediátricas',
    description: 'Atendimento ágil para situações que necessitam cuidado imediato',
    color: 'from-red-400 to-red-600'
  }
];

export function Specialties() {
  return (
    <section id="especialidades" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-pink-500 mb-2">Especialidades</p>
          <h3 className="text-3xl md:text-4xl mb-4 text-gray-900">
            Atendimento completo para seu filho
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma ampla gama de serviços pediátricos para garantir a saúde e o bem-estar do seu pequeno em todas as etapas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => {
            const Icon = specialty.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${specialty.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl mb-3 text-gray-900">{specialty.title}</h4>
                <p className="text-gray-600 leading-relaxed">{specialty.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
