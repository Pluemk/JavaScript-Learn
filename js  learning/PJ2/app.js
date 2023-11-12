function tocelsius(fahlenheit)
{
    
    let value = (fahlenheit -32) * 5 / 9
     return value.toFixed(2) + " °C" 
} 
alert(tocelsius(150))

function display(elementId , value){
    document.getElementById(elementId).innerHTML = "<b>"+value+"</b>"
}
display("tocelcius",tocelsius(150))

function tofalenheit(celsius)
{
    
    let value= (celsius *9/5) + 32
    return value.toFixed(2) + " °F"
    
}
alert("tofahlenheit",tofalenheit(150))
display("result",tofalenheit(150))
