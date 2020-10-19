//2.1

alert("I`m JavaScript!");

//2.4

let name = "John";
let admin = name;
alert("admin: " + admin);

let earth = 'planet';
let username ='newUser';

alert("earth: " + earth);
alert("username: " + username);

//2.5

let name2 = "Ilya";

alert( `hello ${1}` ); // hello 1

alert( `hello ${"name"}` ); // hello name

alert( `hello ${name}` ); // hello Ilya

//2.6

let username2 = prompt("what is your name?", 'Martyn');
alert(username2);

//2.8

let a = 1, b = 1;

let c = ++a; // 2
let d = b++; // 2

alert("a: "+ a + "; b: " + b);

let aa = 2;

let x = 1 + (aa *= 2); //5
alert("x: " + x);

//2

"" + 1 + 0      //10
"" - 1 + 0      //-1
true + false    //false
6 / "3"         //2
"2" * "3"       //6
4 + 5 + "px"    //9px
"$" + 4 + 5     //$45
"4" - 2         //2
"4px" - 2       //nan
7 / 0           //inf
"  -9  " + 5    //-9 5
"  -9  " - 5    //-13
null + 1        //1
undefined + 1   //NaN
" \t \n" - 2    //-2

let a = parseInt(prompt("First number?", 1));
let b = parseInt(prompt("Second number?", 2));

alert(a + b); // 3

//2.9

5 > 4 //true
"apple" > "pineapple"   //false
"2" > "12"              // false
undefined == null       // false
undefined === null      //false
null == "\n0\n"         // false
null === +"\n0\n"       //false

//2.10

if ("0") {
    alert( "Hello, yes it's working, because '0' isn't empty str" );
  }
 
//2.11

alert( null || 2 || undefined );//  2 first true

alert( alert(1) || 2 || alert(3) );// 1 then 2 then alert ends.

alert( alert(1) && alert(2) ); // 1 like first true, then undefined

alert( null || 2 && 3 || 4 );// 3 like first true;

if ((age >= 14) && (age <= 90))

if (age < 14 || age > 90)

if (-1 || 0) alert( 'first' );// -1||0 - true. alert will start


if (-1 && 0) alert( 'second' );// -1||0 - false. alert will not start


if (null || -1 && 1) alert( 'third' );// first -1&&1 = true, it will work because of second part = true

//2.13


  let i = 3;

while (i) {
  alert( i-- );
}
alert("the last in loop will be 1, cause next iterration will be with i = 0 - false");

let i = 0;
while (++i < 5) alert( i );// result  1 -  4. first  +1, then 'current < 5' 

let i = 0;
while (i++ < 5) alert( i );// result 1 - 5. first 'curent < 5' then +1.

for (let i = 0; i < 5; i++) alert( i );//both the same till 4
for (let i = 0; i < 5; ++i) alert( i );//both the same till 4

for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert( i );
  }
}

let i = 0;
while (i < 3) {
  alert( `number ${i}!` );
  i++;
}
let num;

do {
  num = prompt("Print number under 100", '');
} while (num <= 100 && num);

let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) {

  for (let j = 2; j < i; j++) {
    if ( ( i != j ) && ( i % j == 0 ) ) break; 
  }

  alert( i ); 
}

if(browser == 'Edge') {
  alert("You've got the Edge!");
} else if (browser == 'Chrome'
        || browser == 'Firefox'
        || browser == 'Safari'
        || browser == 'Opera') {
  alert( 'Okay we support these browsers too' );
} else {
  alert( 'We hope that this page looks ok!' );
}
let a = +prompt('a?', '');

switch (a) {
  case 0:
    alert( 0 );
    break;

  case 1:
    alert( 1 );
    break;

  case 2:
  case 3:
    alert( '2,3' );
    break;
}