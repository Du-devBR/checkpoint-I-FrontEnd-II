let getInputName = document.querySelector('#inputName')
let getInputDescription = document.querySelector('#inputDescription')
let getInputUrl = document.querySelector('#inputUrl')
let getInputBtn = document.querySelector('#buttonSubmit')
let mainContent = document.querySelector('#addContent')
let arrayHeroes = []


getInputBtn.addEventListener('click', function(event){
  event.preventDefault()

    let heroObject = {

    imagem: getInputUrl.value,
    nome: getInputName.value,
    descricao: getInputDescription.value,

  }

  arrayHeroes.unshift(heroObject) //utilizado UNSHIFT para adionar ao começo do array
  console.log(arrayHeroes)


  mainContent.innerHTML = '' // metodo para quando adionar os campos no html, não respostar o array anterior
  for(let post of arrayHeroes) {

    mainContent.innerHTML += `

    <div class="cards">
        <img src="${post.imagem}">
        <h3>${post.nome}</h3>
        <p>${post.descricao}</p>
    </div>
    `
  }



})




// console.log(getInputDescription)
// console.log(getInputUrl)
// console.log(getInputBtn)
