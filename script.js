var cartCount = 0;

function addToCart() {
  cartCount = cartCount + 1;
  var qty = document.getElementById("qty").value;
  alert("Added to cart! Quantity: " + qty);
  var cartBox = document.getElementById("cartCount");
  if (cartBox) {
    cartBox.innerText = cartCount;
  }
}

function changeQty(value) {
  var qtyBox = document.getElementById("qty");
  var current = parseInt(qtyBox.value);
  var newVal = current + value;
  if (newVal < 1) {
    newVal = 1;
  }
  qtyBox.value = newVal;
}

function changeImage(src) {
  document.getElementById("mainImage").src = src;
}

function selectFlavor(button) {
  var buttons = document.getElementsByClassName("flavor-btn");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }
  button.classList.add("active");
}

function subscribe(event) {
  event.preventDefault();
  var email = document.getElementById("emailBox").value;
  alert("Thanks for subscribing with: " + email);
  document.getElementById("emailBox").value = "";
}
