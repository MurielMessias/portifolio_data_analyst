import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ChevronRight } from 'lucide-react';

const phrases = [
  'Data Analyst',
  'Python Developer',
  'BI Specialist',
  'Insights Engineer',
];

export default function Hero() {
  const [displayed, setDisplayed] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const current = phrases[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 90);
    } else if (!deleting && charIndex > current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 50);
    } else {
      setDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, phraseIndex]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const cols = Math.floor(canvas.width / 20);
    const drops: number[] = Array(cols).fill(1);
    const chars = '01アイウエオカキクケコデータ分析PYTHON SQL'.split('');

    const draw = () => {
      ctx.fillStyle = 'rgba(8,8,8,0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(0,212,255,0.08)';
      ctx.font = '12px monospace';

      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * 20, y * 20);
        if (y * 20 > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });
    };

    const interval = setInterval(draw, 60);
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', resize);
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#080808]"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-40" />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#080808]/60 to-[#080808]" />

      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-[#00d4ff]/20 to-transparent" style={{ left: '8%' }} />
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-[#00d4ff]/10 to-transparent" style={{ left: '92%' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-px bg-[#00d4ff]" />
          <span className="text-[#00d4ff] text-xs tracking-[0.3em] uppercase font-mono">São Paulo, Brasil</span>
          <div className="w-2 h-2 rounded-full bg-[#00ff9d] animate-pulse" />
          <span className="text-[#00ff9d] text-xs tracking-[0.2em] font-mono">Disponível</span>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black text-white leading-none tracking-tight mb-2">
          Muriel
        </h1>
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black leading-none tracking-tight mb-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#00ff9d]">
          Messias
          </span>
        </h1>

        <div className="flex items-center gap-4 mb-4">
          <div className="w-1 h-12 bg-[#00d4ff]" />
          <div>
            <div className="text-xl md:text-2xl text-gray-200 font-light tracking-wide">
              <span className="text-[#00d4ff] font-mono">{displayed}</span>
              <span className="animate-pulse text-[#00d4ff]">|</span>
            </div>
            <p className="text-gray-500 text-sm tracking-[0.15em] uppercase mt-1">
              Transformando dados em decisões
            </p>
          </div>
        </div>

        <p className="text-gray-400 text-base md:text-lg max-w-lg mb-4 leading-relaxed font-light">
          Análise, interpretação e inteligência de dados para gerar valor real
        </p>

        <blockquote className="border-l-2 border-[#00d4ff]/40 pl-4 mb-10 max-w-md">
          <p className="text-gray-500 text-sm italic font-light leading-relaxed">
            "Dados são o novo petróleo do século XXI, mas somente se soubermos refiná-los em conhecimento útil."
          </p>
          <cite className="text-[#00d4ff]/60 text-xs tracking-widest mt-1 block">— Yuval Noah Harari</cite>
        </blockquote>

        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="group flex items-center gap-3 bg-[#00d4ff] text-[#080808] px-8 py-3 text-sm font-bold tracking-[0.15em] uppercase transition-all duration-300 hover:bg-[#00ff9d]"
          >
            Ver Projetos
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="group flex items-center gap-3 border border-[#00d4ff]/40 text-[#00d4ff] px-8 py-3 text-sm font-light tracking-[0.15em] uppercase transition-all duration-300 hover:border-[#00d4ff] hover:bg-[#00d4ff]/5"
          >
            Contato
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      <div className="relative z-10 flex justify-center pb-10">
        <a href="#about" className="flex flex-col items-center gap-2 text-gray-600 hover:text-[#00d4ff] transition-colors group">
          <span className="text-xs tracking-[0.2em] uppercase font-mono">Scroll</span>
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
