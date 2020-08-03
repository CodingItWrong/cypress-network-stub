const xhrPromise = (url, data, headers, method = 'POST') => {
  return new Promise(resolve => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState !== 4) {
        return;
      }
      resolve(xhr);
    });
    xhr.open(method, url);
    if (headers) {
      headers.forEach(header => {
        xhr.setRequestHeader(header[0], header[1]);
      });
    }
    xhr.send(data);
  });
};

export default xhrPromise;
