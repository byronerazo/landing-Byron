import React, { useState } from 'react';
import {
  Rocket,
  Store,
  Award,
  Lightbulb,
  Network,
  Filter,
  Globe,
  MessageCircle,
  Server,
  CheckCircle2,
  GraduationCap,
  Brain,
  Box,
  ArrowRight,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0510] text-white font-sans selection:bg-fuchsia-500/30">
      <Navbar />
      <main>
        <Hero />
        <TargetAudience />
        <Ecosystem />
        <Services />
        <DigitalEra />
        <SuccessRoute />
        <About />
        <FAQ />
        <BottomCTA />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0b0510]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold tracking-tight">Byron Erazo</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Mentoría</a>
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Cursos</a>
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Blog</a>
            </div>
          </div>
          
          <div className="hidden md:block">
            <a href="https://go.hotmart.com/G104692319F" className="bg-transparent border border-white/20 hover:bg-white/5 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all animate-soft-pulse">
              Míranos en Vivo
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#150a1f] border-b border-white/5">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Mentoría</a>
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Cursos</a>
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Blog</a>
            <a href="https://go.hotmart.com/G104692319F" className="w-full text-left mt-4 bg-transparent border border-white/20 hover:bg-white/5 text-white px-3 py-2 rounded-md text-base font-medium transition-all animate-soft-pulse">
              Míranos en Vivo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Content & Form */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-400 text-xs font-semibold tracking-wide uppercase mb-6">
              Automatización con IA
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
              Convierte tu <br/> conocimiento en <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-orange-400">ingresos online</span> <br/>
              automáticos
            </h1>
            
            <p className="text-lg text-gray-400 mb-10 max-w-lg leading-relaxed">
              Te ayudo a crear tu producto digital, tu landing page y tu sistema de ventas automatizado con WhatsApp e inteligencia artificial para que vendas 24/7.
            </p>

            {/* Form Card */}
            <div className="bg-[#150a1f]/80 backdrop-blur-sm border border-[#2d1b4e] rounded-3xl p-6 md:p-8 shadow-2xl">
              <div data-active id="whatapp-people-widget-e12ce1cd-db44-4955-b9a4-423c11f609fe"></div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative lg:ml-10">
            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl shadow-fuchsia-900/20 aspect-[4/5] lg:aspect-auto lg:h-[700px]">
              <img 
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop" 
                alt="AI Automation Concept" 
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0510] via-transparent to-transparent opacity-60"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function TargetAudience() {
  const audiences = [
    {
      icon: <Rocket className="w-8 h-8 text-fuchsia-500" />,
      title: "Emprendedores",
      desc: "Personas que quieren lanzar su primer negocio digital con bases sólidas."
    },
    {
      icon: <Store className="w-8 h-8 text-orange-400" />,
      title: "Negocios Locales",
      desc: "Empresas que necesitan digitalizar sus ventas y atraer clientes locales."
    },
    {
      icon: <Award className="w-8 h-8 text-purple-400" />,
      title: "Profesionales",
      desc: "Independientes que desean vender su experiencia de forma automática."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
      title: "Infoproductores",
      desc: "Expertos buscando escalar sus cursos y mentorías mediante embudos."
    }
  ];

  return (
    <section className="py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          ¿A quién ayudo?
          <div className="h-1 w-24 bg-gradient-to-r from-fuchsia-500 to-orange-400 mt-4 rounded-full"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((item, idx) => (
            <div key={idx} className="bg-[#150a1f] border border-[#2d1b4e] rounded-3xl p-8 hover:border-fuchsia-500/50 transition-colors group">
              <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Ecosystem() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Tu ecosistema de <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-orange-400">ventas 360º</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Comunidad & Landing */}
          <div className="md:col-span-2 bg-[#150a1f] border border-[#2d1b4e] rounded-[2rem] p-10 flex flex-col justify-center min-h-[300px] relative overflow-hidden group hover:border-fuchsia-500/30 transition-colors">
            <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-500/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="relative z-10">
              <span className="text-xs font-bold tracking-widest text-fuchsia-500 uppercase mb-4 block">Fase 01</span>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Comunidad & Landing</h3>
              <p className="text-gray-400 max-w-md text-lg">
                Creamos la base de tu presencia digital con una landing page optimizada para la conversión masiva.
              </p>
            </div>
          </div>

          {/* Card 2: Automatización */}
          <div className="md:col-span-1 bg-[#150a1f] border border-[#2d1b4e] rounded-[2rem] p-10 flex flex-col justify-center min-h-[300px] hover:border-fuchsia-500/30 transition-colors">
            <Network className="w-10 h-10 text-fuchsia-500 mb-6 opacity-80" />
            <h3 className="text-2xl font-bold mb-3">Automatización</h3>
            <p className="text-gray-400 text-sm">
              Bots inteligentes que atienden a tus clientes mientras tú descansas.
            </p>
          </div>

          {/* Card 3: Embudo Pro */}
          <div className="md:col-span-1 bg-[#150a1f] border border-[#2d1b4e] rounded-[2rem] p-10 flex flex-col justify-center min-h-[300px] hover:border-orange-400/30 transition-colors">
            <Filter className="w-10 h-10 text-orange-400 mb-6 opacity-80" />
            <h3 className="text-2xl font-bold mb-3">Embudo Pro</h3>
            <p className="text-gray-400 text-sm">
              Un camino predecible para convertir extraños en clientes fieles.
            </p>
          </div>

          {/* Card 4: Ventas Recurrentes */}
          <div className="md:col-span-2 bg-gradient-to-br from-fuchsia-600 to-orange-500 rounded-[2rem] p-10 flex flex-col justify-center min-h-[300px] relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 text-[180px] font-black text-white/10 leading-none select-none pointer-events-none">
              payments
            </div>
            <div className="relative z-10">
              <span className="text-xs font-bold tracking-widest text-white/80 uppercase mb-4 block">Resultado Final</span>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ventas Recurrentes</h3>
              <p className="text-white/90 max-w-md text-lg">
                El sistema trabaja para ti, entregando valor y cerrando tratos 24/7 de forma automática.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: <Globe className="w-6 h-6 text-fuchsia-400" />,
      title: "Landing Pages",
      desc: "Diseños UX/UI enfocados en guiar al usuario hacia la acción, optimizados para velocidad y SEO.",
      features: ["Copywriting persuasivo", "Diseño responsive"]
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-orange-400" />,
      title: "WhatsApp Automation",
      desc: "Configuración de chatbots con IA para responder preguntas frecuentes y calificar leads.",
      features: ["Integración GPT-4", "Secuencias de seguimiento"]
    },
    {
      icon: <Server className="w-6 h-6 text-purple-400" />,
      title: "Hosting & CRM",
      desc: "Infraestructura robusta para que tu negocio nunca se detenga y gestiones tus contactos.",
      features: ["Servidores high-speed", "Dashboard de clientes"]
    }
  ];

  return (
    <section className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Servicios Especializados</h2>
            <p className="text-gray-400 text-lg">Soluciones técnicas con enfoque en marketing de alta conversión.</p>
          </div>
          <a href="#" className="text-fuchsia-400 text-sm font-bold tracking-wider uppercase hover:text-fuchsia-300 transition-colors flex items-center gap-2">
            Ver todos los servicios <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((srv, idx) => (
            <div key={idx} className="bg-[#150a1f] border border-[#2d1b4e] rounded-3xl p-8 flex flex-col h-full">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                {srv.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{srv.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">{srv.desc}</p>
              
              <ul className="space-y-3">
                {srv.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-xs font-medium text-gray-300 uppercase tracking-wide">
                    <CheckCircle2 className="w-4 h-4 text-fuchsia-500" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DigitalEra() {
  return (
    <section className="py-32 relative overflow-hidden border-t border-white/5">
      {/* Faint background image/gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-fuchsia-900/10 via-[#0b0510] to-[#0b0510] -z-10"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-orange-400 text-xs font-bold tracking-[0.2em] uppercase mb-6 block">Universidad.Online</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
          Domina la <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-orange-400">era digital</span> con nosotros
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          No solo creamos tus sistemas, también te enseñamos a operarlos. Aprende sobre Hotmart, Creación de Productos Digitales e Inteligencia Artificial aplicada.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2 bg-[#150a1f] border border-[#2d1b4e] rounded-full px-6 py-3">
            <GraduationCap className="w-5 h-5 text-fuchsia-400" />
            <span className="text-sm font-medium">Estrategias Hotmart</span>
          </div>
          <div className="flex items-center gap-2 bg-[#150a1f] border border-[#2d1b4e] rounded-full px-6 py-3">
            <Brain className="w-5 h-5 text-orange-400" />
            <span className="text-sm font-medium">AI para Negocios</span>
          </div>
          <div className="flex items-center gap-2 bg-[#150a1f] border border-[#2d1b4e] rounded-full px-6 py-3">
            <Box className="w-5 h-5 text-purple-400" />
            <span className="text-sm font-medium">Creación de Infoproductos</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function SuccessRoute() {
  const steps = [
    { num: "1", title: "Aprendes", desc: "Entendemos tu negocio y te capacitamos en los pilares fundamentales." },
    { num: "2", title: "Creamos", desc: "Diseñamos tu landing page y arquitectura de ventas personalizada." },
    { num: "3", title: "Automatizamos", desc: "Conectamos la IA y los bots de WhatsApp para operar sin ti." },
    { num: "4", title: "Vendes", desc: "Lanzamos el sistema y empiezas a recibir leads y ventas reales." }
  ];

  return (
    <section className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">Tu ruta al éxito en 4 pasos</h2>
        
        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-6 left-0 w-full h-[1px] bg-[#2d1b4e] -z-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-fuchsia-500 to-orange-400 flex items-center justify-center text-xl font-bold mb-6 shadow-lg shadow-fuchsia-500/20">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="py-24 border-t border-white/5 bg-[#110818]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#1a1325]">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" 
                alt="Byron Erazo" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-fuchsia-500/20 rounded-full blur-2xl -z-10"></div>
          </div>

          {/* Content */}
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-fuchsia-400 uppercase mb-4 block">El mentor detrás de la máquina</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Soy Byron Erazo</h2>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-10">
              <p>
                He pasado años perfeccionando el arte de la automatización digital. Mi misión es simple: <strong className="text-white font-semibold">liberar tu tiempo mientras multiplicas tus ingresos.</strong>
              </p>
              <p>
                No creo en soluciones mágicas, creo en sistemas probados. He ayudado a cientos de profesionales a dar el salto del caos manual a la libertad automática usando herramientas de vanguardia.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-white mb-1">500+</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Alumnos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">5+</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Años Exp.</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">24/7</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Soporte</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "¿Necesito conocimientos técnicos previos?",
      a: "No. Mi sistema está diseñado para que yo me encargue de la parte compleja o te enseñe paso a paso cómo hacerlo sin que tengas que programar una sola línea de código."
    },
    {
      q: "¿En cuánto tiempo veré resultados?",
      a: "Normalmente, nuestros sistemas están listos en 15 a 21 días. Los resultados de ventas dependen de tu tráfico, pero la automatización es inmediata tras el lanzamiento."
    },
    {
      q: "¿Cuál es el costo de la inversión?",
      a: "Tenemos diferentes planes que se ajustan a etapas de negocio: desde emprendedores iniciales hasta empresas consolidadas. Solicita una asesoría para darte un presupuesto exacto."
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 border-t border-white/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border border-[#2d1b4e] rounded-2xl overflow-hidden transition-colors ${openIdx === idx ? 'bg-[#150a1f]' : 'bg-transparent hover:bg-[#150a1f]/50'}`}
            >
              <button 
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <span className="font-semibold text-lg">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-fuchsia-400 transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`} />
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIdx === idx ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BottomCTA() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#150a1f] border border-[#2d1b4e] rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden">
          {/* Glow effects */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-2xl bg-gradient-to-b from-fuchsia-500/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              ¿Listo para <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-orange-400">automatizar</span> <br/> tu éxito?
            </h2>
            <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              No dejes que otro día pase con ventas manuales. Únete hoy a Byron Erazo y transforma tu negocio.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <div data-active id="whatapp-people-widget-e12ce1cd-db44-4955-b9a4-423c11f609fe"></div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0b0510] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <span className="text-2xl font-bold tracking-tight mb-2 block">Byron Erazo</span>
            <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Sistemas de Venta Automáticos</p>
          </div>
          
          <div>
            <h4 className="text-xs font-bold text-fuchsia-500 uppercase tracking-widest mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacidad</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Términos</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-4">Comunidad</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Contacto</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Afiliados</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600 uppercase tracking-widest">
            © {new Date().getFullYear()} Byron Erazo.
          </p>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFAB() {
  return (
    <a 
      href="https://wa.me/593998222869" 
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-lg shadow-[#25D366]/30 transition-transform hover:scale-110 flex items-center justify-center"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
