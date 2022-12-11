function clearScreen() 
{
    document.getElementById("invalue").value = "";
    document.getElementById("result").value = "";
}
function interchange()
{
    clearScreen()
    var p = document.getElementById("invalue").value;
    var q = document.getElementById("result").value;
    document.getElementById("invalue").value = q;
    document.getElementById("result").value = p;
}

function display(value)
{
    document.getElementById("invalue").value += value;
}

function calculate1() 
{
    var p = document.getElementById("invalue").value;
    var q = eval(p);
    document.getElementById("result").value = 25 * q;
}

function calculate2() 
{
    var p = document.getElementById("invalue").value;
    var q = eval(p);
    document.getElementById("result").value = 2 * q;
}

function calculate3() 
{
    var p = document.getElementById("invalue").value;
    var q = eval(p);
    document.getElementById("result").value = 0.01 * q;
}
function calculate4() 
{
    var p = document.getElementById("invalue").value;
    var q = eval(p);
    document.getElementById("result").value = 15 * q;
}

function calculate5() 
{
    var p = document.getElementById("invalue").value;
    var q = eval(p);
    document.getElementById("result").value = 7 * q;
}

function calculate6() 
{
    var p = document.getElementById("invalue").value;
    var q = eval(p);
    document.getElementById("result").value = 100 * q;
}