const API_URL = 'http://localhost:3000/api/negocios';

document.addEventListener('DOMContentLoaded', () => {
    carregarNegocios();

    // Evento de envio do formulário
    const form = document.getElementById('cadastroForm');
    if(form) {
        form.addEventListener('submit', cadastrarNegocio);
    }
});

// FUNÇÃO 1: Buscar dados da API e renderizar na tela
async function carregarNegocios() {
    const container = document.getElementById('containerCards');
    if (!container) return;

    try {
        const response = await fetch(API_URL);
        const dados = await response.json();

        container.innerHTML = ''; // Limpa a tela antes de listar

        if(dados.length === 0) {
            container.innerHTML = '<p>Nenhum negócio ou evento cadastrado ainda. Seja o primeiro!</p>';
            return;
        }

        dados.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <span class="badge">${item.tipo}</span>
                <h3>${item.nome}</h3>
                <p>${item.descricao}</p>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
        container.innerHTML = '<p style="color: red;">Erro ao conectar com o servidor local.</p>';
    }
}

// FUNÇÃO 2: Enviar dados do formulário para a API (POST)
async function cadastrarNegocio(event) {
    event.preventDefault(); // Impede o reload da página

    const nome = document.getElementById('nome').value;
    const tipo = document.getElementById('tipo').value;
    const descricao = document.getElementById('descricao').value;

    const novoItem = { nome, tipo, descricao };

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novoItem)
        });

        if (response.ok) {
            document.getElementById('cadastroForm').reset(); // Limpa os campos
            carregarNegocios(); // Atualiza a lista na hora, sem dar F5!
        } else {
            alert('Erro ao realizar o cadastro no servidor.');
        }
    } catch (error) {
        console.error('Erro ao enviar dados:', error);
        alert('Não foi possível conectar ao Backend.');
    }
}