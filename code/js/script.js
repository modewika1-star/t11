var products = [];

function addProduct() {
    var name = prompt("Type the name of the product you want to add:");

    if (name == null || name == "") {
        alert("You didn't type anything! Please enter a product name.");
        return;
    }

    products.push(name);
    alert(name + " was added to the inventory!");
}

function showProducts() {
    var list = document.getElementById("productList");

    if (products.length == 0) {
        list.innerHTML = "<p>The inventory is empty. Try adding some products first.</p>";
        return;
    }

    var html = "<h3>Products in Inventory:</h3><ol>";

    for (var i = 0; i < products.length; i++) {
        html = html + "<li>" + products[i] + "</li>";
    }

    html = html + "</ol>";
    list.innerHTML = html;
}

function editProduct() {
    if (products.length == 0) {
        alert("There are no products in the inventory to edit!");
        return;
    }

    var display = "";
    for (var i = 0; i < products.length; i++) {
        display = display + (i + 1) + ". " + products[i] + "\n";
    }

    var number = prompt("Which product do you want to edit? Enter its number:\n" + display);
    var index = parseInt(number) - 1;

    if (isNaN(index) || index < 0 || index >= products.length) {
        alert("That is not a valid number. Please try again.");
        return;
    }

    var newName = prompt("Enter the new name for \"" + products[index] + "\":");

    if (newName == null || newName == "") {
        alert("You didn't type a new name! Nothing was changed.");
        return;
    }

    products[index] = newName;
    alert("The product was updated successfully!");
}

function deleteProduct() {
    if (products.length == 0) {
        alert("There is nothing in the inventory to delete!");
        return;
    }

    var display = "";
    for (var i = 0; i < products.length; i++) {
        display = display + (i + 1) + ". " + products[i] + "\n";
    }

    var number = prompt("Which product do you want to delete? Enter its number:\n" + display);
    var index = parseInt(number) - 1;

    if (isNaN(index) || index < 0 || index >= products.length) {
        alert("That is not a valid number. Please try again.");
        return;
    }

    var deletedProduct = products[index];
    products.splice(index, 1);
    alert(deletedProduct + " was removed from the inventory.");
}