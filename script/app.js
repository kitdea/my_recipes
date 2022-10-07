
// Write a function called add7 that takes one number and returns that number + 7.
const add7 = (num1) => {
  return num1 + 7;
}
const total = add7(19);
console.log(total);


// Write a function called multiply that takes 2 numbers and returns their product.
const multiply = (num1, num2) => { 
  const product = num1 * num2;
  return product;
}
const product = multiply(2, 10);
console.log(product);


//Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
const capitalizeString =  (nname) => {
  const firstChar = nname.slice(0,1);
  const upperCaseFirstChar = firstChar.toUpperCase();
  const restName = nname.slice(1,nname.length).toLowerCase();

  return upperCaseFirstChar + restName;

};
const nname = capitalizeString('adminiStraTioN');
console.log(nname);


// Write a function called lastLetter that takes a string and returns the very last letter of that string:
const lastLetter = (string) => {
  const lastChar = string.charAt(string.length-1);
  return lastChar;
}
const lastD = lastLetter('Lucas Gavriel');
console.log(lastD);





const ul = document.querySelector('.people');
const people = ['dea', 'lucas', 'patricia', 'babette'];

people.forEach((person) => {
  ul.innerHTML += `<li style="color: purple">${person}</li>`;
   
});

// const bill = (products, tax) =>{
//   let total = 0;
//   for(let i = 0; i < products.length; i++) {
//     total +=  products[i] + products[i] * tax;
//   }
//   return total;
// };
// console.log(bill([10,15,30], 0.2));
