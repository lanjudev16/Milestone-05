document.getElementById('btn-withdraw').addEventListener('click',function(){
    let userWithdrawValue= getValueInput('user-withdraw');
    const textValue=getTextElementById('withdraw-id');
    const balanceValue=getTextElementById('balance-id');
    let afterCalculation= calculation(userWithdrawValue,textValue);
    showValue('withdraw-id',afterCalculation);
    let finalBalance=finalWithDrawCalculation(balanceValue,userWithdrawValue)
    showValue('balance-id',finalBalance);
});
