//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Lista para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar o nome à lista
function adicionarAmigo() {
    // Obtém o valor do campo de entrada
    const nome = document.getElementById('amigo').value.trim();

    // Validação de entrada
    if (nome === '') {
        alert('Por favor, digite um nome válido!');
        return;
    }

    // Adiciona o nome à lista de amigos
    amigos.push(nome);

    // Atualiza a lista visível de amigos
    atualizarListaAmigos();

    // Limpa o campo de entrada
    document.getElementById('amigo').value = '';
}

// Função para atualizar a lista de amigos na página
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista antes de atualizá-la

    // Adiciona cada amigo à lista na página
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('A lista de amigos está vazia. Adicione amigos antes de sortear.');
        return;
    }

    // Sorteia um nome aleatório
    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];

    // Exibe o nome sorteado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li><strong>O amigo secreto sorteado é: </strong>${sorteado}</li>`;

    // Limpa a lista de amigos após o sorteio
    amigos = [];  // Zera a lista de amigos
    atualizarListaAmigos(); // Atualiza a lista (vai ficar vazia)

    // Limpa o campo de entrada para novos nomes
    document.getElementById('amigo').value = '';
}
