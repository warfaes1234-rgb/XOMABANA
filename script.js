function showMessage() {
    alert('Привет! Это сайт на GitHub Pages, созданный только с помощью кода!');
}

document.addEventListener('DOMContentLoaded', function() {
    const footer = document.querySelector('footer p');
    footer.innerHTML += ' | Сегодня: ' + new Date().toLocaleDateString('ru-RU');
});
