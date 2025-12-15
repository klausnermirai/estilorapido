import React from 'react';
import Button from './Button';
import { ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-gradient-to-br from-brand-50 via-white to-brand-100 min-h-screen flex items-center pt-10 pb-20">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Copy Side */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-100 rounded-full text-brand-800 text-sm font-semibold mb-6">
              <Star className="w-4 h-4 fill-brand-600 text-brand-600" />
              <span>Método Exclusivo & Comprovado</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-dark-900 leading-tight mb-6">
              Sinta-se <span className="text-brand-600 italic">Elegante</span> e <span className="text-brand-600 italic">Confiante</span> Todos os Dias em Apenas 5 Minutos
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              Pare de olhar para o guarda-roupa cheio e sentir que "não tem nada para vestir". Descubra o passo a passo prático para blindar sua autoestima e planejar looks incríveis, mesmo com a rotina corrida.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button onClick={scrollToPricing} className="animate-pulse">
                SIM! Quero Transformar Meu Estilo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            
            <p className="mt-4 text-sm text-gray-500">
              *Oferta exclusiva por tempo limitado.
            </p>
          </div>

          {/* Visual Side */}
          <div className="lg:w-1/2 w-full">
            <div className="relative">
              {/* Decorative blob */}
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-brand-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              
              {/* Image Card */}
              <div className="relative bg-white p-4 rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://picsum.photos/600/700?random=1" 
                  alt="Mulher confiante e elegante se olhando no espelho" 
                  className="rounded-xl w-full h-auto object-cover aspect-[4/5]"
                />
                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                  <p className="font-serif italic text-brand-800 text-lg">"Não é sobre ter muitas roupas, é sobre saber usar o que você tem."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;