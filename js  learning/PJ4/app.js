function tocelsius(fahlenheit)
{
    
    let value = (fahlenheit -32) * 5 / 9
     return value.toFixed(2) + " °C" 
} 


function display(elementId , value){
    document.getElementById(elementId).innerHTML = "<b>"+value+"</b>"
}


function tofalenheit(celsius)
{
    
    let value= (celsius *9/5) + 32
    return value.toFixed(2) + " °F"
    
}
function ToCelciusProgram(value)
{
    alert(tocelsius(value))
}
function ToFahlenheitprogram(value)
{
    alert(tofalenheit(value))
}