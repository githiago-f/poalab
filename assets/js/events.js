const eventTemplate = ({ title, day, month, body, image }) => `
  <div class="bg-white rounded drop-3">
    <img src="${image}" height="200" width="300" class="rounded-top" alt="Image" />
    <div class="text-left p-4 two-cols f-align-center justify-center" style="flex-direction: column;">
      <h4 style="line-height: .5;" class="montserrat text-larger text-center text-blue">
        ${day}<br/>
        <small class="text-md">${month}</small>
      </h4>
      <div>
        <h6 class="text-4 text-blue">${title}</h6>
        <p>${body}</p>
      </div>
    </div>
  </div>
`;

const conteinerEvents = document.getElementById('events');

async function eventsCardMain() {
  const request = await fetch('./assets/data/eventos.json');
  data = await request.json() || [];
  conteinerEvents.innerHTML = data.map(eventTemplate).join('');
}

eventsCardMain();