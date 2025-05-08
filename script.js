// Show/Hide Dashboard Sections
function showSection(id) {
    const sections = document.querySelectorAll('.main-content');
    sections.forEach((section) => section.classList.remove('active'));
    document.getElementById(id).classList.add('active');
  }
  
  // Dummy Login System
  function login() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    if (name && email && password) {
      document.getElementById("loginPage").style.display = "none";
      document.getElementById("dashboardPage").style.display = "flex";
    } else {
      alert("Please fill in all fields");
    }
  }
  
  function logout() {
    document.getElementById("dashboardPage").style.display = "none";
    document.getElementById("loginPage").style.display = "flex";
  }
  
  // Add Admin to List
  const adminForm = document.getElementById("adminForm");
  const adminList = document.getElementById("adminList");
  
  adminForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const adminName = document.getElementById("adminName").value;
    if (adminName) {
      const li = document.createElement("li");
      li.textContent = adminName;
      adminList.appendChild(li);
      document.getElementById("adminName").value = "";
    }
  });
  
  // Handle Expense Form
  expenseForm.addEventListener("submit", function (e) {
    e.preventDefault();
  
    const campus = document.getElementById("campus").value;
    const house = document.getElementById("house").value;
    const points = parseInt(document.getElementById("points").value);
    const type = document.getElementById("type").value;
    const amount = parseFloat(document.getElementById("amount").value);
    const date = document.getElementById("date").value;
  
    // Add new row to table
    const tableBody = document.getElementById("pointsTableBody");
    const newRow = document.createElement("tr");
  
    // Decide where to put the points (Academic or Culture)
    let academic = 0, culture = 0;
    if (type === "Reward") {
      academic = points;
    } else {
      culture = points;
    }
  
    const total = academic + culture;
    const keyContribution = `${type} (+${points}) on ${date}`;
  
    newRow.innerHTML = `
      <td>${campus}</td>
      <td>${house}</td>
      <td>${academic}</td>
      <td>${culture}</td>
      <td>${total}</td>
      <td>${keyContribution}</td>
    `;
  
    tableBody.appendChild(newRow);
    alert("Expense added to the table!");
    expenseForm.reset();
  });
  