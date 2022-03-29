function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    if(principal <= 0){
        alert("Enter a positive number");
        principal.focus();
        return false;
    }else{
    document.getElementById("result").innerHTML="If you deposit \<span class\=\"loko\"\>"+principal+",\<\/span\>\<br\>at an interest rate of \<span class\=\"loko\"\>"+rate+"%\<\/span\>\<br\>You will receive an amount of \<span class\=\"loko\"\>"+interest+",\<\/span\>\<br\>in the year \<span class\=\"loko\"\>"+year+"\<\/span\>\<br\>"
}
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}     