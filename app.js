const cardsData = [
  {
    title: "Anatomie du coeur",
    summary: "Description des cavités, valves et circulation coronarienne.",
    content: "<h2>Anatomie du coeur</h2><p>Le coeur comprend 4 cavités : deux oreillettes et deux ventricules...</p>"
  },
  {
    title: "Hypertension artérielle",
    summary: "Définition, symptômes et prise en charge.",
    content: "<h2>Hypertension</h2><p>L'hypertension est une élévation persistante de la pression artérielle...</p>"
  }
];

function loadCards(){
  const container = document.getElementById('cards');
  container.innerHTML = '';
  cardsData.forEach(card => {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `<h3>${card.title}</h3><p>${card.summary}</p>`;
    div.addEventListener('click', ()=> showCard(card));
    container.appendChild(div);
  });
}

function showCard(card){
  const detail = document.getElementById('card-detail');
  detail.innerHTML = `<button onclick="closeDetail()">← Retour</button>${card.content}`;
  detail.classList.remove('hidden');
}

function closeDetail(){
  document.getElementById('card-detail').classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', loadCards);
