function loadJoke() {
    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            const jokes = this.responseText.split("\n");
            const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
            document.getElementById("joke").innerText = randomJoke;
        }
    };

    xhttp.open("GET", "jokes.txt", true);
    xhttp.send();
}
