const getToken = () => localStorage.getItem("palindromeChecker");
const setToken = token => localStorage.setItem("palindromeChecker", token);
const isAuthenticated = () => !!getToken();

export { getToken, setToken, isAuthenticated };
