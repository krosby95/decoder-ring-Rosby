// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    // substitution alphabet must exist and be exactly 26 characters long.
    if (!alphabet || alphabet.length !== 26) return false;

    //Global Variables
    const realAlph = "abcdefghijklmnopqrstuvwxyz".split("");
    const inputs = input.toLowerCase().split("");
    const inputAlpha = alphabet.toLowerCase().split("");

    // substitution alphabet can not have any repeated characters
    const onlyUniqueChars = inputAlpha.filter(
      (item, index, self) => self.indexOf(item) === index
    );
    if (onlyUniqueChars.length !== alphabet.length) return false;

    const encodeMessage = () => {
      let result = [];
      const encode = (char) => {
        const charIndex = realAlph.indexOf(char);
        const encodedChar = inputAlpha[charIndex];
        result.push(encodedChar);
      };
      inputs.forEach((char) => {
        
        char === " " ? result.push(" ") : encode(char);
      });
      return result.join("");
    };

    const decodeMessage = () => {
      let result = [];
      const decode = (char) => {
        const charIndex = inputAlpha.indexOf(char);
        const decodedChar = realAlph[charIndex];
        result.push(decodedChar);
      };
      inputs.forEach((char) => {
        
        char === " " ? result.push(" ") : decode(char);
      });
      return result.join("");
    };

    
    return encode ? encodeMessage() : decodeMessage();
  }

  return {
    substitution,
  };
})();
module.exports = { substitution: substitutionModule.substitution };
