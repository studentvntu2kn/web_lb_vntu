let currentProduct = null;

// Відкриття модального вікна
function buy(button) {
    currentProduct = button.closest('.catalog-product');

    // Перевірка статусу
    if (currentProduct.classList.contains('purchased')) {
        currentProduct.classList.remove('purchased');
        button.textContent = button.getAttribute('data-original-text');
    } else {
        document.getElementById('purchase-modal').style.display = 'flex';
    }
}

// Закриття модального вікна
function closeModal() {
    document.getElementById('purchase-modal').style.display = 'none';
}

// Підтвердження покупки
function confirmBuy() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;

    if (name && email && address) {
        currentProduct.classList.add('purchased');
        currentProduct.querySelector('button').textContent = "Відмінити";
        closeModal();
    } else {
        alert("Будь ласка, заповніть всі поля.");
    }
}

// Ініціалізація початкового тексту при завантаженні сторінки
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.catalog-product button').forEach(button => {
        if (!button.hasAttribute('data-original-text')) {
            button.setAttribute('data-original-text', button.textContent);
        }
    });
});
