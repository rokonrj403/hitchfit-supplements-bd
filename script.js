// HitchFit Supplements BD - site behaviour
// Cart is stored in localStorage so the count persists across pages.

function getCart() {
  var raw = localStorage.getItem("hitchfit_cart");
  if (!raw) {
    return [];
  }
  try {
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem("hitchfit_cart", JSON.stringify(cart));
}

function cartItemCount() {
  var cart = getCart();
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total = total + cart[i].qty;
  }
  return total;
}

function updateCartCount() {
  var count = cartItemCount();
  var boxes = document.getElementsByClassName("cartCount");
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].innerText = count;
  }
}

// ---------- Homepage: featured products ----------
function renderFeatured() {
  var grid = document.getElementById("featuredGrid");
  if (!grid) {
    return;
  }
  var featuredIds = ["whey-fusion", "creatine", "multivitamin", "amino"];
  var html = "";
  for (var i = 0; i < featuredIds.length; i++) {
    var p = getProductById(featuredIds[i]);
    html += productCardHTML(p);
  }
  grid.innerHTML = html;
}

// ---------- Shop page: full grid + category filter ----------
var currentFilter = "all";

function renderShop(filter) {
  var grid = document.getElementById("shopGrid");
  if (!grid) {
    return;
  }
  currentFilter = filter || "all";
  var html = "";
  for (var i = 0; i < PRODUCTS.length; i++) {
    var p = PRODUCTS[i];
    if (currentFilter === "all" || p.category === currentFilter) {
      html += productCardHTML(p);
    }
  }
  grid.innerHTML = html;

  // highlight the active filter tab
  var tabs = document.getElementsByClassName("filter-tab");
  for (var t = 0; t < tabs.length; t++) {
    if (tabs[t].getAttribute("data-filter") === currentFilter) {
      tabs[t].classList.add("active");
    } else {
      tabs[t].classList.remove("active");
    }
  }
}

function productCardHTML(p) {
  return (
    '<div class="product">' +
      '<a href="product.html?id=' + p.id + '"><img src="' + p.image + '" alt="' + p.name + '"></a>' +
      '<div class="rating">★★★★★ ' + p.rating.toFixed(1) + '</div>' +
      '<h3>' + p.name + '</h3>' +
      '<p class="price">' + formatBDT(p.price) + '</p>' +
      '<a href="product.html?id=' + p.id + '" class="btn-outline">Choose Options</a>' +
    '</div>'
  );
}

// ---------- Product detail page ----------
var selectedFlavor = "";

function getQueryId() {
  var params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function renderProduct() {
  var wrap = document.getElementById("productDetail");
  if (!wrap) {
    return;
  }
  var id = getQueryId();
  var p = getProductById(id) || PRODUCTS[0];
  document.title = p.name + " - Hitch Fit Supplements BD";
  selectedFlavor = p.flavors[0];

  var flavorHTML = "";
  for (var i = 0; i < p.flavors.length; i++) {
    var active = i === 0 ? " active" : "";
    flavorHTML += '<button class="flavor-btn' + active + '" onclick="selectFlavor(this)">' + p.flavors[i] + '</button>';
  }

  var featureHTML = "";
  for (var f = 0; f < p.features.length; f++) {
    featureHTML += '<p>✓ ' + p.features[f] + '</p>';
  }

  // breadcrumb
  var crumb = document.getElementById("breadcrumb");
  if (crumb) {
    crumb.innerHTML =
      '<a href="index.html">Home</a> / <a href="shop.html">Shop</a> / ' + p.name;
  }

  wrap.innerHTML =
    '<div class="product-image">' +
      '<img src="' + p.image + '" alt="' + p.name + '" id="mainImage">' +
    '</div>' +
    '<div class="product-info">' +
      '<h1>' + p.name + '</h1>' +
      '<div class="rating-line">★★★★★ ' + p.rating.toFixed(1) + ' (' + p.reviews + ' reviews)</div>' +
      '<p class="price-big">' + formatBDT(p.price) + '</p>' +
      '<p class="desc">' + p.description + '</p>' +
      '<div class="option-block">' +
        '<p class="option-label">Flavor:</p>' + flavorHTML +
      '</div>' +
      '<div class="option-block">' +
        '<p class="option-label">Quantity:</p>' +
        '<button onclick="changeQty(-1)">-</button>' +
        '<input type="text" id="qty" value="1" readonly>' +
        '<button onclick="changeQty(1)">+</button>' +
      '</div>' +
      '<button class="add-cart-btn" onclick="addToCart(\'' + p.id + '\')">ADD TO CART</button>' +
      '<div class="features">' + featureHTML + '</div>' +
    '</div>';
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
  selectedFlavor = button.innerText;
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

function addToCart(productId) {
  var qty = parseInt(document.getElementById("qty").value);
  var cart = getCart();
  var found = false;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id === productId && cart[i].flavor === selectedFlavor) {
      cart[i].qty = cart[i].qty + qty;
      found = true;
      break;
    }
  }
  if (!found) {
    cart.push({ id: productId, flavor: selectedFlavor, qty: qty });
  }
  saveCart(cart);
  updateCartCount();

  var p = getProductById(productId);
  alert("Added to cart: " + p.name + " (" + selectedFlavor + ") x" + qty);
}

// ---------- Cart page ----------
var FREE_DELIVERY_THRESHOLD = 5000;
var DELIVERY_FEE = 100;

function renderCart() {
  var wrap = document.getElementById("cartItems");
  if (!wrap) {
    return;
  }
  var cart = getCart();
  var summary = document.getElementById("cartSummary");
  var emptyMsg = document.getElementById("cartEmpty");

  if (cart.length === 0) {
    wrap.innerHTML = "";
    if (summary) { summary.style.display = "none"; }
    if (emptyMsg) { emptyMsg.style.display = "block"; }
    return;
  }
  if (emptyMsg) { emptyMsg.style.display = "none"; }
  if (summary) { summary.style.display = "block"; }

  var html = "";
  var subtotal = 0;
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    var p = getProductById(item.id);
    if (!p) { continue; }
    var lineTotal = p.price * item.qty;
    subtotal += lineTotal;

    html +=
      '<div class="cart-row">' +
        '<a href="product.html?id=' + p.id + '"><img src="' + p.image + '" alt="' + p.name + '"></a>' +
        '<div class="cart-row-info">' +
          '<a href="product.html?id=' + p.id + '" class="cart-name">' + p.name + '</a>' +
          '<p class="cart-flavor">' + item.flavor + '</p>' +
          '<p class="cart-unit">' + formatBDT(p.price) + ' each</p>' +
          '<button class="cart-remove" onclick="removeCartItem(' + i + ')">Remove</button>' +
        '</div>' +
        '<div class="cart-qty">' +
          '<button onclick="changeCartQty(' + i + ', -1)">-</button>' +
          '<input type="text" value="' + item.qty + '" readonly>' +
          '<button onclick="changeCartQty(' + i + ', 1)">+</button>' +
        '</div>' +
        '<div class="cart-line-total">' + formatBDT(lineTotal) + '</div>' +
      '</div>';
  }
  wrap.innerHTML = html;

  var delivery = (subtotal >= FREE_DELIVERY_THRESHOLD || subtotal === 0) ? 0 : DELIVERY_FEE;
  var total = subtotal + delivery;

  document.getElementById("subtotalValue").innerText = formatBDT(subtotal);
  document.getElementById("deliveryValue").innerText = delivery === 0 ? "FREE" : formatBDT(delivery);
  document.getElementById("totalValue").innerText = formatBDT(total);
}

function changeCartQty(index, value) {
  var cart = getCart();
  if (!cart[index]) { return; }
  cart[index].qty = cart[index].qty + value;
  if (cart[index].qty < 1) {
    cart[index].qty = 1;
  }
  saveCart(cart);
  renderCart();
  updateCartCount();
}

function removeCartItem(index) {
  var cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  renderCart();
  updateCartCount();
}

function checkout() {
  if (cartItemCount() === 0) {
    alert("Your cart is empty.");
    return;
  }
  window.location.href = "checkout.html";
}

// ---------- Checkout page ----------
function renderCheckout() {
  var wrap = document.getElementById("checkoutSummary");
  if (!wrap) {
    return;
  }
  var cart = getCart();

  // No items? Send the shopper back to the cart.
  if (cart.length === 0) {
    window.location.href = "cart.html";
    return;
  }

  var html = "";
  var subtotal = 0;
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    var p = getProductById(item.id);
    if (!p) { continue; }
    var lineTotal = p.price * item.qty;
    subtotal += lineTotal;
    html +=
      '<div class="co-line">' +
        '<img src="' + p.image + '" alt="' + p.name + '">' +
        '<div class="co-line-info">' +
          '<span class="co-line-name">' + p.name + '</span>' +
          '<span class="co-line-meta">' + item.flavor + ' &times; ' + item.qty + '</span>' +
        '</div>' +
        '<span class="co-line-total">' + formatBDT(lineTotal) + '</span>' +
      '</div>';
  }

  var delivery = subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
  var total = subtotal + delivery;

  html +=
    '<div class="summary-line"><span>Subtotal</span><span>' + formatBDT(subtotal) + '</span></div>' +
    '<div class="summary-line"><span>Delivery</span><span>' + (delivery === 0 ? "FREE" : formatBDT(delivery)) + '</span></div>' +
    '<div class="summary-line summary-total"><span>Total</span><span>' + formatBDT(total) + '</span></div>';

  wrap.innerHTML = html;
}

function placeOrder(event) {
  event.preventDefault();

  var cart = getCart();
  if (cart.length === 0) {
    window.location.href = "cart.html";
    return;
  }

  var subtotal = 0;
  for (var i = 0; i < cart.length; i++) {
    var p = getProductById(cart[i].id);
    if (p) { subtotal += p.price * cart[i].qty; }
  }
  var delivery = subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
  var total = subtotal + delivery;

  var orderNumber = "HF" + Date.now().toString().slice(-8);

  var order = {
    orderNumber: orderNumber,
    name: document.getElementById("coName").value,
    phone: document.getElementById("coPhone").value,
    email: document.getElementById("coEmail").value,
    address: document.getElementById("coAddress").value,
    city: document.getElementById("coCity").value,
    payment: document.querySelector('input[name="payment"]:checked').value,
    notes: document.getElementById("coNotes").value,
    items: cart,
    subtotal: subtotal,
    delivery: delivery,
    total: total
  };

  // Persist the order (a real store would POST this to a server).
  var orders = [];
  try {
    orders = JSON.parse(localStorage.getItem("hitchfit_orders")) || [];
  } catch (e) {
    orders = [];
  }
  orders.push(order);
  localStorage.setItem("hitchfit_orders", JSON.stringify(orders));

  // Empty the cart now that the order is placed.
  saveCart([]);
  updateCartCount();

  // Swap the form view for the confirmation view.
  document.getElementById("checkoutMain").style.display = "none";
  var confirm = document.getElementById("orderConfirm");
  confirm.style.display = "block";
  document.getElementById("confirmNumber").innerText = orderNumber;
  document.getElementById("confirmTotal").innerText = formatBDT(total);
  document.getElementById("confirmPayment").innerText = order.payment;
  window.scrollTo(0, 0);
}

function subscribe(event) {
  event.preventDefault();
  var email = document.getElementById("emailBox").value;
  alert("Thanks for subscribing with: " + email);
  document.getElementById("emailBox").value = "";
}

// ---------- Init on every page ----------
document.addEventListener("DOMContentLoaded", function () {
  renderFeatured();
  renderShop("all");
  renderProduct();
  renderCart();
  renderCheckout();
  updateCartCount();
});
