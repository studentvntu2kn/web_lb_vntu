let currentProduct = null;

// Відкриття модального вікна
function purchase(button) {
    currentProduct = button.closest('.catalog-product');

    // Перевірка, чи товар уже куплений
    if (currentProduct.classList.contains('purchased')) {
        alert("Цей товар уже куплено!");
        return;
    }

    // Відкрити модальне вікно
    openModal();
}


// Підтвердження покупки
function confirmPurchase() {
    const product_id = currentProduct.getAttribute('data-product-id');
    const product_name = currentProduct.getAttribute('data-product-name');

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;

    if (name && email && address) {
        // Формування даних для відправки
        const data = `product_id=${encodeURIComponent(product_id)}&product_name=${encodeURIComponent(product_name)}&name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&address=${encodeURIComponent(address)}`;

        // Створення нового XMLHttpRequest
        const xhr = new XMLHttpRequest();
        xhr.open('POST', '../save_purchase.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        // Обробка відповіді
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    console.log("Дані успішно збережено!");
                    currentProduct.classList.add('purchased');
                    currentProduct.querySelector('button').textContent = "Товар куплено!";
                    closeModal();
                } else {
                    console.error("Помилка при збереженні даних.");
                }
            }
        };

        // Відправка даних
        xhr.send(data);
    } else {
        alert("Будь ласка, заповніть всі поля.");
    }
}



// функції відкриття та закриття вікна
function closeModal() {
    document.getElementById('purchase-modal').style.display = 'none';
}

function openModal() {
    document.getElementById('purchase-modal').style.display = 'flex';
}

// Ініціалізація початкового тексту при завантаженні сторінки
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.catalog-product button').forEach(button => {
        if (!button.hasAttribute('data-original-text')) {
            button.setAttribute('data-original-text', button.textContent);
        }
    });
});
