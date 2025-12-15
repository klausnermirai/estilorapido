import React, { useState } from 'react';
import Section from './Section';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button 
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-bold text-dark-800">{question}</span>
        {isOpen ? <ChevronUp className="text-brand-600" /> : <ChevronDown className="text-gray-400" />}
      </button>
      {isOpen && (
        <div className="pb-6 text-gray-600 leading-relaxed animate-fade-in">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const questions = [
    {
      question: "Tenho pouco tempo, esse curso é para mim?",
      answer: "Com certeza! O método 'Estilo em 5 Minutos' foi criado EXATAMENTE para mulheres sem tempo. A aula tem apenas 1 hora de duração e ensina uma rotina prática para ser aplicada em 5 minutos diários."
    },
    {
      question: "Preciso comprar roupas novas para aplicar o método?",
      answer: "Não! O foco é ensinar você a planejar e usar melhor o que já tem no seu guarda-roupa, redescobrindo peças e combinações."
    },
    {
      question: "E se eu não gostar do curso?",
      answer: "Você tem 7 dias de garantia incondicional. Se assistir e sentir que não valeu a pena, basta enviar um e-mail e devolvemos 100% do seu investimento de R$ 37,00."
    },
    {
      question: "Como recebo o acesso?",
      answer: "Assim que o pagamento for confirmado, você receberá um e-mail com o link de acesso imediato à área de membros para assistir à aula quando quiser."
    }
  ];

  return (
    <Section bg="light">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-dark-900 mb-12">
          Perguntas Frequentes
        </h2>
        <div className="bg-white rounded-2xl shadow-sm px-8">
          {questions.map((q, idx) => (
            <FAQItem key={idx} {...q} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FAQ;