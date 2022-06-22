
const circles = document.querySelectorAll('.facts-element__circle'); //берем все елементи с классом .facts-element__circle
circles.forEach(el => { //Метод forEach() выполняет указанную функцию один раз для каждого элемента в массиве.

    if (el.dataset.percentage == "true") { // если у елемента data-percentage="true" то:
        let progress = el.querySelector('.progress'); //обьявляем переменную - первый элемент документа, который соответствует указанному селектору
        let valueBlock = el.querySelector('.facts-element__value'); //обьявляем переменную - первый элемент документа, который соответствует указанному селектору
        let full = el.dataset.full; //обьявляем переменную - data-full
        let value = el.dataset.value; //обьявляем переменную - data-value
        let radius = el.querySelector('.progress').getAttribute('r'); //обьявляем переменную - значение атрибута r елемента с классом .progress
        let circleLenth = 2 * Math.PI * radius; //обьявляем переменную - длина круга
        let percentageProgress = Math.floor(value/full * 100); //обьявляем переменную (Math.floor округляет аргумент до ближайшего меньшего целого) вычисляем процентное соотношение текущего значения к полному
        valueBlock.textContent = value; //достаем текст valueBlock
        progress.setAttribute('stroke-dasharray', circleLenth);
        progress.setAttribute('stroke-dashoffset', circleLenth - circleLenth * percentageProgress / 100);
    }
    else {
        let progress = el.querySelector('.progress');
        let value = el.querySelector('.facts-element__value');
        let percent = el.dataset.percent;
        let radius = el.querySelector('.progress').getAttribute('r');
        let circleLenth = 2 * Math.PI * radius;
        let percentageProgress = Math.floor(percent);
        value.textContent = percent + '%';
        progress.setAttribute('stroke-dasharray', circleLenth);
        progress.setAttribute('stroke-dashoffset', circleLenth - circleLenth * percentageProgress / 100);
    }
})