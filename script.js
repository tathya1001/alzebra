const display = document.getElementById('query')
let expression = display.innerHTML;

function dis(val) {
    expression += val;
    display.innerHTML = expression
    console.log(val)
}

function eval() {
    try {
        expression = expression.replace('π', 'pi');
        expression = expression.replace('e', 'e');
        expression = expression.replace('×', '*');
        expression = expression.replace('÷', '/');
        expression = expression.replace('ln', 'log');

        console.log(math.evaluate(expression));

        document.getElementById('answer_screen').innerHTML = math.evaluate(expression)

    } catch (error) {
        console.log("error")
        document.getElementById('answer_screen').innerHTML = "Error"
    }
}


function del() {
    display.innerHTML = display.innerHTML.slice(0, -1);
    expression = expression.slice(0, -1);
}


function allClear() {
    expression = "";
    display.innerHTML = "";
}

document.addEventListener('keydown', function (event) {

    if (event.key === '0') {
        dis('0');
    } else if (event.key === '1') {
        dis('1');
    } else if (event.key === '2') {
        dis('2');
    } else if (event.key === '3') {
        dis('3');
    } else if (event.key === '4') {
        dis('4');
    } else if (event.key === '5') {
        dis('5');
    } else if (event.key === '6') {
        dis('6');
    } else if (event.key === '7') {
        dis('7');
    } else if (event.key === '8') {
        dis('8');
    } else if (event.key === '9') {
        dis('9');
    } else if (event.key === '+') {
        dis('+');
    } else if (event.key === '-') {
        dis('-');
    } else if (event.key === '*') {
        dis('×');
    } else if (event.key === '/') {
        dis('/');
    } else if (event.key === '%') {
        dis('%');
    } else if (event.key === '^') {
        dis('^');
    } else if (event.key === '!') {
        dis('!');
    } else if (event.key === '1') {
        dis('1');
    } else if (event.key === 'p' || event.key === 'P') {
        dis('π');
    } else if (event.key === 'e' || event.key === 'E') {
        dis('e');
    } else if (event.key === 'Enter') {
        eval();
    } else if (event.key === 'Delete') {
        del()
    } else if (event.key === 'Shift') {
        allClear()
    }
});
