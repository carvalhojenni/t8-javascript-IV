let frutas = ["banana", "morango", "bacurí", "laranja"];
let btn = document.querySelector('#btn')
let input = document.querySelector('#input')

btn.addEventListener("click", () => {
    let valorDoInput = input.value
    if (frutas.find(percorre => percorre === valorDoInput)) {
        console.log("acertou");

    } else {
        alert("Não temos essa fruta")
    }
})

// let valorDoInput = frutas.indexOf(input.value)
// if (valorDoInput !== -1) {
//     console.log()
// }