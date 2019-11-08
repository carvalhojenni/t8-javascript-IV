let frutas = ["banana", "morango", "bacurí", "laranja"];
<<<<<<< HEAD
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
=======
let btn = document.getElementById('btn')
let input = document.getElementById('input')
let frutasMaiusculas = frutas.map(fruta => fruta.toUpperCase())


btn.addEventListener('click', function(){
    // let arrAchou = frutas.filter(fruta => fruta === input.value)
    // console.log(arrAchou)
    // if(arrAchou.length > 0){
    //     alert(`ACHOU O ${input.value}`)
    // }else{
    //     alert(`Não achou o ${input.value}`)
    // }

    // if(frutas.find(fruta => fruta === input.value)){
    //     alert(`ACHOU O ${input.value}`)
    // }else{
    //     alert(`Não achou o ${input.value}`)
    // }
    console.log(typeof input.value)
console.log(frutasMaiusculas)

    if( frutasMaiusculas.indexOf(input.value.toUpperCase()) > -1){
            alert(`ACHOU O ${input.value}`)
        }else{
            alert(`Não achou o ${input.value}`)
        }
})
>>>>>>> upstream/aula4
