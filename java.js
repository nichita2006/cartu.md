const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
const cartIcon = document.querySelector('.cart-icon');
const cartCount = document.querySelector('.cart-count');

// Initialize cart item count
let itemCount = 0;

// Function to update the cart count
function updateCartCount(count) {
    cartCount.textContent = count;
}

// Event listener for clicking the cart icon
cartIcon.addEventListener('click', () => {
    // Increment the item count (for demonstration purposes)
    itemCount++;
    updateCartCount(itemCount);
});
const toggleButton = document.querySelector('#navbar-toggle');
const menu = document.querySelector('#navbar-menu');

toggleButton.addEventListener('click', () => {
    menu.classList.toggle('show');
});
 