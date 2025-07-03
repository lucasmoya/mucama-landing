import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play } from "lucide-react";
import Header from "@/components/Header";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex flex-col px-6 py-6 overflow-hidden">
      <div className="absolute inset-0 gradient-blue-light opacity-50 rounded-3xl mx-6 my-6 border-8 border-purple-200"></div>
      
      <div className="relative z-10">
        <Header />
      </div>
      
      <div className="relative z-10 flex-grow flex flex-col items-center justify-center">
        <div className="max-w-4xl mx-auto mt-20 md:mt-20 text-center px-2">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            Controla la ropa blanca
            <span className="block text-transparent bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text">
              de tu hotel fácilmente
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-8 max-w-2xl mx-auto">
            Sábanas, toallas y fundas organizadas visualmente. Control claro del estado de cada prenda 
            desde tu celular o cualquier dispositivo.
          </p>
          <img 
            src="/mucama-sf.png" 
            alt="Mucama Ilustración" 
            className="mx-auto w-auto max-w-xs md:max-w-lg max-h-[32vh] md:max-h-[50vh] mt-20 md:mt-4 pt-6 md:pt-12 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
