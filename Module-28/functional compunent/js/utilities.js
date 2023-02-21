function getValueInput(inputId){
   const inputField= document.getElementById(inputId).value;
   const inputFieldValue=parseInt(inputField);
   return inputFieldValue;
}

function showValue(showId,value){
    document.getElementById(showId).innerText=value;
}
function getTextElementById(elementId){
    const textElement=document.getElementById(elementId);
    const textElementValueString=textElement.innerText;
    const textElementValue=parseInt(textElementValueString);
    return textElementValue;
}
function calculation(userValue,textValue){
   let sum= userValue+textValue;
   return sum;
}
function finalCalculation(bValue,afIValue){
    return (bValue+afIValue)
}
function finalWithDrawCalculation(bValue,afIValue){
    return (bValue-afIValue)
}