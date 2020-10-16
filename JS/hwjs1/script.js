alert("I`m JavaScript!");

let name = "John";
let admin = name;
alert("admin: " + admin);

let earth = 'planet';
let username ='newUser';

alert("earth: " + earth);
alert("username: " + username);

let name2 = "Ilya";

alert( `hello ${1}` ); // hello 1

alert( `hello ${"name"}` ); // hello name

alert( `hello ${name}` ); // hello Ilya

let username2 = prompt("what is your name?", 'Martyn');
alert(username2);

let a = 1, b = 1;

let c = ++a; // 2
let d = b++; // 2

alert("a: "+ a + "; b: " + b);

let aa = 2;

let x = 1 + (aa *= 2); //5
alert("x: " + x);

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
null + 1        //?
undefined + 1   //?
" \t \n" - 2    //?

5 > 4 //true
"apple" > "pineapple"   //false
"2" > "12"              // false
undefined == null       // false
undefined === null      //false
null == "\n0\n"         // false
null === +"\n0\n"       //false

if ("0") {
    alert( "Hello, yes it's working, because 0 not empty str" );
  }
 
  let i = 3;

while (i) {
  alert( i-- );
}
alert("the last in loop will be 1, cause next iterration will be with i = 0 - false");
