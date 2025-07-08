import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <div className="text-6xl font-bold text-gray-300 mb-4">404</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Página no encontrada</h1>
          <p className="text-gray-600 mb-8">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
        </div>
        
        <div className="space-y-4">
          <Button className="gradient-blue text-white border-0 hover:opacity-90 group">
            <Home className="mr-2 h-4 w-4" />
            Ir al inicio
          </Button>
          
          <div>
            <a href="/" className="text-purple-500 hover:text-purple-700 underline">
              <ArrowLeft className="inline mr-1 h-4 w-4" />
              Volver atrás
        </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
