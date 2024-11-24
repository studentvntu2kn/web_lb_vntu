<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VNTU</title>
    <link rel="stylesheet" href="css/style.css"> <!-- Підключення CSS -->
</head>
<body>
    <header>
        <h1>VNTU University</h1>
    </header>

<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_URL, 'https://lab.vntu.org/api-server/lab8.php?user=student&pass=p@ssw0rd'); // URL запиту

// Виконання запиту
$result = curl_exec($ch);
curl_close($ch);

// перевірка на помилки
if ($result === false) {
    die("Помилка при виконанні запиту.");
}

// Декодування JSON у об'єкт PHP
$obj = json_decode($result);
if ($obj === null) {
    die("Помилка декодування JSON: " . json_last_error_msg());
}

// Виведення HTML-таблиці
echo '<table border="1" cellspacing="0" cellpadding="5">';
echo '<thead>';
echo '<tr>';
echo '<th>Name</th>';
echo '<th>Affiliation</th>';
echo '<th>Rank</th>';
echo '<th>Location</th>';
echo '</tr>';
echo '</thead>';
echo '<tbody>';

// Генерація рядків таблиці циклом
foreach ($obj as $group) {
    foreach ($group as $character) {
        echo '<tr>';
        echo '<td>' . htmlspecialchars($character->name) . '</td>';
        echo '<td>' . htmlspecialchars($character->affiliation) . '</td>';
        echo '<td>' . htmlspecialchars($character->rank) . '</td>';
        echo '<td>' . htmlspecialchars($character->location) . '</td>';
        echo '</tr>';
    }
}

echo '</tbody>';
echo '</table>';
?>


    <footer>
        &copy; 2024 Всі права захищені.
    </footer>
</body>
</html>
