"use strict";
const SHOP_NAME = "ARMANHOVEX";
const WHATSAPP_NUMBER = "8801302014526";
const NAGAD_NUMBER = "01606938674";
const BKASH_NUMBER = "";

// Original product data preserved.
const products = [
  { id: 1, name: "Iphone 11pro max", category: "phone", price: 19500, image: "https://raw.githubusercontent.com/armanistore/armani-store/main/20261001_165939.jpg" },
  { id: 2, name: "Ipad 2", category: "phone", price: 7500, image: "https://raw.githubusercontent.com/armanistore/armani-store/main/20261003_143823.jpg" },
  { id: 3, name: "samsung j6", category: "phone", price: 3000, image: "https://raw.githubusercontent.com/armanistore/armani-store/main/20261006_161100.jpg" }
];
let cart = [];
try { cart = JSON.parse(localStorage.getItem("armaniCart")) || []; } catch (error) { cart = []; }
let currentCategory = "All";

function money(amount) { return "৳" + Number(amount).toLocaleString("en-BD"); }
function saveCart() { try { localStorage.setItem("armaniCart", JSON.stringify(cart)); } catch (error) { /* Storage may be unavailable in private browsing. */ } }
function updateCartCount() {
  const count = cart.reduce((total, item) => total + Number(item.quantity || 0), 0);
  const badge = document.getElementById("cartCount");
  if (badge) badge.textContent = count;
  const title = document.getElementById("cartCountTitle");
  if (title) title.textContent = count ? "(" + count + ")" : "";
}
function addToCart(productId) {
  const product = products.find(item => item.id === productId);
  if (!product) return;
  const existing = cart.find(item => item.id === productId);
  if (existing) existing.quantity += 1;
  else cart.push({ id: product.id, name: product.name, price: product.price, image: product.image, quantity: 1 });
  saveCart(); updateCartCount(); renderCart(); setCartOpen(true);
}
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart(); updateCartCount(); renderCart();
}
function changeQuantity(productId, change) {
  const item = cart.find(item => item.id === productId);
  if (!item) return;
  item.quantity += change;
  if (item.quantity <= 0) cart = cart.filter(entry => entry.id !== productId);
  saveCart(); updateCartCount(); renderCart();
}
function renderCart() {
  const container = document.getElementById("cartItems");
  const totalNode = document.getElementById("cartTotal");
  if (!container || !totalNode) return;
  if (!cart.length) {
    container.innerHTML = '<div class="cart-empty"><span aria-hidden="true">♡</span><h3>Your bag is waiting</h3><p>Explore the collection and add something you love.</p></div>';
    totalNode.textContent = money(0); updateCartCount(); return;
  }
  let total = 0;
  container.innerHTML = cart.map(item => {
    const lineTotal = Number(item.price) * Number(item.quantity);
    total += lineTotal;
    const safeName = escapeHTML(item.name);
    const safeImage = escapeHTML(item.image || "");
    return '<div class="cart-line"><img src="' + safeImage + '" alt="' + safeName + '" onerror="this.style.visibility=\'hidden\'"><div><strong>' + safeName + '</strong><small>' + money(item.price) + ' each</small><div class="qty-controls"><button type="button" aria-label="Decrease quantity" onclick="changeQuantity(' + Number(item.id) + ',-1)">−</button><span>' + Number(item.quantity) + '</span><button type="button" aria-label="Increase quantity" onclick="changeQuantity(' + Number(item.id) + ',1)">+</button></div></div><div class="cart-line-right"><strong>' + money(lineTotal) + '</strong><button type="button" class="remove-btn" onclick="removeFromCart(' + Number(item.id) + ')">Remove</button></div></div>';
  }).join("");
  totalNode.textContent = money(total); updateCartCount();
}
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}
function setCartOpen(open) {
  const drawer = document.getElementById("cart"), overlay = document.getElementById("overlay");
  if (!drawer || !overlay) return;
  drawer.classList.toggle("open", open); overlay.classList.toggle("open", open);
  document.body.classList.toggle("cart-open", open);
  drawer.setAttribute("aria-hidden", String(!open));
}
function toggleCart() {
  const drawer = document.getElementById("cart");
  if (drawer) setCartOpen(!drawer.classList.contains("open"));
  renderCart();
}
function setCategory(category, button) {
  currentCategory = category;
  document.querySelectorAll(".filters button").forEach(btn => btn.classList.toggle("active", btn === button || (!button && (category === "All" ? btn.dataset.category === "All" : btn.dataset.category === category))));
  renderProducts();
  const shop = document.getElementById("shop");
  if (shop && !button) shop.scrollIntoView({ behavior: "smooth", block: "start" });
}
function renderProducts() {
  const container = document.getElementById("products");
  if (!container) return;
  const input = document.getElementById("search");
  const query = input ? input.value.toLowerCase().trim() : "";
  const filtered = products.filter(product => (currentCategory === "All" || product.category.toLowerCase() === String(currentCategory).toLowerCase()) && (product.name.toLowerCase().includes(query) || product.category.toLowerCase().includes(query)));
  if (!filtered.length) {
    container.innerHTML = '<div class="no-results"><h3>No matches just yet</h3><p>Try a different search or explore all items.</p><button class="button button-green" type="button" onclick="resetProductFilters()">View all items</button></div>';
    return;
  }
  container.innerHTML = filtered.map(product => {
    const discount = Number(product.originalPrice) > Number(product.price);
    const demoTag = product.demo === true ? '<span class="product-tag">Demo product</span>' : '<span class="product-tag">' + escapeHTML(product.category) + '</span>';
    const options = '<div class="product-actions"><button class="select-button" type="button" onclick="openProductDetails(' + Number(product.id) + ')" aria-label="Select ' + escapeHTML(product.name) + '">Select product</button><button class="add-button" type="button" onclick="addToCart(' + Number(product.id) + ')">＋ Add to bag</button></div>';
    return '<article class="product-card" tabindex="0" role="group" aria-label="' + escapeHTML(product.name) + '" onclick="if(!event.target.closest(\'button\'))openProductDetails(' + Number(product.id) + ')" onkeydown="if(event.key===\'Enter\'||event.key===\' \'){event.preventDefault();openProductDetails(' + Number(product.id) + ')}"><div class="product-image"><img loading="lazy" src="' + escapeHTML(product.image) + '" alt="' + escapeHTML(product.name) + '" onerror="this.onerror=null;this.src=\'https://placehold.co/600x700/f0eee5/173d30?text=ARMANHOVEX\'">' + demoTag + (discount ? '<span class="discount-tag">Special price</span>' : '') + '</div><div class="product-info"><span class="product-category">' + escapeHTML(product.category) + '</span><h3>' + escapeHTML(product.name) + '</h3><div class="product-bottom"><strong class="price">' + money(product.price) + (discount ? '<span class="product-old-price">' + money(product.originalPrice) + '</span>' : '') + '</strong>' + options + '</div></div></article>';
  }).join("");
}
function slideProducts(direction) {
  const container = document.getElementById("products");
  if (!container) return;
  const card = container.querySelector(".product-card");
  if (!card) return;
  container.scrollBy({ left: direction * (card.getBoundingClientRect().width + parseFloat(getComputedStyle(container).gap || 0)) * 2, behavior: "smooth" });
}
let selectedDetailProduct = null;
let detailQuantity = 1;
function openProductDetails(productId) {
  const product = products.find(item => item.id === productId);
  if (!product) return;
  selectedDetailProduct = product;
  detailQuantity = 1;
  const modal = document.getElementById("productModal"), backdrop = document.getElementById("productModalBackdrop");
  document.getElementById("detailImage").src = product.image;
  document.getElementById("detailImage").alt = product.name;
  document.getElementById("detailCategory").textContent = product.demo === true ? "DEMO PRODUCT · " + product.category : product.category;
  document.getElementById("detailName").textContent = product.name;
  const prices = document.getElementById("detailPrices");
  prices.textContent = money(product.price);
  if (Number(product.originalPrice) > Number(product.price)) {
    const old = document.createElement("span"); old.className = "product-old-price"; old.textContent = money(product.originalPrice); prices.appendChild(old);
  }
  document.getElementById("detailDescription").textContent = product.description || "Additional product details have not been provided. Please contact ARMANHOVEX on WhatsApp to confirm details before ordering.";
  const options = document.getElementById("detailOptions");
  options.innerHTML = "";
  [["Available sizes", product.sizes], ["Available colors", product.colors]].forEach(([label, values]) => {
    if (!Array.isArray(values) || !values.length) return;
    const group = document.createElement("div"); group.className = "detail-option";
    const strong = document.createElement("strong"); strong.textContent = label; group.appendChild(strong);
    values.forEach(value => { const span = document.createElement("span"); span.textContent = value; group.appendChild(span); });
    options.appendChild(group);
  });
  document.getElementById("detailQuantity").textContent = detailQuantity;
  document.getElementById("detailAddButton").onclick = () => { for (let i = 0; i < detailQuantity; i++) addToCartWithoutOpening(selectedDetailProduct.id); closeProductDetails(); setCartOpen(true); renderCart(); };
  modal.hidden = false; backdrop.hidden = false; modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  document.getElementById("detailAddButton").focus();
}
function changeDetailQuantity(change) {
  detailQuantity = Math.max(1, Math.min(99, detailQuantity + change));
  const output = document.getElementById("detailQuantity");
  if (output) output.textContent = detailQuantity;
}
function closeProductDetails() {
  const modal = document.getElementById("productModal"), backdrop = document.getElementById("productModalBackdrop");
  if (modal) { modal.hidden = true; modal.setAttribute("aria-hidden", "true"); }
  if (backdrop) backdrop.hidden = true;
  document.body.style.overflow = "";
}
function addToCartWithoutOpening(productId) {
  const product = products.find(item => item.id === productId);
  if (!product) return;
  const existing = cart.find(item => item.id === productId);
  if (existing) existing.quantity += 1;
  else cart.push({ id: product.id, name: product.name, price: product.price, image: product.image, quantity: 1 });
  saveCart(); updateCartCount();
}
function resetProductFilters() {
  currentCategory = "All";
  const input = document.getElementById("search");
  if (input) input.value = "";
  document.querySelectorAll(".filters button").forEach(button => button.classList.toggle("active", button.dataset.category === "All"));
  renderProducts();
}
function openCheckout() {
  if (!cart.length) { alert("Your bag is empty. Add a product before checking out."); return; }
  setCartOpen(true);
  const form = document.getElementById("checkoutForm");
  if (form) form.scrollIntoView({ behavior: "smooth", block: "nearest" });
  updatePaymentInfo();
}
function closeCheckout() { setCartOpen(false); }
function updatePaymentInfo() {
  const payment = document.getElementById("payment"), info = document.getElementById("paymentInfo");
  if (!payment || !info) return;
  if (payment.value === "COD") info.textContent = "Cash on Delivery selected.";
  else if (payment.value === "bKash") info.textContent = "bKash number: " + (BKASH_NUMBER || "Please contact us to confirm the number.");
  else info.textContent = "Nagad number: " + NAGAD_NUMBER;
}
function sendWhatsAppOrder(orderText) {
  const url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(orderText);
  const opened = window.open(url, "_blank", "noopener,noreferrer");
  if (!opened) window.location.href = url;
}
function submitOrder(event) {
  event.preventDefault();
  if (!cart.length) { alert("Your bag is empty."); return; }
  const name = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("customerPhone").value.trim();
  const address = document.getElementById("customerAddress").value.trim();
  const payment = document.getElementById("payment").value;
  if (!name || !phone || !address) { alert("Please complete your contact and delivery details."); return; }
  let total = 0;
  let orderText = "🛍️ " + SHOP_NAME + " — New Order\n\nCustomer: " + name + "\nPhone: " + phone + "\nAddress: " + address + "\nPayment: " + payment + "\n\nORDER ITEMS\n";
  cart.forEach(item => {
    const lineTotal = Number(item.price) * Number(item.quantity);
    total += lineTotal;
    orderText += "• " + item.name + " × " + item.quantity + " = " + money(lineTotal) + "\n";
  });
  orderText += "\nTotal: " + money(total);
  sendWhatsAppOrder(orderText);
}
document.addEventListener("DOMContentLoaded", () => {
  const phone = document.getElementById("displayPhone");
  if (phone) phone.textContent = WHATSAPP_NUMBER;
  const payment = document.getElementById("payment");
  if (payment) payment.addEventListener("change", updatePaymentInfo);
  const overlay = document.getElementById("overlay");
  if (overlay) overlay.addEventListener("click", () => setCartOpen(false));
  document.addEventListener("keydown", event => { if (event.key === "Escape") { closeProductDetails(); setCartOpen(false); } });
  renderProducts(); renderCart(); updateCartCount(); updatePaymentInfo();
});