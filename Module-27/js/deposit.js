document.getElementById('btn-sub-deposit').addEventListener('click',function(){
   let depositField=document.getElementById('deposit-field');
   let depositInit=document.getElementById('deposit-init');
   let ballanceInit=document.getElementById('ballance-init');
   let deposit=depositField.value;
   

   let ballanceInitAmount=parseFloat(ballanceInit.innerText);
   let depositInitAmount=parseFloat(depositInit.innerText) ;
   let depositFieldAmount=parseFloat(deposit);
   let sumDeposit=depositFieldAmount+depositInitAmount;
   let ballanceInitAmountAdd=ballanceInitAmount+depositFieldAmount;
   depositInit.innerText=sumDeposit;


   ballanceInit.innerText=ballanceInitAmountAdd;


   depositField.value='';
})