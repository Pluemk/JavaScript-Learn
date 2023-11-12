let round = prompt("คุณต้องการจะเล่นทั้งหมดกี่รอบ ?")
var point = 0
var result = ""

for( var i = 1 ; i <= round ; i++){
    var answer = prompt("หัว หรือ ก้อย พิมพ์มาเลย !!")
    var random_answer = ""
    
    
    if(Math.floor(Math.random()*10) <= 4){
        //หัว
        random_answer = "หัว"
    }
    else{
        //ก้อย
        random_answer = "ก้อย"
    }
    if(answer == random_answer){
        alert("ตอบถูก ! ยินดีด้วย")
        point = point+1
        result ="1"
    }
    else{
        alert("ตอบผิด ! เสียใจด้วย")
        result = "0"
        
    }
    console.log(random_answer + " : " + answer)
document.getElementById("round").innerHTML = "คุณเล่นไปทั้งหมด " + i +" รอบ" 
document.getElementById("game-list").innerHTML += "รอบที่ " + i + " : " + " คำตอบของคุณคือ "+ answer + " คำตอบที่ถูกคือ " + random_answer  + " คุณได้ " + result + " คะแนน " + "<br>" 
}
document.getElementById("total").innerHTML += "คะแนนรวม" + ":" + point






