import React from 'react';

const PortfolioUnicorns01: React.FC = () => {
  return (
    <div className="py-6 px-2 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Unicórnios - Análise de Dados</h2>
      <div className="prose max-w-none">
        <p>
          Este projeto apresenta uma análise exploratória dos dados de unicórnios (startups avaliadas em mais de 1 bilhão de dólares) até setembro de 2022. Foram utilizadas bibliotecas como <b>pandas</b>, <b>matplotlib</b>, <b>seaborn</b> e <b>numpy</b> para manipulação, visualização e análise dos dados.
        </p>
        <h3>Principais etapas do notebook:</h3>
        <ol>
          <li>Importação das bibliotecas e leitura dos dados</li>
          <li>Renomeação de colunas para português</li>
          <li>Análise de campos nulos e únicos</li>
          <li>Visualização dos setores e países</li>
          <li>Conversão de datas e extração de ano/mês</li>
          <li>Agrupamentos e análises por país, setor e valor</li>
        </ol>
        <h3>Exemplo de código:</h3>
        <pre>{`
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Leitura dos dados
Base_Dados = pd.read_csv('unicorns_till_sep_2022.csv')

# Renomear colunas
Base_Dados.rename(columns={
    'Company': 'Empresa',
    'Valuation ($B)': 'Valor',
    'Date Joined': 'Data de Entrada',
    'Country': 'País',
    'City': 'Cidade',
    'Industry': 'Setor',
    'Investors': 'Investidores',
    'Funding ($B)': 'Empreendimento ($B)',
}, inplace=True)

# Análise de setores
setores = Base_Dados['Setor'].value_counts()
plt.figure(figsize=(15,6))
plt.bar(setores.index, setores)
plt.title('Análise dos Setores')
plt.xticks(rotation=45, ha='right')
plt.show()
`}</pre>
        <h3>Principais Gráficos:</h3>
        <ul>
          <li>Heatmap de campos nulos</li>
          <li>Barras dos setores com mais unicórnios</li>
          <li>Pizza dos países com mais unicórnios</li>
          <li>Linhas dos valores por país</li>
        </ul>
        <h3>Conclusões:</h3>
        <ul>
          <li>Os EUA concentram a maior parte dos unicórnios.</li>
          <li>Setores de tecnologia e fintech são predominantes.</li>
          <li>O Brasil aparece entre os países com mais unicórnios, mas ainda distante dos líderes.</li>
        </ul>
        <p>
          Veja o notebook completo e os códigos no repositório ou solicite a execução dos gráficos para visualizar os resultados.
        </p>
      </div>
    </div>
  );
};

export default PortfolioUnicorns01;
