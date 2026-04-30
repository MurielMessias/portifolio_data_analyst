import { X, ExternalLink, BarChart3, Database, Code, TrendingUp, Filter, DollarSign, Users, Package } from 'lucide-react';

interface ProjectModal02Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal02({ isOpen, onClose }: ProjectModal02Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-[#080808] border border-[#00ff9d]/20 rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-[#080808] border-b border-[#00ff9d]/10 p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 border border-[#00ff9d]/30 flex items-center justify-center">
              <BarChart3 size={24} className="text-[#00ff9d]" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Dashboard de Performance Comercial (2022-2024)</h2>
              <p className="text-gray-500 text-sm font-mono">Projeto 02</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-[#00ff9d] transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Sobre o Projeto */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Database size={20} className="text-[#00ff9d]" />
              <h3 className="text-xl font-semibold text-white">Sobre o Projeto</h3>
            </div>
            <div className="bg-[#0a0a0a] border border-[#00ff9d]/10 rounded-lg p-4">
              <p className="text-gray-400 text-sm leading-relaxed">
                Este projeto consiste no desenvolvimento de um ecossistema de Business Intelligence voltado para análise do desempenho comercial de uma empresa de varejo global. O objetivo foi transformar dados brutos de vendas, clientes e produtos em insights estratégicos, permitindo apoiar decisões gerenciais, identificar padrões de consumo e oportunidades de crescimento.
              </p>
            </div>
          </section>

          {/* Tecnologias Utilizadas */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Code size={20} className="text-[#00ff9d]" />
              <h3 className="text-xl font-semibold text-white">Tecnologias Utilizadas</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Power BI', 'DAX', 'Power Query / M', 'Modelagem de Dados'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm font-mono border border-[#00ff9d]/30 text-[#00ff9d]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Engenharia de Dados e Modelagem */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Database size={20} className="text-[#00ff9d]" />
              <h3 className="text-xl font-semibold text-white">Engenharia de Dados e Modelagem</h3>
            </div>
            <div className="bg-[#0a0a0a] border border-[#00ff9d]/10 rounded-lg p-4">
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff9d] mt-1">-</span>
                  <span>Consolidação de múltiplas bases (2022, 2023 e 2024) em um modelo único</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff9d] mt-1">-</span>
                  <span>Estruturação em modelo dimensional (Fato + Dimensões)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff9d] mt-1">-</span>
                  <span>Tratamento de inconsistências e padronização de dados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff9d] mt-1">-</span>
                  <span>Criação de métricas como: Receita total, Ticket médio, Volume de vendas, Quantidade de clientes</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Principais Insights Gerados */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp size={20} className="text-[#00ff9d]" />
              <h3 className="text-xl font-semibold text-white">Principais Insights Gerados</h3>
            </div>
            <div className="bg-[#0a0a0a] border border-[#00ff9d]/10 rounded-lg p-4">
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff9d] mt-1">-</span>
                  <span>Crescimento significativo de receita entre 2022 e 2023, indicando expansão operacional</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff9d] mt-1">-</span>
                  <span>Identificação de variações sazonais no faturamento ao longo dos meses</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff9d] mt-1">-</span>
                  <span>Concentração de vendas em regiões específicas, com destaque para América do Norte e Europa</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff9d] mt-1">-</span>
                  <span>Distribuição equilibrada de vendas por gênero, com leve predominância feminina</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff9d] mt-1">-</span>
                  <span>Identificação das marcas com maior contribuição no faturamento total</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Análise Comparativa */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Filter size={20} className="text-[#00ff9d]" />
              <h3 className="text-xl font-semibold text-white">Análise Comparativa (Visão Geral vs Segmentada)</h3>
            </div>
            <div className="bg-[#0a0a0a] border border-[#00ff9d]/10 rounded-lg p-4">
              <p className="text-gray-400 text-sm mb-4">
                O dashboard foi projetado para permitir análises dinâmicas por filtros, possibilitando comparar o comportamento geral com visões segmentadas.
              </p>
              
              {/* Visão Geral */}
              <div className="mb-6">
                <h4 className="text-lg font-medium text-white mb-3 flex items-center gap-2">
                  <BarChart3 size={16} className="text-[#00ff9d]" />
                  Visão Geral
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                  <div className="bg-[#080808] border border-[#00ff9d]/20 rounded p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <DollarSign size={14} className="text-[#00ff9d]" />
                      <span className="text-xs text-gray-500">Receita total</span>
                    </div>
                    <p className="text-white font-bold">548,51 Mi</p>
                  </div>
                  <div className="bg-[#080808] border border-[#00ff9d]/20 rounded p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Package size={14} className="text-[#00ff9d]" />
                      <span className="text-xs text-gray-500">Produtos vendidos</span>
                    </div>
                    <p className="text-white font-bold">2,12 Mi</p>
                  </div>
                  <div className="bg-[#080808] border border-[#00ff9d]/20 rounded p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp size={14} className="text-[#00ff9d]" />
                      <span className="text-xs text-gray-500">Ticket médio</span>
                    </div>
                    <p className="text-white font-bold">$478,65</p>
                  </div>
                  <div className="bg-[#080808] border border-[#00ff9d]/20 rounded p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Users size={14} className="text-[#00ff9d]" />
                      <span className="text-xs text-gray-500">Clientes</span>
                    </div>
                    <p className="text-white font-bold">18,48 mil</p>
                  </div>
                </div>
                
                {/* Imagem Visão Geral */}
                <div className="bg-[#080808] rounded-lg p-4 flex items-center justify-center">
                  <img 
                    src="/assets/images/normal.png" 
                    alt="Dashboard - Visão Geral" 
                    className="max-w-full h-auto rounded border border-[#00ff9d]/10"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const placeholder = target.nextElementSibling as HTMLElement;
                      if (placeholder) placeholder.style.display = 'flex';
                    }}
                  />
                  <div className="hidden flex-col items-center justify-center p-8 text-gray-500">
                    <BarChart3 size={48} className="mb-3 opacity-50" />
                    <p className="text-sm text-center">Dashboard completo com visão geral do desempenho comercial</p>
                    <p className="text-xs text-gray-600 mt-2">Adicione a imagem em: /assets/images/normal.png</p>
                  </div>
                </div>
              </div>

              {/* Visão Filtrada */}
              <div>
                <h4 className="text-lg font-medium text-white mb-3 flex items-center gap-2">
                  <Filter size={16} className="text-[#00ff9d]" />
                  Visão com Filtros Aplicados
                </h4>
                <div className="bg-[#080808] rounded-lg p-4 flex items-center justify-center">
                  <img 
                    src="/assets/images/filtrada.png" 
                    alt="Dashboard - Visão com Filtros" 
                    className="max-w-full h-auto rounded border border-[#00ff9d]/10"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const placeholder = target.nextElementSibling as HTMLElement;
                      if (placeholder) placeholder.style.display = 'flex';
                    }}
                  />
                  <div className="hidden flex-col items-center justify-center p-8 text-gray-500">
                    <Filter size={48} className="mb-3 opacity-50" />
                    <p className="text-sm text-center">Dashboard com filtros aplicados mostrando visão segmentada</p>
                    <p className="text-xs text-gray-600 mt-2">Adicione a imagem em: /assets/images/filtrada.png</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Capacidade de Análise */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp size={20} className="text-[#00ff9d]" />
              <h3 className="text-xl font-semibold text-white">Capacidade de Análise</h3>
            </div>
            <div className="bg-[#0a0a0a] border border-[#00ff9d]/10 rounded-lg p-4">
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff9d] mt-1">-</span>
                  <span>Comparação entre períodos (Year over Year)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff9d] mt-1">-</span>
                  <span>Identificação de sazonalidade</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff9d] mt-1">-</span>
                  <span>Análise de performance por segmento</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Diferenciais do Projeto */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 size={20} className="text-[#00ff9d]" />
              <h3 className="text-xl font-semibold text-white">Diferenciais do Projeto</h3>
            </div>
            <div className="bg-[#0a0a0a] border border-[#00ff9d]/10 rounded-lg p-4">
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff9d] mt-1">-</span>
                  <span>Aplicação de conceitos de BI e modelagem dimensional</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff9d] mt-1">-</span>
                  <span>Uso de KPIs relevantes para negócio (receita, ticket médio, volume)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff9d] mt-1">-</span>
                  <span>Estrutura pensada para tomada de decisão</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff9d] mt-1">-</span>
                  <span>Interface visual limpa e intuitiva (foco em UX)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff9d] mt-1">-</span>
                  <span>Capacidade de análise interativa via filtros</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Footer */}
          <div className="flex items-center justify-between pt-6 border-t border-[#00ff9d]/10">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00ff9d] animate-pulse" />
              <span className="text-gray-500 text-xs font-mono">Projeto Completo</span>
            </div>
            <a
              href="https://github.com/MurielMessias?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#00ff9d] hover:text-white transition-colors text-sm"
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
