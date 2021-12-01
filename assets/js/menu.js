var modalOpen = false;

function toggleModal() {
  var elem = document.querySelector('header.menu nav');
  elem.style.display = modalOpen ? 'none' : 'block';
  modalOpen = !modalOpen;
}