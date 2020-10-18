const capitalize = (string) => {
  const firstLetter = string.charAt(0).toUpperCase();
  const otherLetters = string.slice(1).toLowerCase();
  return firstLetter + otherLetters;
};

module.exports = capitalize;
