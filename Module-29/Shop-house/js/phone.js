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
function updatePrice(newPhoneNumber){
    const phoneTotalElement=document.getElementById('phone-total')
    const phoneTotalPrice=newPhoneNumber*1219;
    phoneTotalElement.innerText=phoneTotalPrice
}

function getTextElementValue(elementId){
    const totalElement=document.getElementById(elementId);
    const totalElementString=totalElement.innerText;
    const totalElementValue=parseInt(totalElementString);
    return totalElementValue;
}

function showTextValue(showElementId,value){
    const elementId=document.getElementById(showElementId);
    elementId.innerText=value;
}

function subTotal(){
   const phoneTotalPrice= getTextElementValue('phone-total');
   const caseTotalPrice= getTextElementValue('case-total');
   const subTotalValue=phoneTotalPrice+caseTotalPrice;
   showTextValue('sub-total',subTotalValue)
   return subTotalValue;
}



document.getElementById('btn-phone-plus').addEventListener('click',function(){
  const newPhoneNumber=  updatePhoneNumber(true);
  updatePrice(newPhoneNumber);
  const subTotalAmount =subTotal();

  const taxAmountString=(subTotalAmount*0.1).toFixed(2);
  const taxAmountValue=parseFloat(taxAmountString);
  const total=subTotalAmount+taxAmountValue;

  showTextValue('tax-amount',taxAmountValue);
  showTextValue('total',total);
  

})
document.getElementById('btn-phone-minus').addEventListener('click',function(){
    const newPhoneNumber=updatePhoneNumber(false);
    updatePrice(newPhoneNumber);
    const subTotalAmount =subTotal();

    const taxAmountString=(subTotalAmount*0.1).toFixed(2);
    const taxAmountValue=parseFloat(taxAmountString);
    const total=subTotalAmount+taxAmountValue;
  
    showTextValue('tax-amount',taxAmountValue);
    showTextValue('total',total);
})
