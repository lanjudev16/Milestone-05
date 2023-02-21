console.log('deposite');
// Step-1 add eventlistenet to deposite button
document.getElementById('btn-deposite').addEventListener('click',function(){
    // Step-2 get the deposite amount from the deposite input field
    // always remember to use .valueto get text form an input field
    const depositeField=document.getElementById('user-deposite');
    const newDepositeAmountString=depositeField.value;
    const newDepositeAmount=parseFloat(newDepositeAmountString);
    // Step-3 get the current deposite total
    // for non-input use innerText
    const depositeTotalElement=document.getElementById('deposite-id');
    const previousDepositeTotalString=depositeTotalElement.innerText;
    const previousDepositeTotal=parseFloat(previousDepositeTotalString);
    // depositeTotalElement.innerText=newDepositeAmount;
    console.log(newDepositeAmount);
    
    const totalDeposite=newDepositeAmount+previousDepositeTotal;

    depositeTotalElement.innerText=totalDeposite;
    const balanceTotalElement=document.getElementById('balance-id');
    const previousBalanceTotalAmountString=balanceTotalElement.innerText;    
    const previousBalanceTotalAmount=parseFloat(previousBalanceTotalAmountString);  
    
    const totalBalance=previousBalanceTotalAmount+newDepositeAmount;
    balanceTotalElement.innerText=totalBalance;
    // Step-7 clear the deposite field
    depositeField.value='';
})