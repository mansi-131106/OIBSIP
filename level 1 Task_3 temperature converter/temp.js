function cToF(){
    let c = document.getElementById("celsius").value;
    if(c === ""){
        alert("Please enter Celsius value");
        return;
    }
    let f = (c * 9/5) + 32;
    document.getElementById("fahrenheit").value = f.toFixed(2);
}

function fToC(){
    let f = document.getElementById("fahrenheit").value;
    if(f === ""){
        alert("Please enter Fahrenheit value");
        return;
    }
    let c = (f - 32) * 5/9;
    document.getElementById("celsius").value = c.toFixed(2);
}

function clearAll(){
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
}
