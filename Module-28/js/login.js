console.log('login form');
// step-1 add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    // step-2 get the email address inside the email input field
    // always remember to use .valueto get text form an input field
    console.log('submit button');
    const emailField=document.getElementById('user-email');
    const email=emailField.value;
    console.log(email);
    // Step-3 get password
    // 3.1 set id on the html element
    // 3.2 get the element
    // 3.3 get the value from the element
    const passwordField=document.getElementById('user-password');
    const password=passwordField.value;
    console.log(password);
    // DANGER: Do not varify email password on the client side
    // step-4 varify email and password
    if(email==='sontan@baap.com' && password==='secret'){
        console.log('Valid User');
        window.location.href='bank.html';
    }
    else{
        // console.log('Invalid User');
        // window.location.href='bank.html';
        alert('Please! enter valid password');
    }
})