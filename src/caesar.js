// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

function caesar(input, shift, encode = true) {
    console.log(shift)
    if (shift > 25 || shift == 0 || shift < -25){
      return false
    }
    console.log(shift)
    
    let inputLower = input.toLowerCase()
    let ascii = []
    let newAscii = []
    let newChar = []
    let expi = []
    for(let item in inputLower){
    ascii.push(inputLower.charCodeAt(item))}
    console.log(ascii)
  
 if(encode === true){ 
  for(let i = 0; i < ascii.length; i++){ if(ascii[i] < 97 || ascii[i] > 122){ newAscii.push(ascii[i]) } 
    else
    {newAscii.push(ascii[i] + shift)} } 
  
  for(let i = 0; i < newAscii.length; i++){
   
    if(newAscii[i] > 122){
      expi.push(newAscii[i] - 26)}else
    
    if(newAscii[i] < 97 && newAscii[i] !== 32 && newAscii[i] !== 46){expi.push(newAscii[i] + 26)}
    
    else {expi.push(newAscii[i])}
  }
  
  newChar = String.fromCharCode.apply(null, expi)
  
    //console.log(ascii)
    //console.log(newAscii)
    //console.log(newChar)
    //console.log(expi)
    //console.log(inputLower)  
return newChar}
  
  else{
    
    for(let i = 0; i < ascii.length; i++){ if(ascii[i] < 97 || ascii[i] > 122){ newAscii.push(ascii[i]) } 
    else
    {newAscii.push(ascii[i] - shift)} } 
  
  for(let i = 0; i < newAscii.length; i++){
   
    if(newAscii[i] > 122){
      expi.push(newAscii[i] - 26)}else
    
    if(newAscii[i] < 97 && newAscii[i] !== 32 && newAscii[i] !== 46){expi.push(newAscii[i] + 26)}
    
    else {expi.push(newAscii[i])}
  }
  
  newChar = String.fromCharCode.apply(null, expi)
  
  
    console.log(ascii)
    console.log(newAscii)
    console.log(newChar)
    //console.log(expi)
    console.log(inputLower)  
return newChar}
    
    
  
  // your solution code here
} return { caesar, }; })();

module.exports = { caesar: caesarModule.caesar };