const correctPin = "242667";
let enteredPin = "";

function enterPin(number) {
    if (enteredPin.length >= 6) return;

    enteredPin += number;
    updatePinDisplay();

    if (enteredPin.length === 6) {
        setTimeout(checkPin, 250);
    }
}

function deletePin() {
    enteredPin = enteredPin.slice(0, -1);
    updatePinDisplay();
}

function updatePinDisplay() {
    const dots = document.querySelectorAll(".pin-dot");

    dots.forEach((dot, index) => {
        if (index < enteredPin.length) {
            dot.classList.add("filled");
        } else {
            dot.classList.remove("filled");
        }
    });
}

function checkPin() {
    if (enteredPin === correctPin) {
        document.getElementById("pinPage").classList.remove("active");
        document.getElementById("page1").classList.add("active");
    } else {
        alert("Wrong PIN 😭");
        enteredPin = "";
        updatePinDisplay();
    }
}