let nunberArray = [];
// const addArray = [];
let removeComma = 0
let totalValue = 0

let valueOne = 0;
let valueTwo = 0
let operator = null


const setOperator = (operator) =>{
  operator = operator
  nunberArray = []
  if (valueOne == 0) {
    valueOne = removeComma
    document.getElementById("zero").innerHTML=0
  }else if(valueTwo == removeComma){
    
    document.getElementById("zero").innerHTML=0
  }
  if (operator == "add") {
    totalValue = parseInt(valueOne + valueTwo) 
    valueOne = removeComma
    valueTwo = 0
 
    document.getElementById("zero").innerHTML=0
  } 
}

const getTotal = () =>{
  document.getElementById("zero").innerHTML=removeComma
  alert(valueTwo)
}
 

const handleDigitsValue = (btn) =>{
  nunberArray.push(btn)
  let str = nunberArray.join()
  removeComma = parseInt(str.replaceAll(',', '')) 
  document.getElementById("zero").innerHTML = removeComma;

}

// const handleAddDigits = () =>{
//   let plus = 0
//   document.getElementById("zero").innerHTML = plus;

//   console.log(plus);

// }



// document.querySelectorAll('button').forEach(button => {
//   button.addEventListener('click', () => {
//     const zero = document.getElementById("zero").innerHTML = button;
//       const fired_button = button.value;
//       alert(fired_button);
      
//   });
// });





























// const one = document.getElementById("one").textContent;
// const two = document.getElementById("two").textContent;
// const three = document.getElementById("three").textContent;
// const four = document.getElementById("four").textContent;
// const five = document.getElementById("five").textContent;
// const six = document.getElementById("six").textContent;
// const seven = document.getElementById("seven").textContent;
// const eight = document.getElementById("eight").textContent;
// const nine = document.getElementById("nine").textContent;

// const numberWrapOne = [0];
// const numberWrapTwo = [];

// console.log(one);

// const getNodeValue = (id) => {
//   let elem = document.getElementById(id).textContent;
//   console.log(numberWrapOne.push(elem))
// };

// console.log();
