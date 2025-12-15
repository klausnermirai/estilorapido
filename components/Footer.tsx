import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h3 className="font-serif text-2xl font-bold mb-4">Estilo em 5 Minutos</h3>
        <p className="text-gray-400 text-sm mb-8 max-w-md mx-auto">
          Um produto dedicado a fazer mulheres reais se sentirem extraordinárias através do autocuidado e do estilo prático.
        </p>
        <div className="flex justify-center gap-6 text-sm text-gray-500">
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Contato</a>
        </div>
        <p className="mt-8 text-xs text-gray-600">
          © {new Date().getFullYear()} Estilo em 5 Minutos. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;