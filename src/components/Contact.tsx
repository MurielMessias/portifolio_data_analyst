import { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ArrowUpRight } from 'lucide-react';

export default function Contact() {
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
    <>
      <section id="github" className="bg-[#080808] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-3">
          <div className="grid grid-cols-8 h-full">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="border-r border-[#00d4ff]" />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="border border-[#00d4ff]/15 p-10 md:p-16 relative overflow-hidden hover:border-[#00d4ff]/30 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00d4ff]/5 blur-3xl" />

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Github size={24} className="text-[#00d4ff]" />
                  <span className="text-gray-500 text-xs tracking-[0.3em] uppercase font-mono">GitHub</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-3">
                  Explore meus projetos<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#00ff9d]">
                    e análises de dados
                  </span>
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                  Repositórios com projetos de análise de dados, scripts Python, dashboards e muito mais.
                </p>
              </div>
              <div className="flex-shrink-0">
                <a
                  href="https://github.com/murielramos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 bg-[#00d4ff] text-[#080808] px-8 py-4 font-bold text-sm tracking-[0.15em] uppercase hover:bg-[#00ff9d] transition-colors"
                >
                  Acessar GitHub
                  <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#060606] py-28 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00d4ff]/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-6" ref={ref}>
          <div
            className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="flex items-center gap-4 mb-16">
              <span className="text-[#00d4ff] font-mono text-sm tracking-[0.3em]">07</span>
              <div className="w-12 h-px bg-[#00d4ff]" />
              <span className="text-gray-500 text-xs tracking-[0.3em] uppercase">Contato</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-5xl md:text-6xl font-black text-white leading-none mb-6">
                  Vamos<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#00ff9d]">
                    Conectar
                  </span>
                </h2>
                <p className="text-gray-400 text-base leading-relaxed max-w-md font-light">
                  Aberta a oportunidades, colaborações e projetos desafiadores. Entre em contato para conversarmos sobre análise de dados e estratégias orientadas por dados.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: Mail,
                    label: 'Email',
                    value: 'murielmessiasc137@gmail.com',
                    href: 'mailto:murielmessiasc137@gmail.com',
                    color: '#00d4ff',
                  },
                  {
                    icon: Linkedin,
                    label: 'LinkedIn',
                    value: 'linkedin.com/in/murielramos',
                    href: 'https://linkedin.com',
                    color: '#00ff9d',
                  },
                  {
                    icon: Github,
                    label: 'GitHub',
                    value: 'github.com/murielramos',
                    href: 'https://github.com',
                    color: '#00d4ff',
                  },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 border border-[#00d4ff]/10 p-5 hover:border-[#00d4ff]/30 hover:bg-[#00d4ff]/3 transition-all duration-300"
                  >
                    <div
                      className="w-10 h-10 border flex items-center justify-center flex-shrink-0 group-hover:border-opacity-60 transition-colors"
                      style={{ borderColor: `${item.color}30` }}
                    >
                      <item.icon size={18} style={{ color: item.color }} />
                    </div>
                    <div className="flex-1">
                      <div className="text-gray-500 text-xs tracking-widest uppercase mb-0.5">{item.label}</div>
                      <div className="text-gray-300 text-sm font-mono group-hover:text-white transition-colors">{item.value}</div>
                    </div>
                    <ExternalLink size={14} className="text-gray-600 group-hover:text-[#00d4ff] transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
