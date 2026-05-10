// ===================================================
// CATÁLOGO
// ===================================================

const catalogo = [
    {
        id: 1,
        titulo: "The Last of Us",
        tipo: "serie",
        ano: 2023,
        generos: ["drama", "ação"],
        nota: 9.2,
        assistido: true
    },

    {
        id: 2,
        titulo: "God of War Ragnarok",
        tipo: "filme",
        ano: 2022,
        generos: ["aventura", "ação"],
        nota: 9.7,
        assistido: true
    },

    {
        id: 3,
        titulo: "Homem-Aranha no Aranhaverso",
        tipo: "filme",
        ano: 2018,
        generos: ["animação", "aventura"],
        nota: 8.9,
        assistido: false
    },

    {
        id: 4,
        titulo: "Cyberpunk 2077",
        tipo: "serie",
        ano: 2020,
        generos: ["rpg", "ficção científica"],
        nota: 8.3,
        assistido: true
    },

    {
        id: 5,
        titulo: "Arcane",
        tipo: "serie",
        ano: 2021,
        generos: ["fantasia", "ação"],
        nota: 9.4,
        assistido: false
    },

    {
        id: 6,
        titulo: "Batman Begins",
        tipo: "filme",
        ano: 2005,
        generos: ["ação", "drama"],
        nota: 8.7,
        assistido: true
    }
];


// ===================================================
// ACESSO E LEITURA DOS DADOS
// ===================================================

console.log("CATÁLOGO COMPLETO:");
console.log(catalogo);


// título do primeiro item
console.log("\nPrimeiro título:");
console.log(catalogo[0].titulo);


// ano do último item
console.log("\nAno do último item:");
console.log(catalogo[catalogo.length - 1].ano);


// segundo gênero do terceiro item
console.log("\nSegundo gênero do terceiro item:");

if (catalogo[2].generos[1]) {
    console.log(catalogo[2].generos[1]);
} else {
    console.log("Não possui segundo gênero.");
}


// ===================================================
// FOREACH
// ===================================================

console.log("\nLISTA COMPLETA:");

catalogo.forEach(item => {
    console.log(`[${item.tipo}] ${item.titulo} (${item.ano})`);
});


// ===================================================
// MAP
// ===================================================

const nomesMinusculos = catalogo.map(item =>
    item.titulo.toLowerCase()
);

console.log("\nTÍTULOS EM MINÚSCULO:");
console.log(nomesMinusculos);


// ===================================================
// FILTER
// ===================================================

const naoAssistidos = catalogo.filter(item =>
    item.assistido === false
);

console.log("\nITENS NÃO ASSISTIDOS:");
console.log(naoAssistidos);

console.log(`Quantidade: ${naoAssistidos.length}`);


// ===================================================
// FIND
// ===================================================

const melhorNota = catalogo.find(item =>
    item.nota >= 9.5
);

console.log("\nITEM COM NOTA MAIOR OU IGUAL A 9.5:");

if (melhorNota) {
    console.log(`${melhorNota.titulo} - Nota ${melhorNota.nota}`);
} else {
    console.log("Nenhum item encontrado.");
}


// ===================================================
// REDUCE
// ===================================================

// média geral
const soma = catalogo.reduce((total, item) => {
    return total + item.nota;
}, 0);

const media = soma / catalogo.length;

console.log("\nMÉDIA GERAL:");
console.log(media.toFixed(2));


// média dos assistidos
const itensAssistidos = catalogo.filter(item =>
    item.assistido === true
);

const somaAssistidos = itensAssistidos.reduce((total, item) => {
    return total + item.nota;
}, 0);

const mediaAssistidos = somaAssistidos / itensAssistidos.length;

console.log("\nMÉDIA DOS ASSISTIDOS:");
console.log(mediaAssistidos.toFixed(2));


// ===================================================
// SOME E EVERY
// ===================================================

const existeAntigo = catalogo.some(item =>
    item.ano < 2010
);

console.log("\nExiste item antes de 2010?");
console.log(existeAntigo);


const todosTemGenero = catalogo.every(item =>
    item.generos.length > 0
);

console.log("\nTodos possuem gênero?");
console.log(todosTemGenero);


// ===================================================
// DOM
// ===================================================

// quantidade de filmes
const filmes = catalogo.filter(item =>
    item.tipo === "filme"
).length;


// quantidade de séries
const series = catalogo.filter(item =>
    item.tipo === "serie"
).length;


// ranking
const ranking = [...catalogo]
    .sort((a, b) => b.nota - a.nota)
    .slice(0, 3);


// saída na tela
const resultado = document.getElementById("resultado");

resultado.innerHTML = `
    <h2>Resumo Geek</h2>

    <p><strong>Total de itens:</strong> ${catalogo.length}</p>

    <p><strong>Filmes:</strong> ${filmes}</p>

    <p><strong>Séries:</strong> ${series}</p>

    <p><strong>Não assistidos:</strong> ${naoAssistidos.length}</p>

    <p><strong>Média geral:</strong> ${media.toFixed(2)}</p>

    <h3>TOP 3 NOTAS</h3>

    <ol>
        ${ranking.map(item => `
            <li>
                ${item.titulo} - Nota ${item.nota}
            </li>
        `).join("")}
    </ol>
`;