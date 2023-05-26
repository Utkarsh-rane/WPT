function validatedata(num, errmsg)
{
    var a=document.getElementById(num).value
    if(a==="" || isNaN(a))
    {
        document.getElementById(errmsg).innerHTML="pls enter numeric data"
        return false;
    }
    document.getElementById(errmsg).innerHTML="";
    return true;
}
