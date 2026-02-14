document.getElementById("loginBtn").addEventListener("click", function() {
    alert("Login button clicked!");
    // later you can redirect to login page
});

document.getElementById("signupBtn").addEventListener("click", function() {
    alert("Sign Up button clicked!");
    // later you can redirect to signup page
});
function filterMenu() {
    let category = document.getElementById("category").value;
    let rows = document.querySelectorAll("#menuTable tr");

    rows.forEach((row, index) => {
        if (index === 0) return;

        if (category === "all") {
            row.style.display = "";
        } else {
            if (row.classList.contains(category)) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        }
    });
}
let container = document.getElementById("menuCards");

let menuItems = JSON.parse(localStorage.getItem("menuItems")) || [];

function loadMenu() {

    container.innerHTML = "";

    menuItems.forEach((item, index) => {

        let card = document.createElement("div");
        card.classList.add("menu-card");

        card.innerHTML = `
            <img src="${item.image}">
            <h3>${item.name}</h3>
            <p>₹${item.price}</p>
            <p>${item.category}</p>

            <button class="card-btn editBtn" onclick="editItem(${index})">Edit</button>
            <button class="card-btn deleteBtn" onclick="deleteItem(${index})">Delete</button>
        `;

        container.appendChild(card);
    });
}

function deleteItem(index) {
    menuItems.splice(index,1);
    localStorage.setItem("menuItems", JSON.stringify(menuItems));
    loadMenu();
}

function editItem(index) {
    let newName = prompt("Enter new item name:");
    let newPrice = prompt("Enter new price:");

    if(newName && newPrice) {
        menuItems[index].name = newName;
        menuItems[index].price = newPrice;
        localStorage.setItem("menuItems", JSON.stringify(menuItems));
        loadMenu();
    }
}

loadMenu();