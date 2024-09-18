document.addEventListener('DOMContentLoaded', function() {
    const title = document.querySelector('.writing');
    const text = title.textContent;
    title.innerHTML = text.split('').map((letter, index) => {
        if (letter === ' ') {
            return `<span style="animation-delay:${index * 0.05}s">&nbsp;</span>`;
        }
        return `<span style="animation-delay:${index * 0.05}s">${letter}</span>`;
    }).join('');
});
