var i = 1
var text = "CHIRAG"
var speed = 50 // duration in milliseconds 

function typewriter() {
    if (i < text.length) {
        document.getElementById("demo").innerHTML += text.charAt(i)
        i++
        setTimeout(typewriter, speed)
    }
}
window.onload(typewriter)