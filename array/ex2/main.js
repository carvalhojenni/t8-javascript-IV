const form = document.querySelector("#form-do-role")
let input = document.querySelector("#nome")
const nomesNoRole = ['Adriana',
    'Adrielly',
    'Aline',
    'Ana',
    'Angelica',
    'Ba',
    'Babs',
    'Carolzinha',
    'Carolzona',
    'Cecilia',
    'Daiana',
    'Emanuelle',
    'Jackeline',
    'Jennifer',
    'Josiane',
    'Lia',
    'Marcela',
    'Monique',
    'Priscilla Roiz Garcia',
    'Priscilla Soares Alves',
    'Raissa',
    'Raquel',
    'Romênia',
    'Rosana',
    'Simara',
    'Simone',
    'Talita',
    'Telma',
    'Thaís',
    'Valdeniza'
]
let div = document.querySelector("#status")

form.addEventListener("submit", percorrer)

function percorrer(e) {
    e.preventDefault()
    let valorDoInput = input.value
    if (valorDoInput == "") {
        alert('Por favor, digite um nome!')
    }
    if (nomesNoRole.find(procura => procura === valorDoInput)) {
        div.innerHTML = `<p>${valorDoInput} estava no role<p>`
    } else {
        div.innerHTML = `<p>Não esta no role</p>`
    }
}