// Home page texts.
module.exports = {
  greeting: { en: "Hi,<br>I'm Mariana Figueiredo.", pt: "Olá,<br>sou a Mariana Figueiredo." },
  lead: {
    en: "Bioengineer with a MSc from the University of Porto, turning biological research into practical solutions, from bioactive peptides and alternative proteins to bioprocess development. Looking for my next challenge anywhere in the biotech industry.",
    pt: "Bioengenheira, Mestre pela Universidade do Porto, focada em transformar investigação biológica em soluções práticas, desde os péptidos bioativos e proteínas alternativas até ao desenvolvimento de bioprocessos. À procura do próximo desafio em qualquer área da indústria biotecnológica."
  },
  ctaPrimary: { en: "Get in touch", pt: "Entre em contacto" },
  ctaSecondary: { en: "See my experience", pt: "Ver a minha experiência" },
  aboutButton: { en: "About me", pt: "Sobre mim" },
  photoAlt: { en: "Portrait of Mariana Figueiredo", pt: "Retrato de Mariana Figueiredo" },

  // The highlights strip. "count" numbers animate when they scroll into view.
  highlightsLabel: { en: "Highlights", pt: "Destaques" },
  highlights: [
    {
      count: 2, suffix: "+",
      label: { en: "years of research experience", pt: "anos de experiência em investigação" }
    },
    {
      count: 2,
      label: { en: "countries: research in Portugal and Belgium (KU Leuven)", pt: "países: investigação em Portugal e na Bélgica (KU Leuven)" }
    },
    {
      count: 3, suffix: "×",
      label: { en: "higher bioactivity of an agar industry by-productafter RSM optimization (MSc research)", pt: "maior bioatividade de um subproduto da indústria do ágar após otimização por RSM (dissertação de Mestrado)" }
    },
    {
      icon: "workspace_premium",
      label: { en: "Master's Award 2026, Portuguese Order of Engineers (North Region)", pt: "Prémio Mestrado 2026, Ordem dos Engenheiros (Região Norte)" },
      link: "/education/#awards"
    }
  ],

  // Featured project
  featured: {
    label: { en: "Featured research", pt: "Investigação em destaque" },
    title: { en: "From seaweed side-streams to bioactive peptides", pt: "De subprodutos de algas a péptidos bioativos" },
    meta: { en: "MSc research · LEPABE, Faculty of Engineering of the University of Porto · 2026", pt: "Investigação de Mestrado · LEPABE, Faculdade de Engenharia da Universidade do Porto · 2026" },
    intro: {
      en: "I developed a valorization pathway for the alkaline wastewater of an agar production industry, turning discarded seaweed protein into high-value bioactive peptides.",
      pt: "Desenvolvi uma via de valorização para o efluente alcalino de uma indústria de produção de ágar, transformando a proteína de algas descartada em péptidos bioativos de elevado valor acrescentado."
    },
    steps: [
      {
        icon: "water",
        title: { en: "Side-stream", pt: "Subproduto" },
        text: {
          en: "The alkaline wastewater of the agar production industry carries seaweed protein that is normally discarded. Here it becomes the raw material.",
          pt: "O efluente alcalino da indústria de produção de ágar contém proteína de algas que normalmente é descartada. Aqui, torna-se a matéria-prima."
        }
      },
      {
        icon: "query_stats",
        title: { en: "RSM optimization", pt: "Otimização por RSM" },
        text: {
          en: "Response Surface Methodology optimized the hydrolysis, tripling the total ACE-inhibitory capacity of the effluent.",
          pt: "A Metodologia de Superfície de Resposta permitiu otimizar a hidrólise, triplicando a capacidade inibitória total da ECA do efluente."
        }
      },
      {
        icon: "medication",
        title: { en: "Bioactive peptides", pt: "Péptidos bioativos" },
        text: {
          en: "The ACE-inhibitory peptides kept over 50% of their activity after simulated gastrointestinal digestion, a promising sign for functional foods and nutraceuticals.",
          pt: "Os péptidos inibidores da ECA mantiveram mais de 50% da sua atividade após digestão gastrointestinal simulada, um indicador promissor para alimentos funcionais e nutracêuticos."
        }
      },
      {
        icon: "biotech",
        title: { en: "Biocatalyst", pt: "Biocatalisador" },
        text: {
          en: "Optimized the production of an immobilized-protease biocatalyst, reaching an 80% immobilization yield. The biocatalyst was characterized by Michaelis-Menten kinetics and could be a promising solution to address the hydrolysis process viability.",
          pt: "A produção de um biocatalisador de protease imobilizada foi otimizada, alcançando um rendimento de imobilização de 80%. O biocatalisador foi caracterizado por cinética de Michaelis-Menten e pode ser uma solução promissora para abordar a viabilidade do processo de hidrólise."
        }
      }
    ],
    link: { en: "See all my experience", pt: "Ver toda a experiência" }
  },

  // The three summary cards
  cards: {
    expertise: {
      title: { en: "Areas of Expertise", pt: "Áreas de Competência" },
      link: { en: "Explore my expertise", pt: "Explorar competências" }
    },
    experience: {
      title: { en: "Experience and Projects", pt: "Experiência e Projetos" },
      latest: { en: "Most recent", pt: "Mais recente" },
      link: { en: "See more experience", pt: "Ver mais experiência" }
    },
    education: {
      title: { en: "Education", pt: "Formação" },
      link: { en: "See more education", pt: "Ver mais formação" }
    }
  }
};
