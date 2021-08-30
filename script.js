let myBtn = document.getElementById('mybtn');
let content = document.getElementById('content');

//Get request for fetching internal file
const getInternalData = () => {
  let url = 'harry.txt';
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      alert(data);
    });
};


//fetching data using get request
const getData = () => {
  let url = 'https://api.github.com/users';
  fetch(url)
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      alert(data);
    });
};

//fetching data using post request
const postData = () => {
  let url = 'https://reqres.in/api/users';
  data = '{"name": "naturee","job": "leader"}';
  params = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
  };
  fetch(url, params)
    .then((response) => response.text())
    .then((data) => alert(data));
};

