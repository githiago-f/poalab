
const linksList = document.getElementById('links-list');

async function mainLinks() {
  const data = await fetch('./assets/data/links.json')
    .then(res => res.json());
  linksList.innerHTML = data
    .map(i => `<a href="${i.url}">${i.title}</a>`)
    .join('<br/>');
}

mainLinks();