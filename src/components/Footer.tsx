import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 px-6">
      <Card className="gradient-blue-light text-gray-900 overflow-hidden rounded-3xl shadow-xl border-8 border-purple-200 max-w-6xl mx-auto">
        <CardContent className="p-0">
          <div className="max-w-3xl mx-auto px-6 py-12">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-2">
                <img 
                  src="/mucama-logo-morado.png" 
                  alt="Mucama Logo" 
                  className="h-8 w-auto"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gray-600" />
                <span className="text-gray-600 text-sm">hola@mucama.cl</span>
              </div>
            </div>

            <div className="border-t border-purple-200 pt-8 flex flex-col md:flex-row items-center justify-between">
              <p className="text-gray-600 text-sm">
                © 2025 Mucama. Todos los derechos reservados.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-600 hover:text-purple-500 transition-colors text-sm">Privacidad</a>
                <a href="#" className="text-gray-600 hover:text-purple-500 transition-colors text-sm">Términos</a>
                <a href="#" className="text-gray-600 hover:text-purple-500 transition-colors text-sm">Soporte</a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </footer>
  );
};

export default Footer;
