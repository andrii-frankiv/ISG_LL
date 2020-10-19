//  2.15
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('Did parents allow you?'); //functions with else/without else will return the same.
    }
  }

  //
  function checkAge(age) {
    return age > 18 ? true : confirm('Did parents allow you?'); // ? -> ||
  }
  
  // min

  function min(a,b){
    return (a > b) ?  a :  b;
  }

    //  pow 

  function pow(x,n){
      if(x){
        let res = x;
      }
    else{
        let res = 0;
    }
    if(n > 0){
        for(let i = 1; i < n; i++){
            res *= x;
        }
    }
        else if(n < 0){
            for(i = n; i <= 0; i++){
                res /= x;
            }
            
        }
        else{
              res = 1;  
        } 
      console.log(res);
  }

  // 

  ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
  );

  // 6 //
  function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
  alert(sumTo(100));

  //

  function sumTo(n) {
    if (n == 1) return 1;
    return n + sumTo(n - 1);
  }
  alert(sumTo(100));

  //

  function sumTo(n) {
    return n * (n + 1) / 2;
  }
  alert(sumTo(100));

  //

  let name = "John";

  function sayHi() {
    alert("Hi, " + name);
  }
  
  name = "Pete";
  
  sayHi(); // Pete

  //

  function makeWorker() {
    let name = "Pete";
  
    return function() {
      alert(name);
    };
  }
  
  let name = "John";
  
  let work = makeWorker();
  
  work(); // Pete

// 

function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
  }
  
  let counter = makeCounter();
  let counter2 = makeCounter();
  
  alert( counter() ); // 0
  alert( counter() ); // 1
  
  alert( counter2() ); // 0
  alert( counter2() ); // 1 

  //

  function Counter() {
    let count = 0;
  
    this.up = function() {
      return ++count;
    };
  
    this.down = function() {
      return --count;
    };
  }
  
  let counter = new Counter();
  
  alert( counter.up() ); // 1
  alert( counter.up() ); // 2
  alert( counter.down() ); // 1

  //

  let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi();// can't run, because sayHi just inside

//

function sum(a) {
    return function(b) {
      return a + b; 
    };
  }
  
  alert( sum(a)(b) ); 
  alert( sum(a)(b) ); 

  //

  let x = 1;

function func() {
  console.log(x); // x wasn't declareted in scopes like parameter
  let x = 2;
}

func();