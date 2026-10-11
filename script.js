"use strict";
const SHOP_NAME = "ARMANHOVEX";
const WHATSAPP_NUMBER = "8801302014526";
const NAGAD_NUMBER = "01606938674";
const BKASH_NUMBER = "";

// Original three legacy products removed at the owner's request.
const realProducts = [];
// EDITABLE SAMPLE DATA ONLY. Prices are fictional placeholders, not selling prices or offers.
const demoProducts = [
{id:1001,name:"Tailored Everyday Blazer",category:"mens-clothing",price:3490,demo:true,image:"https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=80",description:"A polished blazer concept for smart-casual looks.",sizes:["S","M","L","XL"],colors:["Forest","Sand"]},
{id:1002,name:"Classic Cotton Overshirt",category:"mens-clothing",price:1890,demo:true,image:"https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=900&q=80",description:"A relaxed layering piece shown as a catalog sample.",sizes:["S","M","L","XL"],colors:["Ivory","Olive"]},
{id:1003,name:"Minimal Linen Shirt",category:"mens-clothing",price:1590,demo:true,image:"https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=900&q=80",description:"An understated shirt concept with an easy silhouette.",sizes:["S","M","L"],colors:["Ivory","Blue"]},
{id:1004,name:"Soft Drape Midi Dress",category:"womens-fashion",price:2790,demo:true,image:"https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=80",description:"An elegant midi dress concept for this demo fashion edit.",sizes:["S","M","L"],colors:["Black","Rose"]},
{id:1005,name:"Everyday Knit Top",category:"womens-fashion",price:1290,demo:true,image:"https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&w=900&q=80",description:"A versatile knitwear sample for catalog styling.",sizes:["S","M","L"],colors:["Cream","Taupe"]},
{id:1006,name:"Structured Blouse",category:"womens-fashion",price:1690,demo:true,image:"https://images.unsplash.com/photo-1564257577-7a2d6e6c3f4f?auto=format&fit=crop&w=900&q=80",description:"A refined blouse concept for work-to-weekend styling.",sizes:["S","M","L"],colors:["White","Black"]},
{id:1007,name:"Minimal Sneakers",category:"shoes",price:2290,demo:true,image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",description:"A sneaker style sample; materials and actual sizing are not verified.",sizes:["39","40","41","42","43"],colors:["White","Red"]},
{id:1008,name:"Classic Loafer",category:"shoes",price:2590,demo:true,image:"https://images.unsplash.com/photo-1531310197839-ccf54634509e?auto=format&fit=crop&w=900&q=80",description:"A timeless loafer concept for a smart everyday wardrobe.",sizes:["39","40","41","42","43"],colors:["Black","Brown"]},
{id:1009,name:"Everyday Crossbody Bag",category:"bags",price:1990,demo:true,image:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80",description:"A compact bag concept for product-detail demonstrations.",colors:["Black","Tan"]},
{id:1010,name:"Structured Tote",category:"bags",price:2390,demo:true,image:"https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=80",description:"A structured tote sample with an understated silhouette.",colors:["Camel","Black"]},
{id:1011,name:"Classic Analog Watch",category:"watches",price:2890,demo:true,image:"https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=80",description:"A watch concept; brand, movement and water resistance are unspecified.",colors:["Gold","Silver"]},
{id:1012,name:"Everyday Minimal Watch",category:"watches",price:3190,demo:true,image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",description:"A minimal timepiece sample for catalog demonstration only.",colors:["Black","Silver"]},
{id:1013,name:"Gold-Tone Necklace",category:"accessories",price:790,demo:true,image:"https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=80",description:"A jewelry styling sample; finish and metal content are not verified.",colors:["Gold-tone"]},
{id:1014,name:"Classic Sunglasses",category:"accessories",price:990,demo:true,image:"https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80",description:"An accessory concept for demonstrating product details.",colors:["Black","Tortoiseshell"]},
{id:1015,name:"Leather-Look Belt",category:"accessories",price:690,demo:true,image:"https://images.unsplash.com/photo-1624222247344-550fb8d7f6c0?auto=format&fit=crop&w=900&q=80",description:"A wardrobe accessory sample; material details are illustrative only.",colors:["Black","Brown"]},
{id:1101,name:"Boy's Festive Panjabi",category:"kids-boys",price:1290,demo:true,image:"https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=80",description:"A children's festive panjabi catalog sample. Demo only; not real inventory.",sizes:["2Y","4Y","6Y","8Y","10Y"],colors:["Red","Blue"]},
{id:1102,name:"Boy's Classic Panjabi Set",category:"kids-boys",price:1490,demo:true,image:"https://images.unsplash.com/photo-1503919005314-30d93d07d823?auto=format&fit=crop&w=900&q=80",description:"A traditional boys' outfit concept for the demo collection.",sizes:["2Y","4Y","6Y","8Y","10Y"],colors:["Ivory","Green"]},
{id:1103,name:"Girl's Festive Kamiz",category:"kids-girls",price:1390,demo:true,image:"https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=900&q=80",description:"A children's festive kamiz catalog sample. Demo only; not real inventory.",sizes:["2Y","4Y","6Y","8Y","10Y"],colors:["Red","Pink"]},
{id:1104,name:"Girl's Traditional Kamiz Set",category:"kids-girls",price:1590,demo:true,image:"https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",description:"A traditional girls' outfit concept for the demo collection.",sizes:["2Y","4Y","6Y","8Y","10Y"],colors:["Red","Cream"]}
];
let products = [...realProducts, ...demoProducts];


function normalizeCategory(value) {
  const key = String(value || "").trim().toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return ({ "men-s-clothing": "mens-clothing", "women-s-fashion": "womens-fashion" })[key] || key;
}
function safeProductImageUrl(value) {
  try { const url = new URL(String(value || "")); return url.protocol === "https:" ? url.href : "https://placehold.co/600x750/f0eee5/173d30?text=ARMANHOVEX+DEMO"; }
  catch (_) { return "https://placehold.co/600x750/f0eee5/173d30?text=ARMANHOVEX+DEMO"; }
}
function parseProductCsv(text) {
  const lines = String(text || "").replace(/^\uFEFF/, "").split(/\r?\n/).filter(line => line.trim());
  if (!lines.length) return [];
  const parseRow = line => {
    const cells = []; let cell = "", quoted = false;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (ch === '"' && quoted && line[i + 1] === '"') { cell += '"'; i++; }
      else if (ch === '"') quoted = !quoted;
      else if (ch === "," && !quoted) { cells.push(cell); cell = ""; }
      else cell += ch;
    }
    cells.push(cell); return cells;
  };
  const headers = parseRow(lines[0]).map(value => value.trim());
  return lines.slice(1).map(line => { const values = parseRow(line); return Object.fromEntries(headers.map((header, i) => [header, values[i] || ""])); });
}
async function loadCsvDemoProducts() {
  try {
    const response = await fetch("armanihovex_bulk_products_100.csv", { cache: "no-store" });
    if (!response.ok) throw new Error("CSV request failed: " + response.status);
    const rows = parseProductCsv(await response.text());
    const used = new Set(products.map(product => String(product.id)));
    const usedSourceIds = new Set();
    const imported = rows.map((row, index) => {
      const sourceId = String(row.id || "").trim();
      const price = Number(String(row.price || "").replace(/[^0-9.]/g, ""));
      const id = 2001 + index;
      if (!sourceId || usedSourceIds.has(sourceId) || !String(row.name || "").trim() || !Number.isFinite(price) || price < 0 || used.has(String(id))) return null;
      used.add(String(id)); usedSourceIds.add(sourceId);
      return { id, sourceId, name: String(row.name).trim(), category: normalizeCategory(row.category), price,
        image: safeProductImageUrl(row.image), description: String(row.description || "Demo sample product.").trim(),
        demo: true, priceLabel: String(row.priceLabel || "DEMO PRICE — SAMPLE ONLY").trim(), sizes: [], colors: [] };
    }).filter(Boolean);
    products = [...realProducts, ...demoProducts, ...imported];
    renderProducts();
  } catch (error) { console.error("Could not load demo CSV; existing catalog remains available.", error); }
}

let cart = [];
try { cart = (JSON.parse(localStorage.getItem("armaniCart")) || []).filter(item => ![1, 2, 3].includes(Number(item.id))); } catch (error) { cart = []; }
let currentCategory = "All";

function money(amount) { return "৳" + Number(amount).toLocaleString("en-BD"); }
function isDemoProduct(itemOrId) { const item = typeof itemOrId === "object" ? itemOrId : products.find(product => product.id === Number(itemOrId)); return Boolean(item && item.demo === true); }
function imageFallback(img) { img.onerror = null; img.src = "https://placehold.co/600x750/f0eee5/173d30?text=ARMANHOVEX+DEMO"; }
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
  else cart.push({ id: product.id, name: product.name, price: product.price, image: product.image, demo: product.demo === true, quantity: 1 });
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
    const demoItem = isDemoProduct(item.id) || item.demo === true;
    const cartLabel = demoItem ? '<small class="demo-cart-label">DEMO — NOT FOR SALE · NOT REAL STOCK</small>' : '';
    const safeImage = escapeHTML(item.image || "");
    return '<div class="cart-line' + (demoItem ? ' cart-line-demo' : '') + '"><img src="' + safeImage + '" alt="' + safeName + '" onerror="this.style.visibility=\'hidden\'"><div><strong>' + safeName + '</strong>' + cartLabel + '<small>' + money(item.price) + (demoItem ? ' demo placeholder' : ' each') + '</small><div class="qty-controls"><button type="button" aria-label="Decrease quantity" onclick="changeQuantity(' + Number(item.id) + ',-1)">−</button><span>' + Number(item.quantity) + '</span><button type="button" aria-label="Increase quantity" onclick="changeQuantity(' + Number(item.id) + ',1)">+</button></div></div><div class="cart-line-right"><strong>' + money(lineTotal) + '</strong><button type="button" class="remove-btn" onclick="removeFromCart(' + Number(item.id) + ')">Remove</button></div></div>';
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
function selectKidsCollection(category) {
  currentCategory = category;
  document.querySelectorAll(".filters button").forEach(btn => btn.classList.remove("active"));
  renderProducts();
  const shop = document.getElementById("shop");
  if (shop) shop.scrollIntoView({ behavior: "smooth", block: "start" });
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
  const filtered = products.filter(product => (currentCategory === "All" || product.category.toLowerCase() === String(currentCategory).toLowerCase()) && (product.name.toLowerCase().includes(query) || product.category.toLowerCase().replace(/-/g, " ").includes(query) || (product.description || "").toLowerCase().includes(query)));
  if (!filtered.length) {
    container.innerHTML = '<div class="no-results"><h3>No matches just yet</h3><p>Try a different search or explore all items.</p><button class="button button-green" type="button" onclick="resetProductFilters()">View all items</button></div>';
    return;
  }
  container.innerHTML = filtered.map(product => {
    const discount = Number(product.originalPrice) > Number(product.price);
    const demoTag = product.demo === true ? '<span class="product-tag demo-product-tag">DEMO PRODUCT — NOT FOR SALE</span>' : '<span class="product-tag">' + escapeHTML(product.category) + '</span>';
    const options = '<div class="product-actions"><button class="select-button" type="button" onclick="openProductDetails(' + Number(product.id) + ')" aria-label="Select ' + escapeHTML(product.name) + '">Select product</button><button class="add-button" type="button" onclick="addToCart(' + Number(product.id) + ')">＋ Add to bag</button></div>';
    return '<article class="product-card" tabindex="0" role="group" aria-label="' + escapeHTML(product.name) + '" onclick="if(!event.target.closest(\'button\'))openProductDetails(' + Number(product.id) + ')" onkeydown="if(event.key===\'Enter\'||event.key===\' \'){event.preventDefault();openProductDetails(' + Number(product.id) + ')}"><div class="product-image"><img loading="lazy" src="' + escapeHTML(product.image) + '" alt="' + escapeHTML(product.name) + '" onerror="this.onerror=null;this.src=\'https://placehold.co/600x700/f0eee5/173d30?text=ARMANHOVEX\'">' + demoTag + (discount ? '<span class="discount-tag">Special price</span>' : '') + '</div><div class="product-info"><span class="product-category">' + escapeHTML(product.category.replace(/-/g, " ")) + '</span><h3>' + escapeHTML(product.name) + '</h3><div class="product-bottom"><strong class="price">' + money(product.price) + (discount ? '<span class="product-old-price">' + money(product.originalPrice) + '</span>' : '') + (product.demo ? '<small class="demo-price-label">DEMO PRICE · SAMPLE ONLY</small>' : '') + '</strong>' + options + '</div></div></article>';
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
  document.getElementById("detailImage").onerror = () => imageFallback(document.getElementById("detailImage"));
  document.getElementById("detailImage").src = product.image;
  document.getElementById("detailImage").alt = product.name;
  document.getElementById("detailCategory").textContent = product.demo === true ? "DEMO PRODUCT — NOT FOR SALE · " + product.category.replace(/-/g, " ") : product.category;
  document.getElementById("detailName").textContent = product.name;
  const prices = document.getElementById("detailPrices");
  prices.textContent = money(product.price) + (product.demo ? " · " + (product.priceLabel || "DEMO PRICE — SAMPLE ONLY") + " · NOT A SELLING PRICE" : "");
  if (Number(product.originalPrice) > Number(product.price)) {
    const old = document.createElement("span"); old.className = "product-old-price"; old.textContent = money(product.originalPrice); prices.appendChild(old);
  }
  document.getElementById("detailDescription").textContent = (product.description || "Additional product details have not been provided. Please contact ARMANHOVEX on WhatsApp to confirm details before ordering.") + (product.demo ? " DEMO SAMPLE ONLY: this is not real inventory and cannot be purchased. Options are illustrative, not confirmed stock." : "");
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
  document.getElementById("detailAddButton").textContent = product.demo ? "Add demo item to bag (not for sale)" : "Add to bag";
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
  if (cart.some(item => isDemoProduct(item.id) || item.demo === true)) { alert("Demo catalog items are NOT FOR SALE. Their prices are fictional placeholders and they are not real inventory. Remove all demo items from your bag before using WhatsApp checkout. No demo item has been sent as an order."); return; }
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
  loadCsvDemoProducts();
});