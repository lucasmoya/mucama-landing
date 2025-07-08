import { Button } from "@/components/ui/button";
import { Users, Rocket, Lock, Zap } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-10 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Empieza a controlar tu <span className="text-purple-500">ropa blanca</span>
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Únete a cientos de hoteles que ya gestionan de forma inteligente. 
          Tu asistente de ropa blanca está listo para ayudarte.
        </p>
        
        <div className="bg-gray-50 rounded-2xl p-4 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-6">
            <input 
              type="email" 
              placeholder="hotel@tudominio.com" 
              className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400 w-full sm:w-auto"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="outline" className="border-purple-300 text-purple-500 hover:bg-purple-50">
              <Users className="mr-2 h-5 w-5" />
              Unirse a lista de espera
            </Button>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 mt-6 text-gray-500 text-sm">
            <div className="flex items-center gap-2 mb-2 md:mb-0">
              <Rocket className="w-6 h-6 text-purple-400 inline" />
              <span>Prueba gratuita</span>
            </div>
            <span className="hidden md:inline mx-1">•</span>
            <div className="flex items-center gap-2 mb-2 md:mb-0">
              <Lock className="w-6 h-6 text-purple-400 inline" />
              <span>Sin tarjeta de crédito</span>
            </div>
            <span className="hidden md:inline mx-1">•</span>
            <div className="flex items-center gap-2">
              <Zap className="w-6 h-6 text-purple-400 inline" />
              <span>Configura tu hotel en minutos</span>
        </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
