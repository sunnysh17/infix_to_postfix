var stackarr = [];
var topp = -1;

function push(e) {
  topp++;
  stackarr[topp] = e;
}

function pop() {
  if (topp == -1) return 0;
  else {
    var popped_ele = stackarr[topp];
    topp--;
    return popped_ele;
  }
}

function isOperator(ch) {
  return (ch == "+" || ch == "-" || ch == "*" || ch == "/" || ch == "^");
}

function evaluatePostfix(postfix) {
  var result = 0;
  for (var i = 0; i < postfix.length; i++) {
    var ch = postfix[i];
    if (!isOperator(ch)) {
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
  return pop();
}

var postfix = "1234*+5-";
console.log(evaluatePostfix(postfix));
