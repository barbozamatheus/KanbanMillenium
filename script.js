// Recupera os dados do LocalStorage ou inicia um array vazio
let cards = JSON.parse(localStorage.getItem("kanbanCards")) || [];

// Renderiza os cartões nas colunas corretas
function renderBoard() {
  document.getElementById("col-0").innerHTML = "";
  document.getElementById("col-1").innerHTML = "";
  document.getElementById("col-2").innerHTML = "";

  cards.forEach((card) => {
    const cardEl = document.createElement("div");
    cardEl.className = "card";

    // Botões de mover baseados na coluna atual (0, 1 ou 2)
    let btnLeft =
      card.status > 0
        ? `<button onclick="moveCard(${card.id}, -1)">⬅️ Voltar</button>`
        : "<div></div>";
    let btnRight =
      card.status < 2
        ? `<button onclick="moveCard(${card.id}, 1)">Avançar ➡️</button>`
        : "<div></div>";

    cardEl.innerHTML = `
      <h4>${card.name}</h4>
      <div class="card-date">
        <label>Data de entrada/atualização:</label>
        <input type="date" value="${card.date}" onchange="updateDate(${card.id}, this.value)">
      </div>
      <div class="card-actions">
        ${btnLeft}
        ${btnRight}
      </div>
      <button style="width: 100%; margin-top: 10px; background: #dc3545; color: white;" onclick="deleteCard(${card.id})">Excluir</button>
    `;

    document.getElementById(`col-${card.status}`).appendChild(cardEl);
  });
}

// Salva no LocalStorage e atualiza a tela
function saveAndRender() {
  localStorage.setItem("kanbanCards", JSON.stringify(cards));
  renderBoard();
}

// Adiciona um novo cartão (sempre na coluna 0)
function addCard() {
  const input = document.getElementById("clientName");
  const name = input.value.trim();

  if (!name) return alert("Digite o nome do cliente!");

  const newCard = {
    id: Date.now(),
    name: name,
    date: new Date().toISOString().split("T")[0], // Pega a data de hoje no formato YYYY-MM-DD
    status: 0, // 0 = Primeiro Contato, 1 = Convite Enviado, 2 = Integração Concluída
  };

  cards.push(newCard);
  input.value = "";
  saveAndRender();
}

// Move o cartão entre as colunas (+1 para avançar, -1 para voltar)
function moveCard(id, direction) {
  const card = cards.find((c) => c.id === id);
  if (card) {
    card.status += direction;
    saveAndRender();
  }
}

// Atualiza a data se o usuário modificar manualmente no input
function updateDate(id, newDate) {
  const card = cards.find((c) => c.id === id);
  if (card) {
    card.date = newDate;
    saveAndRender();
  }
}

// Exclui um cartão
function deleteCard(id) {
  if (confirm("Tem certeza que deseja excluir?")) {
    cards = cards.filter((c) => c.id !== id);
    saveAndRender();
  }
}

// === FUNÇÕES DE IMPORTAÇÃO E EXPORTAÇÃO ===

function exportData() {
  const dataStr = JSON.stringify(cards);
  // Usa o prompt para ser fácil de copiar no celular
  prompt("Copie o texto abaixo para exportar seus dados:", dataStr);
}

function importData() {
  const dataStr = prompt("Cole aqui o texto dos dados exportados:");
  if (dataStr) {
    try {
      const parsedData = JSON.parse(dataStr);
      if (Array.isArray(parsedData)) {
        cards = parsedData;
        saveAndRender();
        alert("Dados importados com sucesso!");
      } else {
        alert("Formato de dados inválido.");
      }
    } catch (e) {
      alert("Erro ao importar. Verifique se copiou o texto corretamente.");
    }
  }
}

// Renderiza a tela pela primeira vez ao carregar
renderBoard();
