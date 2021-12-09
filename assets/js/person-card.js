const template = ({ image, name, contact, role }) => `
  <div class="person-card">
    <div>
      <img src="${image}" alt="Fotinha do ${name}" class="card-image"/>
    </div>
    <div class="card-body">
      <h4>${name}</h4>
      <p style="margin-bottom: 0;">
        <small><b>${role}</b></small><br/>
        <small>${contact}</small>
      </p>
    </div>
  </div>
`;

const containerCards = document.getElementById('cards');

async function personCardMain() {
  const request = await fetch('./assets/data/equipe.json');
  data = await request.json() || [];
  containerCards.innerHTML = data.map(template).join('');
}

personCardMain();
