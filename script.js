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
