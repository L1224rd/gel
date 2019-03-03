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

gel.post = (url, data, callback) => {
  const http = new XMLHttpRequest();
  http.open('POST', url, true);
  http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  
  http.onload = function () {
    if (http.status >= 200 && http.status < 400) {
      // Success!
      callback(http.responseText);
    } else {
      callback('server-error');
    }
  };
  
  http.send(data);
};
