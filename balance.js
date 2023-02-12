function areBracketsBalanced(expression) {
    const stack = [];
    const brackets = { '{': '}', '[': ']', '(': ')' };

    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];

        if (brackets[char]) {
            stack.push(char);
        } else if (char === '}' || char === ']' || char === ')') {
            if (brackets[stack.pop()] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

const expression = '(1+2)+(3+4)';
console.log(areBracketsBalanced(expression)); // Output: true

const expression2 = '{[(])}';
console.log(areBracketsBalanced(expression2)); // Output: false
