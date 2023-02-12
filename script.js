var stackarr = [];
var topp = -1;

function push(e) {
    topp++;
    stackarr[topp] = e;
}

function pop() {
    if (topp == -1)
        return 0;
    else {
        var popped_ele = stackarr[topp];
        topp--;
        return popped_ele;
    }
}

function operator(op) {
    if (op == '+' || op == '-' || op == '^' || op == '*' || op == '/' || op == '(' || op == ')') {
        return true;
    }
    else
        return false;
}

function precedency(pre) {
    if (pre == '@' || pre == '(' || pre == ')') {
        return 1;
    }
    else if (pre == '+' || pre == '-') {
        return 2;
    }
    else if (pre == '/' || pre == '*') {
        return 3;
    }
    else if (pre == '^') {
        return 4;
    }
    else
        return 0;
}

function InfixtoPostfix() {
    var postfix = [];
    var temp = 0;
    push('@');
    infixval = document.getElementById("infixvalue").value;

    for (var i = 0; i < infixval.length; i++) {
        var el = infixval[i];
        if (operator(el)) {
            if (el == ')') {
                while (stackarr[topp] != "(") {
                    postfix[temp++] = pop();
                }
                pop();
            }
            else if (el == '(') {
                push(el);
            }

            else if (precedency(el) > precedency(stackarr[topp])) {
                push(el);
            }
            else {
                while (precedency(el) <= precedency(stackarr[topp]) && topp > -1) {
                    postfix[temp++] = pop();
                }
                push(el);
            }
        }
        else {
            postfix[temp++] = el;
        }


    }
    while (stackarr[topp] != '@') {
        postfix[temp++] = pop();
    }
    var st = "";
    for (var i = 0; i < postfix.length; i++)st += postfix[i];
    document.getElementById("text").innerHTML = st;
}
var stackarr = [];
var topp = -1;

function push(e) {
    topp++;
    stackarr[topp] = e;
}

function pop() {
    if (topp == -1)
        return 0;
    else {
        var popped_ele = stackarr[topp];
        topp--;
        return popped_ele;
    }
}

function operator(op) {
    if (op == '+' || op == '-' || op == '^' || op == '*' || op == '/' || op == '(' || op == ')') {
        return true;
    }
    else
        return false;
}

function precedency(pre) {
    if (pre == '@' || pre == '(' || pre == ')') {
        return 1;
    }
    else if (pre == '+' || pre == '-') {
        return 2;
    }
    else if (pre == '/' || pre == '*') {
        return 3;
    }
    else if (pre == '^') {
        return 4;
    }
    else
        return 0;
}


function InfixtoPostfix() {
    var postfix = [];
    var temp = 0;
    push('@');
    infixval = document.getElementById("infixvalue").value;

    for (var i = 0; i < infixval.length; i++) {
        var el = infixval[i];
        if (operator(el)) {
            if (el == ')') {
                while (stackarr[topp] != "(") {
                    postfix[temp++] = pop();
                }
                pop();
            }
            else if (el == '(') {
                push(el);
            }

            else if (precedency(el) > precedency(stackarr[topp])) {
                push(el);
            }
            else {
                while (precedency(el) <= precedency(stackarr[topp]) && topp > -1) {
                    postfix[temp++] = pop();
                }
                push(el);
            }
        }
        else {
            postfix[temp++] = el;
        }


    }
    while (stackarr[topp] != '@') {
        postfix[temp++] = pop();
    }
    var st = "";
    for (var i = 0; i < postfix.length; i++)st += postfix[i];
    document.getElementById("text").innerHTML = st;
}


function evaluatePostfix() {
    var result = 0;
    postfix = document.getElementById("infixvalue").value;

    for (var i = 0; i < postfix.length; i++) {
        var ch = postfix[i];
        if (!operator(ch)) {
            push(parseInt(ch));
        } else {
            var b = pop();
            var a = pop();
            switch (ch) {
                case "+":
                    result = a + b;
                    break;
                case "-":
                    result = a - b;
                    break;
                case "*":
                    result = a * b;
                    break;
                case "/":
                    result = a / b;
                    break;
                case "^":
                    result = Math.pow(a, b);
                    break;
            }
            push(result);

        }

    }
    document.getElementById("text1").innerHTML = result;
    return pop();
}


function areBracketsBalanced() {
    expression = document.getElementById("infixvalue").value;
    const stack = [];
    const brackets = { '{': '}', '[': ']', '(': ')' };

    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];

        if (brackets[char]) {
            stack.push(char);
        } else if (char === '}' || char === ']' || char === ')') {
            if (brackets[stack.pop()] !== char) {
                document.getElementById("text2").innerHTML = false;
            }
        }
    }
    
    document.getElementById("text2").innerHTML = (stack.length === 0);
}

