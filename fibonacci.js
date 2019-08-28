// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n){
	if (n === 0) return 0;
	if (n <= 2) return 1;
  var sum1 = 1;
	var sum2 = 1; 
	var counter = 2;
	while (counter < n) {
		let tempSum = sum1;
		//console.log(sum1, sum2);
		sum1 = sum1 + sum2;
		sum2 = tempSum;
		counter++;
	}
	console.log(counter + ': ' + sum1);
	return counter;
}

function fibonacciRecursive(n) {
  if (n < 2) return n;
	return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciIterative(4))
console.log(fibonacciIterative(7))
console.log(fibonacciRecursive(4))
console.log(fibonacciRecursive(7))