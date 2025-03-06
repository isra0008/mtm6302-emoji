const emojis = [
    { code: '&#8986;', decimal: '8986' }
    { code: '&#9749;', decimal: '9749' }
    { code: '&#9889;', decimal: '9889' }
    { code: '&#129346;', decimal: '129346' }
    { code: '&#127864;', decimal: '127864' }
    { code: '&#127861;', decimal: '127861' }
    { code: '&#128175;', decimal: '128175' }
    { code: '&#127796;', decimal: '127796' }
    { code: '&#129364;', decimal: '129364' }
    { code: '&#127815;', decimal: '127815' }
    { code: '&#127825;', decimal: '127825' }
    { code: '&#128760;', decimal: '128760' }
    { code: '&#128206;', decimal: '128206' }
    { code: '&#128481;', decimal: '128481' }
    { code: '&#128011;', decimal: '128011' }
    { code: '&#128052;', decimal: '128052' }
    { code: '&#127958;', decimal: '127958' }
    { code: '&#128137;', decimal: '128137' }
    { code: '&#127962;', decimal: '127962' }
    { code: '&#9749;', decimal: '9749' }
    { code: '&#9973;', decimal: '9973' }
    { code: '&#127801;', decimal: '127801' }
    { code: '&#129354;', decimal: '129354' }
    { code: '&#129413;', decimal: '129413' }
    { code: '&#128330;', decimal: '128330' },
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