document.getElementById('btn-deposit').addEventListener('click',function(){ 
    let userDepositValue= getValueInput('user-deposit');
    const textValue=getTextElementById('deposit-id');
    const balanceValue=getTextElementById('balance-id');
    let afterCalculationInputValue= calculation(userDepositValue,textValue)
    let final= finalCalculation(balanceValue,userDepositValue);
    showValue('deposit-id',afterCalculationInputValue);
    showValue('balance-id',final)
});

