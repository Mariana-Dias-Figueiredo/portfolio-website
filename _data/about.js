// "About me" page: the journey timeline and the hobbies.
module.exports = {
  title: { en: "The bioengineer behind the lab coat", pt: "A bioengenheira por trás da bata de laboratório" },
  intro: {
    en: "Here you can get to know me a little better and learn more about my journey to biological engineering.",
    pt: "Aqui pode conhecer-me um pouco melhor e saber mais sobre o meu percurso até engenharia biológica."
  },
  journeyTitle: { en: "My Journey", pt: "O Meu Percurso" },

  // Each milestone shows its photos in a little rotating gallery
  timeline: [
    {
      year: { en: "2003", pt: "2003" },
      text: {
        en: "I was born in Viseu, a small town in central-northern Portugal. This is where I spent my childhood and teenage years, and where I made lifelong friends.",
        pt: "Nasci em Viseu, uma pequena cidade do centro-norte de Portugal. Foi aqui que passei a minha infância e adolescência e onde fiz amizades para a vida."
      },
      photos: [
        { src: "/images/childhood-carnival.webp", caption: { en: "Little me dressed up for Carnival.", pt: "Eu, em pequena, mascarada para o Carnaval." } },
        { src: "/images/childhood-parents.webp", caption: { en: "Me and my parents on holiday.", pt: "Eu e os meus pais de férias." } },
        { src: "/images/childhood-birthday.webp", caption: { en: "Me on my 8th birthday.", pt: "No meu 8.º aniversário." } }
      ]
    },
    {
      year: { en: "2018", pt: "2018" },
      text: {
        en: "In June 2018 I graduated from elementary school and had the honor of receiving the best graduating student merit award. That same year, I enrolled in my local high school in the Sciences and Technologies track.",
        pt: "Em junho de 2018 concluí o ensino básico e tive a honra de receber o prémio de mérito de melhor aluna finalista. Nesse mesmo ano, entrei no ensino secundário, no ramo de Ciências e Tecnologias."
      },
      photos: [
        { src: "/images/prom-2018.webp", caption: { en: "At Prom '18.", pt: "No baile de finalistas de 2018." } },
        { src: "/images/school-friends.webp", caption: { en: "With friends in elementary school (2013–2018).", pt: "Com amigos na escola (2013–2018)." } },
        { src: "/images/award-school.webp", caption: { en: "Receiving the award.", pt: "A receber o prémio." } }
      ]
    },
    {
      year: { en: "2021", pt: "2021" },
      text: {
        en: "In June 2021, I graduated from high school after the Covid-19 nightmare. My excellent grades and my passion for the exact sciences led me to pursue a career in Bioengineering, and I moved to Porto to begin my university journey.",
        pt: "Em junho de 2021 concluí o ensino secundário, depois do pesadelo da Covid-19. As minhas excelentes notas e a paixão pelas ciências exatas levaram-me a seguir Bioengenharia, pelo que me mudei para o Porto para iniciar o meu percurso universitário."
      },
      photos: [
        { src: "/images/covid.webp", caption: { en: "The Covid-19 era.", pt: "Os tempos do Covid-19." } },
        { src: "/images/school-pe.webp", caption: { en: "At the end of a physical education class.", pt: "No fim de uma aula de Educação Física." } },
        { src: "/images/porto.webp", caption: { en: "Moved to Porto!!!", pt: "Mudança para o Porto!!!" } }
      ]
    },
    {
      year: { en: "2024", pt: "2024" },
      text: {
        en: "My Bachelor's degree in Bioengineering was complete! I met incredible people whose friendship I'll always cherish and fell in love with Biological Engineering, which motivated me to continue my journey with a Master's degree in this field.",
        pt: "Concluí a Licenciatura em Bioengenharia! Conheci pessoas incríveis, cujas amizades guardarei para sempre, e apaixonei-me pela Engenharia Biológica, o que me motivou a prosseguir com um Mestrado nesta área."
      },
      photos: [
        { src: "/images/lab.webp", caption: { en: "Falling in love with lab work.", pt: "A apaixonar-me pelo trabalho de laboratório." } }
      ]
    },
    {
      year: { en: "2026", pt: "2026" },
      text: {
        en: "I completed my Master's in Bioengineering, and my dissertation earned me a merit award from the Portuguese Order of Engineers. Along the way, I did an Erasmus+ internship at KU Leuven, where I gained valuable professional experience.",
        pt: "Concluí o Mestrado em Bioengenharia e a minha dissertação deu-me um prémio de mérito da Ordem dos Engenheiros. Pelo caminho, realizei um estágio Erasmus+ na KU Leuven, onde adquiri uma valiosa experiência profissional."
      },
      photos: [
        { src: "/images/leuven.webp", caption: { en: "Saying goodbye to Leuven, my Erasmus city.", pt: "A despedir-me de Lovaina, a minha cidade de Erasmus." } },
        { src: "/images/prom-2026.webp", caption: { en: "At Prom with friends.", pt: "No baile de finalistas com amigos." } },
        { src: "/images/masters-defense.webp", caption: { en: "After successfully defending my Master's dissertation.", pt: "Depois de defender com sucesso a minha dissertação de Mestrado." } }
      ]
    },
    {
      year: { en: "Present", pt: "Hoje" },
      text: {
        en: "I'm now looking for new professional opportunities to apply my skills and knowledge in a dynamic and challenging environment. Let's connect!",
        pt: "Procuro agora novas oportunidades profissionais para aplicar as minhas competências e conhecimentos num ambiente dinâmico e desafiante. Vamos falar!"
      },
      photos: [
        { src: "/images/profile-headshot.webp", caption: { en: "Looking for a job opportunity.", pt: "À procura de uma oportunidade profissional." } }
      ]
    }
  ],

  hobbiesTitle: { en: "When I'm Not in the Lab", pt: "Quando Não Estou no Laboratório" },
  hobbiesIntro: {
    en: "Bioengineer by day, fantasy bookworm by night. Reading is without a doubt one of my greatest passions (besides food!!). Here you can learn more about my hobbies and interests.",
    pt: "Bioengenheira de dia, leitora compulsiva de fantasia à noite. A leitura é, sem dúvida, uma das minhas maiores paixões (sem ser comida!!). Aqui pode conhecer melhor os meus passatempos e interesses."
  },

  hobbies: [
    {
      id: "foodie",
      icon: "bakery_dining",
      name: { en: "Foodie Lover", pt: "Amante de Gastronomia" },
      text: {
        en: "I absolutely love food, especially my home country's traditional cuisine. If I had to introduce you to my Portuguese favorites... well, it is incredibly hard to pinpoint my favorite dish, but \"Carne de Porco à Alentejana\" is definitely one of them, after my favorite soup, \"Caldo Verde\", as a starter. A dessert that cannot be missed is \"Bolo de Bolacha\", which literally translates to cookie cake and is the taste of my childhood. To finish, you would have an espresso with the classic, most famous and my all-time favorite pastry: the \"Pastel de Nata\".",
        pt: "Adoro comida, especialmente a cozinha tradicional do meu país. Se tivesse de lhe apresentar as minhas preferências portuguesas... bem, é incrivelmente difícil escolher um prato favorito, mas a \"Carne de Porco à Alentejana\" é, sem dúvida, um deles, depois da minha sopa preferida, o \"Caldo Verde\", como entrada. Uma sobremesa que não pode faltar é o \"Bolo de Bolacha\", o sabor da minha infância. Para terminar, um café acompanhado do clássico, mais famoso e o meu doce preferido de sempre: o \"Pastel de Nata\"."
      },
      photos: [
        { src: "/images/food-caldo-verde.webp", caption: { en: "The phenomenal Caldo Verde (cabbage soup).", pt: "O fenomenal Caldo Verde." } },
        { src: "/images/food-alentejana.webp", caption: { en: "The legendary Carne de Porco à Alentejana (Alentejo-style pork and clams).", pt: "A lendária Carne de Porco à Alentejana." } }
      ]
    },
    {
      id: "bookworm",
      icon: "menu_book",
      name: { en: "Bookworm", pt: "Entusiasta de Livros" },
      text: {
        en: "When I need a real-world escape, you'll find me completely absorbed in a good book. My favorite genres are sci-fi, fantasy and romance. Since I got my e-reader, I have no problem deluding myself by saying \"just one more chapter\" and then ending up reading 8 more... but at least it is a healthy addiction, right?",
        pt: "Quando preciso de escapar à realidade, vai encontrar-me completamente absorvida por um bom livro. Os meus géneros preferidos são ficção científica, fantasia e romance. Desde que tenho um leitor de livros digitais, não tenho qualquer problema em enganar-me a mim própria com um \"só mais um capítulo\" e acabar por ler mais oito... mas, pelo menos, é um vício saudável, certo?"
      },
      photos: [
        { src: "/images/book.webp", caption: { en: "My favorite fantasy book: \"When The Moon Hatched\" by Sarah A. Parker.", pt: "O meu livro de fantasia preferido: \"When The Moon Hatched\", de Sarah A. Parker." } }
      ]
    },
    {
      id: "tv",
      icon: "movie",
      name: { en: "Binge-Watcher", pt: "Maratonista de Séries" },
      text: {
        en: "My introduction to the binge-watching world started pretty young with the amazing, show-stopping Hannah Montana (I was a superfan!!!). But my true love for the screen began with \"The Vampire Diaries\", my first ever teen TV show. I quickly went deeper into fantasy and added political intrigue, with \"Game of Thrones\" becoming my all-time favorite show. I equally enjoy movies and documentaries, and my comfort film is \"Little Women\", directed by Greta Gerwig.",
        pt: "A minha entrada no mundo das maratonas de séries começou bem cedo, com a incrível e inesquecível Hannah Montana (eu era superfã!!!). Mas o meu verdadeiro amor pelo ecrã começou com \"The Vampire Diaries\", a minha primeira série juvenil. Rapidamente mergulhei mais a fundo na fantasia e acrescentei intriga política, sendo \"A Guerra dos Tronos\" a minha série preferida de sempre. Gosto igualmente de filmes e documentários, e o meu filme de conforto é \"Mulherzinhas\", realizado por Greta Gerwig."
      },
      photos: [
        { src: "/images/tv-concert.webp", caption: { en: "Me and my sister going to a Miley Cyrus (Hannah Montana) concert.", pt: "Eu e a minha irmã a caminho de um concerto da Miley Cyrus (Hannah Montana)." } },
        { src: "/images/tv-got.webp", caption: { en: "A scene from \"Game of Thrones\".", pt: "Uma cena de \"A Guerra dos Tronos\"." } }
      ]
    },
    {
      id: "dog",
      icon: "pets",
      name: { en: "Dog Parent", pt: "Mãe de Patudo" },
      text: {
        en: "Meet my furry best friend and soulmate of 10 years and counting... Luna!!! My forever cuddle buddy.",
        pt: "Apresento-lhe a minha melhor amiga de quatro patas e alma gémea há 10 anos e a contar... a Luna!!! A minha eterna companheira de mimos."
      },
      photos: [
        { src: "/images/luna-1.webp", caption: { en: "Luna at 5 years old.", pt: "A Luna com 5 anos." } },
        { src: "/images/luna-2.webp", caption: { en: "Me saying goodbye to Luna before my Erasmus journey.", pt: "A despedir-me da Luna antes da minha aventura Erasmus." } }
      ]
    }
  ]
};
