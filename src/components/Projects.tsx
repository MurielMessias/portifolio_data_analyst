import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, BarChart2, FileCode2, Search } from 'lucide-react';
import ProjectModal from './ProjectModal';
import ProjectModal02 from './ProjectModal02';
import ProjectModal03 from './ProjectModal03';

const projects = [
  {
    id: '01',
    title: 'Análise Exploratória de Ecossistemas Unicórnios (2022)',
    description:
      'EDA completa sobre dataset de unicórnios globais até setembro de 2022, analisando concentração de capital, setores mais resilientes e padrões geográficos.',
    techs: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Google Colab'],
    icon: FileCode2,
    status: 'Concluído',
    color: '#00d4ff',
  },
  {
    id: '02',
    title: 'Dashboard de Performance Comercial (2022-2024)',
    description:
      'Ecossistema de Business Intelligence para análise de desempenho comercial de varejo global, com transformação de dados brutos em insights estratégicos e KPIs gerenciais.',
    techs: ['Power BI', 'DAX', 'Power Query', 'Modelagem de Dados'],
    icon: BarChart2,
    status: 'Concluído',
    color: '#00ff9d',
  },
  {
    id: '03',
    title: 'Análise de Desempenho Acadêmico (Students Performance)',
    description:
      'Análise exploratória de dados sobre desempenho estudantil em exames, investigando fatores socioeconômicos e demográficos que influenciam resultados acadêmicos.',
    techs: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    icon: Search,
    status: 'Concluído',
    color: '#00d4ff',
  },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModal02Open, setIsModal02Open] = useState(false);
  const [isModal03Open, setIsModal03Open] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="bg-[#060606] py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00d4ff]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00d4ff]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div
          className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[#00d4ff] font-mono text-sm tracking-[0.3em]">05</span>
            <div className="w-12 h-px bg-[#00d4ff]" />
            <span className="text-gray-500 text-xs tracking-[0.3em] uppercase">Projetos</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
            <h2 className="text-5xl md:text-6xl font-black text-white leading-none">
              Casos de<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#00ff9d]">
                Estudo
              </span>
            </h2>
            <a
              href="https://github.com/MurielMessias?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-500 hover:text-[#00d4ff] transition-colors text-xs tracking-widest uppercase"
            >
              <Github size={16} />
              Ver todos no GitHub
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div
                key={project.id}
                className="group relative border border-[#00d4ff]/10 hover:border-[#00d4ff]/30 transition-all duration-500 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="p-6 border-b border-[#00d4ff]/10">
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className="w-12 h-12 border flex items-center justify-center"
                      style={{ borderColor: `${project.color}30` }}
                    >
                      <project.icon size={20} style={{ color: project.color }} />
                    </div>
                    <span
                      className="text-4xl font-black opacity-10 group-hover:opacity-20 transition-opacity"
                      style={{ color: project.color }}
                    >
                      {project.id}
                    </span>
                  </div>

                  <h3 className="text-white font-semibold mb-3 leading-tight">{project.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.techs.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs font-mono border"
                        style={{ color: `${project.color}90`, borderColor: `${project.color}20` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/60 animate-pulse" />
                    <span className="text-gray-600 text-xs font-mono">{project.status}</span>
                  </div>
                  <button
                    className="flex items-center gap-2 text-gray-600 hover:text-[#00d4ff] transition-colors text-xs"
                    onClick={() => {
                      if (project.id === '01') {
                        setIsModalOpen(true);
                      } else if (project.id === '02') {
                        setIsModal02Open(true);
                      } else if (project.id === '03') {
                        setIsModal03Open(true);
                      } else {
                        window.open('https://github.com/MurielMessias?tab=repositories', '_blank');
                      }
                    }}
                  >
                    <span>Ver Projeto</span>
                    <ExternalLink size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <ProjectModal02 isOpen={isModal02Open} onClose={() => setIsModal02Open(false)} />
      <ProjectModal03 isOpen={isModal03Open} onClose={() => setIsModal03Open(false)} />
    </section>
  );
}
