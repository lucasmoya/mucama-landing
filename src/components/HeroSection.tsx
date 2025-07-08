import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play } from "lucide-react";
import Header from "@/components/Header";

function useEmbedDesktopScale() {
  const [embedDesktop, setEmbedDesktop] = useState(false);
  useEffect(() => {
    function check() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      // Consideramos "iframe horizontal" si es menos de 700px de ancho y menos de 500px de alto
      setEmbedDesktop(w < 700 && h < 500);
    }
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return embedDesktop;
}

const HeroSection = () => {
  const embedDesktop = useEmbedDesktopScale();
  return (
    <section
      className={`relative h-screen flex flex-col px-6 py-6 overflow-hidden ${embedDesktop ? "hero-embed-desktop" : ""}`}
      style={embedDesktop ? { width: "100vw", overflowX: "hidden" } : {}}
    >
      <div className="absolute inset-0 gradient-blue-light opacity-50 rounded-3xl mx-6 my-6 border-8 border-purple-200"></div>
      
      <div className="relative z-10">
        <Header embedDesktop={embedDesktop} />
      </div>
      
      <div className="relative z-10 flex-grow flex flex-col items-center justify-center">
        <div className={`mx-auto mt-20 text-center px-4 md:px-2 ${embedDesktop ? "max-w-4xl" : "max-w-md md:max-w-4xl"}`} style={embedDesktop ? { transform: "scale(0.95)", transformOrigin: "top center", marginTop: 0 } : {}}>
          { !embedDesktop && (
            <h1 className={`${embedDesktop ? "text-2xl" : "text-4xl md:text-6xl"} font-bold text-gray-900 mb-4 md:mb-6 leading-tight`}>
              Controla la ropa blanca
              <span className="block text-transparent bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text">
                de tu hotel fácilmente
              </span>
            </h1>
          )}
          { !embedDesktop && (
            <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-8 max-w-2xl mx-auto py-2 px-4">
              Sábanas, toallas y fundas organizadas visualmente. Control claro del estado de cada prenda 
              desde tu celular o cualquier dispositivo.
            </p>
          )}
          <img 
            src="/mucama-sf.png" 
            alt="Mucama Ilustración" 
            className={`mx-auto w-auto ${embedDesktop ? "max-w-xl max-h-[60vh] mt-2" : "max-w-sm md:max-w-lg max-h-[38vh] md:max-h-[50vh] mt-10 md:mt-4"} pt-6 md:pt-12 object-contain`}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
