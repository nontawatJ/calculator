function addNumber(num){
    document.getElementById("display").innerHTML += num;
}
function clearScreen(){
    document.getElementById("display").innerHTML = "";
}
function addition(){
    document.getElementById("display").innerHTML += " + ";
}
function substitution(){
    document.getElementById("display").innerHTML += " - ";
}
function multiplication(){
    document.getElementById("display").innerHTML += " * ";
}
function division(){
    document.getElementById("display").innerHTML += " / ";
}
function negativeNum(){
    var check = document.getElementById("display").innerHTML;
    if (check[check.length-1]==="-"){
        check = check.slice(0,check.length-1);
        document.getElementById("display").innerHTML = check;
    }
    else if (check[check.length-1] === " " || check.length === 0){
        document.getElementById("display").innerHTML += "-";
    }
}
function decimal(){
    var check = document.getElementById("display").innerHTML;
    check = check.split(" ");
    if (check[check.length-1].indexOf(".") === -1){
        document.getElementById("display").innerHTML += ".";
    }
}
function deleteChar(){
   var str = document.getElementById("display").value
   if (str[str.length-1]=== " "){
       str = str.slice(0,-3);
   }
   else{
       str = str.slice(0,-1);
   }
   document.getElementById("display").innerHTML = str;
}
function usePrevAns(){
    var check = document.getElementById("display").value;
    var total = document.getElementById("total").innerHTML;
    if (check[check.length-1]==="-" && total[0] === "-"){
        check = check.slice(0,check.length-1)
        total = total.slice(1,total.length-1)
        check += total;
        document.getElementById("display").innerHTML = check;
    }
    else {
        document.getElementById("display").innerHTML += document.getElementById("total").innerHTML;
    }
    
}
function getTotal(){
    var check = document.getElementById("display").value;
    check = check.split(" ");
    doAllDivison(check);
    doAllMultiplication(check);
    doAllSubtract(check);
    doAllAddition(check);
    check = check.join();
    if (check.length > 20){
        document.getElementById("total").innerHTML = "NaN";
    }
    else{
        document.getElementById("total").innerHTML = parseFloat(check).toFixed(2);
    }
    // bad practice as eval have high risk in security
    // var check = document.getElementById("display").value;
    // document.getElementById("total").innerHTML = eval(check);
}
function doAllDivison(check){
    var index = check.indexOf("/");
    while (index !== -1){
        var sum = parseFloat(check[index-1]) / parseFloat(check[index+1]);
        check.splice(index-1,3,sum)
        index = check.indexOf("/")
    }
}
function doAllMultiplication(check){
    var index = check.indexOf("*");
    while (index !== -1){
        var sum = parseFloat(check[index-1]) * parseFloat(check[index+1]);
        check.splice(index-1,3,sum)
        index = check.indexOf("*")
    }
}
function doAllSubtract(check){
    var index = check.indexOf("-");
    while (index !== -1){
        var sum = parseFloat(check[index-1]) - parseFloat(check[index+1]);
        check.splice(index-1,3,sum)
        index = check.indexOf("-")
    }
}
function doAllAddition(check){
    var index = check.indexOf("+");
    while (index !== -1){
        var sum = parseFloat(check[index-1]) + parseFloat(check[index+1]);
        check.splice(index-1,3,sum)
        index = check.indexOf("+")
    }
}

