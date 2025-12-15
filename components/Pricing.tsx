import React from 'react';
import Section from './Section';
import Button from './Button';
import { Check, ShieldCheck } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <Section bg="brand" id="pricing" className="text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full mix-blend-overlay blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-300 rounded-full mix-blend-overlay blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
          Sua Transformação Começa Agora
        </h2>
        <p className="text-brand-100 text-xl mb-12">
          Todo o conhecimento que você precisa para se vestir bem todos os dias, pelo preço de um café e um lanche.
        </p>

        <div className="bg-white text-dark-900 rounded-3xl shadow-2xl overflow-hidden max-w-lg mx-auto transform transition-all hover:scale-105 duration-300">
          <div className="bg-gray-100 p-4 text-sm text-gray-500 font-bold uppercase tracking-wider">
            Oferta Especial
          </div>
          <div className="p-8 md:p-12">
            <div className="flex justify-center items-center gap-2 mb-4">
              <span className="text-gray-400 line-through text-lg">R$ 97,00</span>
              <span className="bg-brand-100 text-brand-700 px-3 py-1 rounded-full text-xs font-bold">60% OFF</span>
            </div>
            <div className="flex justify-center items-baseline mb-8">
              <span className="text-2xl text-gray-600 align-top mr-1">R$</span>
              <span className="text-6xl md:text-7xl font-bold text-brand-600">37</span>
              <span className="text-xl text-gray-600">,00</span>
            </div>
            
            <div className="space-y-4 mb-8 text-left">
              {[
                "Aula Completa: Planejamento de Looks",
                "Técnica de Meditação e Autoestima",
                "Rotina prática de 5 minutos",
                "Acesso imediato e vitalício",
                "Bônus: Guia de peças essenciais"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="bg-green-100 p-1 rounded-full">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Button fullWidth className="text-lg">
              QUERO ME SENTIR ELEGANTE
            </Button>
            <p className="text-xs text-gray-400 mt-4">Pagamento único. Acesso imediato.</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4">
           <div className="flex items-center gap-3 bg-brand-700/30 p-4 rounded-xl backdrop-blur-sm border border-brand-500/30">
              <ShieldCheck className="w-10 h-10 text-brand-200" />
              <div className="text-left">
                <h4 className="font-bold text-lg">Garantia de 7 Dias</h4>
                <p className="text-brand-100 text-sm">Se você não amar, eu devolvo 100% do seu dinheiro.</p>
              </div>
           </div>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;