// Write your tests here!
const expect = require("chai").expect;
const {polybius} = require("../src/polybius.js")

describe("polybius",()=>{
  it("should encode string using polybius method", ()=> {
  const expected = "345453";
     
    const actual = polybius("sup" , true)
    
    expect(actual).to.equal(expected);
  })
/////  
   it("should keep spaces", ()=> {
  const expected = "345453 124343";
     
    const actual = polybius("sup foo" , true)
    
    expect(actual).to.equal(expected);
  })
 /////
  it("should decode string using polybius method", ()=> {
  const expected = "cows";
     
    const actual = polybius("31432534" , false)
    
    expect(actual).to.equal(expected);
  })
})