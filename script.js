function toggleTheme() {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

window.addEventListener("load", () => {
    let savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }
});

window.addEventListener("load", function () {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.visibility = "hidden";
  }, 2000);
});

const faqs = document.querySelectorAll(".faq-box");
faqs.forEach(faq => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("active");
}

function addToCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let hasOrder = false;

    products.forEach(product => {
        if (product.qty > 0) {
            hasOrder = true;
            let existingProduct = cart.find(item => item.name === product.name);
            if (existingProduct) {
                existingProduct.quantity += product.qty;
            } else {
                cart.push({
                    name: product.name,
                    price: product.price,
                    quantity: product.qty,
                    image: "logo.png"
                });
            }
            // reset qty setelah masuk cart
            product.qty = 0;
        }
    });
    if (!hasOrder) {
        alert("Pilih produk dulu ya 😭");
        return;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    // update tampilan qty jadi 0 lagi
    products.forEach((product, index) => {
        document.getElementById("qty" + index).innerText = product.qty;
    });
    alert("Produk berhasil masuk keranjang 🛒💗");
}