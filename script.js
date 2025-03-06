const emojis = [
    { code: '&#8986;', decimal: '8986' }
    { code: '&#9749;', decimal: '9749' }
    { code: '&#9889;', decimal: '9889' }
    { code: '&#129346;', decimal: '129346' }
    { code: '&#8986;', decimal: '8986' }
    { code: '&#8986;', decimal: '8986' },
];
// Select the gallery container in the HTML
const emojiGallery = document.getElementById('emoji-gallery');

emojis.forEach(emoji => {
    const emojiItem = document.createElement('div');
    emojiItem.classList.add('emoji-item');
    emojiItem.innerHTML = `
        <span>${emoji.code}</span>
        <code>${emoji.decimal}</code>
    `;
    emojiGallery.appendChild(emojiItem);
});