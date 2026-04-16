import { useEffect, useRef, useState } from 'react';
import PortfolioUnicorns01 from './PortfolioUnicorns01';
import { ExternalLink, Github, BarChart2, FileCode2, Search } from 'lucide-react';

const projects = [
  {
    id: '01',
    title: 'Unicórnios - Análise de Dados',
    description:
      'Análise exploratória dos dados de unicórnios (startups avaliadas em mais de 1 bilhão de dólares) até setembro de 2022, com gráficos, códigos e insights sobre setores, países e valores.',
    techs: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter'],
    icon: () => <span role="img" aria-label="unicorn" style={{fontSize: 20}}>🦄</span>,
    status: 'Completo',
    color: '#00d4ff',
    page: '/#portfolio-unicorns-01',
  },
  {
    id: '02',
    title: 'Dashboard com Power BI',
    description:
      'Dashboard interativo para monitoramento de KPIs de campanhas digitais, com filtros dinâmicos e visualizações de tendências em tempo real.',
    techs: ['Power BI', 'DAX', 'Excel', 'SQL'],
    icon: BarChart2,
    status: 'Em desenvolvimento',
    color: '#00ff9d',
  },
  {
    id: '03',
    title: 'Desempenho Acadêmico — Students Performance',
    description:
      'Análise exploratória dos fatores que influenciam o desempenho de estudantes em Matemática, Leitura e Escrita, considerando gênero, escolaridade dos pais e curso preparatório.',
    techs: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    icon: () => <span role="img" aria-label="academic" style={{fontSize: 20}}>🎓</span>,
    status: 'Completo',
    color: '#00d4ff',
  },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState<'01' | '03' | null>(null);

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
              href="https://github.com"
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
                      if (project.id === '01' || project.id === '03') {
                        setModalOpen(true);
                        setModalProject(project.id as '01' | '03');
                      } else {
                        window.open('https://github.com', '_blank');
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
    {modalOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
        <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative overflow-y-auto max-h-[90vh]">
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-[#00d4ff] text-2xl font-bold"
            onClick={() => { setModalOpen(false); setModalProject(null); }}
            aria-label="Fechar"
          >
            ×
          </button>
          {modalProject === '01' && (
            <div className="prose max-w-none text-black">
              <h1 className="text-2xl font-bold mb-2">Case: Análise Exploratória de Ecossistemas Unicórnios (2022)</h1>
              <h2 className="text-lg font-semibold mt-4 mb-1">1. Contexto do Projeto</h2>
              <p>Este projeto utiliza um dataset contendo informações sobre startups unicórnios globais até setembro de 2022. O foco foi realizar uma <b>EDA (Exploratory Data Analysis)</b> completa para transformar dados brutos em insights sobre onde o capital está concentrado e quais setores são mais resilientes.</p>
              <h2 className="text-lg font-semibold mt-4 mb-1">2. Stack Tecnológica</h2>
              <ul className="list-disc ml-6">
                <li><b>Python</b> (Pandas, Numpy)</li>
                <li><b>Visualização:</b> Matplotlib, Seaborn</li>
                <li><b>Ambiente:</b> Google Colab</li>
              </ul>
              <h2 className="text-lg font-semibold mt-4 mb-1">3. Tratamento de Dados (Data Cleaning)</h2>
              <pre className="bg-gray-900 text-green-300 rounded p-3 text-xs overflow-x-auto">
{`# Verificando a integridade dos dados\nBase_Dados.isnull().sum()\n\n# Visualização da limpeza via Heatmap\nplt.figure(figsize=(15,8))\nplt.title('Análise de Campos Nulos')\nsns.heatmap(Base_Dados.isnull(), cbar=False, yticklabels=False, cmap='viridis')`}
              </pre>
              <p className="mt-2"><b>Análise:</b> Através do heatmap, identifiquei que a coluna "Investidores" era a única com dados faltantes significativos, permitindo prosseguir com as análises de Setor e País sem viés.</p>
              <h2 className="text-lg font-semibold mt-4 mb-1">4. Análise por Setor (Indústrias)</h2>
              <pre className="bg-gray-900 text-green-300 rounded p-3 text-xs overflow-x-auto">
{`# Ranking de Setores\nBase_Dados['Industry'].value_counts()\n\n# Visualização Gráfica\nplt.figure(figsize=(15,8))\nplt.title('Análise por Setor')\nsns.countplot(data=Base_Dados, x='Industry', order=Base_Dados['Industry'].value_counts().index)\nplt.xticks(rotation=45)`}
              </pre>
              <img src="/analise%20setores.png" alt="Análise de Setores" className="my-4 rounded shadow-lg" />
              <p><b>Análise :</b> A saída confirmou que o setor <span className="text-cyan-700 font-semibold">Fintech</span> domina o mercado com <b>224 empresas</b>, seguido por <b>Internet software & services (192)</b>. Isso demonstra que a tese de investimento global está pesadamente concentrada em escalabilidade digital e serviços financeiros.</p>
              <h2 className="text-lg font-semibold mt-4 mb-1">5. Concentração Geográfica e Market Share</h2>
              <pre className="bg-gray-900 text-green-300 rounded p-3 text-xs overflow-x-auto">
{`# Percentual por País (Top 10)\nAnalise_Pais = Base_Dados['Country'].value_counts(normalize=True) * 100\nprint(Analise_Pais.head(10))\n\n# Gráfico de Barras - Top 10\nplt.figure(figsize=(15,8))\nplt.title('Top 10 Países Geradores de Unicórnios')\nplt.bar(Base_Dados['Country'].value_counts().index[:10], Base_Dados['Country'].value_counts()[:10])\nplt.xticks(rotation=45)`}
              </pre>
              <img src="/analise%20paises.png" alt="Análise de Países" className="my-4 rounded shadow-lg" />
              <p><b>Análise :</b> Os <span className="text-cyan-700 font-semibold">Estados Unidos</span> detêm <b>46,2%</b> do mercado global de unicórnios, seguidos pela <b>China com 14,4%</b>. Um ponto interessante é o <b>Brasil</b> aparecendo no Top 10, o que evidencia a força do ecossistema latino-americano, apesar da dominância das potências globais.</p>
              <h2 className="text-lg font-semibold mt-4 mb-1">6. Evolução de Valuation (Série Temporal)</h2>
              <pre className="bg-gray-900 text-green-300 rounded p-3 text-xs overflow-x-auto">
{`# Conversão para Datetime e extração de Ano/Mês\nBase_Dados['Data de Adesão'] = pd.to_datetime(Base_Dados['Date Joined'])\nBase_Dados['Ano'] = Base_Dados['Data de Adesão'].dt.year\n\n# Plotagem da evolução\nplt.figure(figsize=(15,8))\nplt.title('Evolução do Valuation ao Longo dos Anos')\nsns.scatterplot(data=Base_Dados, x='Data de Adesão', y='Valuation ($B)', hue='Industry')`}
              </pre>
              <img src="/analise%20valores.png" alt="Análise de Valores" className="my-4 rounded shadow-lg" />
              <p><b>Análise :</b> Os dados mostram um pico de novos unicórnios entre <b>2021 e 2022</b>. A análise de dispersão revela que, embora o volume tenha aumentado, os valuations astronômicos (acima de $50B) são raros e extremamente concentrados, com empresas como <b>ByteDance e SpaceX</b> distorcendo a média superior.</p>
              <h2 className="text-lg font-semibold mt-4 mb-1">7. Conclusão Técnica</h2>
              <ul className="list-disc ml-6">
                <li><b>Manipulação de Strings e Datas:</b> Conversão de formatos complexos para análise.</li>
                <li><b>Storytelling com Dados:</b> Tradução de funções de agregação em insights de mercado.</li>
                <li><b>Visualização Estatística:</b> Uso de gráficos de contagem, barras e dispersão para diferentes propósitos analíticos.</li>
              </ul>
            </div>
          )}
          {modalProject === '03' && (
            <div className="prose max-w-none text-black">
              <h1 className="text-2xl font-bold mb-2">Case: Análise de Desempenho Acadêmico (Students Performance)</h1>
              <h2 className="text-lg font-semibold mt-4 mb-1">1. Introdução e Objetivo</h2>
              <p>Este projeto consiste em uma análise exploratória de dados sobre o desempenho de estudantes em exames (Matemática, Leitura e Escrita). O objetivo é entender como fatores socioeconômicos e demográficos — como nível de escolaridade dos pais, participação em cursos preparatórios e gênero — influenciam os resultados acadêmicos.</p>
              <h2 className="text-lg font-semibold mt-4 mb-1">2. Tecnologias Utilizadas</h2>
              <ul className="list-disc ml-6">
                <li>Python para manipulação e análise.</li>
                <li>Pandas & Numpy para tratamento de dados.</li>
                <li>Matplotlib & Seaborn para visualização de dados estatísticos.</li>
              </ul>
              <h2 className="text-lg font-semibold mt-4 mb-1">3. Tratamento e Exploração de Dados (EDA)</h2>
              <pre className="bg-gray-900 text-green-300 rounded p-3 text-xs overflow-x-auto">
{`# Verificando Campos Nulos\nBase_dados.isnull().sum()\n\n# Diagnóstico visual de nulos\nplt.figure(figsize=(15,8))\nplt.title('Análise de campos nulos')\nsns.heatmap(Base_dados.isnull(), cbar=False);`}
              </pre>
              <p><b>Análise Técnica:</b> A base de dados apresentou-se extremamente limpa, sem valores nulos em nenhuma das variáveis principais, o que permitiu focar diretamente nas correlações estatísticas.</p>
              <h2 className="text-lg font-semibold mt-4 mb-1">4. Análise por Gênero e Distribuição</h2>
              <pre className="bg-gray-900 text-green-300 rounded p-3 text-xs overflow-x-auto">
{`# Distribuição de Gênero\nBase_dados['gender'].value_counts(normalize=True) * 100`}
              </pre>
              <p><b>Saída Real:</b> A base possui uma distribuição equilibrada, com 51.8% de estudantes do sexo feminino e 48.2% do sexo masculino.</p>
              <h2 className="text-lg font-semibold mt-4 mb-1">5. Desempenho e Variáveis Socioeconômicas</h2>
              <h3 className="text-base font-semibold mt-3 mb-1">A. Relação entre Gênero e Notas</h3>
              <pre className="bg-gray-900 text-green-300 rounded p-3 text-xs overflow-x-auto">
{`# Boxplot de Notas de Matemática por Gênero\nsns.boxplot(data=Base_dados, x='math score', y='gender')`}
              </pre>
              <img src="/gendermath.png" alt="Boxplot math score por gênero" className="my-4 rounded shadow-lg" />
              <p><b>Insight:</b> Embora as médias sejam próximas, o grupo masculino tende a ter uma performance ligeiramente superior em Matemática, enquanto o grupo feminino apresenta maior consistência com menos outliers negativos extremados.</p>
              <h3 className="text-base font-semibold mt-3 mb-1">B. Impacto da Escolaridade dos Pais</h3>
              <pre className="bg-gray-900 text-green-300 rounded p-3 text-xs overflow-x-auto">
{`# Agrupamento por Escolaridade dos Pais\nBase_dados.groupby(by=['parental level of education']).describe()['math score']`}
              </pre>
              <img src="/mathparenthalleveleducation.png" alt="Boxplot math score por escolaridade dos pais" className="my-4 rounded shadow-lg" />
              <p><b>Insight:</b> Estudantes cujos pais possuem mestrado apresentam as maiores médias em todas as disciplinas, indicando que o ambiente educacional familiar é um forte preditor de sucesso acadêmico.</p>
              <h3 className="text-base font-semibold mt-3 mb-1">C. Eficácia do Curso Preparatório</h3>
              <pre className="bg-gray-900 text-green-300 rounded p-3 text-xs overflow-x-auto">
{`# Comparação visual entre quem fez e quem não fez o curso\nsns.scatterplot(data=Base_dados, x='math score', y='writing score', hue='test preparation course')`}
              </pre>
              <img src="/mathreadingscoregenderscatterplot.png" alt="Pairplot desempenho por curso preparatório" className="my-4 rounded shadow-lg" />
              <p><b>Insight:</b> Estudantes que completaram o curso preparatório estão concentrados na parte superior direita do gráfico, comprovando que o curso aumenta significativamente a probabilidade de notas altas tanto em Matemática quanto em Escrita.</p>
            </div>
          )}
        </div>
      </div>
    )}
    </section>
  );
}
