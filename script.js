document.addEventListener('DOMContentLoaded', () => {
    // Live time display
    const liveTimeElement = document.getElementById('live-time');
    setInterval(() => {
        const now = new Date();
        liveTimeElement.textContent = now.toLocaleTimeString();
    }, 1000);

    // Toggle emoji deck visibility
    const toggleEmojiDeckButton = document.getElementById('toggle-emoji-deck-button');
    const emojiDeck = document.getElementById('emoji-deck');
    toggleEmojiDeckButton.addEventListener('click', () => {
        emojiDeck.classList.toggle('hidden');
    });

    // Emoji Data
    const emojiData = {
        smileys: ['😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉', '😊', '😇', '🙂', '🙃', '😌', '😍', '😘', '😗', '😙', '😚', '😋', '😜', '😝', '🤑', '🤗', '🤔', '🤐', '🤨', '😐', '😑', '😶', '😏', '😒', '🙄', '😬', '🤥', '😌', '😔', '😪', '🤤', '😴'],
        animals: ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐵', '🙈', '🙉', '🙊', '🐒', '🐔', '🐧', '🐦', '🐤', '🐣', '🐥', '🦆', '🦅', '🦉', '🦇', '🐺', '🐗', '🐴', '🦄', '🐝', '🐛', '🦋', '🐌', '🐚', '🐞'],
        nature: ['🌵', '🎄', '🌲', '🌳', '🌴', '🌱', '🌿', '☘️', '🍀', '🎍', '🎋', '🍃', '🍂', '🍁', '🍄', '🌾', '💐', '🌷', '🌹', '🥀', '🌺', '🌸', '🌼', '🌻', '🌞', '🌝', '🌛', '🌜', '🌚', '🌕', '🌖', '🌗', '🌘', '🌑', '🌒', '🌓', '🌔', '🌙', '🌎'],
        food: ['🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍈', '🍒', '🍑', '🥭', '🍍', '🥥', '🥝', '🍅', '🍆', '🥑', '🥦', '🥒', '🥬', '🌶️', '🌽', '🥕', '🥔', '🍠', '🥐', '🍞', '🥖', '🥨', '🥯', '🧀', '🥚', '🍳', '🧈', '🥞', '🧇'],
        activities: ['⚽', '🏀', '🏈', '⚾', '🎾', '🏐', '🏉', '🎱', '🏓', '🏸', '🥅', '🏒', '🥊', '🎳', '🏹', '🥋', '🏆', '🏅', '🎽', '🥌', '⛸️', '🥇', '🥈', '🥉', '🏵️', '🎗️', '🎖️', '🏵️', '🎗️', '🎫', '🎟️', '🎭', '🎨', '🎪', '🎤', '🎧', '🎼', '🎹', '🥁'],
        travel: ['🚗', '🚕', '🚙', '🚌', '🚎', '🏎️', '🚓', '🚑', '🚒', '🚐', '🚚', '🚛', '🚜', '🏍️', '🛵', '🚲', '🛴', '🚏', '🛣️', '🛤️', '🏁', '🚧', '⚓', '⛵', '🛶', '🚤', '🛳️', '⛴️', '🛥️', '🚢', '✈️', '🛩️', '🛫', '🛬', '💺', '🚁', '🚟', '🚠', '🚡'],
        objects: ['⌚', '📱', '📲', '💻', '⌨️', '🖥️', '🖨️', '🖱️', '🖲️', '🕹️', '🗜️', '💽', '💾', '💿', '📀', '📼', '📷', '📸', '📹', '🎥', '📽️', '🎞️', '📞', '☎️', '📟', '📠', '📺', '📻', '🎙️', '🎚️', '🎛️', '⏱️', '⏲️', '⏰', '🕰️', '⌛', '⏳', '📡'],
        symbols: ['❤️', '💔', '💕', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '☮️', '✝️', '☪️', '🕉️', '☸️', '✡️', '🔯', '🕎', '☯️', '☦️', '🛐', '⛎', '♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓', '🆔', '⚛️', '🉑', '☢️', '☣️'],
        flags: ['🏳️', '🏴', '🏁', '🚩', '🏳️‍🌈', '🏳️‍⚧️', '🇦🇫', '🇦🇱', '🇩🇿', '🇦🇸', '🇦🇩', '🇦🇴', '🇦🇮', '🇦🇶', '🇦🇬', '🇦🇷', '🇦🇲', '🇦🇼', '🇦🇺', '🇦🇹', '🇦🇿', '🇧🇸', '🇧🇭', '🇧🇩', '🇧🇧', '🇧🇾', '🇧🇪', '🇧🇿', '🇧🇯', '🇧🇲', '🇧🇹', '🇧🇴', '🇧🇦', '🇧🇼', '🇧🇷', '🇧🇳', '🇧🇬', '🇧🇫', '🇧🇮', '🇰🇭', '🇨🇲']
    };

    // Emoji Category Navigation
    let categories = Object.keys(emojiData);
    let currentCategoryIndex = 0;

    function loadEmojis(category) {
        const emojiGrid = document.getElementById('emoji-grid');
        emojiGrid.innerHTML = '';
        emojiData[category].forEach(emoji => {
            const emojiItem = document.createElement('div');
            emojiItem.classList.add('emoji-item');
            emojiItem.textContent = emoji;
            emojiGrid.appendChild(emojiItem);
        });
        document.getElementById('category-name').textContent = category.charAt(0).toUpperCase() + category.slice(1);
    }

    loadEmojis(categories[currentCategoryIndex]);

    document.getElementById('prev-category').addEventListener('click', () => {
        currentCategoryIndex = (currentCategoryIndex - 1 + categories.length) % categories.length;
        loadEmojis(categories[currentCategoryIndex]);
    });

    document.getElementById('next-category').addEventListener('click', () => {
        currentCategoryIndex = (currentCategoryIndex + 1) % categories.length;
        loadEmojis(categories[currentCategoryIndex]);
    });

    // Rating System
    const ratingButtons = document.querySelectorAll('.rating-button');
    ratingButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            ratingButtons.forEach((btn, idx) => {
                if (idx <= index) {
                    btn.classList.add('selected');
                } else {
                    btn.classList.remove('selected');
                }
            });
        });
    });

    // Reset Functionality
    const resetButton = document.getElementById('reset-button');
    resetButton.addEventListener('click', () => {
        document.querySelectorAll('.emoji-placeholder').forEach(placeholder => placeholder.textContent = '');
        ratingButtons.forEach(button => button.classList.remove('selected'));
        document.querySelectorAll('.custom-text-inputs input').forEach(input => input.value = '');
    });
});
