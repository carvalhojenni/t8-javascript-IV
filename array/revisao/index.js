const comidas = ['Lasanha', 'Batata', 'Bacon ']

console.log(comidas[2]);

comidas.forEach((comida, posicao) => {
    console.log(`Na posicao ${posicao} temos a comida: ${comida}`);
})

//concat faz uma copia do array e adiciona o elemento que a gente passa como 
let outrasComidas = comidas.concat('Jiló')
console.log('comidas', comidas);
console.log('outrasComidas', outrasComidas);

// join - cria uma string do array e ele utiliza o argumento como separador
let stringDoArray = comidas.join(', ')
console.log(stringDoArray);


//shift -> arranca o primeiro item do array e retorna qual ele arrancou
// modifica permanentemente o array
console.log(comidas.shift());
console.log(comidas);

//pop -> arranca o ultimo item do array e retorna o que ele deletou
//modifica permanentente o array
console.log(comidas.pop());
console.log(comidas);

//unshift um item na primeira posição do array
//modifica permanente o array
comidas.unshift('Macarrão')
console.log(comidas);

//adiciona um item na ultima possição do array
//modifica permanente o array
comidas.push('Strogonoff')
console.log(comidas);

//inverte o array
comidas.reverse()
console.log(comidas);

// faz uma copia simples delimitando o começo e o final da parte que eu 
//slide(comeco,final)
let cortarAlimentos = comidas.slice(1)
console.log(cortarAlimentos);
console.log(comidas);

//pode remover e add valor utilizando posição, indice de apagar
comidas.splice(1, 0, "Alface")
console.log(comidas);

comidas.sort()
console.log(comidas);

comidas.unshift('')


console.log(comidas.indexOf('Batata'));
console.log(comidas.lastIndexOf('Batata'));

let mapArray = comidas.map((comida) => `${comida} Gostosa`)
console.log(mapArray);

let teste = comidas.forEach((comida) => `${comida} boa`)
console.log(teste);

const numeros = [1, 2, 3, 4, 5]
let numerosDobrados = numeros.map((numero) => numero * 2)
console.log(numerosDobrados);

let arrayProcura = comidas.filter((comida) => comida === 'batata')
console.log(arrayProcura);

let juntaComida = comidas.reduce((esq, dir) => {
    return `${esq} ; ${dir}`
})
console.log(juntaComida);

let somaNumero = numeros.reduce((esq, dir) => {
    return esq + dir
})
console.log(somaNumero)

console.log(numeros)
console.log(numeros.find(numero => numero === 1))
console.log(numeros.findIndex(numero => numero === 1))

console.log(numeros.find(numero => numero === -1))
console.log(numeros.findIndex(numero => numero === 9))

menorQueDez = (algumValor) => algumValor < 10
console.log(numeros.every(numero => menorQueDez(numero)))