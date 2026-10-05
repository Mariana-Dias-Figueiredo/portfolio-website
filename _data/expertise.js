// "Areas of Expertise" page. Each area lists its skills; the short name goes on the
// flip card and the detail explains where the skill was applied.
module.exports = {
  title: { en: "Areas of Expertise", pt: "Áreas de Competência" },
  intro: {
    en: "The four areas where I have built specialized knowledge, bridging biological systems and optimized engineering solutions.",
    pt: "As quatro áreas em que desenvolvi conhecimento especializado, unindo sistemas biológicos e soluções de engenharia otimizadas."
  },
  backTitle: { en: "Techniques & Tools", pt: "Técnicas e Ferramentas" },
  depthTitle: { en: "In Depth", pt: "Em Detalhe" },
  depthIntro: {
    en: "Where and how I have applied each of these skills.",
    pt: "Onde e como apliquei cada uma destas competências."
  },

  areas: [
    {
      id: "bioprocess",
      icon: "precision_manufacturing",
      name: { en: "Bioprocess Engineering", pt: "Engenharia de Bioprocessos" },
      skills: [
        {
          name: { en: "Enzymatic Bioprocessing", pt: "Bioprocessamento Enzimático" },
          detail: {
            en: "Enzymatic hydrolysis of macroalgae proteins into bioactive peptides (LEPABE, 2025-2026) and protease biocatalysis in my MSc research.",
            pt: "Hidrólise enzimática de proteínas de macroalgas em péptidos bioativos (LEPABE, 2025-2026) e biocatálise com proteases na dissertação de Mestrado."
          }
        },
        {
          name: { en: "Enzyme Immobilization", pt: "Imobilização Enzimática" },
          detail: {
            en: "Immobilized-protease biocatalyst reaching an 80.6% immobilization yield (MSc research, LEPABE).",
            pt: "Biocatalisador de protease imobilizada com um rendimento de imobilização de 80,6% (dissertação de Mestrado, LEPABE)."
          }
        },
        {
          name: { en: "Enzyme Kinetics", pt: "Cinética Enzimática" },
          detail: {
            en: "Michaelis-Menten modeling of free and immobilized enzyme by non-linear regression.",
            pt: "Modelação de Michaelis-Menten da enzima livre e imobilizada por regressão não linear."
          }
        },
        {
          name: { en: "Downstream Processing", pt: "Processamento a Jusante (<em>Downstream</em>)" },
          detail: {
            en: "Protein extraction and purification, purification train design for alpha-mannosidase and unit operation feasibility studies at AgroGrIN Tech.",
            pt: "Extração e purificação de proteínas, conceção da sequência de purificação de alfa-manosidase e estudos de viabilidade técnica de operações unitárias na AgroGrIN Tech."
          }
        },
        {
          name: { en: "Process Optimization", pt: "Otimização de Processos" },
          detail: {
            en: "Identifying production bottlenecks (AgroGrIN Tech) and a 3-fold gain in the inhibitory capacity of an agar-industry effluent through optimized hydrolysis.",
            pt: "Identificação de <em>bottlenecks</em> na produção (AgroGrIN Tech) e aumento de 3 vezes na capacidade inibitória de um efluente da indústria do ágar através da otimização da hidrólise."
          }
        },
        {
          name: { en: "Bioreactor Design", pt: "Projeto de Bioreatores" },
          detail: {
            en: "Upstream equipment sizing in the industrial design of alpha-mannosidase production.",
            pt: "Dimensionamento dos equipamentos de upstream no projeto industrial de produção de alfa-manosidase."
          }
        }
      ]
    },
    {
      id: "lab",
      icon: "science",
      name: { en: "Laboratory Research", pt: "Investigação Laboratorial" },
      skills: [
        {
          name: { en: "Protein Extraction and Purification", pt: "Extração e Purificação de Proteínas" },
          detail: {
            en: "Recovery of proteins from macroalgae (<em>Ulva</em> sp., <em>Mastocarpus stellatus</em>, <em>Gelidium corneum</em>) and from plant sources.",
            pt: "Recuperação de proteínas de macroalgas (<em>Ulva</em> sp., <em>Mastocarpus stellatus</em>, <em>Gelidium corneum</em>) e de fontes vegetais."
          }
        },
        {
          name: { en: "Bioactive Peptides", pt: "Péptidos Bioativos" },
          detail: {
            en: "ACE-inhibitory activity assays to determine the IC<sub>50</sub> values.",
            pt: "Ensaios de atividade inibitória da ECA para determinar os valores de IC<sub>50</sub>."
          }
        },
        {
          name: { en: "Interfacial Science", pt: "Ciência Interfacial" },
          detail: {
            en: "Tensiometry, adsorption kinetics and interfacial rheology to explain foaming behavior (KU Leuven).",
            pt: "Tensiometria, cinética de adsorção e reologia interfacial para explicar o comportamento espumante (KU Leuven)."
          }
        },
        {
          name: { en: "<em>In silico</em> Peptide Screening", pt: "Rastreio <em>in silico</em> de Péptidos" },
          detail: {
            en: "Identified 30 potential anti-hypertensive peptides through computational screening.",
            pt: "Identificação de 30 potenciais péptidos anti-hipertensivos por rastreio computacional."
          }
        },
        {
          name: { en: "Microbiology Techniques", pt: "Técnicas de Microbiologia" },
          detail: {
            en: "Hands-on training at the University of Porto Summer School and a bioremediation project at CIIMAR.",
            pt: "Formação prática na Escola de Verão da Universidade do Porto e num projeto de biorremediação no CIIMAR."
          }
        }
      ]
    },
    {
      id: "data",
      icon: "query_stats",
      name: { en: "Data Analysis", pt: "Análise de Dados" },
      skills: [
        {
          name: { en: "Design of Experiments (DoE)", pt: "Planeamento Experimental (DoE)" },
          detail: {
            en: "Experimental design to optimize enzymatic hydrolysis and protease immobilization (MSc research).",
            pt: "Planeamento de ensaios para otimizar a hidrólise enzimática e a imobilização da protease (investigação de Mestrado)."
          }
        },
        {
          name: { en: "Response Surface Methodology", pt: "Metodologia de Superfície de Resposta" },
          detail: {
            en: "RSM models that tripled an effluent's ACE-inhibitory capacity and reached an 80.6% immobilization yield.",
            pt: "Modelos de RSM que triplicaram a capacidade inibitória da ECA de um efluente e atingiram um rendimento de imobilização de 80,6%."
          }
        },
        {
          name: { en: "JMP Software", pt: "Software JMP" },
          detail: {
            en: "Statistical analysis and experimental design.",
            pt: "Análise estatística e planeamento experimental."
          }
        },
        {
          name: { en: "Microsoft Excel", pt: "Microsoft Excel" },
          detail: {
            en: "Certified in advanced data analysis and spreadsheet automation.",
            pt: "Certificação em análise avançada de dados e automatização de folhas de cálculo."
          }
        },
        {
          name: { en: "Python for Data Visualization", pt: "Python para Visualização de Dados" },
          detail: {
            en: "Plotting and exploring experimental results.",
            pt: "Representação gráfica e exploração de resultados experimentais."
          }
        },
        {
          name: { en: "MATLAB", pt: "MATLAB" },
          detail: {
            en: "Numerical modeling and engineering calculations.",
            pt: "Modelação numérica e cálculos de engenharia."
          }
        }
      ]
    },
    {
      id: "food",
      icon: "restaurant_menu",
      name: { en: "Biotechnology", pt: "Biotecnologia" },
      skills: [
        {
          name: { en: "Alternative Proteins", pt: "Proteínas Alternativas" },
          detail: {
            en: "Plant-based and macroalgae proteins as sustainable ingredients.",
            pt: "Proteínas vegetais e de macroalgas como ingredientes sustentáveis."
          }
        },
        {
          name: { en: "Protein Techno-Functionality", pt: "Tecnofuncionalidade Proteica" },
          detail: {
            en: "Foaming properties in aerated foods (KU Leuven).",
            pt: "Propriedades espumantes em alimentos arejados (KU Leuven)."
          }
        },
        {
          name: { en: "Nutrient Bioavailability & Bioaccessibility", pt: "Biodisponibilidade e Bioacessibilidade de Nutrientes" },
          detail: {
            en: "Simulated gastrointestinal digestion (over 50% of ACE-inhibitory activity retained) and <em>in silico</em> bioavailability prediction.",
            pt: "Digestão gastrointestinal simulada (mais de 50% da atividade inibitória da ECA preservada) e previsão <em>in silico</em> da biodisponibilidade."
          }
        },
        {
          name: { en: "Functional Foods", pt: "Alimentos Funcionais" },
          detail: {
            en: "Bioactive peptides with anti-hypertensive potential for functional foods and nutraceuticals.",
            pt: "Péptidos bioativos com potencial anti-hipertensivo para alimentos funcionais e nutracêuticos."
          }
        }
      ]
    }
  ],

  toolsTitle: { en: "Tools & Languages", pt: "Ferramentas e Línguas" },
  toolsLabel: { en: "Technical proficiencies", pt: "Competências técnicas" },
  tools: ["JMP", "MATLAB", "Microsoft Excel", "Python", "LaTeX"],
  languagesLabel: { en: "Languages", pt: "Línguas" },
  languages: [
    { name: { en: "Portuguese", pt: "Português" }, level: { en: "Native", pt: "Língua materna" } },
    { name: { en: "English", pt: "Inglês" }, level: { en: "Professional proficiency", pt: "Proficiência profissional" } }
  ]
};
