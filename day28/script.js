const products = [
    { id: 1, name: 'Plain Black', price: 1200, description: 'Plain Black t-shirt', imageURL: 'https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg' },
    { id: 2, name: 'Coffee Shack', price: 1000, description: 'White t-shirt with simple print on it', imageURL: 'https://content-management-files.canva.com/cdn-cgi/image/f=auto,q=70/2fdbd7ab-f378-4c63-8b21-c944ad2633fd/header_t-shirts2.jpg' },
];

let cart = [];

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
            <p>Rs.${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productCard);
    });
}

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

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        total += item.product.price * item.quantity;
        const cartItem = document.createElement('li');
        cartItem.innerHTML = `
            ${item.product.name} - Rs.${item.product.price} x ${item.quantity}
            <button onclick="removeFromCart(${item.product.id})">Remove</button>
        `;
        cartItems.appendChild(cartItem);
    });
    totalPrice.textContent = total.toFixed(2);
}

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

document.getElementById('checkout-btn').addEventListener('click', function() {
    document.getElementById('checkout-form').style.display = 'block';
});

generateProducts();