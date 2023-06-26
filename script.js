const display = document.getElementById('query')


function dis(val) {
    display.innerHTML += val;
    console.log(val)
}

function display_answer() {
    const output = eval(document.getElementById('query').innerHTML);
    const answerScreen = document.getElementById('answer_screen');
    answerScreen.innerHTML = output;
    console.log(output)
}

function allClear() {
    const output = document.getElementById('answer_screen');
    output.innerHTML = '';
    display.innerHTML = '';
}


function del() {
    let currentValue = display.innerText;

    // Remove the last character from the string
    currentValue = currentValue.slice(0, -1);

    // Update the display with the modified value
    display.innerText = currentValue;
}




document.addEventListener('keydown', function (event) {
    const keyPressed = event.key;

    // Check if the pressed key is a number
    if (/^\d$/.test(keyPressed)) {
        const number = parseInt(keyPressed);
        dis(number);
    }
    else if (['+', '-', '*', '/', '.', '(', ')'].includes(keyPressed)) {
        dis(keyPressed);
    }
    else if (keyPressed === 'p' || keyPressed === 'P') {
        dis(Math.PI);
    }
    else if (keyPressed === 'e' || keyPressed === 'E') {
        dis(Math.E);
    }
    else if (keyPressed === 'Enter') {
        display_answer();
    }
    else if (keyPressed === 'Delete') {
        del()
    }
});




let prevKeyPressed = null;

document.addEventListener('keydown', function (event) {
    const keyPressed = event.key;

    if (keyPressed === 'Enter' && prevKeyPressed === 'Enter') {
        allClear();
    }
    prevKeyPressed = keyPressed;
});








