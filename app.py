import json
from datetime import datetime

from flask import Flask, render_template, request

app = Flask(__name__)

# Головна сторінка
@app.route('/')
def index():
    return render_template('index.html')
@app.route('/catalog')
def catalog():
    return render_template('catalog.html')

# Обробка форми покупки
@app.route('/submit_purchase', methods=['POST'])
def submit_purchase():
    # Отримання даних з форми
    name = request.form['name']
    email = request.form['email']
    address = request.form['address']

    # Створення об'єкта з даними
    purchase_data = {
        'name': name,
        'email': email,
        'address': address,
        'time': datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    }

    # Створення унікального імені файлу для збереження
    filename = f"purchases/{datetime.now().strftime('%Y%m%d_%H%M%S')}_purchase.json"

    # Запис даних у JSON файл
    with open(filename, 'w') as f:
        json.dump(purchase_data, f, ensure_ascii=False, indent=4)


if __name__ == '__main__':
    app.run(debug=True)
