import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Brain, Calendar, Zap, Shield, Users } from "lucide-react";

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ¿Por qué elegir{" "}
            <img 
              src="/mucama-logo-morado.png" 
              alt="Mucama Logo" 
              className="inline h-10 md:h-14 w-auto align-text-bottom -mb-1"
            />
            ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Gestión de ropa blanca sin estrés, todo en un lugar, fácil de usar desde cualquier dispositivo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-6">
          <Card className="text-center hover:shadow-xl transition-shadow">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Vista clara del hotel</h3>
              <p className="text-gray-600">
                Visualiza todas las habitaciones y su estado de ropa blanca organizadas por piso. 
                Entiende el estado de todo el hotel de un vistazo.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-xl transition-shadow">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Control inteligente</h3>
              <p className="text-gray-600">
                Sistema intuitivo que aprende de tu hotel y sugiere 
                optimizaciones para reducir pérdidas y mejorar la eficiencia del equipo.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-xl transition-shadow">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Estados en tiempo real</h3>
              <p className="text-gray-600">
                Actualiza el estado de la ropa al instante. Marca como sucia, limpia o en lavandería.
                Todo el equipo ve los cambios automáticamente.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-xl transition-shadow">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Gestión sin estrés</h3>
              <p className="text-gray-600">
                Olvídate de listas en papel y confusiones. Mucama organiza todo digitalmente
                para que sepas exactamente qué necesitas en cada momento.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-xl transition-shadow">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Control de pérdidas</h3>
              <p className="text-gray-600">
                Rastrea cada prenda y identifica patrones de pérdida. 
                Reportes automáticos te ayudan a reducir costos y mejorar la operación.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-xl transition-shadow">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Trabajo en equipo</h3>
              <p className="text-gray-600">
                Coordina mucamas, supervisores y lavandería. Todos ven las mismas actualizaciones
                y pueden comunicarse sobre el estado de cada habitación.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Estadísticas */}
        <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-500 mb-2">95%</div>
              <div className="text-gray-600">Menos pérdidas de ropa</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-500 mb-2">50%</div>
              <div className="text-gray-600">Más eficiencia en limpieza</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-500 mb-2">200+</div>
              <div className="text-gray-600">Hoteles ya optimizados</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
