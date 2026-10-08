import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { 
  getFirestore, collection, onSnapshot, addDoc, updateDoc, deleteDoc, doc, query, orderBy 
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAGH9EjhTsj4IdrA8aa17oQ_5uoW4iFyrQ",
  authDomain: "kanbanmillenium.firebaseapp.com",
  projectId: "kanbanmillenium",
  storageBucket: "kanbanmillenium.firebasestorage.app",
  messagingSenderId: "15992229809",
  appId: "1:15992229809:web:bd930d66ced449412f7790"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const colRef = collection(db, "kanban_cards");

let cards = [];

// Função auxiliar para pegar a data local correta
const getLocalToday = () => {
  const d = new Date();
  return new Date(d.getTime() - (d.getTimezoneOffset() * 60000)).toISOString().split('T')[0];
};

// Ordenando os cartões pela data
const q = query(colRef, orderBy("date", "asc"));

onSnapshot(q, (snapshot) => {
  cards = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  renderBoard();
});

function renderBoard() {
  const cols = [
    document.getElementById('col-0'),
    document.getElementById('col-1'),
    document.getElementById('col-2')
  ];
  
  cols.forEach(col => { if (col) col.innerHTML = ''; });

  cards.forEach(card => {
    const targetCol = document.getElementById(`col-${card.status}`);
    if (!targetCol) return; 

    const cardEl = document.createElement('div');
    cardEl.className = 'card';
    
    let btnLeft = card.status > 0 ? `<button onclick="moveCard('${card.id}', -1)">⬅️ Voltar</button>` : '<div></div>';
    let btnRight = card.status < 2 ? `<button onclick="moveCard('${card.id}', 1)">Avançar ➡️</button>` : '<div></div>';

    cardEl.innerHTML = `
      <h4 class="card-title"></h4> 
      <div class="card-date">
        <label>Data:</label>
        <input type="date" value="${card.date}" onchange="updateDate('${card.id}', this.value)">
      </div>
      <div class="card-actions">${btnLeft}${btnRight}</div>
      
      <div class="card-notes">
        <label>📌 Anotações:</label>
        <textarea placeholder="Escreva aqui..." onblur="updateNotes('${card.id}', this.value)">${card.notes || ""}</textarea>
      </div>

      <button style="width: 100%; margin-top: 10px; background: #dc3545; color: white; border: none; border-radius: 4px; padding: 6px; cursor: pointer;" onclick="deleteCard('${card.id}')">Excluir</button>
    `;

    // Define o texto de forma segura
    cardEl.querySelector('.card-title').textContent = card.name;
    targetCol.appendChild(cardEl);
  });
}

window.addCard = async () => {
  const input = document.getElementById('clientName');
  const name = input.value.trim();
  if (!name) return alert('Digite o nome do cliente!');

  try {
    await addDoc(colRef, {
      name: name,
      date: getLocalToday(),
      status: 0,
      notes: ""
    });
    input.value = '';
  } catch (err) {
    alert("Erro ao salvar cartão: " + err.message);
  }
};

window.moveCard = async (id, direction) => {
  const card = cards.find(c => c.id === id);
  if (card) {
    try {
      const docRef = doc(db, "kanban_cards", id);
      // Atualiza o status e a data simultaneamente
      await updateDoc(docRef, { 
        status: card.status + direction,
        date: getLocalToday()
      });
    } catch (err) {
      alert("Erro ao mover cartão: " + err.message);
    }
  }
};

window.updateDate = async (id, newDate) => {
  try {
    const docRef = doc(db, "kanban_cards", id);
    await updateDoc(docRef, { date: newDate });
  } catch (err) {
    alert("Erro ao atualizar data: " + err.message);
  }
};

// Nova função para salvar as anotações
window.updateNotes = async (id, newNotes) => {
  try {
    const docRef = doc(db, "kanban_cards", id);
    await updateDoc(docRef, { notes: newNotes });
  } catch (err) {
    console.error("Erro ao salvar anotação: " + err.message);
  }
};

window.deleteCard = async (id) => {
  if (confirm("Tem certeza que deseja excluir?")) {
    try {
      const docRef = doc(db, "kanban_cards", id);
      await deleteDoc(docRef);
    } catch (err) {
      alert("Erro ao excluir cartão: " + err.message);
    }
  }
};
