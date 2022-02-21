const expireDate = new Date();
expireDate.setMonth(expireDate.getMonth() + 3);

let hitCt = eval(cookieVal("pageHit"));
hitCt++;

document.cookie = "pageHit=" + hitCt + ";expires=" + expireDate.toUTCString();

function cookieVal(cookieName) {
  let thisCookie = document.cookie.split("; ");

  for (i = 0; i < thisCookie.length; i++) {
    if (cookieName === thisCookie[i].split("=")[0]) {
      return thisCookie[i].split("=")[1];
    }
  }
  return 0;
}
