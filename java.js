
function toggleMenu() {
    const menu = document.querySelector('.nav-links');
    menu.classList.toggle('show');}



document.querySelector('.hamburger').addEventListener('click', () => {
    // Toggle the "show" class on the nav-links to show/hide the menu
    document.querySelector('.nav-links').classList.toggle('show');
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
 