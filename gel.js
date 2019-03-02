const gel = element => document.querySelector(element);

gel.get = (url, callback) => {
  const http = new XMLHttpRequest();
  http.open('GET', url, true);

  http.onload = function () {
    if (http.status >= 200 && http.status < 400) {
      // Success!
      callback(http.responseText);
    } else {
      callback('server-error');
    }
  };
  
  http.send();
};
