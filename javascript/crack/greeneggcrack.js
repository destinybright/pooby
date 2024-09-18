let stage = 0;
const eggImages = [
    "../../images/greenegg.png", // intact egg
    '../../images/greencrack1.png', // first crack
    '../../images/greencrack2.png', // second crack
];

document.getElementById('poke-link').addEventListener('click', function(event) {
    event.preventDefault();
    const eggImg = document.getElementById('egg');

    if (stage < eggImages.length - 1) {
        stage++;
        eggImg.src = eggImages[stage];
    } else {
        window.location.href = "finalgreencrack.html";
    }
});
