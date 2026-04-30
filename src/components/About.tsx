import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Code2, Database } from 'lucide-react';

const education = [
  {
    icon: GraduationCap,
    degree: 'Engenharia da Computação',
    school: 'UNIVESP',
    status: 'Em andamento',
    color: '#00d4ff',
  },
  {
    icon: Code2,
    degree: 'Desenvolvimento Front-End',
    school: 'Ada Tech',
    status: 'Concluído',
    color: '#00ff9d',
  },
  {
    icon: Database,
    degree: 'Técnico em Química',
    school: 'SENAI',
    status: 'Concluído',
    color: '#00d4ff',
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="bg-[#080808] py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-[#00d4ff]" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div
          className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="flex items-center gap-4 mb-16">
            <span className="text-[#00d4ff] font-mono text-sm tracking-[0.3em]">02</span>
            <div className="w-12 h-px bg-[#00d4ff]" />
            <span className="text-gray-500 text-xs tracking-[0.3em] uppercase">About</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-5xl md:text-7xl font-black text-white leading-none mb-8">
                Sobre<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#00ff9d]">
                  Mim
                </span>
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed font-light mb-6">
                Estudante de Engenharia da Computação com experiência em análise de dados aplicada ao marketing digital.
              </p>
              <p className="text-gray-400 leading-relaxed font-light mb-8">
                Possuo perfil analítico, foco em resolução de problemas e interesse em transformar dados em insights estratégicos que impulsionam decisões reais de negócio.
              </p>

              <blockquote className="border-l-2 border-[#00ff9d]/40 pl-6 py-2">
                <p className="text-gray-400 italic font-light leading-relaxed text-sm">
                  "Dados são o novo petróleo do século XXI, mas somente se soubermos refiná-los em conhecimento útil."
                </p>
                <cite className="text-[#00ff9d]/60 text-xs tracking-widest mt-2 block">— Yuval Noah Harari</cite>
              </blockquote>

              <div className="mt-10 grid grid-cols-3 gap-6">
                {[
                  { value: '1+', label: 'Ano de\nExperiência' },
                  { value: '6+', label: 'Tecnologias\nDominadas' },
                  { value: '3+', label: 'Projetos\nDesenvolvidos' },
                ].map((stat) => (
                  <div key={stat.label} className="border border-[#00d4ff]/10 p-4 hover:border-[#00d4ff]/30 transition-colors">
                    <div className="text-3xl font-black text-[#00d4ff] mb-1">{stat.value}</div>
                    <div className="text-gray-500 text-xs leading-relaxed whitespace-pre-line tracking-wide uppercase">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-gray-500 text-xs tracking-[0.3em] uppercase mb-6">Formação Acadêmica</div>
              {education.map((item, i) => (
                <div
                  key={i}
                  className="group relative border border-[#00d4ff]/10 p-6 hover:border-[#00d4ff]/30 transition-all duration-300 hover:bg-[#00d4ff]/3"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 flex items-center justify-center border flex-shrink-0"
                      style={{ borderColor: `${item.color}40` }}
                    >
                      <item.icon size={18} style={{ color: item.color }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-white font-medium text-sm">{item.degree}</h3>
                        <span
                          className="text-xs px-2 py-0.5 border font-mono"
                          style={{ color: item.color, borderColor: `${item.color}30` }}
                        >
                          {item.status}
                        </span>
                      </div>
                      <p className="text-gray-500 text-xs tracking-widest uppercase mt-1">{item.school}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
