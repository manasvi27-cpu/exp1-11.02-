document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page reload
  
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("errorMessage");
  
    if (username === "" || password === "") {
      errorMessage.textContent = "Please fill out both fields.";
    } else {
      errorMessage.textContent = "";
      alert(`Welcome, ${username}! 🎉`);
      // You can redirect or authenticate here
    }
  });
  
