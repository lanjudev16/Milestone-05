console.log('withdraw');
document.getElementById('btn-withdraw').addEventListener('click',function(){
    // New withdraw
    const withdrawField=document.getElementById('user-withdraw');
    const newWithdrawAmountString=withdrawField.value;
    const newWithdrawAmount=parseFloat(newWithdrawAmountString);

    // previous withdrwa
    const withdrawTotalElement=document.getElementById('withdraw-id');
    const previousWithdrawAmountString=withdrawTotalElement.innerText;
    const previousWithdrawAmount=parseFloat(previousWithdrawAmountString);
    // Total withdraw
    const totalWithdraw=newWithdrawAmount+previousWithdrawAmount;
    withdrawTotalElement.innerText=totalWithdraw;
    // total balance
    const balanceTotalElement=document.getElementById('balance-id');
    const previousBalanceTotalAmountString=balanceTotalElement.innerText;    
    const previousBalanceTotalAmount=parseFloat(previousBalanceTotalAmountString);  
    
    const totalBalance=previousBalanceTotalAmount-newWithdrawAmount;
    balanceTotalElement.innerText=totalBalance;
    withdrawField.value='';

})