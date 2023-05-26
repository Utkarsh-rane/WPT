function validatetext(text ,errmsg)
{
 var t=document.getElementById(text).value
 if((t==="") || (t.trim().length === 0) )
 {
      document.getElementById(errmsg).innerHTML="pls enter numeric data"
return false;
 }
  document.getElementById(errmsg).innerHTML="";
 return true;
}