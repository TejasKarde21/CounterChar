document.addEventListener('DOMContentLoaded', function() {
    const textArea = document.getElementById('textArea');
    const charCount = document.getElementById('charCount');
    const remainingCharCount = document.getElementById('remainingCharCount');

    textArea.addEventListener('input', function() {
        const text = textArea.value;
        const charCountValue = text.length;
        const remainingChars = 50 - charCountValue;

        if (charCountValue > 50) {
            // If the character count exceeds 50, truncate the text
            textArea.value = text.slice(0, 50);
            charCount.textContent = '50';
            remainingCharCount.textContent = '0';
        } else {
            charCount.textContent = charCountValue;
            remainingCharCount.textContent = remainingChars;
        }
    });
});