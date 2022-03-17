let getInputName = document.querySelector('#inputName')
let getInputDescription = document.querySelector('#inputDescription')
let getInputUrl = document.querySelector('#inputUrl')
let getInputBtn = document.querySelector('#buttonSubmit')
let mainContent = document.querySelector('#addContent')
let arrayHeroes = []


getInputBtn.addEventListener('click', function(event){
  event.preventDefault()

    let heroObject = {

    nome :getInputName.value,
    descricao: getInputDescription.value,
    imagem: getInputUrl.value

  }

  arrayHeroes.push(heroObject)
  console.log(arrayHeroes)

  for(let post of arrayHeroes) {

    mainContent.innerHTML += `

    <div class="item">
        <img src="${post.imagem}">
        <h2>${post.nome}</h2>
        <p>${post.descricao}</p>
    </div>
    `
  }

})




console.log(mainContent)
// console.log(getInputDescription)
// console.log(getInputUrl)
// console.log(getInputBtn)
