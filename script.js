// Call 3 aiguilles 
let heure = document.getElementById("heure")
let minute = document.getElementById("minute")
let seconde = document.getElementById("seconde")

let heureNum = document.querySelector(".heureNum")
let minuteNum = document.querySelector(".minuteNum")
let secondeNum = document.querySelector(".secondeNum")

// Recup heure locale 
function nbhorloge () {
    const date = new  Date() 
    const now = []

  /*  switch (now[2]) {
        case '1' :
        now[2].padStart(2, '0');
            break;
    } */

    now.push(date.getHours())
    now.push(date.getMinutes())
    now.push(date.getSeconds())

    heure.style.transform = `rotate(${now[0]*30+(0.5*now[1])}deg)`;
    minute.style.transform = `rotate(${now[1]*6}deg)`;
    seconde.style.transform = `rotate(${now[2]*6-180}deg)`;

    heureNum.innerHTML = `${now[0]}`
    minuteNum.innerHTML = `${now[1]}`
    secondeNum.innerHTML = `${now[2]}`

}  

setInterval(nbhorloge, 100)

