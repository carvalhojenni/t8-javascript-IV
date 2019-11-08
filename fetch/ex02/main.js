const cepInput = document.getElementById("cep")


const form = document.createElement('form')
    // const buscarCep = cepInput.form
    //... continuem a pegar os inputs do index.html para preencher depois com o valor da api

cepInput.addEventListener("blur", () => {
    if (cepInput.value) {
        fetch(`https://viacep.com.br/ws/${cepInput.value}/json`).then(response => {
            return response.json()
        }).then(json => {
            console.log(json)
            const logradouroInput = document.getElementById("logradouro")
            logradouroInput.value = json.logradouro
            const complementoInput = document.getElementById("complemento")
            complementoInput.value = json.complemento
            const bairroInput = document.getElementById("bairro")
            bairroInput.value = json.bairro
            const localidadeInput = document.getElementById("localidade")
            localidadeInput.value = json.localidade
            const ufInput = document.getElementById("uf")
            ufInput.value = json.uf
                ///façam aparecer os valores nos inputs
        })
    }
})