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
        // Increase stage and update egg image
        stage++;
        eggImg.src = eggImages[stage];
    } else {
        // Redirect to the new page after the last image and another click
        window.location.href = "finalgreencrack.html";
    }
});
