var div=document.getElementById('card7');
var divv=document.getElementById('card8');
var divvv=document.getElementById('section');
var bk=document.getElementById('bkash');
var ng=document.getElementById('nagad');
var pmnt=document.getElementById('payment');
var v6=0,v1=0,v2=0,v3=0,v4=0,v5=0;
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
document.getElementById('btn-coupon').addEventListener('click',function(){
    var Discount=0.0;
    const prevtotal=getelementbytext('totalprice');
    const total=parseFloat(prevtotal);
    const couponvalue=getelementbyinput('coupon-input');
    const coupon="SELL200";
    
    if(total>=2000){
        if(couponvalue==coupon){
        Discount=total*0.2;}
    }
  
    const newtotal=total-Discount;
    setelement('discount',Discount);
    setelement('total',newtotal);
    setelement('total2',newtotal);
    setelement('total3',newtotal);

   })
document.getElementById('card1').addEventListener('click',function(){
    
    const prevvalue=getelementbytext('accessories');
    const prevvalueFloat=parseFloat(prevvalue);
    const prevtotal=getelementbytext('totalprice');
    const prevtotalFloat=parseFloat(prevtotal);
    const total=prevvalueFloat+prevtotalFloat;    
    const newtotal=total;
   v1++;
    setelement('it1',v1);
    setelement('totalprice',total);
    
    setelement('total',newtotal);
    setelement('total2',newtotal);
    setelement('total3',newtotal); 
})
document.getElementById('dcard1').addEventListener('click',function(){
    
    const prevvalue=getelementbytext('accessories');
    const prevvalueFloat=parseFloat(prevvalue);
    const prevtotal=getelementbytext('totalprice');
    const prevtotalFloat=parseFloat(prevtotal);
    if(v1>0){
       var total=prevtotalFloat - prevvalueFloat;    
    var newtotal=total;
   v1--; 
    }
    else{
        var total=prevtotalFloat;    
        var newtotal=total; 
    }
    
    setelement('it1',v1);
    setelement('totalprice',total);   
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
    v2++;
    setelement('it2',v2);
    setelement('totalprice',total);
    setelement('total3',newtotal);
    setelement('total',newtotal);
    setelement('total2',newtotal);
})
document.getElementById('dcard2').addEventListener('click',function(){
    
    const prevvalue=getelementbytext('products');
    const prevvalueFloat=parseFloat(prevvalue);
    const prevtotal=getelementbytext('totalprice');
    const prevtotalFloat=parseFloat(prevtotal);
    if(v2>0){
       var total=prevtotalFloat - prevvalueFloat;    
    var newtotal=total;
   v2--; 
    }
    else{
        var total=prevtotalFloat;    
        var newtotal=total; 
    }
    
    setelement('it1',v2);
    setelement('totalprice',total);   
    setelement('total',newtotal);
    setelement('total2',newtotal);
    setelement('total3',newtotal); 
})
document.getElementById('card3').addEventListener('click',function(){
    
    const prevvalue=getelementbytext('cooker');
    const prevvalueFloat=parseFloat(prevvalue);
    const prevtotal=getelementbytext('totalprice');
    const prevtotalFloat=parseFloat(prevtotal);
    const total=prevvalueFloat+prevtotalFloat;  
    const newtotal=total;
    v3++;
    
    setelement('it2',v3);
    setelement('totalprice',total);
    setelement('total2',newtotal);
    setelement('total',newtotal);
    setelement('total3',newtotal);
})
document.getElementById('dcard3').addEventListener('click',function(){
    
    const prevvalue=getelementbytext('cooker');
    const prevvalueFloat=parseFloat(prevvalue);
    const prevtotal=getelementbytext('totalprice');
    const prevtotalFloat=parseFloat(prevtotal);
    if(v3>0){
       var total=prevtotalFloat - prevvalueFloat;    
    var newtotal=total;
   v3--; 
    }
    else{
        var total=prevtotalFloat;    
        var newtotal=total; 
    }
    
    setelement('it1',v3);
    setelement('totalprice',total);   
    setelement('total',newtotal);
    setelement('total2',newtotal);
    setelement('total3',newtotal); 
})

document.getElementById('card4').addEventListener('click',function(){
    
    const prevvalue=getelementbytext('cap');
    const prevvalueFloat=parseFloat(prevvalue);
    const prevtotal=getelementbytext('totalprice');
    const prevtotalFloat=parseFloat(prevtotal);
    const total=prevvalueFloat+prevtotalFloat;  
    const newtotal=total;
    v4++;
    setelement('it4',v4);
    setelement('totalprice',total);
    setelement('total2',newtotal);
    setelement('total',newtotal);
    setelement('total3',newtotal);
})
document.getElementById('dcard4').addEventListener('click',function(){
    
    const prevvalue=getelementbytext('cap');
    const prevvalueFloat=parseFloat(prevvalue);
    const prevtotal=getelementbytext('totalprice');
    const prevtotalFloat=parseFloat(prevtotal);
    if(v4>0){
       var total=prevtotalFloat - prevvalueFloat;    
    var newtotal=total;
   v4--; 
    }
    else{
        var total=prevtotalFloat;    
        var newtotal=total; 
    }
    
    setelement('it1',v4);
    setelement('totalprice',total);   
    setelement('total',newtotal);
    setelement('total2',newtotal);
    setelement('total3',newtotal); 
})
document.getElementById('card5').addEventListener('click',function(){
    
    const prevvalue=getelementbytext('jersy');
    const prevvalueFloat=parseFloat(prevvalue);
    const prevtotal=getelementbytext('totalprice');
    const prevtotalFloat=parseFloat(prevtotal);
    const total=prevvalueFloat+prevtotalFloat;  
    const newtotal=total;
    v5++;
    setelement('it5',name5);
    setelement('totalprice',total);
    setelement('total2',newtotal);
    setelement('total',newtotal);
    setelement('total3',newtotal);
})
document.getElementById('dcard5').addEventListener('click',function(){
    
    const prevvalue=getelementbytext('jersy');
    const prevvalueFloat=parseFloat(prevvalue);
    const prevtotal=getelementbytext('totalprice');
    const prevtotalFloat=parseFloat(prevtotal);
    if(v5>0){
       var total=prevtotalFloat - prevvalueFloat;    
    var newtotal=total;
   v5--; 
    }
    else{
        var total=prevtotalFloat;    
        var newtotal=total; 
    }
    
    setelement('it1',v5);
    setelement('totalprice',total);   
    setelement('total',newtotal);
    setelement('total2',newtotal);
    setelement('total3',newtotal); 
})
document.getElementById('card6').addEventListener('click',function(){    
    const prevvalue=getelementbytext('cates');
    const prevvalueFloat=parseFloat(prevvalue);
    const prevtotal=getelementbytext('totalprice');
    const prevtotalFloat=parseFloat(prevtotal);
    const total=prevvalueFloat+prevtotalFloat;  
    const newtotal=total;
    v6++;
    setelement('it6',v6);
    setelement('totalprice',total);
    setelement('total3',newtotal);
    setelement('total',newtotal);
    setelement('total2',newtotal);
})
document.getElementById('dcard6').addEventListener('click',function(){   
    const prevvalue=getelementbytext('cates');
    const prevvalueFloat=parseFloat(prevvalue);
    const prevtotal=getelementbytext('totalprice');
    const prevtotalFloat=parseFloat(prevtotal);
    if(v6>0){
       var total=prevtotalFloat - prevvalueFloat;    
    var newtotal=total;
   v6--; 
    }
    else{
        var total=prevtotalFloat;    
        var newtotal=total; 
    }
    
    setelement('it6',v6);
    setelement('totalprice',total);   
    setelement('total',newtotal);
    setelement('total2',newtotal);
    setelement('total3',newtotal); 
})
document.getElementById('btn-purchase').addEventListener('click',function(){
    
    const prevtotal=getelementbytext('totalprice');
    const total=parseFloat(prevtotal); 
    const mm=0; 
     
   if(total>0.0){ 
    v1=0;v2=0;v3=0;v4=0;v5=0;v6=0; 
    setelement('totalprice',mm);
    setelement('discount',mm);
    setelement('total',mm);
    setelement('it6',v6);
    setelement('it5',v5);
    setelement('it4',v4);
    setelement('it3',v3);
    setelement('it2',v2);
    setelement('it1',v1);
    show();   
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


   
