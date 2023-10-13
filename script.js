// Call 3 aiguilles 
let heure = document.getElementById("heure")
let minute = document.getElementById("minute")
let seconde = document.getElementById("seconde")


// Recup heure locale 
function nbhorloge () {
    const date = new  Date() 
    const now = []

    now.push(date.getHours())
    now.push(date.getMinutes())
    now.push(date.getSeconds())

    return now
}  


let nowOk = nbhorloge()

console.log(nowOk);


// Donner Angle <- heure locale

heure.style.transform = `rotate(${nowOk[0]*30}deg)`;
minute.style.transform = `rotate(${nowOk[1]*6}deg)`;
seconde.style.transform = `rotate(${nowOk[2]*6}deg)`; 

