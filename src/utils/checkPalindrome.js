const checkPalindrome = value => {
  if (!value || typeof value !== "string") return false;

  const lowerCaseValue = value.toLowerCase().trim();
  const reverseValue = lowerCaseValue
    .split("")
    .reverse()
    .join("");

  return lowerCaseValue.length && reverseValue === lowerCaseValue;
};

export default checkPalindrome;
