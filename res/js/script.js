// const one = document.getElementById("one").value;
// const two = document.getElementById("two").value;
// const three = document.getElementById("three").value;
// const four = document.getElementById("four").value;
// const five = document.getElementById("five").value;
// const six = document.getElementById("six").value;
// const seven = document.getElementById("seven").value;
// const eight = document.getElementById("eight").value;
// const nine = document.getElementById("nine").value;

const nunberArray = [];
// const addArray

const handleDigitsValue = (btn) =>{
  nunberArray.push(btn)
  let str = nunberArray.join()
  let removeComma = str.replaceAll(',', '')
  document.getElementById("zero").innerHTML = removeComma;
  console.log(+removeComma)

// const totalArray = nunberArray.values();

// for(let elems of totalArray){
//   document.getElementById("zero").innerHTML = btn;   
//   console.log(elems)
// }

  
  // for (let i = 0; i < nunberArray.length; i++) {
  //   if (btn >= nunberArray ) {
  //       // document.getElementById("zero").innerHTML = btn;   
  //     }
  //     else{
  //       alert("click a number")
  //     }
  //     // console.log(nunberArray)
      
  //   }

  // if (btn ) {
    
  // }

}

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
