let cart = [];

function addToCart(nome, pizzaIndex) {
    const sizeSelect = document.getElementById(`size-${pizzaIndex}`);
    const selectedSize = sizeSelect.value;
    const pizza = pizzas[pizzaIndex];
    
    const price = pizza[selectedSize];
    if (price === '-') {
        alert('Tamanho indisponível para esta pizza.');
        return;
    }

    const existingItem = cart.find(item => 
        item.nome === nome && item.size === selectedSize
    );

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            nome,
            size: selectedSize,
            price: parseFloat(price.replace('$00', '')),
            quantity: 1
        });
    }

    updateCartDisplay();
}

function updateCartDisplay() {
    const cartBody = document.getElementById('cart-body');
    const cartTotal = document.getElementById('cart-total');
    
    cartBody.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const row = document.createElement('tr');
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        row.innerHTML = `
            <td>${item.nome}</td>
            <td>${item.size}</td>
            <td>${item.price}$00</td>
            <td>
                <button onclick="decreaseQuantity(${index})">-</button>
                ${item.quantity}
                <button onclick="increaseQuantity(${index})">+</button>
            </td>
            <td>${itemTotal}$00</td>
            <td>
                <button class="remove-from-cart-btn" onclick="removeFromCart(${index})">Remover</button>
            </td>
        `;
        cartBody.appendChild(row);
    });

    cartTotal.textContent = `${total}$00`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
}

function increaseQuantity(index) {
    cart[index].quantity += 1;
    updateCartDisplay();
}

function decreaseQuantity(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
        updateCartDisplay();
    } else {
        removeFromCart(index);
    }
}

function checkout() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio.');
        return;
    }

    // Open the customer info modal
    const invoiceModal = document.getElementById('invoice-modal');
    invoiceModal.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('checkout-btn').addEventListener('click', checkout);
});