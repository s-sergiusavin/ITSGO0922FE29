// restful services
//representation state of transfer
// CRUD 
// CREATE 
// READ 
// UPDATE 
// DELETE 
// HTTP implementation of rest services 
// Create => POST 
// READ => GET 
// Update => PUT / PATCH (rar folosita)
// Delete => DELETE

// object recap and calsses 

const person = {
    name: 'Sergiu',
    age:30, 
    address: {
        street: 'street',
        country: 'RO',
    },
    sayHi: function() {
        console.log(`${this.name} says Hi`);
    }
};

person.name = 'Ovidiu';
person.sayHi();
const newPerson = person;
newPerson.name = 'Alin';

console.log(person);
console.log(newPerson);

const otherPerson = new Object(person);
otherPerson.name = 'SergiuS';

console.log(person);
console.log(otherPerson);

const bicycle = {
    gear: 21,
    setGear: function(gear) {
        this.gear = gear;

    }
};

bicycle.gear = 14;
console.log(bicycle);
bicycle.setGear(30);
console.log(bicycle);

//Classes

class Book {
    cover = 'Hard';
constructor(type, writer) {
this.type = type;
this.author = writer;
}
}

const basme = new Book('basme', 'Petre Ispirescu');
const povesti = new Book('povesti', 'Ion Creanga');

console.log(basme);
console.log(povesti);

basme.author = 'Fratii Grimm';
basme.year = '1991';
console.log(basme);
console.log(povesti);


//Promise (clasa)

let promise = new Promise(function(resolve, reject) {
// setTimeout(resolve, 2000, 'Value sent');
// setTimeout(reject, 2000, 'Error sent');

});

promise.then((value) => {
    console.log('fullfiled' + value)
}, (error) => {
    console.log('rejected' + error)
});

/**
 * GET Request
 */

const singleUserUrl = 'https://reqres.in/api/users/2';

// fetch(singleUserUrl).then((response) => {
// console.log(response);
// response.json().then((data) => {
//     console.log(data);
// });
// });

const singleUserData = fetch(singleUserUrl).then((response) => {
    return response.json();
});

singleUserData.then(data => {
    console.log(data);
});

/**
 * Async/ Await Requests
 */

async function getSingleUser() {
const response = await fetch(singleUserUrl);
return response.json();
}

getSingleUser().then((data) => {
    console.log('data with async/await');
    console.log(data);

});

// get request with error handling

// "?" (fara "") in URL se numeste querry param

const singleUserNotFoundUrl = 'https://reqres.in/api/users/23';
const userListUrl = 'https://reqres.in/api/users?page=2';

const allUserList = new Promise((resolve, reject) => {
fetch(userListUrl).then(response => {
    return response.json();
}).then((data) => {
    resolve(data);
}).catch(error => {
    reject(error);
})
});

allUserList.then((value) => {
    console.log(value);
}, (error) => {
    console.log(error);
});


// Post method

const createUserUrl = 'https://reqres.in/api/users';
const user = {
    "name": "morpheus",
    "job": "leader"
}

const createUser = new Promise((resolve, reject) => {
    fetch(createUserUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    
    .then(response => {
        if (response.status !== 201) {
            throw 'Ai o eroare'
        }
        return response.json();
    }).then((data) => {
        resolve(data);
    }).catch(error => {
        reject(error);
    })
    });

    createUser.then((value) => {
        console.log(value);
    }, (error) => {
        console.log(error);
    });

    /**
     * POST with error
     */
