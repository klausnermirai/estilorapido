import React from 'react';
import Section from './Section';
import { Clock, Frown, HelpCircle } from 'lucide-react';

const PainPoints: React.FC = () => {
  return (
    <Section bg="white">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark-900 mb-6">
          Você se identifica com isso?
        </h2>
        <p className="text-gray-600 text-lg">
          Muitas mulheres incríveis perdem o brilho no dia a dia por motivos simples, mas dolorosos.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <Clock className="w-12 h-12 text-brand-600" />,
            title: "Sem Tempo para Nada",
            text: "Você corre o dia todo cuidando do trabalho, da casa, da família e, quando sobra um minuto, está exausta demais para pensar em si mesma."
          },
          {
            icon: <HelpCircle className="w-12 h-12 text-brand-600" />,
            title: "O Dilema do Guarda-Roupa",
            text: "Você abre o armário, vê um monte de roupas, mas sente que nada combina. Acaba saindo sempre com a mesma roupa 'básica' e sem graça."
          },
          {
            icon: <Frown className="w-12 h-12 text-brand-600" />,
            title: "Baixa Autoestima",
            text: "Ao se olhar no espelho, você não reconhece a mulher potente que existe aí dentro. Sente-se desleixada ou menos elegante que as outras."
          }
        ].map((item, idx) => (
          <div key={idx} className="bg-brand-50 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow border border-brand-100">
            <div className="flex justify-center mb-6">{item.icon}</div>
            <h3 className="text-xl font-bold text-brand-900 mb-4">{item.title}</h3>
            <p className="text-gray-700 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-2xl font-serif italic text-dark-800">
          A culpa não é sua. Falta apenas um <span className="text-brand-600 font-bold border-b-2 border-brand-300">método prático</span>.
        </p>
      </div>
    </Section>
  );
};

export default PainPoints;