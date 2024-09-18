let stage = 0;
const eggImages = [
    "../../images/pinkegg.png", // intact egg
    '../../images/pinkcrack1.png', // first crack
    '../../images/pinkcrack2.png', // second crack
];

document.getElementById('poke-link').addEventListener('click', function(event) {
    event.preventDefault();
    const eggImg = document.getElementById('egg');

    if (stage < eggImages.length - 1) {
        stage++;
        eggImg.src = eggImages[stage];
    } else {
        window.location.href = "finalpinkcrack.html";
    }
});
