const caesarCipher = (str, key) => {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    if (str[i].match(/[a-z]/i)) {
      if (str[i] === str[i].toUpperCase()) {
        result += String.fromCharCode(((str.charCodeAt(i) + key - 65) % 26) + 65);
      } else {
        result += String.fromCharCode(((str.charCodeAt(i) + key - 97) % 26) + 97);
      }
    } else {
      result += str[i];
    }
  }
  return result;
};

export default caesarCipher;