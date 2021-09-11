
// const variable 

const userName = 'sakib';
const userAge = 30;


// let variable 

let player = 'sabbir';
plyer = 'afif hossian'


let season = 'winter';
season = '-rainy'


//condition 

if (season === 'rainy' && userAge === 30){
  console.log('if condition is executed');
}else{
  console.log('else condition is executed');
}



// array 

const numArray = [1000, 2000, 3000, 3275847, 43895,20043925,65472356];
numArray[2] = 10000; // change 
// numArray.pop() // remove
// numArray.push(4000) // add 
// numArray.unshift() // remove
// console.log(numArray[3]); //indexOf
// console.log(numArray.length);//length
// console.log(numArray[numArray.length-1]); // last element check
console.log(numArray);


//for loop 

for ( let i = 0; i < numArray.length ; i ++ ){
  // console.log(i);
   const newElement = numArray[i];
   console.log(newElement);
}

// function 
function add(a,b){
  const out = a + b;
  return out;
}

const output = add(20,20);
console.log(output);


// 

function multi(a,b){
  const out = a * b;
 console.log(out);
}

multi(20,20);




// obj
let user = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 30,
  subject :['math', 'english', 'bangla' , 'arabic', 'python','js', 'css' ,]        // by key "age" store value 30
};


const ageVar = "age";

console.log(user.name);
console.log(user['age']);
console.log(user[ageVar]);