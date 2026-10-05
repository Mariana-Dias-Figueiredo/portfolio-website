// "Experience and Projects" page. The first job in the list also appears on the home page.
module.exports = {
  title: { en: "Experience and Projects", pt: "Experiência e Projetos" },
  intro: {
    en: "A showcase of my practical experience, along with key academic projects and research.",
    pt: "Uma apresentação da minha experiência prática, bem como dos principais projetos académicos e de investigação."
  },
  jobsTitle: { en: "Professional Experience", pt: "Experiência Profissional" },
  projectsTitle: { en: "Featured Projects", pt: "Projetos em Destaque" },
  associatedWith: { en: "Associated with:", pt: "Associado a:" },

  jobs: [
    {
      role: { en: "MSc Graduate Researcher", pt: "Investigadora (Dissertação de Mestrado)" },
      short: "LEPABE",
      org: {
        en: "Laboratory for Process Engineering, Environment, Biotechnology and Energy (LEPABE)",
        pt: "Laboratório de Engenharia de Processos, Ambiente, Biotecnologia e Energia (LEPABE)"
      },
      place: { en: "Porto, Portugal", pt: "Porto, Portugal" },
      dates: { en: "Feb 2026 – Sep 2026", pt: "fev. 2026 – set. 2026" },
      intro: {
        en: "Developed a valorization pathway for the alkaline wastewater of an agar production industry, converting discarded seaweed protein into high-value ACE-inhibitory peptides:",
        pt: "Desenvolvimento de uma via de valorização para o efluente alcalino de uma indústria de produção de ágar, convertendo a proteína de algas descartada em péptidos inibidores da ECA de elevado valor acrescentado:"
      },
      points: [
        {
          en: "Optimized hydrolysis via Response Surface Methodology (RSM), reaching a <strong>3-fold increase</strong> in the total inhibitory capacity of the effluent.",
          pt: "Otimização da hidrólise por Metodologia de Superfície de Resposta (RSM), alcançando um <strong>aumento de 3 vezes</strong> na capacidade inibitória total do efluente."
        },
        {
          en: "Assessed peptide bioaccessibility through simulated gastrointestinal digestion, with <strong>over 50%</strong> of the ACE-inhibitory activity retained after digestion.",
          pt: "Avaliação da bioacessibilidade dos péptidos por digestão gastrointestinal simulada, com <strong>mais de 50%</strong> da atividade inibitória da ECA preservada após a digestão."
        },
        {
          en: "Engineered an innovative immobilized-protease biocatalyst, reaching an <strong>80.6% immobilization yield</strong> after RSM optimization.",
          pt: "Desenvolvimento de um biocatalisador inovador de protease imobilizada, atingindo um <strong>rendimento de imobilização de 80,6%</strong> após otimização por RSM."
        },
        {
          en: "Characterized the free and immobilized enzyme by Michaelis-Menten kinetic modeling (non-linear regression), retaining 40-55% of the free enzyme's specific activity.",
          pt: "Caracterização da enzima livre e imobilizada por modelação cinética de Michaelis-Menten (regressão não linear), mantendo 40-55% da atividade específica da enzima livre."
        }
      ],
      tags: [
        { en: "Waste Valorization", pt: "Valorização de Resíduos" },
        { en: "Response Surface Methodology", pt: "Metodologia de Superfície de Resposta" },
        { en: "Enzyme Immobilization", pt: "Imobilização Enzimática" },
        { en: "Enzyme Kinetics", pt: "Cinética Enzimática" },
        { en: "Bioaccessibility", pt: "Bioacessibilidade" },
        { en: "Bioactivity Assessment", pt: "Avaliação de Bioatividade" }
      ]
    },
    {
      role: { en: "Research Intern (Erasmus+)", pt: "Estagiária de Investigação (Erasmus+)" },
      short: "KU Leuven",
      org: {
        en: "Laboratory of Food Chemistry and Biochemistry, KU Leuven",
        pt: "Laboratório de Química e Bioquímica Alimentar, KU Leuven"
      },
      place: { en: "Leuven, Belgium", pt: "Lovaina, Bélgica" },
      dates: { en: "Sep 2025 – Jan 2026", pt: "set. 2025 – jan. 2026" },
      intro: {
        en: "Investigated the foaming properties of wheat bran proteins and their use in aerated food products:",
        pt: "Estudo das propriedades espumantes de proteínas de farelo de trigo e da sua aplicação em produtos alimentares arejados:"
      },
      points: [
        {
          en: "Evaluated the foaming properties of plant-based proteins through standardized foaming assays.",
          pt: "Avaliação das propriedades espumantes de proteínas vegetais através de ensaios de espuma normalizados."
        },
        {
          en: "Characterized interfacial properties using tensiometry assays to correlate adsorption kinetics and interfacial rheology with foaming performance.",
          pt: "Caracterização das propriedades interfaciais por tensiometria, correlacionando a cinética de adsorção e a reologia interfacial com o desempenho espumante."
        },
        {
          en: "Enhanced the sustainability profile of sponge cakes by reducing egg reliance by 25% through plant-based protein substitution, while maintaining batter and cake integrity.",
          pt: "Melhoria do perfil de sustentabilidade de pães de ló, reduzindo em 25% a dependência de ovo através da substituição por proteína vegetal, sem comprometer a integridade da massa e do bolo."
        }
      ],
      tags: [
        { en: "Plant-Based Protein", pt: "Proteína Vegetal" },
        { en: "Food Foaming Properties", pt: "Propriedades Espumantes" },
        { en: "Protein Techno-Functionality", pt: "Tecnofuncionalidade Proteica" },
        { en: "Interfacial Science", pt: "Ciência Interfacial" }
      ]
    },
    {
      role: { en: "Research Intern", pt: "Estagiária de Investigação" },
      short: "LEPABE",
      org: {
        en: "Laboratory for Process Engineering, Environment, Biotechnology and Energy (LEPABE)",
        pt: "Laboratório de Engenharia de Processos, Ambiente, Biotecnologia e Energia (LEPABE)"
      },
      place: { en: "Porto, Portugal", pt: "Porto, Portugal" },
      dates: { en: "Feb 2025 – Jun 2025", pt: "fev. 2025 – jun. 2025" },
      intro: {
        en: "Demonstrated a promising applicability of algae hydrolysates in nutraceuticals through bioactivity assessment:",
        pt: "Demonstração do potencial de aplicação de hidrolisados de algas em nutracêuticos através da avaliação da sua bioatividade:"
      },
      points: [
        {
          en: "Extracted and enzymatically hydrolysed macroalgae-based proteins to yield bioactive peptides.",
          pt: "Extração e hidrólise enzimática de proteínas de macroalgas para a obtenção de péptidos bioativos."
        },
        {
          en: "Evaluated anti-hypertensive potential through ACE-inhibitory activity assays, achieving IC<sub>50</sub> values of 52.4 µg/mL and 56.6 µg/mL for <em>Ulva</em> sp. and <em>Mastocarpus stellatus</em> peptides, a competitive ACE-inhibitory capacity compared to synthetic inhibitors.",
          pt: "Avaliação do potencial anti-hipertensivo através de ensaios de atividade inibitória da ECA, com valores de IC<sub>50</sub> de 52,4 µg/mL e 56,6 µg/mL para os péptidos de <em>Ulva</em> sp. e <em>Mastocarpus stellatus</em>, uma capacidade inibitória competitiva face a inibidores sintéticos."
        },
        {
          en: "Identified 30 potential anti-hypertensive peptides through <em>in silico</em> screening and simulated their bioaccessibility and bioavailability.",
          pt: "Identificação de 30 potenciais péptidos anti-hipertensivos por rastreio <em>in silico</em> e simulação da respetiva bioacessibilidade e biodisponibilidade."
        }
      ],
      tags: [
        { en: "Protein Extraction and Purification", pt: "Extração e Purificação de Proteínas" },
        { en: "Bioactive Peptides", pt: "Péptidos Bioativos" },
        { en: "Enzymatic Bioprocessing", pt: "Bioprocessamento Enzimático" },
        { en: "Nutrient Bioavailability and Bioaccessibility", pt: "Biodisponibilidade e Bioacessibilidade de Nutrientes" }
      ]
    },
    {
      role: { en: "Engineer Intern", pt: "Estagiária de Engenharia" },
      short: "AgroGrIN Tech",
      org: { en: "AgroGrIN Tech", pt: "AgroGrIN Tech" },
      place: { en: "Porto, Portugal", pt: "Porto, Portugal" },
      dates: { en: "Feb 2024 – May 2024", pt: "fev. 2024 – mai. 2024" },
      intro: {
        en: "Developed and applied, for the first time, work methodologies in a business environment:",
        pt: "Desenvolvimento e aplicação, pela primeira vez, de metodologias de trabalho em contexto empresarial:"
      },
      points: [
        {
          en: "Contributed to the optimization of production workflows, identifying potential bottlenecks and proposing alternative unit operations.",
          pt: "Contributo para a otimização dos fluxos de produção, identificando potenciais <em>bottlenecks</em> e propondo operações unitárias alternativas."
        },
        {
          en: "Conducted equipment research and technical feasibility studies for unit operations to assess their potential integration in the company's production system.",
          pt: "Pesquisa de equipamentos e estudos de viabilidade técnica de operações unitárias, avaliando a sua potencial integração no sistema produtivo da empresa."
        }
      ],
      tags: [
        { en: "Downstream Processing Design", pt: "Conceção de Processos de Downstream" },
        { en: "Bioprocess Analysis", pt: "Análise de Bioprocessos" }
      ]
    }
  ],

  projects: [
    {
      icon: "precision_manufacturing",
      title: { en: "Industrial Production of Alpha-Mannosidase", pt: "Produção Industrial de Alfa-Manosidase" },
      year: "2025",
      association: { en: "Master in Bioengineering", pt: "Mestrado em Bioengenharia" },
      associationLink: "/education/#master-degree",
      associationTooltip: { en: "Go to Master in Bioengineering", pt: "Ir para Mestrado em Bioengenharia" },
      text: {
        en: "Developed a patent-based industrial design for alpha-mannosidase production and purification for pharmaceutical use: managed the project lifecycle from initial market analysis and process description to process flow modeling, technical equipment sizing for upstream and downstream operations and economic analysis.",
        pt: "Desenvolvimento de um projeto industrial, baseado em patente, para a produção e purificação de alfa-manosidase para uso farmacêutico: gestão do ciclo de vida do projeto, desde a análise de mercado e descrição do processo até à modelação do fluxograma, ao dimensionamento técnico dos equipamentos de upstream e downstream e à análise económica."
      },
      links: [
        {
          label: { en: "Read the abstract", pt: "Ler o resumo" },
          href: "/documents/alpha-mannosidase-abstract.pdf"
        }
      ]
    }
  ]
};
