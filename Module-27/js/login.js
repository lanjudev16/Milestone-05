document.getElementById('btn-submit').addEventListener('click',function(){
    const emailField=document.getElementById('user-email').value;
    const passwordField=document.getElementById('user-password').value;
    if(emailField=="lanjucse@gmail.com" && passwordField=="655285"){
        window.location.href='bank.html'
    }else{
        alert('Toke ami tejjosontan gusona korlam')
    }
})



