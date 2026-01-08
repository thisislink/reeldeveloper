// Shopping cart functionality
let cart = [];

// Load cart from localStorage on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedCart = localStorage.getItem('reeldeveloper_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
});

// Add item to cart
function addToCart(id, name, price) {
    // Check if item already exists
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: id,
            name: name,
            price: price,
            quantity: 1
        });
    }
    
    saveCart();
    updateCartUI();
    showCartNotification();
}

// Remove item from cart
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    updateCartUI();
}

// Update cart quantity
function updateQuantity(id, change) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(id);
        } else {
            saveCart();
            updateCartUI();
        }
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('reeldeveloper_cart', JSON.stringify(cart));
}

// Update cart UI
function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total-amount');
    
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) {
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'block' : 'none';
    }
    
    // Update cart items display
    if (cartItems) {
        if (cart.length === 0) {
            cartItems.innerHTML = '<p style="text-align: center; color: #999;">Your cart is empty</p>';
        } else {
            cartItems.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <p class="cart-item-price">$${item.price}</p>
                    </div>
                    <div class="cart-item-controls">
                        <button onclick="updateQuantity('${item.id}', -1)" class="quantity-btn">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button onclick="updateQuantity('${item.id}', 1)" class="quantity-btn">+</button>
                        <button onclick="removeFromCart('${item.id}')" class="remove-btn">Remove</button>
                    </div>
                </div>
            `).join('');
        }
    }
    
    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (cartTotal) {
        cartTotal.textContent = total.toFixed(2);
    }
}

// Open cart modal
function openCart() {
    const modal = document.getElementById('cart-modal');
    if (modal) {
        modal.style.display = 'block';
    }
}

// Close cart modal
function closeCart() {
    const modal = document.getElementById('cart-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Close modal when clicking X
document.addEventListener('DOMContentLoaded', () => {
    const closeBtn = document.querySelector('.close-cart');
    if (closeBtn) {
        closeBtn.onclick = closeCart;
    }
    
    // Close modal when clicking outside
    window.onclick = (event) => {
        const modal = document.getElementById('cart-modal');
        if (event.target === modal) {
            closeCart();
        }
    };
});

// Show cart notification
function showCartNotification() {
    // Simple notification for now, can enhance in the future
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.textContent = 'Added to cart!';
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Proceed to checkout
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    // Temporary Alert (will be replaced with actual payment processor)
    alert('Connect checkout functionality to payment processor. Total: $' + 
          cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2));
    
    // Uncomment when payment processor is integrated to redirect to payment processor and/or create payment intent
    // window.location.href = '/checkout';
}

// Join waitlist functionality -- currently unused. Future state need to create payment link or page that will go out to the waitlist people to pay ahead of time. Or have them pay to join the waitlist upfront.
function joinWaitlist(product) {
    // For now, redirect to newsletter signup
    window.location.href = '/#newsletter';
}