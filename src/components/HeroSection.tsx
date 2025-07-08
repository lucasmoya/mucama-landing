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
      setEmbedDesktop(w < 700 && w > h && w > 400);
    }
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return embedDesktop;
}

const HeroSection = () => {
  const embedDesktop = useEmbedDesktopScale();
  // Ajustes para el embed: escala, padding, fuentes, imagen
  const scale = embedDesktop ? 0.72 : 1;
  const heroStyle = embedDesktop
    ? {
        width: "100vw",
        minHeight: "100vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "none",
      }
    : {};
  const contentStyle = embedDesktop
    ? {
        transform: `scale(${scale})`,
        transformOrigin: "top center",
        maxWidth: 900,
        padding: 0,
        margin: 0,
      }
    : {};
  return (
    <section
      className={`relative h-screen flex flex-col px-2 md:px-6 py-4 md:py-6 overflow-hidden ${embedDesktop ? "hero-embed" : ""}`}
      style={heroStyle}
    >
      <div className="absolute inset-0 gradient-blue-light opacity-50 rounded-3xl mx-2 md:mx-6 my-2 md:my-6 border-8 border-purple-200"></div>
      <div className="relative z-10">
        <Header embedDesktop={embedDesktop} />
      </div>
      <div className="relative z-10 flex-grow flex flex-col items-center justify-center">
        <div
          className={`mx-auto mt-10 md:mt-20 text-center px-2 md:px-4 ${embedDesktop ? "max-w-4xl" : "max-w-md md:max-w-4xl"}`}
          style={contentStyle}
        >
          <h1 className={`font-bold text-gray-900 leading-tight mb-4 md:mb-6 ${embedDesktop ? "text-3xl" : "text-4xl md:text-6xl"}`}>
            Controla la ropa blanca
            <span className="block text-transparent bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text">
              de tu hotel fácilmente
            </span>
          </h1>
          <p className={`text-gray-600 mb-4 md:mb-8 max-w-2xl mx-auto py-2 px-2 ${embedDesktop ? "text-base" : "text-base md:text-lg"}`}>
            Sábanas, toallas y fundas organizadas visualmente. Control claro del estado de cada prenda 
            desde tu celular o cualquier dispositivo.
          </p>
          <img 
            src="/mucama-sf.png" 
            alt="Mucama Ilustración" 
            className={`mx-auto w-auto ${embedDesktop ? "max-w-[380px] max-h-[170px] mb-0 pb-0" : "max-w-sm md:max-w-lg max-h-[38vh] md:max-h-[50vh]"} ${embedDesktop ? "mt-8" : "mt-6 md:mt-4 pt-4 md:pt-12"} object-contain" style={embedDesktop ? {display: 'block', marginBottom: 0, paddingBottom: 0} : {}}`}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
