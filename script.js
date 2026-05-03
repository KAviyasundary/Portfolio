// Toggle the hamburger menu for mobile
function toggleMenu() {
    document.querySelector("nav ul").classList.toggle("show");
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("msgForm");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
  
      const storedMessages = JSON.parse(localStorage.getItem("messages")) || [];
      storedMessages.push({ name, email, message });
      localStorage.setItem("messages", JSON.stringify(storedMessages));
  
      document.getElementById("status").textContent = "Message saved locally!";
      form.reset();
    });
  });  