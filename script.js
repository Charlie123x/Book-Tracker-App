  function showPage(pageId) {
    document.querySelectorAll('.container > div').forEach(div => {
      if (!div.classList.contains('alert')) div.classList.add('hidden');
    });
    document.getElementById(pageId).classList.remove('hidden');
    hideAlert(); // hide alert when switching pages
  }

  // Show alert message
  function showAlert(message) {
    const alertBox = document.getElementById('alertBox');
    alertBox.textContent = "⚠️ " + message;
    alertBox.style.display = 'block';
    setTimeout(() => { alertBox.style.display = 'none'; }, 3000);
  }

  // Hide alert message
  function hideAlert() {
    document.getElementById('alertBox').style.display = 'none';
  }

  // Login validation
  function login() {
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    if (email === "" || password === "") {
      showAlert("Please input Email and Password");
    } else {
      showPage('dashboardPage');
    }
  }

  // Signup validation
  function signup() {
    const name = document.getElementById('signupName').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const username = document.getElementById('signupUsername').value.trim();
    const password = document.getElementById('signupPassword').value.trim();
    const confirm = document.getElementById('signupConfirm').value.trim();

    if (name === "" || email === "" || username === "" || password === "" || confirm === "") {
      showAlert("Please fill in all fields");
    } else if (password !== confirm) {
      showAlert("Passwords do not match");
    } else {
      showPage('dashboardPage');
    }
  }