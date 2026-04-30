import { X, ExternalLink, BarChart3, Database, Code, TrendingUp, Users, GraduationCap, BookOpen } from 'lucide-react';

interface ProjectModal03Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal03({ isOpen, onClose }: ProjectModal03Props) {
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
              <GraduationCap size={24} className="text-[#00d4ff]" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Análise de Desempenho Acadêmico (Students Performance)</h2>
              <p className="text-gray-500 text-sm font-mono">Projeto 03</p>
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
          {/* Tecnologias Utilizadas */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Code size={20} className="text-[#00d4ff]" />
              <h3 className="text-xl font-semibold text-white">Tecnologias Utilizadas</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm font-mono border border-[#00d4ff]/30 text-[#00d4ff]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Tratamento e Exploração de Dados */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Database size={20} className="text-[#00d4ff]" />
              <h3 className="text-xl font-semibold text-white">Tratamento e Exploração de Dados (EDA)</h3>
            </div>
            <div className="bg-[#0a0a0a] border border-[#00d4ff]/10 rounded-lg p-4">
              <div className="space-y-3">
                <div className="text-gray-300 font-mono text-sm">
                  <span className="text-[#00ff9d]">#</span> Verificando Campos Nulos
                </div>
                <div className="text-gray-300 font-mono text-sm">
                  Base_dados.isnull().sum()
                </div>
                <div className="text-gray-300 font-mono text-sm">
                  <span className="text-[#00ff9d]">#</span> Diagnóstico visual de nulos
                </div>
                <div className="text-gray-300 font-mono text-sm">
                  plt.figure(figsize=(15,8))<br/>
                  plt.title('Análise de campos nulos')<br/>
                  sns.heatmap(Base_dados.isnull(), cbar=False);
                </div>
              </div>
              <div className="mt-4 p-3 bg-[#00d4ff]/5 border-l-2 border-[#00d4ff]">
                <p className="text-gray-400 text-sm">
                  <span className="text-[#00d4ff] font-semibold">Análise Técnica:</span> A base de dados apresentou-se extremamente limpa, sem valores nulos em nenhuma das variáveis principais, o que permitiu focar diretamente nas correlações estatísticas.
                </p>
              </div>
            </div>
          </section>

          {/* Análise por Gênero e Distribuição */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Users size={20} className="text-[#00d4ff]" />
              <h3 className="text-xl font-semibold text-white">Análise por Gênero e Distribuição</h3>
            </div>
            <div className="bg-[#0a0a0a] border border-[#00d4ff]/10 rounded-lg p-4">
              <div className="space-y-3">
                <div className="text-gray-300 font-mono text-sm">
                  <span className="text-[#00ff9d]">#</span> Distribuição de Gênero
                </div>
                <div className="text-gray-300 font-mono text-sm">
                  Base_dados['gender'].value_counts(normalize=True) * 100
                </div>
              </div>
              <div className="mt-4 p-3 bg-[#00d4ff]/5 border-l-2 border-[#00d4ff]">
                <p className="text-gray-400 text-sm">
                  <span className="text-[#00d4ff] font-semibold">Saída Real:</span> A base possui uma distribuição equilibrada, com 51.8% de estudantes do sexo feminino e 48.2% do sexo masculino.
                </p>
              </div>
            </div>
          </section>

          {/* Desempenho e Variáveis Socioeconômicas */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp size={20} className="text-[#00d4ff]" />
              <h3 className="text-xl font-semibold text-white">Desempenho e Variáveis Socioeconômicas</h3>
            </div>

            {/* A. Relação entre Gênero e Notas */}
            <div className="mb-6">
              <h4 className="text-lg font-medium text-white mb-3">A. Relação entre Gênero e Notas</h4>
              <div className="bg-[#0a0a0a] border border-[#00d4ff]/10 rounded-lg p-4">
                <div className="space-y-3 mb-4">
                  <div className="text-gray-300 font-mono text-sm">
                    <span className="text-[#00ff9d]">#</span> Boxplot de Notas de Matemática por Gênero
                  </div>
                  <div className="text-gray-300 font-mono text-sm">
                    sns.boxplot(data=Base_dados, x='math score', y='gender')
                  </div>
                </div>
                
                {/* Imagem Gênero e Matemática */}
                <div className="mb-4">
                  <div className="bg-[#080808] rounded-lg p-4 flex items-center justify-center">
                    <img 
                      src="/assets/images/generoematematica.png" 
                      alt="Boxplot Math Score por Gênero" 
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
                      <p className="text-sm text-center">Boxplot comparando notas de matemática por gênero</p>
                      <p className="text-xs text-gray-600 mt-2">Adicione a imagem em: /assets/images/generoematematica.png</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 bg-[#00d4ff]/5 border-l-2 border-[#00d4ff]">
                  <p className="text-gray-400 text-sm">
                    <span className="text-[#00d4ff] font-semibold">Insight:</span> Embora as médias sejam próximas, o grupo masculino tende a ter uma performance ligeiramente superior em Matemática, enquanto o grupo feminino apresenta maior consistência com menos outliers negativos extremados.
                  </p>
                </div>
              </div>
            </div>

            {/* B. Impacto da Escolaridade dos Pais */}
            <div className="mb-6">
              <h4 className="text-lg font-medium text-white mb-3">B. Impacto da Escolaridade dos Pais</h4>
              <div className="bg-[#0a0a0a] border border-[#00d4ff]/10 rounded-lg p-4">
                <div className="space-y-3 mb-4">
                  <div className="text-gray-300 font-mono text-sm">
                    <span className="text-[#00ff9d]">#</span> Agrupamento por Escolaridade dos Pais
                  </div>
                  <div className="text-gray-300 font-mono text-sm">
                    Base_dados.groupby(by=['parental level of education']).describe()['math score']
                  </div>
                </div>
                
                {/* Imagem Escolaridade e Notas */}
                <div className="mb-4">
                  <div className="bg-[#080808] rounded-lg p-4 flex items-center justify-center">
                    <img 
                      src="/assets/images/escolaridadeenota.png" 
                      alt="Boxplot Math Score por Escolaridade dos Pais" 
                      className="max-w-full h-auto rounded border border-[#00d4ff]/10"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const placeholder = target.nextElementSibling as HTMLElement;
                        if (placeholder) placeholder.style.display = 'flex';
                      }}
                    />
                    <div className="hidden flex-col items-center justify-center p-8 text-gray-500">
                      <GraduationCap size={48} className="mb-3 opacity-50" />
                      <p className="text-sm text-center">Boxplot comparando notas por escolaridade dos pais</p>
                      <p className="text-xs text-gray-600 mt-2">Adicione a imagem em: /assets/images/escolaridadeenota.png</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 bg-[#00d4ff]/5 border-l-2 border-[#00d4ff]">
                  <p className="text-gray-400 text-sm">
                    <span className="text-[#00d4ff] font-semibold">Insight:</span> Estudantes cujos pais possuem mestrado apresentam as maiores médias em todas as disciplinas, indicando que o ambiente educacional familiar é um forte preditor de sucesso acadêmico.
                  </p>
                </div>
              </div>
            </div>

            {/* C. Eficácia do Curso Preparatório */}
            <div className="mb-6">
              <h4 className="text-lg font-medium text-white mb-3">C. Eficácia do Curso Preparatório</h4>
              <div className="bg-[#0a0a0a] border border-[#00d4ff]/10 rounded-lg p-4">
                <div className="space-y-3 mb-4">
                  <div className="text-gray-300 font-mono text-sm">
                    <span className="text-[#00ff9d]">#</span> Comparação visual entre quem fez e quem não fez o curso
                  </div>
                  <div className="text-gray-300 font-mono text-sm">
                    sns.scatterplot(data=Base_dados, x='math score', y='writing score', hue='test preparation course')
                  </div>
                </div>
                
                {/* Imagem Race Scores */}
                <div className="mb-4">
                  <div className="bg-[#080808] rounded-lg p-4 flex items-center justify-center">
                    <img 
                      src="/assets/images/racescores.png" 
                      alt="Pairplot Desempenho por Curso Preparatório" 
                      className="max-w-full h-auto rounded border border-[#00d4ff]/10"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const placeholder = target.nextElementSibling as HTMLElement;
                        if (placeholder) placeholder.style.display = 'flex';
                      }}
                    />
                    <div className="hidden flex-col items-center justify-center p-8 text-gray-500">
                      <BookOpen size={48} className="mb-3 opacity-50" />
                      <p className="text-sm text-center">Pairplot mostrando desempenho por curso preparatório</p>
                      <p className="text-xs text-gray-600 mt-2">Adicione a imagem em: /assets/images/racescores.png</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 bg-[#00d4ff]/5 border-l-2 border-[#00d4ff]">
                  <p className="text-gray-400 text-sm">
                    <span className="text-[#00d4ff] font-semibold">Insight:</span> Estudantes que completaram o curso preparatório estão concentrados na parte superior direita do gráfico, comprovando que o curso aumenta significativamente a probabilidade de notas altas tanto em Matemática quanto em Escrita.
                  </p>
                </div>
              </div>
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
