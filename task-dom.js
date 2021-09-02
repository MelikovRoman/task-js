/////#1 Простой слайдер

const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const items = document.querySelector("#items");
const computedStyle = getComputedStyle(items);
const item = document.querySelectorAll(".item");

const minRight = 0;
const itemWidth = getComputedStyle(item[0]).width;
const step = parseInt(itemWidth);
const preShowItems = 300 / step;
const maxRight = (item.length - preShowItems) * step;
let currentRight = 0;

items.style.right = currentRight;

rightBtn.addEventListener ("click", e => {
    e.preventDefault();

    if (currentRight < maxRight) {
        currentRight += step;
        items.style.right = currentRight  + "px";
    }
})

leftBtn.addEventListener ("click", e => {
    e.preventDefault();

    if (currentRight > minRight) {
        currentRight -= step;
        items.style.right = currentRight  + "px";
    }
})


//////#2 Модальное окно

const openButton = document.querySelector("#openOverlay")
const body = document.body;

openButton.addEventListener ("click", e => {
    const overlayElement = document.createElement("div");
    overlayElement.classList.add("overlay");

    overlayElement.addEventListener ("click", e => {
        e.preventDefault();

        if (e.target == overlayElement) {
        body.removeChild(overlayElement);
        }
    })

    const containerElement = document.createElement("div");
    containerElement.classList.add("modal-container");
 
    const contentElement = document.createElement("div");
    contentElement.classList.add("content");

    contentElement.innerHTML = "Hello world"

    const closeElement = document.createElement("a");
    closeElement.classList.add("close");
    closeElement.textContent = "x"
    closeElement.href = "#"

    closeElement.addEventListener ("click", e => {
        e.preventDefault();
        body.removeChild(overlayElement);
    })


    overlayElement.appendChild(containerElement);
    containerElement.appendChild(closeElement);
    containerElement.appendChild(contentElement);
    body.appendChild(overlayElement);

})