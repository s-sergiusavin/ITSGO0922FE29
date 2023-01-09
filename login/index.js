const loginBtn = document.getElementById('login');
const fpBtn = document.getElementById('forgotp');
const createAccBtn = document.getElementById('createacc');
const usernameInput = document.getElementById('usernameInput');
const passwordInput = document.getElementById('passwordInput');


function showError(message){
    error.style.display='block';
    error.innerHTML = message;
    error.style.color = 'red';
};
const correctPassword = (value)=> {
    return value=== 'password';}

function correctUser(value) {
    if(value==='maria123' || value==='maria@gmail.com'){
        return true
    }
    else{
        return false
    }
};
const clearLoginInputs = ()=>{
    usernameInput.value = "";
    passwordInput.value = "";};

loginBtn.addEventListener('click', function(event){
        event.preventDefault();
        const usernameValue = usernameInput.value;
        const passwordValue = passwordInput.value;
if(usernameValue === "" || passwordValue===""){
        showError('all fields requiered')
    } else{
        error.style.display='none';
        if (correctPassword(passwordValue) && correctUser(usernameValue)) {
            alert('Logged in!');
            clearLoginInputs()
        } else {
            showError('Incorrect email or password');
            clearLoginInputs();
        }}
});

createAccBtn.addEventListener('click',function(event){
    event.preventDefault();
    
})