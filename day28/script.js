// Sample product data
const products = [
    { id: 1, name: 'Product 1', price: 10, description: 'Description 1', imageURL: 'https://via.placeholder.com/100' },
    { id: 2, name: 'Product 2', price: 20, description: 'Description 2', imageURL: 'https://via.placeholder.com/100' },
    // Add more products as needed
];

let cart = [];

// Function to generate product cards
function generateProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product';
        productCard.innerHTML = `
            <img src="${product.imageURL}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productCard);
    });
}

// Function to handle adding to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const cartItem = cart.find(item => item.product.id === productId);
        if (cartItem) {
            cartItem.quantity++;
        } else {
            cart.push({ product, quantity: 1 });
        }
        updateCart();
    }
}

// Function to update cart display
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        total += item.product.price * item.quantity;
        const cartItem = document.createElement('li');
        cartItem.innerHTML = `
            ${item.product.name} - $${item.product.price} x ${item.quantity}
            <button onclick="removeFromCart(${item.product.id})">Remove</button>
        `;
        cartItems.appendChild(cartItem);
    });
    totalPrice.textContent = total.toFixed(2);
}

// Function to remove items from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.product.id !== productId);
    updateCart();
}

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Order placed successfully!');
    document.getElementById('checkout-form').style.display = 'none';
    cart = [];
    updateCart();
});

// Show checkout form on checkout button click
document.getElementById('checkout-btn').addEventListener('click', function() {
    document.getElementById('checkout-form').style.display = 'block';
});

// Initialize the product list
generateProducts();
