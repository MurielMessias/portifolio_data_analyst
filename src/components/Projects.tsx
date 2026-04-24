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
    title: 'Dashboard Comercial (2022–2024)',
    description:
      'Ecossistema de Business Intelligence para análise de desempenho comercial de varejo global, com KPIs consolidados, visualizações geográficas e análise de sazonalidade.',
    techs: ['Power BI', 'DAX', 'Power Query', 'Excel'],
    icon: BarChart2,
    status: 'Completo',
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
  const [modalProject, setModalProject] = useState<'01' | '02' | '03' | null>(null);

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
                      if (project.id === '01' || project.id === '02' || project.id === '03') {
                        setModalOpen(true);
                        setModalProject(project.id as '01' | '02' | '03');
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
              <img src="analise%20setores.png" alt="Análise de Setores" className="my-4 rounded shadow-lg" />
              <p><b>Análise :</b> A saída confirmou que o setor <span className="text-cyan-700 font-semibold">Fintech</span> domina o mercado com <b>224 empresas</b>, seguido por <b>Internet software & services (192)</b>. Isso demonstra que a tese de investimento global está pesadamente concentrada em escalabilidade digital e serviços financeiros.</p>
              <h2 className="text-lg font-semibold mt-4 mb-1">5. Concentração Geográfica e Market Share</h2>
              <pre className="bg-gray-900 text-green-300 rounded p-3 text-xs overflow-x-auto">
{`# Percentual por País (Top 10)\nAnalise_Pais = Base_Dados['Country'].value_counts(normalize=True) * 100\nprint(Analise_Pais.head(10))\n\n# Gráfico de Barras - Top 10\nplt.figure(figsize=(15,8))\nplt.title('Top 10 Países Geradores de Unicórnios')\nplt.bar(Base_Dados['Country'].value_counts().index[:10], Base_Dados['Country'].value_counts()[:10])\nplt.xticks(rotation=45)`}
              </pre>
              <img src="analise%20paises.png" alt="Análise de Países" className="my-4 rounded shadow-lg" />
              <p><b>Análise :</b> Os <span className="text-cyan-700 font-semibold">Estados Unidos</span> detêm <b>46,2%</b> do mercado global de unicórnios, seguidos pela <b>China com 14,4%</b>. Um ponto interessante é o <b>Brasil</b> aparecendo no Top 10, o que evidencia a força do ecossistema latino-americano, apesar da dominância das potências globais.</p>
              <h2 className="text-lg font-semibold mt-4 mb-1">6. Evolução de Valuation (Série Temporal)</h2>
              <pre className="bg-gray-900 text-green-300 rounded p-3 text-xs overflow-x-auto">
{`# Conversão para Datetime e extração de Ano/Mês\nBase_Dados['Data de Adesão'] = pd.to_datetime(Base_Dados['Date Joined'])\nBase_Dados['Ano'] = Base_Dados['Data de Adesão'].dt.year\n\n# Plotagem da evolução\nplt.figure(figsize=(15,8))\nplt.title('Evolução do Valuation ao Longo dos Anos')\nsns.scatterplot(data=Base_Dados, x='Data de Adesão', y='Valuation ($B)', hue='Industry')`}
              </pre>
              <img src="analise%20valores.png" alt="Análise de Valores" className="my-4 rounded shadow-lg" />
              <p><b>Análise :</b> Os dados mostram um pico de novos unicórnios entre <b>2021 e 2022</b>. A análise de dispersão revela que, embora o volume tenha aumentado, os valuations astronômicos (acima de $50B) são raros e extremamente concentrados, com empresas como <b>ByteDance e SpaceX</b> distorcendo a média superior.</p>
              <h2 className="text-lg font-semibold mt-4 mb-1">7. Conclusão Técnica</h2>
              <ul className="list-disc ml-6">
                <li><b>Manipulação de Strings e Datas:</b> Conversão de formatos complexos para análise.</li>
                <li><b>Storytelling com Dados:</b> Tradução de funções de agregação em insights de mercado.</li>
                <li><b>Visualização Estatística:</b> Uso de gráficos de contagem, barras e dispersão para diferentes propósitos analíticos.</li>
              </ul>
            </div>
          )}
          {modalProject === '02' && (
            <div className="prose max-w-none text-black">
              <h1 className="text-2xl font-bold mb-2">📊 Dashboard de Performance Comercial (2022–2024)</h1>
              <h2 className="text-lg font-semibold mt-4 mb-1">📋 Sobre o Projeto</h2>
              <p>Este projeto consiste no desenvolvimento de um ecossistema de <b>Business Intelligence</b> voltado para análise do desempenho comercial de uma empresa de varejo global.</p>
              <p>O objetivo foi transformar dados brutos de vendas, clientes e produtos em <b>insights estratégicos</b>, permitindo apoiar decisões gerenciais, identificar padrões de consumo e oportunidades de crescimento.</p>
              
              <h2 className="text-lg font-semibold mt-4 mb-1">🛠️ Tecnologias Utilizadas</h2>
              <ul className="list-disc ml-6">
                <li><b>Power BI</b> — Visualização e construção do dashboard</li>
                <li><b>DAX</b> — Criação de métricas e KPIs</li>
                <li><b>Power Query / M</b> — Tratamento e transformação de dados</li>
                <li><b>Modelagem de Dados</b> — Star Schema</li>
              </ul>

              <h2 className="text-lg font-semibold mt-4 mb-1">🧠 Engenharia de Dados e Modelagem</h2>
              <ul className="list-disc ml-6">
                <li>Consolidação de múltiplas bases (2022, 2023 e 2024) em um modelo único</li>
                <li>Estruturação em modelo dimensional (Fato + Dimensões)</li>
                <li>Tratamento de inconsistências e padronização de dados</li>
                <li>Criação de métricas como:</li>
                <ul className="list-circle ml-8 mt-2">
                  <li>Receita total</li>
                  <li>Ticket médio</li>
                  <li>Volume de vendas</li>
                  <li>Quantidade de clientes</li>
                </ul>
              </ul>

              <h2 className="text-lg font-semibold mt-4 mb-1">📈 Principais Insights Gerados</h2>
              <ul className="list-disc ml-6">
                <li><b>Crescimento significativo</b> de receita entre 2022 e 2023, indicando expansão operacional</li>
                <li><b>Variações sazonais</b> no faturamento ao longo dos meses</li>
                <li><b>Concentração geográfica</b> de vendas, com destaque para América do Norte e Europa</li>
                <li><b>Distribuição equilibrada</b> de vendas por gênero, com leve predominância feminina</li>
                <li><b>Marcas com maior contribuição</b> no faturamento total</li>
              </ul>

              <h2 className="text-lg font-semibold mt-4 mb-1">🎯 Análise Comparativa: Visão Geral vs Segmentada</h2>
              <p>O dashboard foi projetado para permitir <b>análises dinâmicas por filtros</b>, possibilitando comparar o comportamento geral com visões segmentadas.</p>

              <h3 className="text-base font-semibold mt-3 mb-1">📌 Visão Geral (Consolidado)</h3>
              <p>Apresenta o desempenho consolidado da operação:</p>
              <pre className="bg-gray-900 text-green-300 rounded p-3 text-xs">
{`Receita total: 548,51 Mi
Produtos vendidos: 2,12 Mi
Ticket médio: $478,65
Clientes: 18,48 mil`}
              </pre>

              <h3 className="text-base font-semibold mt-3 mb-1">📌 Visão Filtrada (Exemplo de Segmentação)</h3>
              <p>Ao aplicar filtros (como período ou categoria), é possível observar mudanças relevantes:</p>
              <pre className="bg-gray-900 text-green-300 rounded p-3 text-xs">
{`Receita: 131,43 Mi (redução 76%)
Produtos: 217,98 Mil (redução 90%)
Ticket Médio: $1,27 Mil (redução 73%)
Clientes: 18,42 Mil (estável)`}
              </pre>

              <h3 className="text-base font-semibold mt-3 mb-1">👉 Análises Dinâmicas Possíveis</h3>
              <ul className="list-disc ml-6">
                <li><b>Year over Year (YoY):</b> Comparação entre períodos equivalentes</li>
                <li><b>Sazonalidade:</b> Identificação de padrões mensais/trimestrais</li>
                <li><b>Performance por Segmento:</b> Análise isolada de categorias e regiões</li>
                <li><b>Análise de Marcas:</b> Contribuição de cada brand no faturamento</li>
                <li><b>Distribuição Geográfica:</b> Market share por continente e país</li>
              </ul>

              <h2 className="text-lg font-semibold mt-4 mb-1">🖼️ Componentes do Dashboard</h2>
              <h3 className="text-base font-semibold mt-3 mb-1">1. KPIs Consolidados (Cards)</h3>
              <p>Exibição de métricas principais em formato de cards para visibilidade imediata.</p>

              <h3 className="text-base font-semibold mt-3 mb-1">2. Gráfico de Série Temporal</h3>
              <p><b>Faturamento Total por Ano e Mês:</b> Linha que mostra a evolução mês a mês, permitindo identificar tendências, picos e quedas sazonais.</p>

              <h3 className="text-base font-semibold mt-3 mb-1">3. Gráfico de Pizza</h3>
              <p><b>Total de Vendas por Gênero:</b> Distribuição percentual que evidencia a proporção entre clientes femininos e masculinos.</p>

              <h3 className="text-base font-semibold mt-3 mb-1">4. Mapa Interativo</h3>
              <p><b>Faturamento Total por Continente:</b> Visualização geográfica que permite drill-down por região, identificando mercados principais.</p>

              <h3 className="text-base font-semibold mt-3 mb-1">5. Gráfico de Barras Horizontal</h3>
              <p><b>Faturamento Total por Marca:</b> Ranking de performance de cada brand, facilitando decisões de portfólio.</p>

              <h2 className="text-lg font-semibold mt-4 mb-1">💡 Conclusão e Impacto</h2>
              <p>Este dashboard transformou dados desorganizados em um <b>sistema de inteligência de negócios</b> capaz de suportar decisões estratégicas em tempo real, permitindo:</p>
              <ul className="list-disc ml-6">
                <li>Monitoramento contínuo de KPIs críticos</li>
                <li>Identificação rápida de anomalias e oportunidades</li>
                <li>Comparação entre períodos e segmentos</li>
                <li>Suporte a análises exploratórias ad-hoc</li>
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
              <img src="gendermath.png" alt="Boxplot math score por gênero" className="my-4 rounded shadow-lg" />
              <p><b>Insight:</b> Embora as médias sejam próximas, o grupo masculino tende a ter uma performance ligeiramente superior em Matemática, enquanto o grupo feminino apresenta maior consistência com menos outliers negativos extremados.</p>
              <h3 className="text-base font-semibold mt-3 mb-1">B. Impacto da Escolaridade dos Pais</h3>
              <pre className="bg-gray-900 text-green-300 rounded p-3 text-xs overflow-x-auto">
{`# Agrupamento por Escolaridade dos Pais\nBase_dados.groupby(by=['parental level of education']).describe()['math score']`}
              </pre>
              <img src="mathparenthalleveleducation.png" alt="Boxplot math score por escolaridade dos pais" className="my-4 rounded shadow-lg" />
              <p><b>Insight:</b> Estudantes cujos pais possuem mestrado apresentam as maiores médias em todas as disciplinas, indicando que o ambiente educacional familiar é um forte preditor de sucesso acadêmico.</p>
              <h3 className="text-base font-semibold mt-3 mb-1">C. Eficácia do Curso Preparatório</h3>
              <pre className="bg-gray-900 text-green-300 rounded p-3 text-xs overflow-x-auto">
{`# Comparação visual entre quem fez e quem não fez o curso\nsns.scatterplot(data=Base_dados, x='math score', y='writing score', hue='test preparation course')`}
              </pre>
              <img src="mathreadingscoregenderscatterplot.png" alt="Pairplot desempenho por curso preparatório" className="my-4 rounded shadow-lg" />
              <p><b>Insight:</b> Estudantes que completaram o curso preparatório estão concentrados na parte superior direita do gráfico, comprovando que o curso aumenta significativamente a probabilidade de notas altas tanto em Matemática quanto em Escrita.</p>
            </div>
          )}
        </div>
      </div>
    )}
    </section>
  );
}
