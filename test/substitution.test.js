const expect = require("chai").expect;
const {substitution} = require("../src/substitution.js")

describe("substitution",()=>{
  it("should create a cipher with a word and a replacement alphabet", ()=> {
  const expected = ('jrufscpw');
     
    const actual = substitution("thinkful","xoyqmcgrukswaflnthdjpzibev");
    
    expect(actual).to.equal(expected);
  })// Write your tests here!

/////
  

  it("should only work if replacement alphabet has enough characters", ()=> {
  const expected = false;
     
    const actual = substitution("thinkful","wsxoyqmcgrukswaflnthdjpzibev");
    
    expect(actual).to.equal(expected);
  })
  
  
  it("should decode message if parameter is false ", ()=> {
  const expected = ("thinkful");
     
    const actual = substitution("jrufscpw","xoyqmcgrukswaflnthdjpzibev", false);
    
    expect(actual).to.equal(expected);
  })
  
  
  it("should decode message even with special characters", ()=> {
  const expected = ("message");
     
    const actual = substitution("y&ii$r&","$wae&zrdxtfcygvuhbijnokmpl", false);
    
    expect(actual).to.equal(expected);
  })
  
})

