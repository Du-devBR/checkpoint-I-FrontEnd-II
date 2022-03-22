let getInputName = document.querySelector('#inputName')
let getInputDescription = document.querySelector('#inputDescription')
let getInputUrl = document.querySelector('#inputUrl')
let getInputBtn = document.querySelector('#buttonSubmit')
let mainContent = document.querySelector('#addContent')
let arrayHeroes = []
let btnViewMore = document.querySelector('#openModal')
let modalHero = document.querySelector('#modalOn')



getInputBtn.addEventListener('click', function(event){
  event.preventDefault()

    let heroObject = {

    imagem: getInputUrl.value,
    nome: getInputName.value,
    descricao: getInputDescription.value

  }

  // Valdiação dos campos input
  let msgAlert = ''
  if(heroObject.imagem === ''){

    msgAlert += 'Informe uma url de imagem valida \n'
  }

  if(heroObject.nome === ''){

    msgAlert += 'informe o nome do super heroi \n'
  }

  if(heroObject.descricao === ''){

    msgAlert += 'informe a descrição do super heroi \n'
  }

  if(msgAlert != ''){

    alert(msgAlert)
    return false

  }


  arrayHeroes.unshift(heroObject) //utilizado UNSHIFT para adionar ao começo do array
  console.log(arrayHeroes)


  modalHero.innerHTML = ''
  mainContent.innerHTML = '' // metodo para quando adionar os campos no html, não respostar o array anterior
  for(let post of arrayHeroes) {

    mainContent.innerHTML += `

    <div class="cards">
        <img src="${post.imagem}">
        <div class = "name_description">
        <h3>${post.nome}</h3>
        <p>${post.descricao}</p>
        <button class="viewMore" id="lito" onclick="openModal()">Ver Galeria</button>
        </div>
    </div>
    `

    modalHero.innerHTML += `

    <header class="nameHero">
      <h3>${post.nome}</h3>
    </header>
    <div class="container_modal">
        <img src="${post.imagem}">
        <p>${post.descricao}"</p>
        <button class="viewMore" onclick="closeModal()">Fechar</button>
        </div>
    `
  }

})


// Função para abrir modal
function openModal() {
  modalHero.classList.add('open')
}

// Função para fechar o modal

function closeModal() {

  modalHero.classList.remove('open')
}
