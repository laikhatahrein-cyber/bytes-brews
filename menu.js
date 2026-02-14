
document.getElementById("menuForm").addEventListener("submit", function(event){

event.preventDefault();

// Get values
let name = document.getElementById("name").value;
let price = document.getElementById("price").value;
let category = document.getElementById("category").value;
let imageFile = document.getElementById("image").files[0];

if(!imageFile){
    alert("Please select an image!");
    return;
}

let reader = new FileReader();

reader.onload = function(){

    let menuItems = JSON.parse(localStorage.getItem("menuItems")) || [];

    let newItem = {
        name: name,
        price: price,
        category: category,
        image: reader.result
    };

    menuItems.push(newItem);

    localStorage.setItem("menuItems", JSON.stringify(menuItems));

    alert("Item Stored Successfully!");

    document.getElementById("menuForm").reset();

}

reader.readAsDataURL(imageFile);

});
