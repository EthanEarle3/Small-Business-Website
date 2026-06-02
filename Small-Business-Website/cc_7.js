const CTA = document.getElementById('CTA-Section');
const CTAInput = document.getElementById('CTA-input');
const CTAButton = document.getElementById('CTA-button');

CTAButton.addEventListener('click', () => {
    if (CTAInput.value.trim() !== '') {
        CTA.textContent = CTAInput.value;
    }
});
