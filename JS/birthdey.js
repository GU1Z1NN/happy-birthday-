const layers = [
    document.getElementById("layer1"),
    document.getElementById("layer2"),
    document.getElementById("layer3")
];

const candle = document.getElementById("candle");
const flame = document.getElementById("flame");
const dropSound = document.getElementById("dropSound");
const cake = document.getElementById("cake");

/* camadas aparecem uma por uma */
layers.forEach((layer, index) => {
    setTimeout(() => {
        layer.classList.add("show");
        dropSound.currentTime = 0;
        dropSound.play();
    }, 600 * index);
});

/* vela aparece depois das camadas */
setTimeout(() => {
    candle.classList.add("show");
}, 2000);

/* apagar / acender chama */
candle.addEventListener("click", () => {
    flame.classList.toggle("off");
});

/* derrubar tudo */
cake.addEventListener("dblclick", () => {
    layers.forEach(layer => layer.classList.add("fall"));
    candle.classList.add("fall");
});
