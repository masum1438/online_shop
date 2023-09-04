var div=document.getElementById('card7');
var divv=document.getElementById('card8');
var divvv=document.getElementById('section');
var bk=document.getElementById('bkash');
var ng=document.getElementById('nagad');
var pmnt=document.getElementById('payment');
function hideb(){
    bk.classList.remove('hidden');
    pmnt.classList.remove('hidden');
    ng.classList.add('hidden');
      
   }function hiden(){
    pmnt.classList.remove('hidden');
    bk.classList.add('hidden');
    ng.classList.remove('hidden');
    
   }

   function hide(){
    divvv.classList.remove('hidden');
    div.classList.add('hidden');
    divv.classList.add('hidden');
   
    
     
   }
   function hide2(){
    div.classList.remove('hidden');
    divvv.classList.add('hidden');
    divv.classList.add('hidden');
    pmnt.classList.add('hidden'); 
    bk.classList.add('hidden');
    ng.classList.add('hidden');
    var m=0;
    setelement('total2',m);
    setelement('total3',m);
   }
   function hide3(){
    divvv.classList.remove('hidden');
    div.classList.add('hidden');
    divv.classList.add('hidden');
    pmnt.classList.add('hidden');
    bk.classList.add('hidden');
    ng.classList.add('hidden');
    var m=0;
    setelement('total2',m); 
    setelement('total3',m); 
     
   }
   function show(){
    divv.classList.remove('hidden');
    divvv.classList.add('hidden');
    div.classList.add('hidden');
     
   }

document.getElementById('card1').addEventListener('click',function(){
    
    const prevvalue=getelementbytext('accessories');
    const prevvalueFloat=parseFloat(prevvalue);
    const prevtotal=getelementbytext('totalprice');
    const prevtotalFloat=parseFloat(prevtotal);
    const total=prevvalueFloat+prevtotalFloat;
   
   
    const newtotal=total;
    setelement('totalprice',total);
    
    setelement('total',newtotal);
    setelement('total2',newtotal);
    setelement('total3',newtotal);
   
   
})
document.getElementById('btn-coupon').addEventListener('click',function(){
    var Discount=0.0;
    const prevtotal=getelementbytext('totalprice');
    const total=parseFloat(prevtotal);
    const couponvalue=getelementbyinput('coupon-input');
    const coupon="SELL200";
    
    if(total>=200){
        if(couponvalue==coupon){
        Discount=total*0.2;}
    }
  
    const newtotal=total-Discount;
    setelement('discount',Discount);
    setelement('total',newtotal);
    setelement('total2',newtotal);
    setelement('total3',newtotal);

   })
  
document.getElementById('card2').addEventListener('click',function(){
    
    const prevvalue=getelementbytext('products');
    const prevvalueFloat=parseFloat(prevvalue);
    const prevtotal=getelementbytext('totalprice');
    const prevtotalFloat=parseFloat(prevtotal);
    const total=prevvalueFloat+prevtotalFloat;
     
    
    const newtotal=total;
    setelement('totalprice',total);
    setelement('total3',newtotal);
    setelement('total',newtotal);
    setelement('total2',newtotal);
})
document.getElementById('card3').addEventListener('click',function(){
    
    const prevvalue=getelementbytext('cooker');
    const prevvalueFloat=parseFloat(prevvalue);
    const prevtotal=getelementbytext('totalprice');
    const prevtotalFloat=parseFloat(prevtotal);
    const total=prevvalueFloat+prevtotalFloat;
   
    const newtotal=total;
    setelement('totalprice',total);
    setelement('total2',newtotal);
    setelement('total',newtotal);
    setelement('total3',newtotal);
})
document.getElementById('card4').addEventListener('click',function(){
    
    const prevvalue=getelementbytext('cap');
    const prevvalueFloat=parseFloat(prevvalue);
    const prevtotal=getelementbytext('totalprice');
    const prevtotalFloat=parseFloat(prevtotal);
    const total=prevvalueFloat+prevtotalFloat;
  
    const newtotal=total;
    setelement('totalprice',total);
    setelement('total2',newtotal);
    setelement('total',newtotal);
    setelement('total3',newtotal);
})
document.getElementById('card5').addEventListener('click',function(){
    
    const prevvalue=getelementbytext('jersy');
    const prevvalueFloat=parseFloat(prevvalue);
    const prevtotal=getelementbytext('totalprice');
    const prevtotalFloat=parseFloat(prevtotal);
    const total=prevvalueFloat+prevtotalFloat;
  
    const newtotal=total;
    setelement('totalprice',total);
    setelement('total2',newtotal);
    setelement('total',newtotal);
    setelement('total3',newtotal);
})
document.getElementById('card6').addEventListener('click',function(){
    
    const prevvalue=getelementbytext('cooker');
    const prevvalueFloat=parseFloat(prevvalue);
    const prevtotal=getelementbytext('totalprice');
    const prevtotalFloat=parseFloat(prevtotal);
    const total=prevvalueFloat+prevtotalFloat;
   
    const newtotal=total;
    setelement('totalprice',total);
    setelement('total3',newtotal);
    setelement('total',newtotal);
    setelement('total2',newtotal);
})
document.getElementById('btn-purchase').addEventListener('click',function(){
    
    const prevtotal=getelementbytext('totalprice');
    const total=parseFloat(prevtotal); 
    const mm=0;    
   if(total>0.0){
    show();
    setelement('totalprice',mm);
    setelement('discount',mm);
    setelement('total',mm);
    
   }
   })
document.getElementById('home').addEventListener('click',function(){ 
    hide();  
 
   })
document.getElementById('confirm').addEventListener('click',function(){   
    hide2();  
   })
document.getElementById('n-confirm').addEventListener('click',function(){
    hide3();  
   })
document.getElementById('bkash-img').addEventListener('click',function(){
    hideb();  
   })
document.getElementById('nagad-img').addEventListener('click',function(){
    hiden();  
   })


   
