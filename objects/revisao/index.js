// console.log(typeof crianca)
// crianca.nome = 'Elaine'
// crianca.idade = 5
// crianca['brinquedo favorito'] = 'homem aranha'
// console.log(crianca['idade']);
// console.log(crinca['brinquedo favorito']);
// delete crianca.idade


const crianca2 = {
    nome: 'Paulo',
    idade: 6,
    endereco: {
        logradouro: 'Rua dos bobos',
        numero: 0,
        referencia: [{
            endereco: {
                logradouro: 'Rua dos bobos',
                numero: 2,
                descricao: 'mercado'
            }
        }]
    },
    responsaveis: [{
        nome: 'Tereza',
        telefone: '00000000',
        parentesco: 'tia'
    }],
    podeBrincar: false
}
console.log(crianca2);
delete crianca2.idade
console.log(crianca2);
delete crianca2.endereco


function Crianca(nome, idade, altura) {
    this.nome = nome
    this.idade = idade
    this.altura = altura
    this.podeBrincar = () => {
        return (altura > 1)
    }
}

const c1 = new Crianca('bete', 6, 1.1)
console.log(`${c1.altura} tem ${c1.altura} e ${c1.podeBrincar() ? 'pode brincar' : 'não pode brincar'}`);

const c2 = new Crianca('Carlos', 4, 0.8)
console.log(`${c2.altura} tem ${c2.altura} e ${c2.podeBrincar() ? 'pode brincar' : 'não pode brincar'}`);





function professor() {
    this.name = nome
    this.sobrenome = sobrenome
    this.materia = materia
}
professor.prototype.dizMateria = function() {
    return `A materia é: ${this.materia}`
}

let js3 = new professor('Cintia', 'fumi', 'Js3')
console.log(js3.dizMateria());

let js4 = new professor('Lydia', 'Rodrigues', 'Js4')
console.log(js4.dizMateria());


js4.dizMateria = function() {
    return `A professora é: ${this.nome} e a materia é: ${this.materia}`
}