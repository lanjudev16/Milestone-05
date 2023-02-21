
document.getElementById('btnCalculate').addEventListener('click',function(){
  console.log('click')
})
function getInputValue(inputId) {
  const inputValueString = document.getElementById(inputId).value;
  const inputValue=parseInt(inputValueString);
  return inputValue;
}
function showValue(textId,value){
  const textIdByValue=document.getElementById(textId);
  textIdByValue.innerText=value
}

document.getElementById('btn-calculate').addEventListener('click',function(){
  const food= getInputValue('food')
  const rent= getInputValue('rent')
  const clothes= getInputValue('clothes')
  const totalExpense=food+rent+clothes;
  const textId=showValue('total-expense',totalExpense)


 
  console.log(totalExpense)

})
