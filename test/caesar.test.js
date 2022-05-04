// Write your tests here!
const expect = require("chai").expect;
const {caesar} = require("../src/caesar.js")

describe("caesar",()=>{
  it("should take in a string and shift each character by the amount user wants, and decide to decode or encode based on user input", ()=> {
  const expected = "ifmmp";
     
    const actual = caesar("hello" , 1)
    
    expect(actual).to.equal(expected);
  })
/////  
  it("should return false if shift amount is 0", ()=> {
  const expected = false;
     
    const actual = caesar("hello" , 0)
    
    expect(actual).to.equal(expected);
  })
////  
 it("should keep spaces and other non alpahebtic character", ()=> {
  const expected = "uifsft b toblf jo nz cppu.";
     
    const actual = caesar("theres a snake in my boot." , 1)
    
    expect(actual).to.equal(expected);
  })
/////
  it("should circle back to a if shift goes off the alphabet", ()=> {
  const expected = "gbxlb pvgl";
     
    const actual = caesar("tokyo city" , 13)
    
    expect(actual).to.equal(expected);
  })
 /////
  it("should decode strings", ()=> {
  const expected = "thinkful";
     
    const actual = caesar("wklqnixo" , 3, false)
    
    expect(actual).to.equal(expected);
  })
})
