var data = [];

const tabItem = ({ title }, index) => `
  <a 
    href="#tab-id"
    id="tab_${index}"
    onclick="showTab(${index})"
    class="tab-item"
  >${title}</a>
`;

const cardTemplate = ({ content, image, title }) => `
  <div class="card-highlight two-cols">
    <div style="max-width: 400px;">
      <div class="mb-3">
        <h3 class="text-large text-red">${title}</h3>
        <div class="divisor bg-red"></div>
      </div>
      <p class="text-5">
        ${content}
      </p>
    </div>
    <div style="text-align: center;">
      <img src="${image}" style="width: 300px; height: auto; object-fit: contain;" alt="${title}"/>
    </div>
  </div>
`;

const tabContainer = document.getElementById('tabs');
const cardSelected = document.getElementById('selected-card');

function showTab(id) {
  const tab = `tab_${id}`;
  const template = cardTemplate(data[id]);
  cardSelected.innerHTML = template;
  data.forEach((_, index) => {
    document.getElementById(`tab_${index}`).className = "tab-item";
  });
  document.getElementById(tab).className = "tab-item active";
}

async function main() {
  const request = await fetch('./assets/data/equipamentos.json');
  data = await request.json() || [];
  tabContainer.innerHTML = data.map(tabItem).join('');
  showTab(0);
}

main();
