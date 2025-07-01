// classe de abstração
class Animal {
    constructor(nome, idade, som, cor) {
        this.nome = nome;
        this.idade = idade;
        this.som = som;
        this.cor = cor;
    }

    emitirSom() {
        return `${this.nome} (${this.cor}, ${this.idade} anos) diz: ${this.som}!`;
    }
}

// classes herdeiras
class Cachorro extends Animal {
    constructor(nome, idade, cor, raca) {
        super(nome, idade, "Au Au", cor);
        this.raca = raca;
    }

    abanarRabo() {
        return `${this.nome} (${this.raca}) está abanando o rabo!`;
    }
}

class Gato extends Animal {
    constructor(nome, idade, cor) {
        super(nome, idade, "Miau", cor);
    }

    ronronar() {
        return `${this.nome} (${this.cor}) está ronronando`;
    }
}

class Passaro extends Animal {
    constructor(nome, idade, cor) {
        super(nome, idade, "Piu Piu", cor);
    }

    piar() {
        return `${this.nome} (${this.cor}) está cantando!`;
    }
}

// instâncias de objetos
const apolo = new Cachorro("Apolo", 3, "branco e marrom", "SRD");
const luna = new Gato("Luna", 2, "cinza");
const bob = new Gato("Bob", 5, "laranja");
const davi = new Passaro("Davi", 8, "cinza e amarelo");

// ver no HTML
function sobreAnimais() {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
        <h3>Cachorro:</h3>
        <p>${apolo.emitirSom()}</p>
        <p>${apolo.abanarRabo()}</p>

        <h3>Gatos:</h3>
        <p>${luna.emitirSom()}</p>
        <p>${luna.ronronar()}</p>
        <p>${bob.emitirSom()}</p>

        <h3>Pássaro:</h3>
        <p>${davi.emitirSom()}</p>
        <p>${davi.piar()}</p>
    `;
}
