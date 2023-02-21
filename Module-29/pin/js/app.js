function getPin(){
    const pin=generatePin();
    const pinString=pin+'';
    if(pinString.length==4){
        return pin;
    }else{
        return getPin();
    }
}
function generatePin(){
    let randomNumber= Math.round(Math.random()*10000);
    return randomNumber;
}

document.getElementById('generate-pin').addEventListener('click',function(){
    const pin=getPin();
    const displayPinElement= document.getElementById('display-pin');
    displayPinElement.value=pin;
})

document.getElementById('calculator').addEventListener('click',function(e){
    const number=e.target.innerText;
    const typedNumberField=document.getElementById('typed-numbers');
    const previousTypeNumber=typedNumberField.value;
    if(isNaN(number)){
        if(number==='C'){
            typedNumberField.value=''
        }
        else if(number==='<'){
            const digits=previousTypeNumber.split('');
            digits.pop();
            const remainingDigits=digits.join('');
            typedNumberField.value=remainingDigits;
        }
    }else{
        typedNumberField.value=previousTypeNumber+number;
    }
})

document.getElementById('verify-pin').addEventListener('click',function(){
    const displayPinElement= document.getElementById('display-pin');
    const displayPinElementValue=displayPinElement.value;

    const typedNumberField=document.getElementById('typed-numbers');
    const typedNumberFieldValue=typedNumberField.value;

    if(displayPinElementValue===typedNumberFieldValue){
        const pinSuccess=document.getElementById('pin-success');
        const pinFailed=document.getElementById('pin-failed');
        pinSuccess.style.display='block';
        pinFailed.style.display='none'
    }else{
        const pinFailed=document.getElementById('pin-failed');
        const pinSuccess=document.getElementById('pin-success');
        pinSuccess.style.display='none';
        pinFailed.style.display='block'
    }
})