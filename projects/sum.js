function printValue(){
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const sum = num1 + num2;
    document.getElementById('output').innerText = `The sum is: ${sum}`;
}
