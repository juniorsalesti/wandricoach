import { motion, useScroll, useTransform, AnimatePresence, useMotionValueEvent } from "motion/react";
import { 
  Instagram, 
  ArrowUpRight, 
  Target, 
  Activity, 
  Zap, 
  Dumbbell, 
  CheckCircle2, 
  Menu,
  X,
  ChevronRight,
  ShieldCheck,
  Award
} from "lucide-react";
import { useEffect, useState, useRef } from "react";

const Navigation = ({ isMenuOpen, setIsMenuOpen }: { isMenuOpen: boolean, setIsMenuOpen: (v: boolean) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const links = [
    { label: "INDEX", href: "#home" },
    { label: "METHOD", href: "#method" },
    { label: "ELITE", href: "#elite" },
    { label: "INSIGHTS", href: "#insights" },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-[100] flex justify-between items-center px-8 md:px-12 py-6 md:py-8 transition-all duration-500 pointer-events-none ${
          isScrolled ? "bg-brand-dark/90 backdrop-blur-xl border-b border-white/5 py-4 md:py-5" : "bg-transparent py-8"
        }`}
      >
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="pointer-events-auto"
        >
          <a href="#home" className="font-display font-black text-2xl tracking-tighter">
            WANDRI<span className="text-brand-gold">LOPES</span>
          </a>
        </motion.div>

        <nav className="hidden lg:flex gap-12 pointer-events-auto">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="luxury-label hover:text-brand-gold transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-8 pointer-events-auto">
          <button className="luxury-label border border-white/20 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all">
            CONSULTORIA
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brand-dark z-[90] flex items-center justify-center p-12"
          >
            <div className="flex flex-col gap-8 text-center">
              {links.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-5xl font-display font-bold hover:text-brand-gold transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden border-b border-brand-line">
      {/* Background Layer */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/20 via-brand-dark/60 to-brand-dark z-10" />
        <img 
          src="https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&q=80&w=2000" 
          alt="High Performance Background"
          className="w-full h-full object-cover grayscale brightness-[0.3]"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Vertical Rails */}
      <div className="absolute inset-y-0 left-12 hidden lg:flex flex-col justify-between py-24 z-20">
        <span className="luxury-label [writing-mode:vertical-rl] rotate-180">ESTRATEGISTA</span>
        <div className="w-px h-32 bg-brand-gold/30 mx-auto" />
        <span className="luxury-label [writing-mode:vertical-rl] rotate-180">WANDRI LOPES</span>
      </div>
      
      <div className="absolute inset-y-0 right-12 hidden lg:flex flex-col justify-between py-24 z-20">
        <span className="luxury-label [writing-mode:vertical-rl]">ONLINE COACHING</span>
        <div className="w-px h-32 bg-brand-gold/30 mx-auto" />
        <span className="luxury-label [writing-mode:vertical-rl]">EST. 2012</span>
      </div>

      {/* Main Content */}
      <div className="relative z-30 container mx-auto px-8 md:px-24">
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
           className="max-w-4xl"
        >
          <div className="flex items-center gap-6 mb-12">
            <div className="w-16 h-px bg-brand-gold" />
            <motion.span 
              initial={{ letterSpacing: "1em", opacity: 0 }}
              animate={{ letterSpacing: "0.4em", opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="luxury-label text-brand-gold font-bold"
            >
              ELITE PERFORMANCE SYSTEMS
            </motion.span>
          </div>

          <h1 className="text-3xl md:text-[clamp(3rem,7vw,8rem)] font-display font-black leading-[0.85] tracking-tighter mb-16 flex flex-col">
            <span className="block translate-x-[-0.02em]">DESIGNER</span>
            <span className="block text-white/30 italic font-medium translate-x-[0.05em] h-[1.1em]">DE FÍSICOS.</span>
          </h1>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-12 group cursor-pointer">
            <button className="bg-white text-black px-10 py-5 md:px-16 md:py-8 rounded-full md:rounded-none font-black uppercase tracking-[0.3em] text-[11px] md:text-[13px] hover:bg-brand-gold hover:text-white transition-all transform hover:scale-110 active:scale-95 shadow-2xl shadow-brand-gold/20">
              RESERVAR CONSULTORIA
            </button>
            <div className="flex flex-col gap-2 opacity-40 group-hover:opacity-100 transition-opacity">
               <span className="luxury-label tracking-[0.2em] text-white">DISPONIBILIDADE:</span>
               <span className="text-xs font-mono text-brand-gold">3 VAGAS RESTANTES</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Technical Scanline Decorative */}
      <motion.div 
        animate={{ top: ['0%', '100%'] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-px bg-white/5 z-20"
      />
    </section>
  );
};

const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const end = value;
          const duration = 2000;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const current = Math.floor(progress * (end - start) + start);
            
            setDisplayValue(current);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }

    return () => observer.disconnect();
  }, [value]);

  return <span ref={nodeRef}>{displayValue}{suffix}</span>;
};

const Method = () => {
  const steps = [
    {
      id: "01",
      title: "ANÁLISE BIOMÉTRICA",
      desc: "Avaliação profunda de composição, mobilidade e metabolismo.",
      icon: <Target className="w-5 h-5" />
    },
    {
      id: "02",
      title: "PERIODIZAÇÃO",
      desc: "Cálculo exato de volume e intensidade para ganhos reais.",
      icon: <Activity className="w-5 h-5" />
    },
    {
      id: "03",
      title: "SUPORTE 24/7",
      desc: "Ajustes em tempo real. Eu nunca deixo o seu resultado ao acaso.",
      icon: <ShieldCheck className="w-5 h-5" />
    }
  ];

  return (
    <section id="method" className="py-24 md:py-40 px-6 md:px-20 border-t border-brand-line">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight mb-8">
              O MÉTODO<br /><span className="text-brand-gold">WANDRI LOPES.</span>
            </h2>
            <div className="p-6 md:p-8 technical-border bg-white/[0.02]">
              <p className="text-sm md:text-base text-white/50 leading-relaxed italic">
                "O comum não é suficiente para quem busca o extraordinário. Meus métodos são baseados em ciência, não em palpites."
              </p>
            </div>
          </div>

          <div className="grid gap-1 border-brand-line overflow-hidden mt-12 lg:mt-0">
            {steps.map((step, i) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group flex flex-col sm:flex-row gap-6 md:gap-8 p-8 md:p-12 technical-border hover:bg-white/[0.03] transition-all"
              >
                <div className="text-brand-gold font-mono text-xl">{step.id}</div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-display font-bold mb-4 tracking-wide">{step.title}</h3>
                  <p className="text-sm md:text-base text-white/40 max-w-md">{step.desc}</p>
                </div>
                <div className="opacity-20 group-hover:opacity-100 group-hover:translate-x-2 transition-all transform self-start sm:self-center">
                  {step.icon}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const EliteGrid = () => {
  const items = [
    { label: "RECOMPOSIÇÃO", img: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=800" },
    { label: "PREPARAÇÃO", img: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=800" },
    { label: "PERFORMANCE", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <section id="elite" className="py-12 md:py-20 px-6 md:px-8">
      <div className="grid md:grid-cols-3 gap-1">
        {items.map((item, i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 0.98 }}
            className="relative h-[400px] md:h-[600px] overflow-hidden group technical-border"
          >
            <img 
              src={item.img} 
              className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-110 group-hover:grayscale-0 transition-all duration-1000" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80" />
            <div className="absolute bottom-12 left-12">
              <span className="luxury-label mb-4 block">CATEGORY_0{i+1}</span>
              <h4 className="text-lg md:text-2xl font-display font-black tracking-tighter uppercase">{item.label}</h4>
            </div>
            <div className="absolute top-12 right-12 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="text-brand-gold w-8 h-8" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-dark grid-bg">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <main>
        <Hero />
        
        {/* Authority Line */}
        <div className="py-12 border-y border-brand-line bg-brand-dark flex overflow-hidden whitespace-nowrap">
          <div className="flex animate-infinite-scroll gap-20">
            {Array(10).fill(0).map((_, i) => (
              <div key={i} className="flex gap-20 items-center luxury-label text-white">
                <span>ESTRATÉGIA DE ELITE</span>
                <span className="text-brand-gold">●</span>
                <span>BIOMECÂNICA AVANÇADA</span>
                <span className="text-brand-gold">●</span>
                <span>PRODUÇÃO DE FÍSICOS</span>
              </div>
            ))}
          </div>
        </div>

        <Method />
        <EliteGrid />

        {/* Insights / Stats */}
        <section id="insights" className="py-24 md:py-40 bg-white/[0.02]">
          <div className="max-w-4xl mx-auto px-6 md:px-20 grid grid-cols-2 gap-12 text-center">
            {[
              { label: "ALUNOS", value: 50, suffix: "+" },
              { label: "ANOS EXP", value: 4, suffix: "" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <h5 className="text-4xl md:text-6xl font-display font-black text-white mb-4">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </h5>
                <p className="luxury-label italic">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-40 md:py-60 px-6 text-center relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="luxury-label mb-8 md:mb-12 block text-brand-gold tracking-[0.4em] md:tracking-[0.6em]">ESTÁ PRONTO?</span>
            <h2 className="text-3xl md:text-7xl font-display font-black tracking-tighter mb-16 md:mb-20 leading-none">
              ELEVE O SEU<br /><span className="italic text-white/30">PADRÃO.</span>
            </h2>
            <button className="bg-white text-black px-12 md:px-20 py-6 md:py-8 font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[12px] md:text-[13px] hover:bg-brand-gold hover:text-white transition-all transform hover:scale-105 active:scale-95">
              RESERVAR CONSULTORIA
            </button>
          </motion.div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[800px] h-[800px] rounded-full bg-brand-gold/10 blur-[150px] pointer-events-none" />
        </section>
      </main>

      <footer className="py-20 px-8 border-t border-brand-line">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-center md:text-left">
            <span className="font-display font-black text-2xl tracking-tighter">
              WANDRI<span className="text-brand-gold">LOPES</span>
            </span>
            <p className="luxury-label mt-4">© 2026 ELITE COACHING SYSTEM</p>
          </div>

          <div className="flex gap-4">
            <a href="https://www.instagram.com/wandricoach" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold transition-all">
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          <div className="luxury-label text-right hidden md:block">
            SÃO PAULO<br />PARANÁ<br />REMOTO
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/5500000000000" // Replace with real number
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[200] w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 group"
      >
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20 group-hover:opacity-0 transition-opacity" />
        <svg 
          viewBox="0 0 24 24" 
          className="w-7 h-7 md:w-8 md:h-8 fill-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.933 3.659 1.423 5.631 1.423h.011c6.55 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </motion.a>
    </div>
  );
}
