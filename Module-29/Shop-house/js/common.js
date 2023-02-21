function updatePhoneNumber(isIncrease){
    const phoneNumberField=document.getElementById('phone-number-field');
    const phoneNumberString=phoneNumberField.value;
    const previousPhoneNumber=parseInt(phoneNumberString);

    let newPhoneNumber;
    if(isIncrease){
        newPhoneNumber=previousPhoneNumber+1;
    }else{
        newPhoneNumber=previousPhoneNumber-1;
    }
    
    phoneNumberField.value=newPhoneNumber;
    return newPhoneNumber;
}
