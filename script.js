const emojis = [
    { char: '😀', decimal: '0x1F600' },
    { char: '😁', decimal: '0x1F601' },
    { char: '😂', decimal: '0x1F602' },
    { char: '🤣', decimal: '0x1F923' },
    { char: '😃', decimal: '0x1F603' },
    { char: '😄', decimal: '0x1F604' },
    { char: '😅', decimal: '0x1F605' },
    { char: '😆', decimal: '0x1F606' },
    { char: '😇', decimal: '0x1F607' },
    { char: '😉', decimal: '0x1F609' },
    { char: '😊', decimal: '0x1F60A' },
    { char: '😍', decimal: '0x1F60D' }
];

// Select the gallery container in the HTML
const emojiGallery = document.getElementById('emoji-gallery');

// Loop through the emojis array and create HTML elements
emojis.forEach(emoji => {
    // Create a new div for each emoji item
    const emojiItem = document.createElement('div');
    emojiItem.classList.add('emoji-item');

    // Add the emoji character
    const emojiChar = document.createElement('span');
    emojiChar.textContent = emoji.char;
    emojiItem.appendChild(emojiChar);

    // Add the decimal reference
    const emojiDecimal = document.createElement('div');
    emojiDecimal.textContent = `Decimal: ${emoji.decimal}`;
    emojiDecimal.classList.add('emoji-decimal');
    emojiItem.appendChild(emojiDecimal);

    // Add event listener to copy emoji to clipboard on click
    emojiItem.addEventListener('click', () => {
        navigator.clipboard.writeText(emoji.char).then(() => {
            alert(`Emoji ${emoji.char} copied to clipboard!`);
        });
    });

    // Append the emoji item to the gallery
    emojiGallery.appendChild(emojiItem);
});
