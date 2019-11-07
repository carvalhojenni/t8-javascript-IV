const cardSection = document.getElementById('cards-section');
const errorSection = document.getElementById('error');
const loading = document.getElementById('spinner');

const placeholderCard = {
    nome: 'Carta não carregada',
    tipo: 'Arcano Maior',
    descricao: 'Sem descrição',
    imagem: 'http://via.placeholder.com/250X500',
    link: "https://www.astrolink.com.br/"
}

renderizaCarta = carta => {
    const novaCarta = new Card(carta).render()
    cardSection.innerHTML = novaCarta
}

fetch('tarot.json').then(response => {
    return response.json()
}).then(json => {
    console.log(json)
    renderizaCarta(selecionaCartaAleatoria(json))
})

selecionaCartaAleatoria = cartas => {
    let numeroAleatorio = Math.floor(Math.random() * cartas.length)
    return cartas[numeroAleatorio]
}



async function carregaCarta() {
    loading.style.display = 'block'
    try {
        const response = await fetch('tarot.json')
        console.log(response)
        if (!response.ok) throw `Com o status: ${response.status}`
        const json = await response.json()
        renderizaCarta(selecionaCartaAleatoria(json))
        loading.style.display = 'none'
    } catch (e) {
        renderizaCarta(placeholderCard)
        errorSection.innerHTML = `A requisição Falhou : ${e}`
        loading.style.display = 'none'
    }
}
carregaCarta()

novaCarta = () => {
    carregaCarta()
}






// cartas = (Math.random() * i)
// (i = 0; i > i.length; i++)

// button.innerHTML = Math.floor((Math.random() * 100) + 1);