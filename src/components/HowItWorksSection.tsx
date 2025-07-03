import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, Users, TrendingUp } from "lucide-react";

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            La diferencia <span className="text-purple-600">Mucama</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Proceso simplificado que transforma la gestión de ropa blanca en algo intuitivo y eficiente
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="w-16 h-16 gradient-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">1. Registro Simple</h3>
              <p className="text-gray-600 text-sm">
                Escanea QR o selecciona habitación. Marca estado: limpia, sucia, en lavandería
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="w-16 h-16 gradient-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">2. Sincronización</h3>
              <p className="text-gray-600 text-sm">
                Todos los cambios se reflejan en tiempo real. Equipo coordinado sin confusiones
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="w-16 h-16 gradient-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">3. Coordinación</h3>
              <p className="text-gray-600 text-sm">
                Mucamas, supervisores y lavandería trabajan con la misma información actualizada
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="w-16 h-16 gradient-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">4. Optimización</h3>
              <p className="text-gray-600 text-sm">
                Reportes automáticos te ayudan a reducir pérdidas y mejorar la eficiencia
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
