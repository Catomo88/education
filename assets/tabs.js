function showTab(name) {
  var buttons = document.querySelectorAll('.tab-button');
  var panels = document.querySelectorAll('.tab-panel');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.toggle('active', buttons[i].getAttribute('data-tab') === name);
  }
  for (var j = 0; j < panels.length; j++) {
    panels[j].classList.toggle('active', panels[j].id === 'tab-' + name);
  }
  try { history.replaceState(null, '', '#' + name); } catch (e) {}
}

document.addEventListener('DOMContentLoaded', function () {
  var hash = (location.hash || '').replace('#', '');
  if (hash && document.querySelector('.tab-button[data-tab="' + hash + '"]')) {
    showTab(hash);
  }
});
