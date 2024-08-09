document.addEventListener('DOMContentLoaded', () => {
    let products = [];
    let cart = [];

    fetch('products.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        displayProducts();
    })
    .catch(error => console.log('Error fetching products ', error));

    function displayProducts() {
        const productList = document.getElementById('product-list');
        productList.innerHTML = '';
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>&#8377 ${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            productList.appendChild(productCard);
        });
    }

    window.addToCart = function (productId) {
        const product = products.find(p => p.id === productId);
        const cartItem = cart.find(item => item.product.id === productId);

        if (cartItem) {
            cartItem.quantity += 1;
        } else {
            cart.push({ product, quantity: 1});
        }
        updateCart();

    };

    function updateCart() {
        const cartList = document.getElementById('cart-list');
        const cartTotal = document.getElementById('cart-total');
        cartList.innerHTML = ''; // Clear previous cart items
        let total = 0;
    
        cart.forEach(cartItem => {
            total += cartItem.product.price * cartItem.quantity;
    
            const cartDiv = document.createElement('div');
            cartDiv.classList.add('cart-item');
            cartDiv.innerHTML = `
                <p>${cartItem.product.name} - &#8377;${cartItem.product.price.toFixed(2)} x ${cartItem.quantity}</p>
                <button onclick="removeFromCart(${cartItem.product.id})">Remove</button>
            `;
            cartList.appendChild(cartDiv); // Append the new cart item to the cart list
        });
    
        cartTotal.innerHTML = total.toFixed(2);
    }
    

    window.removeFromCart = function(productId) {
        cart = cart.filter(item => item.product.id !== productId);
        updateCart();
    };

    document.getElementById('checkout-form').addEventListener('submit', (e) => {
        e.preventDefault();

        alert("Order placed successfully!");
        cart = [];
        updateCart();
        document.getElementById('checkout-form').reset();
    });
});