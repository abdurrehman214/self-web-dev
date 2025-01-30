let quantity = 1;
function changeQuantity(amount) {
    if ((quantity + amount) >= 1 && (quantity + amount) <= 200) {
        quantity += amount;
        document.getElementById("quantity").innerText = quantity;
    }
}
function buynow() {
    alert("Your order has been placed!");
}
function addtocart() {
    alert("Added to cart successfully!");
}