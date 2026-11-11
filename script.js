const products = [
  {
    id: 1,
    name: "Under-Desk Cable Management Tray",
    category: "organization",
    price: 2599,
    image: "item-01.jpg",
    description: "Heavy-duty matte black steel clamp-on tray that hides power strips and cables.",
    fullDescription: "Keep your workspace clean and hazard-free with our heavy-duty Under-Desk Cable Management Tray. Designed with a no-drill clamp mechanism, it attaches securely to any desk in seconds and holds bulky power bricks, surge protectors, and excess wires completely out of sight.",
    specs: [
      "Material: Powder-coated heavy-duty steel",
      "Installation: No-drill padded desk clamps",
      "Weight Capacity: Up to 10 kg",
      "Dimensions: 40cm x 15cm x 12cm"
    ]
  },
  {
    id: 2,
    name: "Minimalist LED Ambient Light Bars (Pair)",
    category: "lighting",
    price: 4999,
    originalPrice: 5999, // <-- Add this line for any product on sale
    image: "item-02.jpg",
    description: "Dual vertical matte-black LED light tubes with remote-controlled dimming.",
    fullDescription: "Transform your desk atmosphere for late-night coding, gaming, or studying. These dual vertical LED light bars cast a soft, glare-free ambient glow against your wall, reducing eye strain while elevating your setup's aesthetic.",
    specs: [
      "Color Modes: Warm White (2700K) to Cool Daylight (6500K)",
      "Control: Inline remote with 10 brightness levels",
      "Power: USB-A / Wall adapter compatible",
      "Height: 38cm matte-black aluminum body"
    ]
  },
  {
    id: 3,
    name: "Ergonomic Folding Laptop & Tablet Stand",
    category: "ergonomics",
    price: 4499,
    image: "item-03.jpg",
    description: "Portable, height-adjustable stand that elevates your laptop and tablet to eye level.",
    fullDescription: "Say goodbye to neck and back pain. This ultra-portable folding stand raises your laptop screen to an ergonomic eye level, improving posture and airflow to keep your device cool during heavy workloads.",
    specs: [
      "Compatibility: 11-inch to 17-inch laptops & tablets",
      "Adjustability: 6 ergonomic height angles",
      "Material: Reinforced ABS & non-slip silicone pads",
      "Portability: Folds flat in 2 seconds"
    ]
  },
  {
    id: 4,
    name: "Nordic Grey Felt Desk Mat",
    category: "accessories",
    price: 1199,
    image: "item-04.jpg",
    description: "Soft, anti-slip acoustic felt desk pad that protects surfaces and defines your workspace.",
    fullDescription: "Anchor your keyboard, mouse, and notebook on one sleek surface. Our Nordic Grey Felt Desk Mat dampens typing noise, protects your desk from scratches, and provides a warm, tactile feel for all-day comfort.",
    specs: [
      "Size: 80cm x 40cm (Large)",
      "Thickness: 4mm dense acoustic felt",
      "Base: Anti-slip rubberized backing",
      "Care: Spill-resistant and easy to wipe clean"
    ]
  },
  {
    id: 5,
    name: "Silent Wireless Ergonomic Mouse",
    category: "peripherals",
    price: 3499,
    image: "item-05.jpg",
    description: "Dual-mode Bluetooth & 2.4GHz wireless mouse with silent clicks and adjustable DPI.",
    fullDescription: "Work quietly from anywhere with our Silent Wireless Ergonomic Mouse. Contoured to fit naturally in your hand, it features whisper-quiet buttons, seamless switching between two devices, and a rechargeable battery that lasts up to 60 days.",
    specs: [
      "Connectivity: Bluetooth 5.1 + 2.4GHz USB Receiver",
      "DPI Levels: 800 / 1200 / 1600 / 2400",
      "Battery: Rechargeable 500mAh (USB-C)",
      "Buttons: 6 silent tactile buttons"
    ]
  },
  {
    id: 6,
    name: "Compact 75% Mechanical Keyboard",
    category: "peripherals",
    price: 6999,
    originalPrice: 7999,
    image: "item-06.jpg",
    description: "Space-saving matte-black mechanical keyboard with hot-swappable switches and white backlight.",
    fullDescription: "Designed for developers and writers, this 75% layout mechanical keyboard saves desk space while keeping dedicated arrow and function keys. Enjoy crisp tactile feedback and clean white LED backlighting.",
    specs: [
      "Layout: 84-Key Compact (75%)",
      "Switches: Tactile Brown (Hot-swappable)",
      "Connection: Detachable USB-C braided cable",
      "Compatibility: Windows, macOS, and Linux"
    ]
  },
  {
    id: 7,
    name: "7-in-1 Aluminum USB-C Hub",
    category: "accessories",
    price: 2899,
    image: "item-07.jpg",
    description: "Sleek space-grey adapter adding 4K HDMI, USB 3.0, and SD card slots to your laptop.",
    fullDescription: "Expand a single USB-C port into a complete workstation. Connect an external 4K monitor, transfer files from SD cards, and plug in your wired peripherals all at once.",
    specs: [
      "Video Output: 4K @ 30Hz HDMI",
      "Data Ports: 3x USB 3.0 (5Gbps)",
      "Card Readers: SD & MicroSD slots",
      "Pass-through Charging: 100W USB-C PD"
    ]
  },
  {
    id: 8,
    name: "Matte-Black Aluminum Headphone Stand",
    category: "organization",
    price: 1899,
    image: "item-08.jpg",
    description: "Weighted desk stand with a contoured silicone rest to keep your headphones safe and organized.",
    fullDescription: "Keep your over-ear headphones off your desk and within arm's reach. Built with a solid aluminum stem and a weighted non-slip base, this stand prevents headband creases and frees up valuable workspace.",
    specs: [
      "Material: Anodized aluminum + soft TPU headrest",
      "Base: Weighted with anti-slip silicone pad",
      "Height: 24cm (fits all over-ear headphones)",
      "Color: Matte Black"
    ]
  }
];

let cart = [];

// DOM Elements
const SHIPPING_COST = 300;
const cartSubtotal = document.getElementById("cart-subtotal");
const cartShipping = document.getElementById("cart-shipping");
const productGrid = document.getElementById("product-grid");
const searchInput = document.getElementById("search-input");
const categoryFilter = document.getElementById("category-filter");
const cartBtn = document.getElementById("cart-btn");
const cartModal = document.getElementById("cart-modal");
const closeCart = document.getElementById("close-cart");
const drawerTitle = document.getElementById("drawer-title");
const cartView = document.getElementById("cart-view");
const cartItemsContainer = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");
const checkoutBtn = document.getElementById("checkout-btn");
const checkoutForm = document.getElementById("checkout-form");
const checkoutTotal = document.getElementById("checkout-total");
const backToCartBtn = document.getElementById("back-to-cart");

const storeHomeView = document.getElementById("store-home-view");
const productDetailView = document.getElementById("product-detail-view");
const productDetailContent = document.getElementById("product-detail-content");
const backToStoreBtn = document.getElementById("back-to-store");

function formatPKR(amount) {
  return `Rs. ${amount.toLocaleString()}`;
}

function renderProducts(items) {
  productGrid.innerHTML = "";
  if (items.length === 0) {
    productGrid.innerHTML = "<p>No products match your search.</p>";
    return;
  }

  items.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    
    const saleBadge = product.originalPrice ? `<span class="sale-badge">SALE</span>` : "";
    const priceHTML = product.originalPrice
      ? `<span class="old-price">${formatPKR(product.originalPrice)}</span> <span class="price">${formatPKR(product.price)}</span>`
      : `<span class="price">${formatPKR(product.price)}</span>`;

    card.innerHTML = `
      ${saleBadge}
      <img src="${product.image}" alt="${product.name}" class="clickable" onclick="openProductPage(${product.id})" />
      <div class="product-info">
        <span class="product-category">${product.category}</span>
        <h3 class="clickable" onclick="openProductPage(${product.id})">${product.name}</h3>
        <p>${product.description}</p>
        <div class="product-footer">
          <div>${priceHTML}</div>
          <button class="add-btn" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
      </div>
    `;
    productGrid.appendChild(card);
  });
}

function openProductPage(id) {
  const product = products.find((p) => p.id === id);
  if (!product) return;

  const specsHTML = product.specs.map((spec) => `<li>${spec}</li>`).join("");
  const priceHTML = product.originalPrice
    ? `<span class="old-price">${formatPKR(product.originalPrice)}</span> ${formatPKR(product.price)}`
    : formatPKR(product.price);

  productDetailContent.innerHTML = `
    <div class="detail-image">
      <img src="${product.image}" alt="${product.name}" />
    </div>
    <div class="detail-info">
      <span class="product-category">${product.category}</span>
      <h1>${product.name}</h1>
      <div class="detail-price">${priceHTML}</div>
      <p class="detail-description">${product.fullDescription}</p>
      <h4>Key Specifications:</h4>
      <ul class="detail-specs">
        ${specsHTML}
      </ul>
      <button class="btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
    </div>
  `;

  storeHomeView.classList.add("hidden");
  productDetailView.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}


function closeProductPage() {
  productDetailView.classList.add("hidden");
  storeHomeView.classList.remove("hidden");
}
const businessPlanView = document.getElementById("business-plan-view");

function openBusinessPlan() {
  storeHomeView.classList.add("hidden");
  productDetailView.classList.add("hidden");
  businessPlanView.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showHomePage() {
  productDetailView.classList.add("hidden");
  businessPlanView.classList.add("hidden");
  storeHomeView.classList.remove("hidden");
}

// Keep closeProductPage working for the logo/back button
function closeProductPage() {
  showHomePage();
}
function filterProducts() {
  const query = searchInput.value.toLowerCase();
  const category = categoryFilter.value;

  const filtered = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(query) || p.description.toLowerCase().includes(query);
    const matchesCategory = category === "all" || p.category === category;
    return matchesSearch && matchesCategory;
  });

  renderProducts(filtered);
}

function addToCart(id) {
  const product = products.find((p) => p.id === id);
  const existing = cart.find((item) => item.id === id);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  updateCartUI();
}

function updateQty(id, change) {
  const item = cart.find((i) => i.id === id);
  if (!item) return;

  item.qty += change;
  if (item.qty <= 0) {
    cart = cart.filter((i) => i.id !== id);
  }
  updateCartUI();
}

function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = totalItems > 0 ? SHIPPING_COST : 0;
  const finalTotal = subtotal + shipping;

  cartCount.textContent = totalItems;
  cartSubtotal.textContent = formatPKR(subtotal);
  cartShipping.textContent = formatPKR(shipping);
  cartTotal.textContent = formatPKR(finalTotal);
  checkoutTotal.textContent = formatPKR(finalTotal);

  cartItemsContainer.innerHTML = "";
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cart.forEach((item) => {
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <div>
        <strong>${item.name}</strong>
        <div>${formatPKR(item.price * item.qty)}</div>
      </div>
      <div class="cart-item-controls">
        <button class="qty-btn" onclick="updateQty(${item.id}, -1)">-</button>
        <span>${item.qty}</span>
        <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
      </div>
    `;
    cartItemsContainer.appendChild(div);
  });
}

function showCartView() {
  drawerTitle.textContent = "Your Cart";
  cartView.classList.remove("hidden");
  checkoutForm.classList.add("hidden");
}

function showCheckoutView() {
  drawerTitle.textContent = "Checkout";
  cartView.classList.add("hidden");
  checkoutForm.classList.remove("hidden");
}

// Event Listeners
searchInput.addEventListener("input", filterProducts);
categoryFilter.addEventListener("change", filterProducts);
backToStoreBtn.addEventListener("click", closeProductPage);

cartBtn.addEventListener("click", () => {
  showCartView();
  cartModal.classList.remove("hidden");
});

closeCart.addEventListener("click", () => cartModal.classList.add("hidden"));

checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  showCheckoutView();
});

backToCartBtn.addEventListener("click", showCartView);

checkoutForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("cust-name").value;
  const payment = document.getElementById("payment-method").value;
  const total = checkoutTotal.textContent;

  alert(`Order Confirmed!\n\nThank you, ${name}.\nTotal: ${total}\nPayment Method: ${payment}\n\nYour DeskHub PK order is on its way!`);

  cart = [];
  updateCartUI();
  checkoutForm.reset();
  showCartView();
  cartModal.classList.add("hidden");
});

// Initial Render
renderProducts(products);
updateCartUI();

