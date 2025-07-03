import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Map, Calendar, CheckCircle } from "lucide-react";

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <Card className="w-full max-w-xs mx-auto bg-white rounded-2xl shadow-lg border border-purple-100 flex flex-col items-center p-6 mb-6">
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 mb-4">
      {icon}
    </div>
    <h3 className="font-bold text-lg mb-2 text-gray-900">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
  </Card>
);

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Cómo <span className="text-purple-500">funciona</span>{" "}
            <img 
              src="/mucama-logo.png" 
              alt="Mucama Logo" 
              className="inline h-10 md:h-14 w-auto align-text-bottom -mb-1"
            />
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Gestión de ropa blanca reimaginada: simple, visual e inteligente
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Tarjetas laterales izquierda */}
          <div className="flex flex-col gap-6">
            <FeatureCard
              icon={<MessageSquare className="w-6 h-6 text-purple-400" />}
              title="Registro Rápido"
              description="Selecciona habitaciones para registrar el estado de la ropa blanca en segundos."
            />
            <FeatureCard
              icon={<Calendar className="w-6 h-6 text-purple-400" />}
              title="Gestiona Inventario"
              description="Controla cuánta ropa tienes disponible y programa lavados."
            />
          </div>

          {/* Mockup iPhone central (solo imagen) */}
          <div className="relative flex-shrink-0 flex items-center justify-center" style={{ minWidth: 320, minHeight: 660 }}>
            <img
              src="/iphone-mockup.png"
              alt="iPhone Mockup"
              className="block w-[320px] h-[660px] md:w-[360px] md:h-[744px] object-contain z-10 select-none pointer-events-none"
              draggable={false}
            />
          </div>

          {/* Tarjetas laterales derecha */}
          <div className="flex flex-col gap-6">
            <FeatureCard
              icon={<Map className="w-6 h-6 text-purple-400" />}
              title="Control Visual"
              description="Ve el estado de todas las habitaciones en tiempo real: limpia, sucia, en proceso."
            />
            <FeatureCard
              icon={<CheckCircle className="w-6 h-6 text-purple-400" />}
              title="Reportes Automáticos"
              description="Genera reportes de consumo, pérdidas y eficiencia para supervisores."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
