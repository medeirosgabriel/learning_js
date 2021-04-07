const fetch = require('node-fetch');

function getUsers() {
    fetch('https://learningsb.herokuapp.com/users')
        .then(T => T.json())
        .then(console.log)
}

function getUserById(id) {
    fetch(`https://learningsb.herokuapp.com/users/${id}`)
        .then(T => T.json())
        .then(console.log)
}

function insertUser(user) {
    
    let options =  {
        method: 'POST',
        body: JSON.stringify(user),
        headers: { 'Content-Type': 'application/json' }
    }

    fetch('https://learningsb.herokuapp.com/users', options)
        .then(res => res.json())
        .then(json => console.log(json));
}

let user = {name:"Tadeu Jereira",email:"tadeu@gmail.com",phone:"999922999",password:"12345678"};

//insertUser(user);
//getUsers();
getUserById(35);