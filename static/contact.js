document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('contactForm');
  var messageBox = document.getElementById('formMessage');

  function clearMessage() {
    messageBox.textContent = '';
    messageBox.className = '';
  }

  function showError(text) {
    messageBox.textContent = text;
    messageBox.className = 'error';
  }

  function showSuccess(text) {
    messageBox.textContent = text;
    messageBox.className = 'success';
  }

  function isEmpty(value) {
    return !value || value.trim().length === 0;
  }

  function looksLikeEmail(value) {
    return value.indexOf('@') > 0 && value.indexOf('.') > value.indexOf('@');
  }

  form.addEventListener('submit', function (e) {
    clearMessage();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (isEmpty(name)) {
      e.preventDefault();
      showError('Please enter your name.');
      return;
    }
    if (isEmpty(email) || !looksLikeEmail(email)) {
      e.preventDefault();
      showError('Please enter a valid email address.');
      return;
    }
    if (isEmpty(message)) {
      e.preventDefault();
      showError('Please enter a message.');
      return;
    }

    // Demo-only: prevent actual submission and show success
    e.preventDefault();
    showSuccess('Thanks — your message was validated (demo only).');
    form.reset();
  });
});
