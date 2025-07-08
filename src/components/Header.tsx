import { Button } from "@/components/ui/button";

const Header = ({ embedDesktop = false }) => {
  return (
    <header className={`relative z-50 ${embedDesktop ? "pt-2 pb-2 px-3" : "pt-10 pb-4 px-12"}`}>
      <div className={`max-w-7xl mx-auto flex items-center justify-between ${embedDesktop ? "" : ""}`}>
        <div className="flex items-center">
          <img 
            src="/mucama-logo-morado.png" 
            alt="Mucama Logo" 
            className={`${embedDesktop ? "h-6 w-auto" : "h-8 md:h-8 w-auto"}`}
            style={embedDesktop ? {marginLeft: 0} : {}}
          />
        </div>
        <Button 
          className={`gradient-blue text-white border-0 hover:opacity-90 font-medium ${embedDesktop ? "text-xs px-2 py-1" : "text-sm px-3 py-1.5 md:text-base md:px-6 md:py-3"}`}
          style={embedDesktop ? {marginRight: 0} : {}}
          onClick={() => window.open('https://console.mucama.cl/', '_blank')}
        >
          Iniciar sesión
        </Button>
      </div>
    </header>
  );
};

export default Header;
