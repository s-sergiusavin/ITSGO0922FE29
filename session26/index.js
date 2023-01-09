//class
const person = {
    name:'Ana',
    age:30,
    adress:{
        street:'street',
        country: 'ro'
    },
    saiHi: function(){
        console.log(`${this.name} says hi `)
    }
}

const newperson = person;
newperson.name = 'alin';
 
const otherperson = new Object(person);

class Book {
    cover = 'hard';
    constructor (type,writer){
        this.type = type;
        this.writer = writer;
    }
}

const basme = new Book('basme','ispirescu')
const povesti = new Book('povesti','creanga')

//promise

let promise = new Promise(function(resolve,reject){
    setTimeout(resolve,2000,'value sent')// reject 'error sent'
});

promise.then((value) => {
    console.log('fulfilled' + value)
}, (error) => {
    console.log('rejected' + error)
});
// get request

const singleUserUrl = 'https://reqres.in/api/users/2';

fetch(singleUserUrl).then((response)=>{
    console.log(response)
    response.json().then((data)=>{
        console.log(data);
    });
});

const singleUserNotFound = 'https://reqres.in/api/users/23';
const userListUr1 = 'https://reqres.in/api/users?page=2';

const allUserList = new Promise ((resolve,reject)=>{
    fetch(userListUr1).then(response => {
        return response.json();
    }).then((data)=> {
        resolve(data);
    }).catch(error=>{
        reject(error);
    });
});


