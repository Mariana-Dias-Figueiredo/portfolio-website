// "Education" page: degrees (with photo galleries), awards, courses and volunteering.
module.exports = {
  title: { en: "Education", pt: "Formação" },
  intro: {
    en: "My academic foundation and continuous learning journey in the world of biological engineering.",
    pt: "A minha base académica e o meu percurso de aprendizagem contínua no mundo da engenharia biológica."
  },
  academicTitle: { en: "Academic Background", pt: "Percurso Académico" },
  keyUnits: { en: "Key Curricular Units:", pt: "Principais Unidades Curriculares:" },

  degrees: [
    {
      id: "master-degree",
      title: { en: "Master in Bioengineering", pt: "Mestrado em Bioengenharia" },
      dates: { en: "Sep 2024 – Sep 2026", pt: "set. 2024 – set. 2026" },
      school: { en: "Faculty of Engineering of the University of Porto", pt: "Faculdade de Engenharia da Universidade do Porto" },
      // Leave empty ("") to hide the grade
      grade: { en: "Grade 18/20 - Grade B (ECTS scale)", pt: "Classificação 18/20 - Classificação B (escala ECTS)" },
      text: {
        en: "Specialization in Biological Engineering. Focused on designing and optimizing biological systems for industrial applications, including the extraction and purification of bioactive peptides from alternative proteins.",
        pt: "Especialização em Engenharia Biológica. Focado na conceção e otimização de sistemas biológicos para aplicações industriais, incluindo a extração e purificação de péptidos bioativos a partir de proteínas alternativas."
      },
      units: {
        en: "Separation Processes in Biotechnology, Food Technology, Protein Engineering, Management and Innovation in Bioengineering, Biomolecular and Metabolic Engineering, Quality and Safety.",
        pt: "Processos de Separação em Biotecnologia, Tecnologia Alimentar, Engenharia de Proteínas, Gestão e Inovação em Bioengenharia, Engenharia Biomolecular e Metabólica, Qualidade e Segurança."
      },
      photos: [
        { src: "/images/master-1.webp", caption: { en: "Graduating class of 2026 on a traditional graduation parade.", pt: "Finalistas de 2026 no cortejo académico." } },
        { src: "/images/master-2.webp", caption: { en: "The day of my official graduation ceremony.", pt: "O dia da minha cerimónia oficial de graduação." } },
        { src: "/images/master-3.webp", caption: { en: "Conducting interfacial studies during my Erasmus+ internship at KU Leuven.", pt: "A realizar estudos interfaciais no estágio Erasmus+ na KU Leuven." } },
        { src: "/images/master-4.webp", caption: { en: "Attending the 2025 Symposium on Bioengineering.", pt: "No Simpósio de Bioengenharia de 2025." } },
        { src: "/images/master-5.webp", caption: { en: "Study visit to Portugal's leading brewery, as part of the Food Technology course.", pt: "Visita de estudo à principal cervejeira portuguesa, no âmbito da unidade curricular de Tecnologia Alimentar." } },
        { src: "/images/masters-defense.webp", caption: { en: "After successfully defending my Master's dissertation.", pt: "Depois de defender com sucesso a minha dissertação de Mestrado." } }
      ]
    },
    {
      id: "bachelor-degree",
      title: { en: "Bachelor in Bioengineering", pt: "Licenciatura em Bioengenharia" },
      dates: { en: "Sep 2021 – Jun 2024", pt: "set. 2021 – jun. 2024" },
      school: { en: "Faculty of Engineering of the University of Porto", pt: "Faculdade de Engenharia da Universidade do Porto" },
      grade: { en: "Grade 16/20 - Grade B (ECTS scale)", pt: "Classificação 16/20 - Classificação B (escala ECTS)" },
      text: {
        en: "Built a solid foundation in biology, chemistry and engineering principles. It was during my undergraduate studies that I developed a strong interest in biological processes and chose to specialize in Biological Engineering.",
        pt: "Consolidação de bases sólidas em biologia, química e princípios de engenharia. Foi durante a licenciatura que desenvolvi um forte interesse pelos processos biológicos e optei por me especializar em Engenharia Biológica."
      },
      units: {
        en: "General Microbiology, Transport Phenomena, Biochemistry, Introduction to Systems and Bioprocess Engineering, Interfacial Phenomena in Biosystems, Enzymatic Engineering, Fermentation Engineering, Separation Processes.",
        pt: "Microbiologia Geral, Fenómenos de Transferência, Bioquímica, Introdução à Engenharia de Sistemas e Bioprocessos, Fenómenos Interfaciais em Biossistemas, Engenharia Enzimática, Engenharia de Fermentação, Processos de Separação."
      },
      photos: [
        { src: "/images/bachelor-1.webp", caption: { en: "Team-building activity of Já T'Explico, a student organization I was part of.", pt: "Atividade de <em>team building</em> da Já T'Explico, uma associação de estudantes da qual fiz parte." } },
        { src: "/images/bachelor-2.webp", caption: { en: "Working in the lab for the Instrumental Methods of Analysis course.", pt: "No laboratório, na unidade curricular de Métodos Instrumentais de Análise." } },
        { src: "/images/bachelor-3.webp", caption: { en: "At a faculty party with fellow colleagues and friends.", pt: "Numa festa da faculdade com colegas e amigos." } },
        { src: "/images/bachelor-4.webp", caption: { en: "A practical lab class in the Protein Engineering course.", pt: "Uma aula prática de laboratório de Engenharia de Proteínas." } },
        { src: "/images/bachelor-5.webp", caption: { en: "Volunteering in the clean-up of Homem do Leme Beach, organized by FOCA and AEFEUP.", pt: "Voluntariado na limpeza da Praia do Homem do Leme, organizada pela FOCA e pela AEFEUP." } }
      ]
    },
    {
      id: "high-school",
      title: { en: "High School – Sciences and Technologies", pt: "Ensino Secundário – Ciências e Tecnologias" },
      dates: { en: "Sep 2018 – Jun 2021", pt: "set. 2018 – jun. 2021" },
      school: { en: "Alves Martins High School", pt: "Escola Secundária Alves Martins" },
      grade: { en: "Grade 19/20", pt: "Classificação 19/20 valores" },
      text: {
        en: "Focused on the basics of Biology, Chemistry and Mathematics. This is when I discovered my passion for the exact sciences, which ultimately led me to bioengineering.",
        pt: "Foco nas bases de Biologia, Química e Matemática. Foi nesta fase que descobri a minha paixão pelas ciências exatas, o que acabou por me conduzir à bioengenharia."
      },
      units: null,
      photos: [
        { src: "/images/highschool.webp", caption: { en: "Junior year class.", pt: "A minha turma do 11.º ano." } }
      ]
    }
  ],

  awardsTitle: { en: "Awards & Merits", pt: "Prémios e Distinções" },
  awards: [
    {
      title: { en: "Master's Award - OERN 2026", pt: "Prémio Mestrado - OERN 2026" },
      issuer: { en: "Portuguese Order of Engineers - North Region ", pt: "Ordem dos Engenheiros - Região Norte" },
      year: "2026",
      text: {
        en: "Awarded by the Portuguese Order of Engineers in recognition of my Master's dissertation in Bioengineering.",
        pt: "Atribuído pela Ordem dos Engenheiros em reconhecimento da minha dissertação de Mestrado em Bioengenharia."
      },
      photo: "/images/award-masters-oern.webp",
      photoAlt: { en: "Me receiving the OERN 2026 Master's Award", pt: "Eu a receber o Prémio Mestrado OERN 2026" }
    },
    {
      title: { en: "Canon António Barreiros Award for the Best Graduating Student", pt: "Prémio Cónego António Barreiros à Melhor Aluna Finalista" },
      issuer: { en: "Associação dos Antigos Alunos do Colégio da Via-Sacra, Viseu", pt: "Associação dos Antigos Alunos do Colégio da Via-Sacra, Viseu" },
      year: "2018",
      text: {
        en: "Recognized as the best graduating student of my year upon completing elementary school.",
        pt: "Distinguida como a melhor aluna finalista do meu ano na conclusão do ensino básico."
      },
      photo: "/images/award-school.webp",
      photoAlt: { en: "Me receiving the best graduating student award", pt: "Eu a receber o prémio de melhor aluna finalista" }
    }
  ],

  coursesTitle: { en: "Complementary Education", pt: "Formação Complementar" },
  viewCertificate: { en: "View certificate", pt: "Ver certificado" },
  courses: [
    {
      title: { en: "Research Summer School in Microbial Communities", pt: "Escola de Verão de Investigação em Comunidades Microbianas" },
      issuer: { en: "University of Porto", pt: "Universidade do Porto" },
      date: { en: "Jul 2024", pt: "jul. 2024" },
      text: {
        en: "Intensive three-week hands-on training in research techniques for microbial communities. The program included a one-week internship at CIIMAR, where I contributed to a project on the bioremediation potential of microbial communities in polluted environments.",
        pt: "Formação prática intensiva de três semanas em técnicas de investigação em comunidades microbianas. O programa incluiu um estágio de uma semana no CIIMAR, onde contribuí para um projeto sobre o potencial de biorremediação de comunidades microbianas em ambientes poluídos."
      },
      thumb: "/images/cert-summer-school.webp",
      certificate: "/documents/cert-summer-school.pdf"
    },
    {
      title: { en: "Foundations of Project Management", pt: "Fundamentos de Gestão de Projetos" },
      issuer: { en: "Google / Coursera · Online", pt: "Google / Coursera · Online" },
      date: { en: "Jan 2024", pt: "jan. 2024" },
      text: {
        en: "Gained a solid foundation in project management principles, including project planning, scheduling, stakeholder communication, risk management and team coordination.",
        pt: "Aquisição de uma base sólida em princípios de gestão de projetos, incluindo planeamento, calendarização, comunicação com as partes interessadas, gestão de riscos e coordenação de equipas."
      },
      thumb: "/images/cert-project-management.webp",
      certificate: "/documents/cert-project-management.pdf"
    },
    {
      title: { en: "From Basic to Advanced - Complete Microsoft Excel Course", pt: "From Basic to Advanced - Complete Microsoft Excel Course" },
      issuer: { en: "Udemy · Online", pt: "Udemy · Online" },
      date: { en: "Aug 2023", pt: "ago. 2023" },
      text: {
        en: "Online certification focused on advanced Microsoft Excel skills, including data analysis and spreadsheet automation for efficient data management.",
        pt: "Certificação online centrada em competências avançadas de Microsoft Excel, incluindo análise de dados e automatização de folhas de cálculo para uma gestão de dados eficiente."
      },
      thumb: "/images/cert-excel.webp",
      certificate: "/documents/cert-excel.pdf"
    }
  ],

  volunteeringTitle: { en: "Volunteering", pt: "Voluntariado" },
  volunteering: [
    {
      role: { en: "Member of the Mentoring Department", pt: "Membro do Departamento de Mentoria" },
      org: { en: "Já T'Explico", pt: "Já T'Explico" },
      dates: { en: "Oct 2023 – Oct 2024", pt: "out. 2023 – out. 2024" },
      text: {
        en: "Responsible for planning and providing weekly educational guidance to children in need.",
        pt: "Responsável pelo planeamento e acompanhamento educativo semanal de crianças em situação de carência."
      },
      photo: "/images/bachelor-1.webp",
      photoAlt: { en: "Já T'Explico team-building activity", pt: "Atividade de team building da Já T'Explico" }
    },
    {
      role: { en: "Beach Clean-up Volunteer", pt: "Voluntária na Limpeza de Praia" },
      org: { en: "FOCA and AEFEUP", pt: "FOCA e AEFEUP" },
      dates: { en: "", pt: "" },
      text: {
        en: "Took part in the clean-up of Homem do Leme Beach in Porto.",
        pt: "Participação na limpeza da Praia do Homem do Leme, no Porto."
      },
      photo: "/images/bachelor-5.webp",
      photoAlt: { en: "Beach clean-up at Homem do Leme", pt: "Limpeza da Praia do Homem do Leme" }
    }
  ]
};
