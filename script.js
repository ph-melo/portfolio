//function toggleMode() {
  let light = localStorage.getItem('light') //ponto de amazenamento do navegador
  const Switch = document.getElementById('switch') //Declarando meu switch a um Objeto
  const img = document.querySelector("#profile img") //Pegando a tag da imagem
  
  // Declarei o Objeto caso tenha 'Light' na classlist (ON)
  const enableDarkmode = () => {
    document.body.classList.add('light')
    localStorage.setItem('light', 'active')
    img.setAttribute("src", "./assets/avatar-light.png") //altera a imagem
  }
 
  // Declarei o objeto caso nao tenha 'light' na classlist (OFF)
  const disableDarkmode = () =>{
    document.body.classList.remove('light')
    localStorage.setItem('light', null)
    img.setAttribute("src", "./assets/avatar.png") //mantem a imagem
    
  }
  
  if(light === "active") enableDarkmode()
    
  Switch.addEventListener("click", () => {
    light = localStorage.getItem('light')
    light !== "active" ? enableDarkmode() : disableDarkmode()
  })

//tradução

document.addEventListener("DOMContentLoaded", function () {
  const translations = {
    pt: {
      aboutMe: "Sobre Mim",
      myCareer: "Minha Carreira",
      myProjects: "Meus Projetos",
      sourceCode: "Código desse Website",
      footer: "By: Paulo ",
      experience: "Experiência",
      skills: "Habilidades",
      contact: "Contato",
      aboutText: "Olá! Meu nome é Paulo Melo e sou um desenvolvedor fullstack apaixonado por tecnologia. Tenho experiência com diversas tecnologias e estou sempre em busca de novos desafios.",
      experienceText: "Atualmente trabalho como desenvolvedor fullstack pleno na Vivo e estou buscando uma oportunidade no TI do Itaú como desenvolvedor sênior.",
      skillsText: "Minhas principais habilidades incluem desenvolvimento web, banco de dados e arquiteturas modernas de software.",
      contactText: "Sinta-se à vontade para entrar em contato comigo para discutirmos projetos e oportunidades!"
    },
    en: {
      aboutMe: "About Me",
      myCareer: "My Career",
      myProjects: "My Projects",
      sourceCode: "Source Code of this Website",
      footer: "By: Paulo Melo",
      experience: "Experience",
      skills: "Skills",
      contact: "Contact",
      aboutText: "Hello! My name is Paulo Melo and I am a fullstack developer passionate about technology. I have experience with various technologies and I am always looking for new challenges.",
      experienceText: "I currently work as a fullstack developer at Vivo and I am looking for an opportunity at Itaú's IT department as a senior developer.",
      skillsText: "My main skills include web development, databases, and modern software architectures.",
      contactText: "Feel free to reach out to me to discuss projects and opportunities!"
    }
  };

  const toggleLangBtn = document.getElementById("toggle-language");
  let currentLang = localStorage.getItem("language") || "pt";

  function updateTexts(lang) {
    document.querySelector("ul li:nth-child(1) a").textContent = translations[lang].aboutMe;
    document.querySelector("ul li:nth-child(2) a").textContent = translations[lang].myCareer;
    document.querySelector("ul li:nth-child(3) a").textContent = translations[lang].myProjects;
    document.querySelector("ul li:nth-child(4) a").textContent = translations[lang].sourceCode;
    document.querySelector("footer").textContent = translations[lang].footer;

    const experienceTitle = document.getElementById("experience-title");
    if (experienceTitle) experienceTitle.textContent = translations[lang].experience;
    
    const skillsTitle = document.getElementById("skills-title");
    if (skillsTitle) skillsTitle.textContent = translations[lang].skills;

    const contactTitle = document.getElementById("contact-title");
    if (contactTitle) contactTitle.textContent = translations[lang].contact;

    const aboutText = document.getElementById("about-text");
    if (aboutText) aboutText.textContent = translations[lang].aboutText;
    
    const experienceText = document.getElementById("experience-text");
    if (experienceText) experienceText.textContent = translations[lang].experienceText;
    
    const skillsText = document.getElementById("skills-text");
    if (skillsText) skillsText.textContent = translations[lang].skillsText;
    
    const contactText = document.getElementById("contact-text");
    if (contactText) contactText.textContent = translations[lang].contactText;
    
    toggleLangBtn.textContent = lang === "pt" ? "PT | EN" : "EN | PT";
  }

  toggleLangBtn.addEventListener("click", () => {
    currentLang = currentLang === "pt" ? "en" : "pt";
    localStorage.setItem("language", currentLang);
    updateTexts(currentLang);
  });

  updateTexts(currentLang);
});




