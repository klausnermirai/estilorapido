import React from 'react';
import Section from './Section';
import { CheckCircle2, Heart, Sparkles, UserCheck } from 'lucide-react';

const Solution: React.FC = () => {
  return (
    <Section bg="light" id="sobre">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
           <div className="relative">
              <img 
                src="https://picsum.photos/600/600?random=2" 
                alt="Planejamento de look tranquilo" 
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg max-w-xs border-l-4 border-brand-500">
                <p className="text-brand-900 font-bold text-lg">"5 minutos que mudam as outras 23 horas e 55 minutos do seu dia."</p>
              </div>
           </div>
        </div>

        <div className="lg:w-1/2">
          <h2 className="text-sm font-bold tracking-widest text-brand-600 uppercase mb-2">A Solução Definitiva</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-dark-900 mb-6">
            Apresentando: <span className="text-brand-600">Estilo em 5 Minutos</span>
          </h3>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Um workshop prático de 1 hora, direto ao ponto, onde eu ensino você a retomar o controle da sua imagem e da sua autoestima. Não é sobre comprar roupas novas, é sobre um ritual diário de amor próprio.
          </p>
          
          <ul className="space-y-4">
            {[
              "Ritual de Meditação Express: Um momento de conexão para acalmar a mente antes de começar o dia.",
              "Planejamento de Looks: A técnica exata para montar combinações elegantes sem pensar muito.",
              "Guia de Autocuidado: Pequenos gestos diários que elevam sua percepção de beleza.",
              "Confiança Imediata: Saia de casa sentindo-se pronta para qualquer desafio."
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-brand-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Three Pillars */}
      <div className="mt-20 grid md:grid-cols-3 gap-8">
         <div className="bg-white p-8 rounded-xl shadow-sm text-center">
            <Heart className="w-10 h-10 text-brand-400 mx-auto mb-4" />
            <h4 className="font-serif font-bold text-xl mb-2">Conexão Interior</h4>
            <p className="text-gray-600 text-sm">Resgate sua essência e aprenda a se olhar com carinho antes de se vestir.</p>
         </div>
         <div className="bg-white p-8 rounded-xl shadow-sm text-center transform md:-translate-y-4 border-t-4 border-brand-500">
            <Sparkles className="w-10 h-10 text-brand-600 mx-auto mb-4" />
            <h4 className="font-serif font-bold text-xl mb-2">Praticidade Absoluta</h4>
            <p className="text-gray-600 text-sm">Técnicas reais para quem não tem tempo a perder, mas não abre mão da elegância.</p>
         </div>
         <div className="bg-white p-8 rounded-xl shadow-sm text-center">
            <UserCheck className="w-10 h-10 text-brand-400 mx-auto mb-4" />
            <h4 className="font-serif font-bold text-xl mb-2">Imagem de Sucesso</h4>
            <p className="text-gray-600 text-sm">Transmita credibilidade e confiança através da sua imagem pessoal todos os dias.</p>
         </div>
      </div>
    </Section>
  );
};

export default Solution;