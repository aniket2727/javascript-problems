


// 1.simple objects creations in javascripts
const arr=[1,2,3,4,5,6,7,8]
console.log(arr)
console.log(typeof(arr))  // reated as the object


//2.functions with the paramets
function addData(a,b){  // argumet are passed to the functions
    console.log("the addition is",a+b)
}
addData(10,29)  // functions is called 



//3.hoisting in javascript
function handlehoist(){
    let b
    console.log(a)  // value is a is undefined because of the hoisting it declared on top of the data but never assigned
    console.log(b)
    var a=10
    b=10
   
}

handlehoist()


//4.trim of string
var data="   aniket is good progremmer  "
console.log('the value before the trim is',data) 
console.log("value after the trim is ",data.trim())  // trim remove the extra spaces on the string

//5.for loops

var data=[1,2,3,4]
console.log(data[1])
for(var i=0;i<data.length;i++){
    console.log(i)
}


// 6.how to find the count of numbers in array

const numbersArray = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 5];
const numberCounts = {};
numbersArray.forEach(number => {

    numberCounts[number] = (numberCounts[number] || 0) + 1;
});

for (const number in numberCounts) {
    console.log(`${number}: ${numberCounts[number]} times`);
}


//.7 finding the numbers into the array with predefined functions
const array = [1, 2, 3, 4, 5];
const itemToCheck = 3;

if (array.includes(itemToCheck)) {
    console.log(`${itemToCheck} is present in the array.`);
} else {
    console.log(`${itemToCheck} is not present in the array.`);
}


// 8.use of find functions 
//used for getting the first element form the data
const a = [1, 2, 10, 3, 4, 56];
const result = a.find(item => item === 2);
console.log(result);



// 9 .accesing the keys for objects in array

var m = {
    'name': [1, 2, 3, 4, 5, 6],
    'age': [1, 2, 3, 4, 5, 6]
  };
  
  console.log(Object.keys(m));
  console.log(Object.values(m));
  


  // 10.clouser in javascript

  function outerFunction() {
    let outerVariable = 10;
    function innerFunction() {
      console.log(outerVariable);
    }
    return innerFunction;
  }
  
  const closureFunction = outerFunction();
  closureFunction(); // Outputs: 10
  

  //11.this keyword use
  function MyClass(value) {
    this.property = value;
  }
  const myInstance = new MyClass('example');
  console.log(myInstance.property); // Outputs: 'example'
  