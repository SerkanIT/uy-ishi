async function fetchProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products?limit=10");
    const products = await response.json();
    const container = document.getElementById("products");

    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = "product-card";

      productCard.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h2>${product.title}</h2>
                <p>${product.description.substring(0, 80)}...</p>
                <div class="price">$${product.price}</div>
                <div class="rating">Rating: ${product.rating.rate} (${
        product.rating.count
      } reviews)</div>
            `;
      container.appendChild(productCard);
    });
  } catch (error) {
    console.error("Tur yoqol shettan:", error);
  }
}

fetchProducts();
