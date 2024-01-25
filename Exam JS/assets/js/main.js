class User {
    constructor(name, login, email, password, address, phone) {
        this.name = name;
        this.login = login;
        this.email = email;
        this.password = password;
        this.address = address;
        this.phone = phone;
    }
}

class Flower {
    constructor(image, name, color, price, description) {
        this.image = image;
        this.name = name;
        this.color = color;
        this.price = price;
        this.description = description;
    }
}

class Bouquet {
    constructor(flowers, price, image, description) {
        this.flowers = flowers;
        this.price = price;
        this.image = image;
        this.description = description;
    }
}

class Order {
    constructor(bouquet, user, date, time, price, status) {
        this.bouquet = bouquet;
        this.user = user;
        this.date = date;
        this.time = time;
        this.price = price;
        this.status = status;
    }
}

class Feedback {
    constructor(order, user, rating, text) {
        this.order = order;
        this.user = user;
        this.rating = rating;
        this.text = text;
    }
}

class FlowerDeliveryService {
    constructor() {
        this.catalog = [
            new Flower('image1.jpg', 'Rose', 'Red', 10.99, 'Beautiful red rose'),
            new Flower('image2.jpg', 'Tulip', 'Pink', 8.99, 'Lovely pink tulip'),
            new Flower('image3.jpg', 'Daisy', 'White', 6.99, 'Classic white daisy'),
            new Flower('image4.jpg', 'Lily', 'Yellow', 12.99, 'Bright yellow lily'),
            new Flower('image5.jpg', 'Sunflower', 'Yellow', 14.99, 'Large and vibrant sunflower'),
            new Flower('image6.jpg', 'Orchid', 'Purple', 18.99, 'Exotic purple orchid'),
            new Flower('image7.jpg', 'Carnation', 'Red', 9.99, 'Festive red carnation'),
            new Flower('image8.jpg', 'Cherry Blossom', 'Pink', 11.99, 'Delicate pink cherry blossom'),
            new Flower('image9.jpg', 'Peony', 'Pink', 15.99, 'Elegant pink peony'),
            new Flower('image10.jpg', 'Daffodil', 'Yellow', 7.99, 'Sunny yellow daffodil'),
            new Flower('image11.jpg', 'Gerbera', 'Orange', 10.99, 'Vibrant orange gerbera'),
            new Flower('image12.jpg', 'Hydrangea', 'Blue', 16.99, 'Beautiful blue hydrangea'),
            new Flower('image13.jpg', 'Iris', 'Purple', 12.99, 'Graceful purple iris'),
            new Flower('image14.jpg', 'Poppy', 'Red', 8.99, 'Bold red poppy'),
            new Flower('image15.jpg', 'Marigold', 'Orange', 7.99, 'Cheerful orange marigold'),
            new Flower('image16.jpg', 'Crocus', 'Purple', 9.99, 'Lovely purple crocus'),
            new Flower('image17.jpg', 'Anemone', 'Blue', 14.99, 'Striking blue anemone'),
            new Flower('image18.jpg', 'Snapdragon', 'Yellow', 11.99, 'Yellow snapdragon'),
            new Flower('image19.jpg', 'Zinnia', 'Pink', 10.99, 'Pretty pink zinnia'),
            new Flower('image20.jpg', 'Cosmos', 'White', 8.99, 'Pure white cosmos')
        ];        
        this.cart = [];
        this.orderHistory = [];
        this.users = [];
    }

    addToCatalog(item) {
        this.catalog.push(item);
    }

    addToCart(item) {
        this.cart.push(item);
    }

    removeFromCart(item) {
        const index = this.cart.findIndex(cartItem => cartItem === item);
        if (index !== -1) {
            this.cart.splice(index, 1);
        }
    }

    getCartTotal() {
        return this.cart.reduce((total, item) => total + item.price, 0);
    }

    getCartContents() {
        return this.cart;
    }

    placeOrder(bouquet, user, date, time) {
        const order = new Order(bouquet, user, date, time, this.getCartTotal(), 'Pending');
        this.orderHistory.push(order);

        // Генерируем и сохраняем счет
        const invoice = {
            order: order,
            total: order.price,
            status: 'Unpaid',
            id: this.invoiceHistory.length + 1
        };

        this.invoiceHistory.push(invoice);

        // Сохраняем счет в памяти (замените это на сохранение в базе данных в реальном проекте)
        this.inMemoryInvoiceStorage[invoice.id] = invoice;

        // Очищаем корзину
        this.cart = [];

        return order;
    }

    inMemoryInvoiceStorage = {};

    registerUser(name, login, email, password, address, phone) {
        const newUser = new User(name, login, email, password, address, phone);
        this.users.push(newUser);
        return true;
    }

    authenticateUser(login, password) {
        const user = this.users.find(user => user.login === login);
        return user && user.password === password;
    }

    getCatalog(filters) {
        // Логика фильтрации каталога
        return this.catalog.filter(item => {
            return (
                (!filters.color || item.color === filters.color) &&
                (!filters.price || item.price <= filters.price) &&
                (!filters.description || item.description.includes(filters.description))
            );
        });
    }
}

const flowerDeliveryService = new FlowerDeliveryService();

// Пример функции регистрации пользователя
function registerUser() {
    // Получить данные формы
    const formData = new FormData(document.getElementById('registrationForm'));
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Отобразить фейковый ответ
    alert('Registration successful.');
}

// Пример функции для аутентификации пользователя
function authenticateUser() {
    // Получить данные формы
    const formData = new FormData(document.getElementById('loginForm'));
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Отобразить фейковый ответ
    alert('Authentication successful.');
}

// Вызовите функцию getCatalog при загрузке страницы.
getCatalog();

// Пример функции получения и отображения каталога
function getCatalog() {
    // Отобразить фейковый каталог
    const catalogContainer = document.getElementById('catalog');
    catalogContainer.innerHTML = '<h2>Catalog</h2>';
    flowerDeliveryService.catalog.forEach(item => {
        catalogContainer.innerHTML += `
            <div class="catalog-item">
              <p>Name: ${item.name}</p>
              <p>Color: ${item.color}</p>
              <p>Price: $${item.price}</p>
              <button onclick="addToCart('${item.name}')">Add to Cart</button>
            </div>
        `;
    });
}

// Пример функции добавления товара в корзину
function addToCart(itemName) {
    // Найти товар в каталоге по имени
    const selectedFlower = flowerDeliveryService.catalog.find(item => item.name === itemName);

    // Добавить товар в корзину
    flowerDeliveryService.addToCart(selectedFlower);

    // Отобразить информацию о добавленном товаре в корзину
    const cartList = document.getElementById('cartList');
    const cartItem = document.createElement('li');
    cartItem.innerHTML = `Name: ${selectedFlower.name} | Color: ${selectedFlower.color} | Price: $${selectedFlower.price} | <button onclick="removeFromCart('${selectedFlower.name}')">Remove</button>`;
    cartList.appendChild(cartItem);
}

// Пример функции удаления товара из корзины
function removeFromCart(itemName) {
    // Найти товар в корзине по имени и удалить его
    const selectedFlower = flowerDeliveryService.catalog.find(item => item.name === itemName);
    flowerDeliveryService.removeFromCart(selectedFlower);

    // Найти и удалить элемент из списка в корзине
    const cartList = document.getElementById('cartList');
    const cartItem = Array.from(cartList.children).find(item => item.innerHTML.includes(itemName));
    if (cartItem) {
        cartList.removeChild(cartItem);
    }
}

// Функция для отображения каталога
function displayCatalog() {
    const catalogContainer = document.getElementById('catalog');
    flowerDeliveryService.getCatalog().forEach(item => {
        const catalogItem = document.createElement('div');
        catalogItem.innerHTML = `
            <p>Name: ${item.name}</p>
            <p>Color: ${item.color}</p>
            <p>Price: $${item.price}</p>
            <button onclick="addToCart('${item.name}')">Add to Cart</button>
        `;
        catalogContainer.appendChild(catalogItem);
    });
}

// Вызываем функцию отображения каталога при загрузке страницы
displayCatalog();