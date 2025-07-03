import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="relative z-50 pt-10 pb-4 px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/mucama-logo-morado.png" 
            alt="Mucama Logo" 
            className="h-8 md:h-8 w-auto"
          />
        </div>
        <Button 
          className="gradient-blue text-white border-0 hover:opacity-90 text-sm px-3 py-1.5 md:text-base md:px-6 md:py-3 font-medium"
          onClick={() => window.open('https://console.mucama.cl/', '_blank')}
        >
          Iniciar sesión
        </Button>
      </div>
    </header>
  );
};

export default Header;
