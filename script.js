// alert("Connected")

function basicArithmetic() {
  var calculate = prompt("what did you want to do? Sum = A, Subtract = S, Multiply = M & Divide = D ? Input one. ")

if (calculate === "A" ||  calculate === "a") {
    alert("input the number one after the other, miminum of 2 input & maximum of 5 input, if it's not 5 input just press OK")
    var v = Number(prompt("input the first Number"))
    var w = Number(prompt("then"))
    var x = Number(prompt("then"))
    if (x == "") {
        alert (v + w)
        return;
    }
    else {
    var y = Number(prompt("then"))
    }
    if (y == "") {
        alert (v + w + x)
        return;
    }
    else {
    var z = Number(prompt("then, the last input"))
    }
    if (z == "") {
        alert (v + w + x + y)
        return;
    }
    else {
    alert(v + w + x + y + z)
    } 
}

else if (calculate === "S" || calculate === "s") {
    alert("input the number one after the other, minimum of 2 input & maximum of 5 input, if it's not 5 input just press OK")
    var v = Number(prompt("input the first Number"))
    var w = Number(prompt("then"))
    var x = Number(prompt("then"))
    if (x == "") {
        alert (v - w)
        return;
    }
    else {
    var y = Number(prompt("then"))
    }
    if (y == "") {
        alert (v - w - x)
        return;
    }
    else {
    var z = Number(prompt("then, the last input"))
    }
    if (z == "") {
        alert (v - w - x - y)
        return;
    }
    else {
    alert(v - w - x - y - z)
    } 
}

else if (calculate === "M" || calculate === "m") {
    alert("input the number one after the other, minimum of 2 input & maximum of 5 input, if it's not 5 input just press OK")
    var v = Number(prompt("input the first Number"))
    var w = Number(prompt("then"))
    var x = Number(prompt("then"))
    if (x == "") {
        alert (v * w)
        return;
    }
    else {
    var y = Number(prompt("then"))
    }
    if (y == "") {
        alert (v * w * x)
        return;
    }
    else {
    var z = Number(prompt("then, the last input"))
    }
    if (z == "") {
        alert (v * w * x * y)
        return;
    }
    else {
    alert(v * w * x * y * z)
    }
}

else if (calculate === "D" || calculate === "d") {
    alert("input the number one after the other, minimum of 2 input & maximum of 5 input, if it's not 5 input just press OK")
    var v = Number(prompt("input the first Number"))
    var w = Number(prompt("then"))
    var x = Number(prompt("then"))
    if (x == "") {
        alert (v / w)
        return;
    }
    else {
    var y = Number(prompt("then"))
    }
    if (y == "") {
        alert (v / w / x)
        return;
    }
    else {
    var z = Number(prompt("then, the last input"))
    }
    if (z == "") {
        alert (v / w / x / y)
        return;
    }
    else {
    alert(v / w / x / y / z)
    }
}

}

function calSum() {
    alert("sum of two numbers")
    var x = window.prompt("input the first number");
    var y = window.prompt("input the second number");
    var sum = ((Number(x)) + (Number(y)));
    alert(sum);
  }

  function calSubtract() {
    alert("subtraction of two numbers")
    var x = window.prompt("input the first number");
    var y = window.prompt("input the second number");
    var minus = x - y;
    alert(minus);
  } 

  function calMultiply() {
    alert("multiplication of two numbers")
    var x = window.prompt("input the first number");
    var y = window.prompt("input the second number");
    var mult = x * y;
    alert(mult);
  } 

  function calDivide() {
    alert("quotient of two numbers")
    var x = window.prompt("input the first number");
    var y = window.prompt("input the second number");
    var div = x / y;
    alert(div);
  }