const Ay = [1000, 2000, 3000, 3275847, 43895,20043925,65472356];


// obj
let user = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30,
    subject :['math', 'english', 'bangla' , 'arabic', 'python','js', 'css' ,]        // by key "age" store value 30
  };



const info = ` 
user name is ${user.name}. 
His is ${user.age} year old. 
He like to coding,
he knew few lanauage ${user.subject[2]},
 his monthly income  ${Ay[2]}` ;
console.log(info);


//arrow function

const fiveNum = () => 5000;
const newNumber = num1 => num1 + 40;
const odd = x => x % 2 == 1;
const mutFun = (x,y,z) => {x + y + z}

const doMath = (aa,bb)=>{
    const result = aa + bb;
    return result;
}


const output = doMath(1000,34);
console.log(output);