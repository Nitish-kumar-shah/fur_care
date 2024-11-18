document.getElementById("toggleButton").addEventListener("click", function () {
    const sidebar = document.getElementById("login-bar");
    sidebar.classList.add("show");
  });
  
  document.getElementById("closeButton").addEventListener("click", function () {
    const sidebar = document.getElementById("login-bar");
    sidebar.classList.remove("show"); // Hide the sidebar
  });
  