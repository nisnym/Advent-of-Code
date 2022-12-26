function hasUniqueChars(string) {
    for (let i = 0; i < string.length; i++) {
      let char = string[i];
      if (string.indexOf(char) !== string.lastIndexOf(char)) {
        return false;  // character appears more than once
      }
    }
    return true;  // all characters are unique
  }
  
  console.log(hasUniqueChars("czfztznzpnpqpf"));  // false
  console.log(hasUniqueChars("abcde"));  // true
  console.log(hasUniqueChars("abcdee"));  // false
  