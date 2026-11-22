// Short interface texts (menu, buttons, footer...) in both languages.
module.exports = {
  role: { en: "Bioengineer", pt: "Bioengenheira" },
  location: { en: "Viseu, Portugal", pt: "Viseu, Portugal" },

  nav: {
    home: { en: "Home", pt: "Início" },
    about: { en: "About me", pt: "Sobre mim" },
    expertise: { en: "Expertise", pt: "Competências" },
    projects: { en: "Experience", pt: "Experiência" },
    education: { en: "Education", pt: "Formação" },
    contact: { en: "Contact", pt: "Contactos" },
    menu: { en: "Menu", pt: "Menu" },
    close: { en: "Close", pt: "Fechar" },
    switchTo: { en: "Ver em português", pt: "View in English" },
    mainNav: { en: "Main navigation", pt: "Navegação principal" }
  },

  // "Request my CV" opens a small form (sent through Netlify Forms).
  cvButton: { en: "Request my CV", pt: "Pedir o meu CV" },
  cvForm: {
    title: { en: "Request my CV", pt: "Pedir o meu CV" },
    intro: {
      en: "Tell me a little about the opportunity and I'll send you an up-to-date CV tailored to it.",
      pt: "Conte-me um pouco sobre a oportunidade e envio-lhe um CV atualizado e adaptado à mesma."
    },
    name: { en: "Your name", pt: "O seu nome" },
    company: { en: "Company", pt: "Empresa" },
    position: { en: "Position", pt: "Função / vaga" },
    positionHint: { en: "e.g. Associate Scientist", pt: "ex.: Associate Scientist" },
    contactType: { en: "You are", pt: "É" },
    contactTypes: [
      { en: "Recruiter", pt: "Recrutador(a)" },
      { en: "Hiring manager", pt: "Responsável pela contratação" },
      { en: "Other", pt: "Outro" }
    ],
    email: { en: "Email to send the CV to", pt: "E-mail para onde enviar o CV" },
    message: { en: "Message", pt: "Mensagem" },
    optional: { en: "optional", pt: "opcional" },
    privacy: {
      en: "Your details are only used to send you my CV.",
      pt: "Os seus dados são usados apenas para lhe enviar o meu CV."
    },
    submit: { en: "Send request", pt: "Enviar pedido" },
    sending: { en: "Sending…", pt: "A enviar…" },
    successTitle: { en: "Thank you!", pt: "Obrigada!" },
    successText: {
      en: "I'll send my CV to {email} as soon as possible.",
      pt: "Vou enviar o meu CV para {email} o mais brevemente possível."
    },
    error: {
      en: "Something went wrong. Please try again, or email me directly at",
      pt: "Ocorreu um erro. Tente novamente ou envie-me um e-mail diretamente para"
    }
  },
  // Used if JavaScript is off: the button falls back to a plain email with this subject and text
  cvRequest: {
    subject: { en: "CV request – Mariana Figueiredo", pt: "Pedido de CV – Mariana Figueiredo" },
    body: {
      en: "Hi Mariana,\n\nI came across your portfolio and would like to receive your CV.\n\nCompany / role: \n\nBest regards,\n",
      pt: "Olá Mariana,\n\nVi o seu portfólio e gostaria de receber o seu CV.\n\nEmpresa / função: \n\nCom os melhores cumprimentos,\n"
    }
  },
  openToWork: { en: "Open to opportunities in biotech", pt: "Disponível para oportunidades em biotecnologia" },

  // Browser tab titles
  titles: {
    home: { en: "Mariana Figueiredo | Bioengineer", pt: "Mariana Figueiredo | Bioengenheira" },
    about: { en: "About me | Mariana Figueiredo", pt: "Sobre mim | Mariana Figueiredo" },
    expertise: { en: "Areas of Expertise | Mariana Figueiredo", pt: "Áreas de Competência | Mariana Figueiredo" },
    projects: { en: "Experience & Projects | Mariana Figueiredo", pt: "Experiência e Projetos | Mariana Figueiredo" },
    education: { en: "Education | Mariana Figueiredo", pt: "Formação | Mariana Figueiredo" }
  },

  // Text shown by Google and in link previews
  description: {
    en: "Bioengineer from Viseu, Portugal, with research experience in bioactive peptides, alternative proteins and bioprocess engineering. Open to opportunities across the biotech industry.",
    pt: "Bioengenheira de Viseu, Portugal, com experiência de investigação em péptidos bioativos, proteínas alternativas e engenharia de bioprocessos. Disponível para oportunidades em toda a indústria biotecnológica."
  },
  previewAlt: {
    en: "Mariana Figueiredo, Bioengineer from Viseu, Portugal",
    pt: "Mariana Figueiredo, Bioengenheira de Viseu, Portugal"
  },

  footer: {
    heading: { en: "Let's talk.", pt: "Vamos conversar." },
    text: {
      en: "Whether it's a role, a project or a question about my research, I'd love to hear from you.",
      pt: "Seja uma oportunidade profissional, um projeto ou uma questão sobre a minha investigação, terei todo o gosto em receber a sua mensagem."
    },
    copyEmail: { en: "Copy email", pt: "Copiar e-mail" },
    copied: { en: "Copied!", pt: "Copiado!" },
    phone: { en: "Phone", pt: "Telefone" },
    call: { en: "Call", pt: "Ligar" },
    copy: { en: "Copy", pt: "Copiar" },
    backToTop: { en: "Back to top", pt: "Voltar ao topo" }
  },

  gallery: {
    hintHover: { en: "Hover over a degree to see photos", pt: "Passe o cursor sobre um grau académico para ver fotografias" },
    hintTap: { en: "Tap a degree to see photos", pt: "Toque num grau académico para ver fotografias" }
  },

  scrollHint: { en: "Scroll to see the whole journey", pt: "Deslize para ver o percurso completo" },
  flipHintHover: { en: "Hover to explore", pt: "Passe o cursor para explorar" },
  flipHintTap: { en: "Tap to explore", pt: "Toque para explorar" }
};
