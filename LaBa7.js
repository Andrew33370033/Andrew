var products = [
    { name: 'Knight 80', price: '119.99BYN', description: 'Это вейп 1.' },
    { name: 'Vaporesse Bar', price: '44.99BYN', description: 'Это вейп 2.' },
    { name: 'Vaperosse Xros', price: '79.99BYN', description: 'Это вейп 3.' }
];

var productGrid = document.getElementById('productGrid');

for (var i = 0; i < products.length; i++) {
    var card = document.createElement('div');
    card.className = 'product-card';

    var name = document.createElement('h2');
    name.textContent = products[i].name;
    card.appendChild(name);

    var price = document.createElement('p');
    price.textContent = 'Цена: $' + products[i].price;
    card.appendChild(price);

    var description = document.createElement('p');
    description.textContent = 'Описание: ' + products[i].description;
    card.appendChild(description);

    productGrid.appendChild(card);
}