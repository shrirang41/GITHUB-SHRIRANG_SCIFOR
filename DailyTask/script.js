const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');
const resultsDiv = document.getElementById('results');

// Function to fetch products from the API
const fetchProducts = async (query) => {
  try {
    const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

// Function to display products
const displayProducts = (products) => {
  resultsDiv.innerHTML = '';
  if (products.length === 0) {
    resultsDiv.innerHTML = '<p>No products found.</p>';
    return;
  }

  products.forEach((product) => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
      <img src="${product.thumbnail}" alt="${product.title}">
      <h2>${product.title}</h2>
      <p>$${product.price}</p>
    `;
    resultsDiv.appendChild(productCard);
  });
};

// Event listener for the search button
searchBtn.addEventListener('click', async () => {
  const query = searchInput.value.trim();
  if (query) {
    const products = await fetchProducts(query);
    displayProducts(products);
  } else {
    resultsDiv.innerHTML = '<p>Please enter a search term.</p>';
  }
});
