function clickContinueButton() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        if (button.textContent.trim() === "Continue generating") {
            button.click();
        }
    });
}

setInterval(clickContinueButton, 3000);
