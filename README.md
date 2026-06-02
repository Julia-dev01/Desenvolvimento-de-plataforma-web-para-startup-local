# 🚀 CandeiasHub - Conectando o Comércio Local

O **CandeiasHub** é uma plataforma digital moderna desenvolvida para fortalecer a economia local da cidade de Candeias - BA. O objetivo do projeto é conectar moradores da região a pequenos empreendedores, centralizando a divulgação de serviços, promoções, eventos, produtos e estabelecimentos locais de forma rápida, visual e 100% organizada.

Este projeto simula um sistema real de mercado, contando com um frontend estruturado e responsivo integrado a um backend funcional via API REST com persistência em banco de dados.

---

## 💡 Identidade da Startup

* **Nome da Startup:** CandeiasHub
* **Slogan:** *"O coração do comércio local bate aqui."*
* **Foco da Versão MVP:** Cadastro, gerenciamento e exibição dinâmica de negócios, eventos e promoções de Candeias sem a necessidade de recarga da página (*sem reload*).

---

## 🛠️ Tecnologias Utilizadas

### Frontend:
* **HTML5:** Estrutura semântica das páginas.
* **CSS3:** Estilização moderna, responsiva e identidade visual coerente baseada nas cores da startup.
* **JavaScript (Vanilla):** Manipulação dinâmica do DOM e consumo de API.
* **Fetch API:** Comunicação assíncronas com o backend (requisições GET e POST).

### Backend & Banco de Dados:
* **Node.js:** Ambiente de execução javascript no servidor.
* **Express:** Framework minimalista para criação das rotas da API REST.
* **CORS:** Mecanismo de segurança configurado para permitir a integração entre o frontend e backend.
* **SQLite (`sqlite3`):** Banco de dados relacional persistente que armazena as informações localmente em arquivo (`database.sqlite`).

---

## 📁 Estrutura de Pastas do Projeto

```text
candeias-hub/
├── backend/
│   ├── database.sqlite    # Banco de dados gerado automaticamente
│   ├── server.js          # Servidor Express e rotas da API
│   └── package.json       # Dependências do backend (express, cors, sqlite3)
└── frontend/
    ├── css/
    │   └── style.css      # Estilização global e identidade visual
    ├── js/
    │   └── main.js        # Lógica de integração e Fetch API (sem reload)
    ├── index.html         # Página Inicial (Listagem e Cadastro)
    ├── sobre.html         # Página Institucional da Startup
    └── contato.html       # Página de Contato (Informações locais fictícias)


### 👩‍💻 Componentes da Equipe
Júlia das Neves
Alexandre Brito
Freson Rafael
Murilo de Assis
Luma Cristina
