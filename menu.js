const pizzas = [
    { nome: "Margarita", descricao: "Queijo mussarela, gouda, orégano e molho tomate.", familiar: "750$00", medio: "700$00", pequeno: "450$00" },
    { nome: "Quatro Queijos", descricao: "Queijo mussarela, queijo azul, edam, fogo e molho tomate.", familiar: "900$00", medio: "850$00", pequeno: "600$00" },
    { nome: "Fiambre", descricao: "Fiambre, queijo e molho tomate.", familiar: "800$00", medio: "750$00", pequeno: "500$00" },
    { nome: "Frango", descricao: "Frango, queijo, molho tomate.", familiar: "850$00", medio: "800$00", pequeno: "550$00" },
    { nome: "Chouriço", descricao: "Chouriço, queijo e molho tomate.", familiar: "800$00", medio: "750$00", pequeno: "500$00" },
    { nome: "Bacon", descricao: "Bacon, queijo, molho tomate.", familiar: "850$00", medio: "800$00", pequeno: "550$00" },
    { nome: "Presunto", descricao: "Presunto, queijo, molho tomate.", familiar: "850$00", medio: "800$00", pequeno: "550$00" },
    { nome: "Linguiça e Queijo de Terra", descricao: "Linguiça, queijo branco e molho tomate.", familiar: "900$00", medio: "850$00", pequeno: "600$00" },
    { nome: "Carne Moída", descricao: "Carne moída, queijo e molho tomate.", familiar: "900$00", medio: "850$00", pequeno: "600$00" },
    { nome: "Atum", descricao: "Atum, cebola, queijo e molho tomate.", familiar: "800$00", medio: "750$00", pequeno: "500$00" },
    { nome: "Vegetariano", descricao: "Cebola, tomate, pimentão, cogumelo, queijo e molho tomate.", familiar: "900$00", medio: "850$00", pequeno: "600$00" },
    { nome: "Especial da Casa", descricao: "Bacon, cogumelo, nata, queijo e molho tomate.", familiar: "900$00", medio: "850$00", pequeno: "600$00" },
    { nome: "Quatro Estações", descricao: "Queijo e molho tomate, cogumelo, fiambre, chouriço e atum.", familiar: "900$00", medio: "850$00", pequeno: "600$00" },
    { nome: "Tropical", descricao: "Frutas da época, queijo e molho tomate.", familiar: "900$00", medio: "850$00", pequeno: "600$00" },
    { nome: "Marisco", descricao: "Marisco, queijo e molho tomate.", familiar: "1200$00", medio: "1000$00", pequeno: "900$00" },
    { nome: "Camarão", descricao: "Camarão, queijo e molho tomate.", familiar: "1200$00", medio: "1000$00", pequeno: "900$00" },
    { nome: "Madá", descricao: "Queijo, molho tomate, chouriço, bacon, camarão e ananás.", familiar: "1400$00", medio: "-", pequeno: "-" },
    { nome: "Calzone", descricao: "Frango ou chouriço, presunto, cogumelo, atum e cebola (queijo e molho tomate).", familiar: "800$00", medio: "-", pequeno: "-" },
    { nome: "Caixa de Pizza 100", descricao: "Pizza especial de 100, contendo uma variedade de sabores.", familiar: "1000$00", medio: "900$00", pequeno: "700$00" }
];

const drinks = [
    { nome: "Coca-Cola", descricao: "Refrigerante de cola", price: "150$00" },
    { nome: "Fanta Laranja", descricao: "Refrigerante de laranja", price: "150$00" },
    { nome: "Sprite", descricao: "Refrigerante de limão", price: "150$00" },
    { nome: "Água", descricao: "Água mineral", price: "100$00" },
    { nome: "Cerveja Strela", descricao: "Cerveja local", price: "200$00" },
    { nome: "Sumo de Laranja", descricao: "Suco natural de laranja", price: "180$00" },
    { nome: "Vinho Tinto", descricao: "Vinho tinto nacional", price: "500$00" },
    { nome: "Chá Gelado", descricao: "Chá gelado natural", price: "120$00" }
];

function renderMenu() {
    const menuBody = document.getElementById('menu-body');
    
    pizzas.forEach((pizza, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong>${pizza.nome}</strong></td>
            <td>${pizza.descricao}</td>
            <td class='price'>${pizza.familiar}</td>
            <td class='price'>${pizza.medio}</td>
            <td class='price'>${pizza.pequeno}</td>
            <td>
                <select id="size-${index}">
                    ${pizza.familiar !== '-' ? `<option value="familiar">Familiar (${pizza.familiar})</option>` : ''}
                    ${pizza.medio !== '-' ? `<option value="medio">Médio (${pizza.medio})</option>` : ''}
                    ${pizza.pequeno !== '-' ? `<option value="pequeno">Pequeno (${pizza.pequeno})</option>` : ''}
                </select>
                <button class="add-to-cart-btn" onclick="addToCart('${pizza.nome}', ${index}, 'pizza')">Adicionar</button>
            </td>
        `;
        menuBody.appendChild(row);
    });
}

function renderDrinks() {
    const drinksBody = document.getElementById('drinks-body');
    
    drinks.forEach((drink, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong>${drink.nome}</strong></td>
            <td>${drink.descricao}</td>
            <td class='price'>${drink.price}</td>
            <td>
                <button class="add-to-cart-btn" onclick="addToCart('${drink.nome}', ${index}, 'drink')">Adicionar</button>
            </td>
        `;
        drinksBody.appendChild(row);
    });
}

// Modify cart.js to support drinks
function addToCart(nome, index, type) {
    let item;
    if (type === 'pizza') {
        const sizeSelect = document.getElementById(`size-${index}`);
        const selectedSize = sizeSelect.value;
        const pizza = pizzas[index];
        
        const price = pizza[selectedSize];
        if (price === '-') {
            alert('Tamanho indisponível para esta pizza.');
            return;
        }

        item = {
            nome,
            size: selectedSize,
            price: parseFloat(price.replace('$00', '')),
            quantity: 1,
            type: 'pizza'
        };
    } else if (type === 'drink') {
        const drink = drinks[index];
        item = {
            nome,
            price: parseFloat(drink.price.replace('$00', '')),
            quantity: 1,
            type: 'drink'
        };
    }

    const existingItem = cart.find(cartItem => 
        cartItem.nome === nome && 
        (cartItem.size === item.size || cartItem.type === 'drink')
    );

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push(item);
    }

    updateCartDisplay();
}

// Update cart display to handle drink and pizza items
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
            <td>${item.size || 'Bebida'}</td>
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

// Add event listeners for menu switching
document.addEventListener('DOMContentLoaded', () => {
    renderMenu();
    renderDrinks();

    const drinksBtn = document.getElementById('drinks-btn');
    const menuTable = document.getElementById('menu-table');
    const drinksTable = document.getElementById('drinks-table');
    const menuBtn = document.getElementById('menu-btn');

    drinksBtn.addEventListener('click', () => {
        menuTable.style.display = menuTable.style.display === 'none' ? 'table' : 'none';
        drinksTable.style.display = drinksTable.style.display === 'none' ? 'table' : 'none';
    });

    // New menu button functionality
    menuBtn.addEventListener('click', () => {
        menuTable.style.display = 'table';
        drinksTable.style.display = 'none';
    });
});