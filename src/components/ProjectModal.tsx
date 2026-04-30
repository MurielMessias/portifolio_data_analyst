import { X, ExternalLink, BarChart3, Database, Code, TrendingUp, PieChart } from 'lucide-react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ isOpen, onClose }: ProjectModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-[#080808] border border-[#00d4ff]/20 rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-[#080808] border-b border-[#00d4ff]/10 p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 border border-[#00d4ff]/30 flex items-center justify-center">
              <BarChart3 size={24} className="text-[#00d4ff]" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Análise Exploratória de Ecossistemas Unicórnios (2022)</h2>
              <p className="text-gray-500 text-sm font-mono">Projeto 01</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-[#00d4ff] transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Stack Tecnológica */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Code size={20} className="text-[#00d4ff]" />
              <h3 className="text-xl font-semibold text-white">Stack Tecnológica</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Python (Pandas, Numpy)', 'Matplotlib, Seaborn', 'Google Colab'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm font-mono border border-[#00d4ff]/30 text-[#00d4ff]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Tratamento de Dados */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Database size={20} className="text-[#00d4ff]" />
              <h3 className="text-xl font-semibold text-white">Tratamento de Dados (Data Cleaning)</h3>
            </div>
            <div className="bg-[#0a0a0a] border border-[#00d4ff]/10 rounded-lg p-4">
              <div className="space-y-3">
                <div className="text-gray-300 font-mono text-sm">
                  <span className="text-[#00ff9d]">#</span> Verificando a integridade dos dados
                </div>
                <div className="text-gray-300 font-mono text-sm">
                  Base_Dados.isnull().sum()
                </div>
                <div className="text-gray-300 font-mono text-sm">
                  <span className="text-[#00ff9d]">#</span> Visualização da limpeza via Heatmap
                </div>
                <div className="text-gray-300 font-mono text-sm">
                  plt.figure(figsize=(15,8))<br/>
                  plt.title('Análise de Campos Nulos')<br/>
                  sns.heatmap(Base_Dados.isnull(), cbar=False, yticklabels=False, cmap='viridis')
                </div>
              </div>
              <div className="mt-4 p-3 bg-[#00d4ff]/5 border-l-2 border-[#00d4ff]">
                <p className="text-gray-400 text-sm">
                  <span className="text-[#00d4ff] font-semibold">Análise:</span> Através do heatmap, identifiquei que a coluna "Investidores" era a única com dados faltantes significativos, permitindo prosseguir com as análises de Setor e País sem viés.
                </p>
              </div>
            </div>
          </section>

          {/* Análise por Setor */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp size={20} className="text-[#00d4ff]" />
              <h3 className="text-xl font-semibold text-white">Análise por Setor (Indústrias)</h3>
            </div>
            
            {/* Imagem da Análise de Setores */}
            <div className="mb-6">
              <div className="bg-[#0a0a0a] border border-[#00d4ff]/10 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <BarChart3 size={16} className="text-[#00d4ff]" />
                  <h4 className="text-sm font-mono text-[#00d4ff]">Distribuição por Setores</h4>
                </div>
                <div className="bg-[#080808] rounded-lg p-4 flex items-center justify-center">
                  <img 
                    src="/assets/images/analisesetores.png" 
                    alt="Análise por Setor - Distribuição de Unicórnios" 
                    className="max-w-full h-auto rounded border border-[#00d4ff]/10"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const placeholder = target.nextElementSibling as HTMLElement;
                      if (placeholder) placeholder.style.display = 'flex';
                    }}
                  />
                  <div className="hidden flex-col items-center justify-center p-8 text-gray-500">
                    <BarChart3 size={48} className="mb-3 opacity-50" />
                    <p className="text-sm text-center">Gráfico de barras mostrando distribuição de unicórnios por setor</p>
                    <p className="text-xs text-gray-600 mt-2">Adicione a imagem em: /assets/images/analisesetores.png</p>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-500 font-mono">
                  <span className="text-[#00ff9d]">•</span> Fintech: 224 empresas | 
                  <span className="text-[#00d4ff] ml-2">•</span> Internet Software: 192 | 
                  <span className="text-gray-400 ml-2">•</span> E-commerce: 146
                </div>
              </div>
            </div>
            
            <div className="bg-[#0a0a0a] border border-[#00d4ff]/10 rounded-lg p-4">
              <div className="space-y-3">
                <div className="text-gray-300 font-mono text-sm">
                  <span className="text-[#00ff9d]">#</span> Ranking de Setores
                </div>
                <div className="text-gray-300 font-mono text-sm">
                  Base_Dados['Industry'].value_counts()
                </div>
                <div className="text-gray-300 font-mono text-sm">
                  <span className="text-[#00ff9d]">#</span> Visualização Gráfica
                </div>
                <div className="text-gray-300 font-mono text-sm">
                  plt.figure(figsize=(15,8))<br/>
                  plt.title('Análise por Setor')<br/>
                  sns.countplot(data=Base_Dados, x='Industry', order=Base_Dados['Industry'].value_counts().index)<br/>
                  plt.xticks(rotation=45)
                </div>
              </div>
              <div className="mt-4 p-3 bg-[#00d4ff]/5 border-l-2 border-[#00d4ff]">
                <p className="text-gray-400 text-sm">
                  <span className="text-[#00d4ff] font-semibold">Análise:</span> A saída confirmou que o setor Fintech domina o mercado com 224 empresas, seguido por Internet software & services (192). Isso demonstra que a tese de investimento global está pesadamente concentrada em escalabilidade digital e serviços financeiros.
                </p>
              </div>
            </div>
          </section>

          {/* Concentração Geográfica */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 size={20} className="text-[#00d4ff]" />
              <h3 className="text-xl font-semibold text-white">Concentração Geográfica e Market Share</h3>
            </div>
            
            {/* Imagem do Gráfico de Pizza */}
            <div className="mb-6">
              <div className="bg-[#0a0a0a] border border-[#00d4ff]/10 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <PieChart size={16} className="text-[#00d4ff]" />
                  <h4 className="text-sm font-mono text-[#00d4ff]">Análise dos Países</h4>
                </div>
                <div className="bg-[#080808] rounded-lg p-4 flex items-center justify-center">
                  <img 
                    src="/assets/images/graficopizza.png" 
                    alt="Análise dos Países - Distribuição de Unicórnios" 
                    className="max-w-full h-auto rounded border border-[#00d4ff]/10"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const placeholder = target.nextElementSibling as HTMLElement;
                      if (placeholder) placeholder.style.display = 'flex';
                    }}
                  />
                  <div className="hidden flex-col items-center justify-center p-8 text-gray-500">
                    <PieChart size={48} className="mb-3 opacity-50" />
                    <p className="text-sm text-center">Gráfico de pizza mostrando distribuição percentual de unicórnios por país</p>
                    <p className="text-xs text-gray-600 mt-2">Adicione a imagem em: /assets/images/graficopizza.png</p>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-500 font-mono">
                  <span className="text-[#00ff9d]">•</span> United States: 59.6% | 
                  <span className="text-[#00d4ff] ml-2">•</span> China: 16.4% | 
                  <span className="text-gray-400 ml-2">•</span> India: 6.6%
                </div>
              </div>
            </div>
            
            <div className="bg-[#0a0a0a] border border-[#00d4ff]/10 rounded-lg p-4">
              <div className="space-y-3">
                <div className="text-gray-300 font-mono text-sm">
                  <span className="text-[#00ff9d]">#</span> Percentual por País (Top 10)
                </div>
                <div className="text-gray-300 font-mono text-sm">
                  Analise_Pais = Base_Dados['Country'].value_counts(normalize=True) * 100<br/>
                  print(Analise_Pais.head(10))
                </div>
                <div className="text-gray-300 font-mono text-sm">
                  <span className="text-[#00ff9d]">#</span> Gráfico de Barras - Top 10
                </div>
                <div className="text-gray-300 font-mono text-sm">
                  plt.figure(figsize=(15,8))<br/>
                  plt.title('Top 10 Países Geradores de Unicórnios')<br/>
                  plt.bar(Base_Dados['Country'].value_counts().index[:10], Base_Dados['Country'].value_counts()[:10])<br/>
                  plt.xticks(rotation=45)
                </div>
              </div>
              <div className="mt-4 p-3 bg-[#00d4ff]/5 border-l-2 border-[#00d4ff]">
                <p className="text-gray-400 text-sm">
                  <span className="text-[#00d4ff] font-semibold">Análise:</span> Os Estados Unidos detêm 46,2% do mercado global de unicórnios, seguidos pela China com 14,4%. Um ponto interessante é o Brasil aparecendo no Top 10, o que evidencia a força do ecossistema latino-americano, apesar da dominância das potências globais.
                </p>
              </div>
            </div>
          </section>

          {/* Evolução de Valuation */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp size={20} className="text-[#00d4ff]" />
              <h3 className="text-xl font-semibold text-white">Evolução de Valuation (Série Temporal)</h3>
            </div>
            
            {/* Imagem da Análise de Valores */}
            <div className="mb-6">
              <div className="bg-[#0a0a0a] border border-[#00d4ff]/10 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp size={16} className="text-[#00d4ff]" />
                  <h4 className="text-sm font-mono text-[#00d4ff]">Evolução Temporal</h4>
                </div>
                <div className="bg-[#080808] rounded-lg p-4 flex items-center justify-center">
                  <img 
                    src="/assets/images/analisevalores.png" 
                    alt="Análise de Valuation - Evolução Temporal" 
                    className="max-w-full h-auto rounded border border-[#00d4ff]/10"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const placeholder = target.nextElementSibling as HTMLElement;
                      if (placeholder) placeholder.style.display = 'flex';
                    }}
                  />
                  <div className="hidden flex-col items-center justify-center p-8 text-gray-500">
                    <TrendingUp size={48} className="mb-3 opacity-50" />
                    <p className="text-sm text-center">Gráfico de dispersão mostrando evolução de valuation por setor</p>
                    <p className="text-xs text-gray-600 mt-2">Adicione a imagem em: /assets/images/analisevalores.png</p>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-500 font-mono">
                  <span className="text-[#00ff9d]">•</span> Pico 2021-2022 | 
                  <span className="text-[#00d4ff] ml-2">{'>'} Valuations {'>'}$50B raros | </span> 
                  <span className="text-gray-400 ml-2">•</span> ByteDance, SpaceX outliers
                </div>
              </div>
            </div>
            
            <div className="bg-[#0a0a0a] border border-[#00d4ff]/10 rounded-lg p-4">
              <div className="space-y-3">
                <div className="text-gray-300 font-mono text-sm">
                  <span className="text-[#00ff9d]">#</span> Conversão para Datetime e extração de Ano/Mês
                </div>
                <div className="text-gray-300 font-mono text-sm">
                  Base_Dados['Data de Adesão'] = pd.to_datetime(Base_Dados['Date Joined'])<br/>
                  Base_Dados['Ano'] = Base_Dados['Data de Adesão'].dt.year
                </div>
                <div className="text-gray-300 font-mono text-sm">
                  <span className="text-[#00ff9d]">#</span> Plotagem da evolução
                </div>
                <div className="text-gray-300 font-mono text-sm">
                  plt.figure(figsize=(15,8))<br/>
                  plt.title('Evolução do Valuation ao Longo dos Anos')<br/>
                  sns.scatterplot(data=Base_Dados, x='Data de Adesão', y='Valuation ($B)', hue='Industry')
                </div>
              </div>
              <div className="mt-4 p-3 bg-[#00d4ff]/5 border-l-2 border-[#00d4ff]">
                <p className="text-gray-400 text-sm">
                  <span className="text-[#00d4ff] font-semibold">Análise:</span> Os dados mostram um pico de novos unicórnios entre 2021 e 2022. A análise de dispersão revela que, embora o volume tenha aumentado, os valuations astronômicos (acima de $50B) são raros e extremamente concentrados, com empresas como ByteDance e SpaceX distorcendo a média superior.
                </p>
              </div>
            </div>
          </section>

          {/* Conclusão Técnica */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Database size={20} className="text-[#00d4ff]" />
              <h3 className="text-xl font-semibold text-white">Conclusão Técnica</h3>
            </div>
            <div className="bg-[#0a0a0a] border border-[#00d4ff]/10 rounded-lg p-4">
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff9d] mt-1">•</span>
                  <span><strong className="text-white">Manipulação de Strings e Datas:</strong> Conversão de formatos complexos para análise.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff9d] mt-1">•</span>
                  <span><strong className="text-white">Storytelling com Dados:</strong> Tradução de funções de agregação em insights de mercado.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff9d] mt-1">•</span>
                  <span><strong className="text-white">Visualização Estatística:</strong> Uso de gráficos de contagem, barras e dispersão para diferentes propósitos analíticos.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Footer */}
          <div className="flex items-center justify-between pt-6 border-t border-[#00d4ff]/10">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00ff9d] animate-pulse" />
              <span className="text-gray-500 text-xs font-mono">Projeto Completo</span>
            </div>
            <a
              href="https://github.com/MurielMessias?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#00d4ff] hover:text-[#00ff9d] transition-colors text-sm"
            >
              <span>Ver no GitHub</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
