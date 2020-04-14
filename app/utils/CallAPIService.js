const callAPIService = async (_method = "GET", _url, _body, _headers) => {
  let fetchObj = { method: _method, mode: "cors", headers: _headers };
  if (_method !== "GET" && _method != 'DELETE') {
    fetchObj = { ...fetchObj, body: _body };
  }
  if ( _method == 'DELETE') {
    fetchObj = { ...fetchObj };
  }
  return new Promise(function(resolve, reject) {
    fetch(_url, fetchObj)
      .then(res => {
        res.json().then(data => {
          resolve(data);
        });
      })
      .catch(err => {
          console.log(err);
        reject(err);
      });
  });
};

export default callAPIService;
