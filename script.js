console.log();
function btnclick(val)
{
    document.getElementById("screen").value+=val;
}
function clearDisplay()
{
    document.getElementById("screen").value="";
}
function equalbtn()
{
    var Text = document.getElementById("screen").value
    var result = eval(Text)
    document.getElementById('screen').value = result
}