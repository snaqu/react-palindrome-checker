import checkPalindrome from "utils/checkPalindrome";

describe("check palindrome", () => {
  it("Return false if value is empty string", () => {
    expect(checkPalindrome("")).toBeFalsy();
  });

  it("Return false if one word is not palindrome", () => {
    expect(checkPalindrome("bootle")).toBeFalsy();
  });

  it("Return true if one word is palindrome", () => {
    expect(checkPalindrome("madam")).toBeTruthy();
  });

  it("Return true if sentence is palindrome", () => {
    expect(checkPalindrome("abcd dcba")).toBeTruthy();
  });

  it("Return false if sentence is not palindrome", () => {
    expect(checkPalindrome("abcd dcba")).toBeTruthy();
  });

  it("Return false if sentence is palindrome", () => {
    expect(checkPalindrome("lorem ipsum")).toBeFalsy();
  });

  it("Return false if value has empty spaces", () => {
    expect(checkPalindrome("   ")).toBeFalsy();
  });

  it("Return true if value has empty spaces before name", () => {
    expect(checkPalindrome("   Kayak")).toBeTruthy();
  });

  it("Return true if value has empty spaces after name", () => {
    expect(checkPalindrome("Kayak   ")).toBeTruthy();
  });

  it("Return true if value has empty spaces after and before name", () => {
    expect(checkPalindrome("   Kayak   ")).toBeTruthy();
  });

  it("Return false if value is not string", () => {
    expect(checkPalindrome()).toBeFalsy();
    expect(checkPalindrome(undefined)).toBeFalsy();
    expect(checkPalindrome(null)).toBeFalsy();
    expect(checkPalindrome([])).toBeFalsy();
    expect(checkPalindrome(0)).toBeFalsy();
    expect(checkPalindrome({})).toBeFalsy();
  });
});
