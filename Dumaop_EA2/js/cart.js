const cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart() {
    const select = document.getElementById('bookSelect');
    const item = select.value;
    const price = parseInt(select.options[select.selectedIndex].text.split('₱')[1]);
    cart.push({ name: item, price: price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${item} added to cart.`);
}

function buyItems() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const list = document.getElementById('cartItems');
    const totalSpan = document.getElementById('total');
    list.innerHTML = '';
    let total = 0;
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ₱${item.price}`;
        list.appendChild(li);
        total += item.price;
    });
    totalSpan.textContent = total;
    localStorage.removeItem('cart');
}

window.onload = function () {
    if (document.getElementById('cartItems')) {
        buyItems();
    }
};