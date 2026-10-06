const SHOP_NAME = "Armani Store";

const WHATSAPP_NUMBER = "8801302014526";
const NAGAD_NUMBER = "01606938674";
const BKASH_NUMBER = "";

// ================= PRODUCTS =================

const products = [
  {
    id: 1,
    name: "Premium Fashion",
    category: "Men",
    price: 19500,
    image: "https://raw.githubusercontent.com/armanistore/armani-store/main/20261001_165939.jpg"
  },
  {
    id: 2,
    name: "Elegant Fashion",
    category: "Women",
    price: 7500,
    image: "https://raw.githubusercontent.com/armanistore/armani-store/main/20261003_143823.jpg"
  },
  {
    id: 3,
    name: "Premium Collection",
    category: "Accessories",
    price: 2500,
    image: "https://raw.githubusercontent.com/armanistore/armani-store/main/20261006_161100.jpg"
  }
];
// ================= CART =================

let cart = JSON.parse(localStorage.getItem("armaniCart")) || [];

let currentCategory = "All";


// ================= MONEY =================

function money(amount) {
  return "৳" + Number(amount).toLocaleString("en-BD");
}


// ================= SAVE CART =================

function saveCart() {
  localStorage.setItem("armaniCart", JSON.stringify(cart));
}


// ================= CART COUNT =================

function updateCartCount() {
  const count = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartCount = document.getElementById("cartCount");

  if (cartCount) {
    cartCount.textContent = count;
  }
}


// ================= ADD TO CART =================

function addToCart(productId) {

  const product = products.find(
    item => item.id === productId
  );

  if (!product) return;

  const existing = cart.find(
    item => item.id === productId
  );

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  }

  saveCart();
  updateCartCount();
  renderCart();

  // Cart open হবে
  document.getElementById("cart").classList.add("open");
  document.getElementById("overlay").classList.add("show");
}


// ================= REMOVE PRODUCT =================

function removeFromCart(productId) {

  cart = cart.filter(
    item => item.id !== productId
  );

  saveCart();
  updateCartCount();
  renderCart();
}


// ================= CHANGE QUANTITY =================

function changeQuantity(productId, change) {

  const item = cart.find(
    item => item.id === productId
  );

  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {
    removeFromCart(productId);
    return;
  }

  saveCart();
  updateCartCount();
  renderCart();
}


// ================= RENDER CART =================

function renderCart() {

  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");

  if (!cartItems) return;

  if (cart.length === 0) {

    cartItems.innerHTML = `
      <div class="empty-cart">
        <div style="font-size:45px;">🛒</div>
        <h3>Your cart is empty</h3>
        <p>Add some products to your cart.</p>
      </div>
    `;

    cartTotal.textContent = "৳0";
    return;
  }

  let total = 0;

  cartItems.innerHTML = cart.map(item => {

    const itemTotal = item.price * item.quantity;

    total += itemTotal;

    return `
      <div class="cart-item">

        <img 
          src="${item.image}" 
          alt="${item.name}"
          onerror="this.src='https://via.placeholder.com/100x120?text=Product'"
        >

        <div class="cart-item-info">

          <h3>${item.name}</h3>

          <p>${money(item.price)}</p>

          <div class="quantity">

            <button onclick="changeQuantity(${item.id}, -1)">
              −
            </button>

            <span>${item.quantity}</span>

            <button onclick="changeQuantity(${item.id}, 1)">
              +
            </button>

          </div>

        </div>

        <div class="cart-item-right">

          <strong>${money(itemTotal)}</strong>

          <button 
            class="remove-btn"
            onclick="removeFromCart(${item.id})">
            Remove
          </button>

        </div>

      </div>
    `;

  }).join("");

  cartTotal.textContent = money(total);
}


// ================= CART OPEN/CLOSE =================

function toggleCart() {

  const cartBox = document.getElementById("cart");
  const overlay = document.getElementById("overlay");

  cartBox.classList.toggle("open");
  overlay.classList.toggle("show");

  renderCart();
}


// ================= SEARCH + CATEGORY =================

function setCategory(category, button) {

  currentCategory = category;

  document
    .querySelectorAll(".filters button")
    .forEach(btn => btn.classList.remove("active"));

  if (button) {
    button.classList.add("active");
  }

  renderProducts();
}


// ================= PRODUCTS =================

function renderProducts() {

  const container = document.getElementById("products");

  if (!container) return;

  const searchInput = document.getElementById("search");

  const searchText =
    searchInput ?
    searchInput.value.toLowerCase().trim() :
    "";

  const filteredProducts = products.filter(product => {

    const categoryMatch =
      currentCategory === "All" ||
      product.category === currentCategory;

    const searchMatch =
      product.name.toLowerCase().includes(searchText);

    return categoryMatch && searchMatch;
  });


  if (filteredProducts.length === 0) {

    container.innerHTML = `
      <div class="no-products">
        <h3>No products found</h3>
        <p>Try another search.</p>
      </div>
    `;

    return;
  }


  container.innerHTML = filteredProducts.map(product => {

    return `
      <div class="product-card">

        <div class="product-image">

          <img
            src="${product.image}"
            alt="${product.name}"
            onerror="this.src='https://via.placeholder.com/500x600?text=Product+Image'"
          >

          <span class="category">
            ${product.category}
          </span>

        </div>

        <div class="product-info">

          <h3>${product.name}</h3>

          <div class="product-bottom">

            <strong>${money(product.price)}</strong>

            <button
              class="add-cart"
              onclick="addToCart(${product.id})">
              🛒 Add
            </button>

          </div>

        </div>

      </div>
    `;

  }).join("");
}


// ================= CHECKOUT =================

function openCheckout() {

  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  document
    .getElementById("checkoutModal")
    .classList.add("show");

  updatePaymentInfo();
}


function closeCheckout() {

  document
    .getElementById("checkoutModal")
    .classList.remove("show");
}


// ================= PAYMENT =================

document.addEventListener("DOMContentLoaded", function () {

  const payment = document.getElementById("payment");

  if (payment) {
    payment.addEventListener(
      "change",
      updatePaymentInfo
    );
  }

});


function updatePaymentInfo() {

  const payment =
    document.getElementById("payment");

  const info =
    document.getElementById("paymentInfo");

  if (!payment || !info) return;


  if (payment.value === "COD") {

    info.innerHTML = `
      <p>💵 Cash on Delivery selected.</p>
    `;

  }

  else if (payment.value === "bKash") {

    info.innerHTML = `
      <p>
        📱 bKash Number:
        <strong>
          ${BKASH_NUMBER || "Not set yet"}
        </strong>
      </p>
    `;

  }

  else if (payment.value === "Nagad") {

    info.innerHTML = `
      <p>
        📱 Nagad Number:
        <strong>
          ${NAGAD_NUMBER}
        </strong>
      </p>
    `;
  }
}


// ================= WHATSAPP =================

function sendWhatsAppOrder(orderText) {

  const url =
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=" +
    encodeURIComponent(orderText);

  window.open(url, "_blank");
}


// ================= SUBMIT ORDER =================

function submitOrder(event) {

  event.preventDefault();

  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }


  const name =
    document.getElementById("customerName").value.trim();

  const phone =
    document.getElementById("customerPhone").value.trim();

  const address =
    document.getElementById("customerAddress").value.trim();

  const payment =
    document.getElementById("payment").value;


  let total = 0;

  let orderText =
    `🛍️ *${SHOP_NAME} - New Order*%0A%0A`;


  orderText +=
    `👤 Customer: ${name}%0A`;

  orderText +=
    `📞 Phone: ${phone}%0A`;

  orderText +=
    `📍 Address: ${address}%0A`;

  orderText +=
    `💳 Payment: ${payment}%0A%0A`;

  orderText +=
    `*ORDER ITEMS*%0A`;


  cart.forEach(item => {

    const itemTotal =
      item.price * item.quantity;

    total += itemTotal;

    orderText +=
      `• ${item.name} x ${item.quantity} = ${money(itemTotal)}%0A`;
  });


  orderText +=
    `%0A💰 *Total: ${money(total)}*`;


  sendWhatsAppOrder(orderText);
}


// ================= PHONE =================

document.addEventListener("DOMContentLoaded", function () {

  const phone =
    document.getElementById("displayPhone");

  if (phone) {
    phone.textContent = WHATSAPP_NUMBER;
  }

  renderProducts();
  renderCart();
  updateCartCount();

});
