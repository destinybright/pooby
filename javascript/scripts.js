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

document.addEventListener('DOMContentLoaded', function() {
    const copyButton = document.getElementById('copy-link-button');

    copyButton.addEventListener('click', function() {
        const urlToCopy = window.location.origin + '/html/index.html';

        const tempInput = document.createElement('input');
        tempInput.value = urlToCopy;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);

        alert('Link copied to clipboard.');
    });
});
