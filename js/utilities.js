function getelementbyinput(inputid){
    const prevalueField=document.getElementById(inputid);
    const prevalue=prevalueField.value;
    prevalueField.value='';
    return prevalue;
   }
function getelementbytext(inputid){
    const prevalueField=document.getElementById(inputid);
    const prevalueString=prevalueField.innerText;
    const prevalue=parseFloat(prevalueString);
    
    return prevalue;
   }
   function setelement(inputid,value){
       const prevalueField=document.getElementById(inputid);
    const prevalueString=prevalueField.innerText;
    prevalueField.innerText=value;
   }
   
   
   