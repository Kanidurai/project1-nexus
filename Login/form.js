function login() {
    var username=document.getElementById('user').value;
    var password=document.getElementById('pass').value;

    if(username === 'kani' && password ==='kani123'){
        alert('Login successfully');
    }
    else{
        alert('Invalid username&password. Please try again');
        document.getElementById('button').innerHTML = "Invalid username or password";
    }
}