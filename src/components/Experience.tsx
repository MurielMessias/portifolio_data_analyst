import { useEffect, useRef, useState } from 'react';
import { TrendingUp, BarChart2, FileText, Target } from 'lucide-react';

const responsibilities = [
  {
    icon: BarChart2,
    title: 'Análise de Métricas de Campanhas',
    description: 'Monitoramento e análise de dados de campanhas digitais para identificar tendências e oportunidades de otimização.',
  },
  {
    icon: FileText,
    title: 'Criação de Relatórios',
    description: 'Desenvolvimento de relatórios visuais e dashboards para comunicar resultados de forma clara e objetiva.',
  },
  {
    icon: Target,
    title: 'Interpretação para Tomada de Decisão',
    description: 'Transformação de dados brutos em insights estratégicos que embasam decisões de negócio.',
  },
  {
    icon: TrendingUp,
    title: 'Suporte Estratégico com Base em Dados',
    description: 'Apoio às equipes de marketing com análises orientadas a dados para otimização contínua de estratégias.',
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="bg-[#080808] py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div
          className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="flex items-center gap-4 mb-16">
            <span className="text-[#00d4ff] font-mono text-sm tracking-[0.3em]">04</span>
            <div className="w-12 h-px bg-[#00d4ff]" />
            <span className="text-gray-500 text-xs tracking-[0.3em] uppercase">Experiência</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <h2 className="text-5xl md:text-6xl font-black text-white leading-none mb-8">
                Trajetória<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#00ff9d]">
                  Pro.
                </span>
              </h2>

              <div className="border border-[#00d4ff]/15 p-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center">
                    <span className="text-[#00d4ff] font-black text-sm">NF</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm">NF Marketing</h3>
                    <p className="text-gray-500 text-xs tracking-widest uppercase">Analista de Dados</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00ff9d] animate-pulse" />
                  <span className="text-[#00ff9d] text-xs font-mono">Atual</span>
                </div>
              </div>

              <div className="space-y-2">
                {['Python', 'Power BI', 'Google Analytics', 'SQL', 'Excel'].map((tech) => (
                  <div key={tech} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-[#00d4ff]/60" />
                    <span className="text-gray-500 text-xs font-mono">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {responsibilities.map((item, i) => (
                  <div
                    key={i}
                    className="group border border-[#00d4ff]/10 p-6 hover:border-[#00d4ff]/30 transition-all duration-300 hover:bg-[#00d4ff]/3"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className="w-10 h-10 border border-[#00d4ff]/20 flex items-center justify-center mb-4 group-hover:border-[#00d4ff]/50 transition-colors">
                      <item.icon size={18} className="text-[#00d4ff]" />
                    </div>
                    <h4 className="text-white text-sm font-semibold mb-2 leading-tight">{item.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
