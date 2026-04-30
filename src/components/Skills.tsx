import { useEffect, useRef, useState } from 'react';

const skills = [
  { name: 'Python', level: 75, category: 'Linguagem', color: '#00d4ff' },
  { name: 'SQL', level: 80, category: 'Linguagem', color: '#00d4ff' },
  { name: 'Power BI', level: 82, category: 'Ferramenta', color: '#00ff9d' },
  { name: 'Excel', level: 85, category: 'Ferramenta', color: '#00ff9d' },
  { name: 'Google Analytics', level: 78, category: 'Ferramenta', color: '#00ff9d' },
  { name: 'Pandas', level: 70, category: 'Biblioteca', color: '#00d4ff' },
  { name: 'Análise de Dados', level: 80, category: 'Habilidade', color: '#00ff9d' },
  { name: 'Automação', level: 65, category: 'Habilidade', color: '#00d4ff' },
];

const categories = [
  { name: 'Linguagens', items: ['Python', 'SQL'] },
  { name: 'Ferramentas', items: ['Power BI', 'Excel', 'Google Analytics'] },
  { name: 'Análise', items: ['Pandas', 'EDA', 'Visualização', 'Limpeza de Dados'] },
  { name: 'Outros', items: ['APIs', 'Automação', 'Front-End'] },
];

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), delay);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level, delay]);

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-300 text-sm font-mono">{name}</span>
        <span className="text-xs font-mono" style={{ color }}>{level}%</span>
      </div>
      <div className="h-px bg-[#1a1a1a] relative overflow-hidden">
        <div
          className="h-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%`, background: `linear-gradient(90deg, ${color}60, ${color})` }}
        />
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 transition-all duration-1000"
          style={{ right: `${100 - width}%`, background: color, boxShadow: `0 0 6px ${color}` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
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
    <section id="skills" className="bg-[#060606] py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00d4ff]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00d4ff]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div
          className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="flex items-center gap-4 mb-16">
            <span className="text-[#00d4ff] font-mono text-sm tracking-[0.3em]">03</span>
            <div className="w-12 h-px bg-[#00d4ff]" />
            <span className="text-gray-500 text-xs tracking-[0.3em] uppercase">Skills</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-5xl md:text-6xl font-black text-white leading-none mb-4">
                Stack<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#00ff9d]">
                  Técnico
                </span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-10 max-w-sm">
                Ferramentas e tecnologias utilizadas para transformar dados brutos em insights acionáveis.
              </p>

              <div className="space-y-6">
                {skills.map((skill, i) => (
                  <SkillBar key={skill.name} {...skill} delay={i * 80} />
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="text-gray-500 text-xs tracking-[0.3em] uppercase mb-8">Categorias</div>
              {categories.map((cat, i) => (
                <div
                  key={cat.name}
                  className="border border-[#00d4ff]/10 p-6 hover:border-[#00d4ff]/25 transition-all duration-300"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-1.5 h-1.5 bg-[#00d4ff]" />
                    <span className="text-[#00d4ff] text-xs tracking-[0.2em] uppercase font-mono">{cat.name}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-[#00d4ff]/5 border border-[#00d4ff]/15 text-gray-300 text-xs font-mono hover:border-[#00d4ff]/40 hover:text-[#00d4ff] transition-colors cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              <div className="border border-[#00ff9d]/10 p-6 bg-[#00ff9d]/3">
                <div className="font-mono text-xs text-gray-600 leading-relaxed">
                  <span className="text-[#00ff9d]">import</span>{' '}
                  <span className="text-gray-400">pandas as pd</span>
                  <br />
                  <span className="text-[#00d4ff]">import</span>{' '}
                  <span className="text-gray-400">numpy as np</span>
                  <br />
                  <span className="text-gray-600"># transformando dados em decisões</span>
                  <br />
                  <span className="text-[#00ff9d]">df</span>
                  <span className="text-gray-400"> = pd.read_csv(</span>
                  <span className="text-yellow-600/70">'insights.csv'</span>
                  <span className="text-gray-400">)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
