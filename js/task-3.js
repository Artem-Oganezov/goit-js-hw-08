const userName = document.querySelector('#name-input');
const spanName = document.querySelector('#name-output');
const spanTextOrig = spanName.textContent;

function onInputChange() {
    const stateText = userName.value.trim();
    if (stateText === '') {
        spanName.textContent = spanTextOrig;
    } else {
        spanName.textContent = `${userName.value}`;
    }
}

userName.addEventListener('input',onInputChange)

