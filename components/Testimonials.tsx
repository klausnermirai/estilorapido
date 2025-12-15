import React from 'react';
import Section from './Section';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const cases = [
    {
      name: "Mariana S.",
      age: "34 anos",
      quote: "Eu me sentia invisível no trabalho. Depois de aplicar o método de 5 minutos, recebi dois elogios na mesma semana. Minha postura mudou!",
      img: "https://picsum.photos/100/100?random=10"
    },
    {
      name: "Carla D.",
      age: "41 anos",
      quote: "Sempre achei que precisava ser rica para ser elegante. O curso me mostrou que é tudo questão de planejamento e cuidado. Me sinto linda.",
      img: "https://picsum.photos/100/100?random=11"
    },
    {
      name: "Fernanda L.",
      age: "29 anos",
      quote: "A parte da meditação rápida antes de me vestir mudou meu humor. Saio de casa calma e confiante, não mais estressada.",
      img: "https://picsum.photos/100/100?random=12"
    }
  ];

  return (
    <Section bg="white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark-900 mb-4">
          Quem aplicou, se transformou
        </h2>
        <p className="text-gray-600">Veja o que minhas alunas estão dizendo sobre o método.</p>
      </div>

      {/* Before and After Logic Presentation */}
      <div className="bg-brand-50 rounded-3xl p-8 mb-16">
         <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-right space-y-2 opacity-60">
                <h3 className="font-bold text-xl text-gray-500">ANTES</h3>
                <p className="text-gray-500">"Acordava atrasada"</p>
                <p className="text-gray-500">"Pegava a primeira roupa amassada"</p>
                <p className="text-gray-500">"Sentia-se feia ao se olhar no espelho"</p>
                <p className="text-gray-500">"Dia improdutivo e inseguro"</p>
            </div>
            <div className="hidden md:block w-px h-full bg-brand-200 mx-auto"></div>
            <div className="text-center md:text-left space-y-2">
                <h3 className="font-bold text-xl text-brand-600">DEPOIS DO MÉTODO</h3>
                <p className="text-dark-900 font-medium">✨ 5 min de conexão com você mesma</p>
                <p className="text-dark-900 font-medium">✨ Look planejado e impecável</p>
                <p className="text-dark-900 font-medium">✨ Sorriso no rosto ao se ver</p>
                <p className="text-dark-900 font-medium">✨ Confiança inabalável o dia todo</p>
            </div>
         </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {cases.map((c, idx) => (
          <div key={idx} className="bg-white border border-gray-100 p-6 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
            <Quote className="w-8 h-8 text-brand-200 mb-4 fill-brand-100" />
            <p className="text-gray-700 italic mb-6">"{c.quote}"</p>
            <div className="flex items-center gap-3">
              <img src={c.img} alt={c.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-brand-100" />
              <div>
                <p className="font-bold text-dark-900">{c.name}</p>
                <p className="text-xs text-gray-500">{c.age}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;