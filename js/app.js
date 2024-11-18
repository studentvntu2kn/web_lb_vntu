let currentProduct = null;

function buy(button) {
    // Знаходимо найближчий батьківський елемент з класом .catalog-product
    currentProduct = button.closest('.catalog-product');

    // Перевіряємо, чи продукт вже позначений як "куплений"
    if (currentProduct.classList.contains('purchased')) {
        // Якщо продукт куплений, видаляємо клас "purchased"
        currentProduct.classList.remove('purchased');
        // Відновлюємо оригінальний текст кнопки з атрибута data-original-text
        button.textContent = button.getAttribute('data-original-text');
    } else {
        // Якщо продукт не куплений, додаємо клас "purchased"
        currentProduct.classList.add('purchased');
        // Змінюємо текст кнопки на "Відмінити"
        currentProduct.querySelector('button').textContent = "Відмінити";
    }
}

// Додаємо обробник події завантаження сторінки
window.addEventListener('DOMContentLoaded', () => {
    // Знаходимо всі кнопки в елементах з класом .catalog-product
    document.querySelectorAll('.catalog-product button').forEach(button => {
        // Перевіряємо, чи кнопка має атрибут data-original-text
        if (!button.hasAttribute('data-original-text')) {
            // Зберігаємо оригінальний текст кнопки в атрибут data-original-text
            button.setAttribute('data-original-text', button.textContent);
        }
    });
});
