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

    heure.style.transform = `rotate(${now[0]*30}deg)`;
    minute.style.transform = `rotate(${now[1]*6}deg)`;
    seconde.style.transform = `rotate(${now[2]*6}deg)`; 
}  

setInterval(nbhorloge, 100)