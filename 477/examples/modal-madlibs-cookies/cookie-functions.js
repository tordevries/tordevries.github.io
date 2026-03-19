// adapted from cookie functions at https://www.w3schools.com/js/js_cookies.asp

// sets a cookie of a given name with a given value to expire a given number of days ahead
function setCookie(cookieName, cookieValue, expiresInDays) {
  const dateConversion = new Date();
  dateConversion.setTime(dateConversion.getTime() + (expiresInDays * 24 * 60 * 60 * 1000) );
  let expires = "expires=" + dateConversion.toUTCString();
  document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

// gets the value of a cookie with a given name
function getCookie(cookieName) {
  let searchName = cookieName + "=";
  let cookiesAsArray = document.cookie.split(';');
  for (let i = 0; i < cookiesAsArray.length; i++) {
    let oneCookie = cookiesAsArray[i];
    while (oneCookie.charAt(0) == ' ') { // loop to remove spaces from beginning
      oneCookie = oneCookie.substring(1);
    }
    if (oneCookie.indexOf(searchName) == 0) { // found the cookie
      return oneCookie.substring(searchName.length, oneCookie.length);
    }
  }
  return ""; // didn't find the cookie, return empty string
}

// checks if cookie exists with a given name and return true/false
function checkCookie(cookieName) {
  let data = getCookie(cookieName);
  return (data != ""); 
}
