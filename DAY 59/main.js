//       DAY 59 CHALLENGE
//Loops: while and for
//We often need to repeat actions.
//For Loop:
//A for loop processes the elements of a collection or range sequentially. It runs a specific number of times.
for (var i_1 = 1; i_1 <= 5; i_1++) {
    console.log(i_1);
}
/*While Loop:
A while loop is based on a condition. As long as the condition remains true, the code inside the loop
 continues to execute.*/
var a = 1;
while (a <= 5) {
    console.log(a);
    a++;
}
/*do...while loop is a loop that executes at least once, whether the condition is false or true. This loop first
 executes the block of code and then checks the condition. If the condition is true, the loop executes again,
  and this process repeats until the condition becomes false.*/
var i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);
//The "switch" statement
var t = 2 + 2;
switch (t) {
    case 3:
        console.log('Too small');
        break;
    case 4:
        console.log('Exactly!');
        break;
    case 5:
        console.log('Too big');
        break;
    default:
        console.log("I don't know such values");
}
