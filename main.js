var option = prompt('Select your operation: \n' +
		'a - Addition \n'  +
		's - Subtraction \n' +
		'm - Multiplication \n' +
		'd - Division \n'  +
		'sq - Square Root \n' +
		'pw - Power');

if (option === 'a') {
	var firstNum = prompt('Type in your first number: ');
	var secondNum = prompt('Type in your second number: ');

	firstNum = parseFloat(firstNum);
	secondNum = parseFloat(secondNum);

	var answer = firstNum + secondNum;

	alert(firstNum + ' + ' + secondNum + ' = ' + answer);

} else if (option === 's') {
	var firstNum = prompt('Type in your first number: ');
	var secondNum = prompt('Type in your second number: ');

	firstNum = parseFloat(firstNum);
	secondNum = parseFloat(secondNum);

	var answer = firstNum - secondNum;

	alert(firstNum + ' - ' + secondNum + ' = ' + answer);

} else if (option === 'm') {
	var firstNum = prompt('Type in your first number: ');
	var secondNum = prompt('Type in your second number: ');

	firstNum = parseFloat(firstNum);
	secondNum = parseFloat(secondNum);

	var answer = firstNum * secondNum;

	alert(firstNum + ' * ' + secondNum + ' = ' + answer);

} else if (option === 'd') {
	var firstNum = prompt('Type in your first number: ');
	var secondNum = prompt('Type in your second number: ');

	firstNum = parseFloat(firstNum);
	secondNum = parseFloat(secondNum);

	var answer = firstNum / secondNum;

	alert(firstNum + ' / ' + secondNum + ' = ' + answer);

} else if (option === 'sq') {
	var num = prompt('Type in your number: ');

	num = parseFloat(num);

	var answer = Math.sqrt(num);

	alert('Number: ' + num + '\n' + 'Square Root: ' + answer);

} else if (option === 'pw') {
	var num = prompt('Type in your number: ');
	var power = prompt('Power to the number: ');

	num = parseFloat(num);
	power = parseFloat(power);

	var answer = Math.pow(num,power);

	alert('Number: ' + num + '\n' + 'Power: ' + power + '\n' + 'Answer: ' + answer);
}
else {
	alert('Not an option!');
}






