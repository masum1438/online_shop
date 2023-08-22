var div=document.getElementById('card7');
var divv=document.getElementById('section');

   function hide(){
    
        divv.style.display='block';
        div.style.display='none';
     
   }
   function show(){
    div.classList.toggle("active");
    div.style.display='block';
    divv.style.display='none';
        
   }

document.getElementById('card1').addEventListener('click',function(){
    
    const prevvalue=getelementbytext('accessories');
    const prevvalueFloat=parseFloat(prevvalue);
    const prevtotal=getelementbytext('totalprice');
    const prevtotalFloat=parseFloat(prevtotal);
    const total=prevvalueFloat+prevtotalFloat;
    
    var Discount =0.0;
    const newtotal=total-Discount;
    setelement('totalprice',total);
    
    setelement('total',newtotal)
   
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
   })
  
document.getElementById('card2').addEventListener('click',function(){
    
    const prevvalue=getelementbytext('products');
    const prevvalueFloat=parseFloat(prevvalue);
    const prevtotal=getelementbytext('totalprice');
    const prevtotalFloat=parseFloat(prevtotal);
    const total=prevvalueFloat+prevtotalFloat;
    var Discount=0.0;  
    
    const newtotal=total-Discount;
    setelement('totalprice',total);
   
    setelement('total',newtotal)
})
document.getElementById('card3').addEventListener('click',function(){
    
    const prevvalue=getelementbytext('cooker');
    const prevvalueFloat=parseFloat(prevvalue);
    const prevtotal=getelementbytext('totalprice');
    const prevtotalFloat=parseFloat(prevtotal);
    const total=prevvalueFloat+prevtotalFloat;
    var Discount=0.0;
    
    
    const newtotal=total-Discount;
    setelement('totalprice',total);
    
    setelement('total',newtotal)
})
document.getElementById('card4').addEventListener('click',function(){
    
    const prevvalue=getelementbytext('cap');
    const prevvalueFloat=parseFloat(prevvalue);
    const prevtotal=getelementbytext('totalprice');
    const prevtotalFloat=parseFloat(prevtotal);
    const total=prevvalueFloat+prevtotalFloat;
    var Discount=0.0;
   
    
    const newtotal=total-Discount;
    setelement('totalprice',total);
   
    setelement('total',newtotal)
})
document.getElementById('card5').addEventListener('click',function(){
    
    const prevvalue=getelementbytext('jersy');
    const prevvalueFloat=parseFloat(prevvalue);
    const prevtotal=getelementbytext('totalprice');
    const prevtotalFloat=parseFloat(prevtotal);
    const total=prevvalueFloat+prevtotalFloat;
    var Discount=0.0;
   
    
    const newtotal=total-Discount;
    setelement('totalprice',total);
    
    setelement('total',newtotal)
})
document.getElementById('card6').addEventListener('click',function(){
    
    const prevvalue=getelementbytext('cooker');
    const prevvalueFloat=parseFloat(prevvalue);
    const prevtotal=getelementbytext('totalprice');
    const prevtotalFloat=parseFloat(prevtotal);
    const total=prevvalueFloat+prevtotalFloat;
    var Discount=0.0;
 
    
    const newtotal=total-Discount;
    setelement('totalprice',total);

    setelement('total',newtotal)
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


   
