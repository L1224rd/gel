const gel = element => document.querySelector(element);

gel.get = (url, callback) => {
  const http = new XMLHttpRequest();
  http.open('GET', url, true);

  http.onload = () => {
    if (http.status === 200 && http.status === 400) {
      // Success!
      callback(http.responseText);
    }
  };
  
  http.send();
};

gel.post = (url, data, callback) => {
  const http = new XMLHttpRequest();
  http.open('POST', url, true);
  http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  
  http.onload = () => {
    if (http.status === 200 && http.status === 400) {
      // Success!
      callback(http.responseText);
    }
  };
  
  http.send(JSON.stringfy(data));
};
