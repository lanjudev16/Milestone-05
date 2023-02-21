function updateCaseNumber(isIncrease){
    const caseNumberField=document.getElementById('case-number-field');
    const caseNumberString=caseNumberField.value;
    const PreviousCaseNumber=parseInt(caseNumberString);

    let newCaseNumber;
    if(isIncrease){
        newCaseNumber=PreviousCaseNumber+1;
    }else{
        newCaseNumber=PreviousCaseNumber-1;
    }
    caseNumberField.value=newCaseNumber;
    return newCaseNumber;
}

function subTotal(){
    const phoneTotalPrice= getTextElementValue('phone-total');
    const caseTotalPrice= getTextElementValue('case-total');
    const subTotalValue=phoneTotalPrice+caseTotalPrice;
    const subTotalId= document.getElementById('sub-total');

    showTextValue('sub-total',subTotalValue)
    return subTotalValue;
 }

 function showTextValue(showElementId,value){
    const elementId=document.getElementById(showElementId);
    elementId.innerText=value;
}

function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice=newCaseNumber*59;
    const caseTotalElement=document.getElementById('case-total');
    caseTotalElement.innerText=caseTotalPrice;
}

document.getElementById('btn-case-plus').addEventListener('click',function(){
    const newCaseNumber= updateCaseNumber(true);
    updateCaseTotalPrice(newCaseNumber);
    const subTotalAmount =subTotal();

    const taxAmountString=(subTotalAmount*0.1).toFixed(2);
    const taxAmountValue=parseFloat(taxAmountString);
    const total=subTotalAmount+taxAmountValue;
  
    showTextValue('tax-amount',taxAmountValue);
    showTextValue('total',total);
})

document.getElementById('btn-case-minus').addEventListener('click',function(){
    const newCaseNumber= updateCaseNumber(false);
    updateCaseTotalPrice(newCaseNumber);


    const subTotalAmount =subTotal();

    const taxAmountString=(subTotalAmount*0.1).toFixed(2);
    const taxAmountValue=parseFloat(taxAmountString);
    const total=subTotalAmount+taxAmountValue;
  
    showTextValue('tax-amount',taxAmountValue);
    showTextValue('total',total);
})