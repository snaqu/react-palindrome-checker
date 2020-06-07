const checkPalindrome = value => {
  const lowerCaseValue = value.toLowerCase();
  const reverseValue = lowerCaseValue
    .split("")
    .reverse()
    .join("");

  return reverseValue === lowerCaseValue;
};

export default checkPalindrome;
